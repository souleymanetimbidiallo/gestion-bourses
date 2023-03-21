import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BoursesListComponent } from './bourses/bourses-list/bourses-list.component';
import { NiveauxListComponent } from './niveaux/niveaux-list/niveaux-list.component';
import { DomainesListComponent } from './domaines/domaines-list/domaines-list.component';
import { EtudiantsListComponent } from './etudiants/etudiants-list/etudiants-list.component';
import { CandidaturesListComponent } from './candidatures/candidatures-list/candidatures-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AdminLayoutComponent,
    AdminDashboardComponent,
    BoursesListComponent,
    NiveauxListComponent,
    DomainesListComponent,
    EtudiantsListComponent,
    CandidaturesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminLayoutComponent, children: [
        { path: '', component: AdminDashboardComponent },
        { path: 'bourses', component: BoursesListComponent },
        { path: 'candidatures', component: CandidaturesListComponent },
        { path: 'etudiants', component: EtudiantsListComponent },
        { path: 'domaines', component: DomainesListComponent },
        { path: 'niveaux', component: NiveauxListComponent },
    ]
  }
    ])
  ]
})
export class AdminModule { }
