import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent},
  { path: "statistics",
    loadChildren:() => import("./pages/statistics/statistics.module").then((m) => m.StatisticsModule)
  },
  { path: "leads",
    loadChildren:() => import("./pages/leads/leads.module").then((m) => m.LeadsModule)
  },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "**",
    loadChildren:() => import("./pages/not-found/not-found.module").then((m) => m.NotFoundModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
