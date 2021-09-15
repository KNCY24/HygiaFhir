import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Medication,Patient,Questionnaire,Parameters, TabContent, QuestionnaireResponse,Task} from './KREMS';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {
  server : string="https://fhir.eole-consulting.io/api/"

  constructor(private http:HttpClient) { }

  get getServer(){
    return this.server;
  }

  set setServer(value: string){
    this.server=value;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getMedication():Observable<Medication> {
    return this.http.get<Medication>(this.server+"medication")
  }

  getQuestionnaire():Observable<TabContent> {
    return this.http.get<TabContent>(this.server+"questionnaire")
  }

  validQuestionnaire(idquestionnaire:String,questionnaire:Questionnaire):Observable<Questionnaire>{
    return this.http.put<Questionnaire>(this.server+"questionnaire/"+idquestionnaire,questionnaire)
  }

  postQuestionnaireResponse(response:QuestionnaireResponse):Observable<QuestionnaireResponse>{
    return this.http.post<QuestionnaireResponse>(this.server+"questionnaire-response",response)
  }

  getPatient():Observable<Patient>{
    return this.http.get<Patient>(this.server+"patient/613f4631a5b46400122cf50c")
  }
  
  getParameters():Observable<Parameters>{
    return this.http.get<Parameters>(this.server+"parameters/6140a8b7a5b46400122cf528")
  }

  postRappel(rappel:Task):Observable<Task>{
    return this.http.post<Task>(this.server+"task",rappel)
  }

  getRappel():Observable<TabContent>{
    return this.http.get<TabContent>(this.server+"task")
  }


  getResponse():Observable<QuestionnaireResponse>{
    return this.http.get<QuestionnaireResponse>(this.server+"questionnaire-response")
  }
  deleteResponse(idresponse:String):Observable<QuestionnaireResponse>{
    return this.http.delete<QuestionnaireResponse>(this.server+"questionnaire-response/"+idresponse)
  }

  
}
