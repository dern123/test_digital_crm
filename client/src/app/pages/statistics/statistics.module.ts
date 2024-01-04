import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { DatatableComponent } from './datatable/datatable.component';
import { TreeModule } from 'primeng/tree';
import { TableModule  } from 'primeng/table';
import { ButtonModule  } from 'primeng/button';

@NgModule({
  declarations: [
    StatisticsComponent,
    DatatableComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    TreeModule,
    TableModule,
    ButtonModule 
  ]
})
export class StatisticsModule { }
