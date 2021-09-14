import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Medication,Patient,Questionnaire,Parameters} from './KREMS';

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

  getQuestionnaire():Observable<Questionnaire> {
    return this.http.get<Questionnaire>(this.server+"Questionnaire")
  }

  getPatient():Observable<Patient>{
    return this.http.get<Patient>(this.server+"patient/613f4631a5b46400122cf50c")
  }
  
  getParameters():Observable<Parameters>{
    return this.http.get<Parameters>(this.server+"Parameters/6140a8b7a5b46400122cf528")
  }

}
