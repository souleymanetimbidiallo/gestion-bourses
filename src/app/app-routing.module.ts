import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontDashboardComponent } from './components/front/front-dashboard/front-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: FrontDashboardComponent },
  //{ path: 'home', loadChildren: () => import('./front/front.module').then(m => m.FrontModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
