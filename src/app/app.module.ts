import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatBadgeModule} from '@angular/material/badge';

import { AppComponent } from './app.component';
import { AddAdministrationComponent } from './add-administration/add-administration.component';
import { AddParametersComponent } from './add-parameters/add-parameters.component';
import { ViewParametersComponent } from './view-parameters/view-parameters.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ViewBoardComponent } from './view-board/view-board.component';
import { ViewQuestionnaireComponent } from './view-questionnaire/view-questionnaire.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ViewToolbarComponent } from './view-toolbar/view-toolbar.component';
import { ViewProfilComponent } from './view-profil/view-profil.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';

declare var require: any;

const appRoutes : Routes = [
  {path:'',component:ViewBoardComponent},
  {path:'questionnaire',component:ViewQuestionnaireComponent},
  {path:'addAdministration',component:AddAdministrationComponent},
  {path:'addParameters',component:AddParametersComponent},
  {path:'parameters',component:ViewParametersComponent},
  {path:'addAppointment',component:AddAppointmentComponent},
  {path:'profil',component:ViewProfilComponent},
  {path:'rappels',component:ViewAppointmentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AddAdministrationComponent,
    AddParametersComponent,
    ViewParametersComponent,
    AddAppointmentComponent,
    ViewBoardComponent,
    ViewQuestionnaireComponent,
    ViewToolbarComponent,
    ViewProfilComponent,
    ViewAppointmentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatBadgeModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
