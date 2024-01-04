import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../statistics.service';
import moment from "moment";
import { ActivatedRoute, Params } from '@angular/router';
import { of, switchMap } from 'rxjs';

interface Column {
  field: string;
  header: string;
  sort: boolean;
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss'
})
export class DatatableComponent implements OnInit {
  public channels: any;
  public id: any;
  public cols!: Column[];

  constructor(
    private statisticsService: StatisticsService,
    private route: ActivatedRoute,
    ) { }

  getAll(){

    return this.statisticsService.getAll().subscribe((data: any) => {
      // console.log("data:", data);
      if(data.status){
        this.channels = data.data;
      }
    })
  }
  getById(id:any){

    return this.statisticsService.getById(id).subscribe((data: any) => {
      // console.log("data:", data);
      if(data.status){
        this.channels = data.data;
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
  }
}
