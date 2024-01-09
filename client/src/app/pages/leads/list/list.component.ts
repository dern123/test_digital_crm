import { Component, OnInit } from '@angular/core';
import { LeadsService } from '../leads.service';
interface Column {
  field: string;
  header: string;
  sort: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  constructor(private leadsService: LeadsService){}

  public channels: any;
  public cols!: Column[];

  getAll(){
    this.leadsService.getAll().subscribe((data: any) => {
      if(data.status){
        this.channels = data.data;
      }
    })
  }
  ngOnInit(): void {
      this.getAll();
      this.cols = [
        { field: 'channel_id', header: 'ID', sort: true },
        { field: 'company_name', header: 'Company name', sort: true },
        { field: 'country_code', header: 'Country', sort: true },
        { field: 'leads_count', header: 'Count', sort: true },
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
