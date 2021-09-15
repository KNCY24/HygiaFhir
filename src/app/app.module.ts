import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatBadgeModule} from '@angular/material/badge';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';

import { AppComponent } from './app.component';
import { AddParametersComponent } from './add-parameters/add-parameters.component';
import { ViewParametersComponent } from './view-parameters/view-parameters.component';
import { ViewBoardComponent } from './view-board/view-board.component';
import { ViewQuestionnaireComponent } from './view-questionnaire/view-questionnaire.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ViewToolbarComponent } from './view-toolbar/view-toolbar.component';
import { ViewProfilComponent } from './view-profil/view-profil.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import {DatePipe} from '@angular/common';

declare var require: any;

const appRoutes : Routes = [
  {path:'',component:ViewBoardComponent},
  {path:'questionnaire',component:ViewQuestionnaireComponent},
  {path:'addParameters',component:AddParametersComponent},
  {path:'parameters',component:ViewParametersComponent},
  {path:'profil',component:ViewProfilComponent},
  {path:'rappels',component:ViewAppointmentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AddParametersComponent,
    ViewParametersComponent,
    ViewBoardComponent,
    ViewQuestionnaireComponent,
    ViewToolbarComponent,
    ViewProfilComponent,
    ViewAppointmentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AppRoutingModule,
    MatChipsModule,
    MatBadgeModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
