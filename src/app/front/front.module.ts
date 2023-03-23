import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FrontDashboardComponent } from './front-dashboard/front-dashboard.component';
import { BoursesSearchComponent } from './bourses-search/bourses-search.component';
import { CandidatureFormComponent } from './candidature-form/candidature-form.component';

import {  MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './auth/login/login.component';
import { FrontSidebarComponent } from './components/front-sidebar/front-sidebar.component';
import { FrontHeaderComponent } from './components/front-header/front-header.component';
import { FrontFooterComponent } from './components/front-footer/front-footer.component';




@NgModule({
  declarations: [
    FrontLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    FrontDashboardComponent,
    BoursesSearchComponent,
    CandidatureFormComponent,
    LoginComponent,
    FrontSidebarComponent,
    FrontHeaderComponent,
    FrontFooterComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,  
    MatIconModule,
    RouterModule.forChild([
      { path: '', component: FrontLayoutComponent, children: [
        { path: '', component: FrontDashboardComponent },
        { path: 'bourses', component: BoursesSearchComponent },
        { path: "candidature", component: CandidatureFormComponent},
      ] },
      {
        path: "login", component: LoginComponent
      }
    ])
  ]
})
export class FrontModule { }
