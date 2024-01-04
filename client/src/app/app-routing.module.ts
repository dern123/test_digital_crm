import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "statistics",
    loadChildren:() => import("./pages/statistics/statistics.module").then((m) => m.StatisticsModule)
  },
  { path: "leads",
    loadChildren:() => import("./pages/leads/leads.module").then((m) => m.LeadsModule)
  },
  { path: "", redirectTo: "statistics", pathMatch: "full" },
  { path: "**",
    loadChildren:() => import("./pages/not-found/not-found.module").then((m) => m.NotFoundModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
