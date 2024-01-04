import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './statistics.component';
import { DatatableComponent } from './datatable/datatable.component';

const routes: Routes = [
  { path: "", component: StatisticsComponent,
    children:[
      { path: "datatable", component: DatatableComponent },
      { path: "datatable/:id", component: DatatableComponent },
      { path: "", redirectTo:"datatable", pathMatch:"full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
