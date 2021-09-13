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

@NgModule({
  declarations: [
    AppComponent,
    AddMedicationComponent,
    AddAdministrationComponent,
    AddParametersComponent,
    ViewParametersComponent,
    AddAppointmentComponent,
    ViewBoardComponent,
    ViewQuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
