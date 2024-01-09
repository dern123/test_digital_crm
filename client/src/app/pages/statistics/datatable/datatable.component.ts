import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StatisticsService } from '../statistics.service';
import moment from "moment";
import { ActivatedRoute, Params } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Column {
  field: string;
  header: string;
  sort: boolean;
}
interface Channel {
  company_id?: string;
  company_name?: string;
  leads_count?: number;
  installs?: number;
  impressions?: number,
  ctr?: number;
  reattrebutions?: number,
  daus?: number;
  waus?: number,
  ecpi?: number;
  ccr?: number,
  roas?: number;
  maus?: number,
  revenues?: number;
  spead?: number,
  events?: number;
  other?: number,
}
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss'
})
export class DatatableComponent implements OnInit {
  public channels!: Channel[];
  public channelsAll!: Channel[];
  public companies: any = [];
  public companiesAll: any = [];
  public id: any;
  public cols!: Column[];
  public selectedColumns!: Column[];
  public countries: any;
  public formSelectsStat: FormGroup = new FormGroup({
    country: new FormControl('', Validators.required),
    days: new FormControl('', Validators.required),
    companies: new FormControl('', Validators.required),
    compare: new FormControl('', Validators.required),
  });
  constructor(
    private statisticsService: StatisticsService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
    ) { }

  getAll(){
    return this.statisticsService.getAll().subscribe((data: any) => {
      // console.log("data:", data);
      if(data.status){
        this.channels = data.data;
        this.channelsAll = data.data.slice();
        this.cd.markForCheck();
      }
    })
  }
  getById(id:any){
    return this.statisticsService.getById(id).subscribe((data: any) => {
      // console.log("data:", data);
      if(data.status){
        this.channels = data.data;
        this.cd.markForCheck();
      }
    })
  }

  search(event:any){
    if(event.target.value){
      this.statisticsService.search(event.target.value).subscribe((data: any) => {
        if(data.status){
          this.channels = data.data;
          this.cd.markForCheck();
        }
      })
    }
    else{
      this.channels = this.channelsAll;
    }
  }

  getCountries(){
    this.statisticsService.getCountries().subscribe((data:any) => {
      if(data.status){
        this.countries = data.data;
      }
    })
  }

  getCompanies(){
    this.statisticsService.getCompanies().subscribe((data:any) => {
      if(data.status){
        this.companiesAll = data.data;
        this.companies = data.data;
      }
    })
  }

  checkCountry(event: any){
    const id = event.target.value;
    this.companies = [];
    if(id){
      this.companies = this.companiesAll.filter((item: any) => id == item.country_id);
    }
    else{
      this.companies = this.companiesAll.slice();
    }
  }

  filter(){
    const data = this.formSelectsStat.value;
    this.statisticsService.filters(data).subscribe((data:any) => {
      if(data.status) {
        this.channels = data.data;
        console.log("🚀 ~ file: datatable.component.ts:125 ~ DatatableComponent ~ this.statisticsService.filters ~ data.data:", data.data)
        this.cd.markForCheck();
      }
    })
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(
        (params: Params) => {
          if (params['id']) {
            this.id = params['id']
            this.getById(this.id);
          }
          return of(null)
        })
    ).subscribe((data) => {
    })
    if(!this.id){
      this.getAll();
    }
    this.getCountries();
    this.getCompanies();
    this.cols = [
        { field: 'company_id', header: 'ID', sort: true },
        { field: 'company_name', header: 'Company name', sort: true },
        { field: 'leads_count', header: 'count', sort: true },
        { field: 'installs', header: 'Installs', sort: true },
        { field: 'impressions', header: 'Impressions', sort: true},
        { field: 'ctr', header: 'Ctr', sort: true},
        { field: 'reattrebutions', header: 'Reattrebutions', sort: false },
        { field: 'daus', header: 'Daus', sort: true },
        { field: 'waus', header: 'Waus', sort: false },
        { field: 'ecpi', header: 'Ecpi', sort: false },
        { field: 'ccr', header: 'CCR %', sort: false },
        { field: 'roas', header: 'Roas', sort: true },
        { field: 'maus', header: 'Maus', sort: true },
        { field: 'revenues', header: 'Revenues', sort: true },
        { field: 'spead', header: 'Spead', sort: true },
        { field: 'events', header: 'Events', sort: false },
        { field: 'other', header: 'Other', sort: true }
    ];
    this.selectedColumns = this.cols;
  }
}
