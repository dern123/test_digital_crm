import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';
import { ListComponent } from './list/list.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TreeModule } from 'primeng/tree';
import { HeaderModule } from '../../components/header/header.module';


@NgModule({
  declarations: [
    LeadsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    TreeModule,
    TableModule,
    ButtonModule,
    HeaderModule
  ]
})
export class LeadsModule { }
