import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { DatatableComponent } from './datatable/datatable.component';
import { TreeModule } from 'primeng/tree';
import { TableModule  } from 'primeng/table';
import { ButtonModule  } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { HeaderModule } from '../../components/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ButtonModule,
    HeaderModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StatisticsModule { }
