import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StatisticsService } from '../statistics.service';
import moment from "moment";
import { ActivatedRoute, Params } from '@angular/router';
import { of, switchMap } from 'rxjs';

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
  public id: any;
  public cols!: Column[];
  public selectedColumns!: Column[];

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
    // this.statisticsService.reload.subscribe((data: any) => {
    //    if(data){
    //     this.getAll();
    //    }
    // })
    if(!this.id){
      this.getAll();
    }

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
