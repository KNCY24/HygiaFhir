import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddMedicationComponent } from './add-medication/add-medication.component';
import { AddAdministrationComponent } from './add-administration/add-administration.component';
import { AddParametersComponent } from './add-parameters/add-parameters.component';
import { ViewParametersComponent } from './view-parameters/view-parameters.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ViewBoardComponent } from './view-board/view-board.component';
import { ViewQuestionnaireComponent } from './view-questionnaire/view-questionnaire.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ViewToolbarComponent } from './view-toolbar/view-toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

declare var require: any;

const appRoutes: Routes = [
  { path: '', component: ViewBoardComponent },
  { path: 'Questionnaire', component: ViewQuestionnaireComponent },
  { path: 'addMedication', component: AddMedicationComponent },
  { path: 'addAdministration', component: AddAdministrationComponent },
  { path: 'addParameters', component: AddParametersComponent },
  { path: 'viewParameters', component: ViewParametersComponent },
  { path: 'addAppointment', component: AddAppointmentComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AddMedicationComponent,
    AddAdministrationComponent,
    AddParametersComponent,
    ViewParametersComponent,
    AddAppointmentComponent,
    ViewBoardComponent,
    ViewQuestionnaireComponent,
    ViewToolbarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
