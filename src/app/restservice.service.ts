import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Medication } from './KREMS';
import { Questionnaire} from './KREMS';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {
  server : string="https://fhir.eole-consulting.io/api/"

  constructor(private http:HttpClient) { }

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
  

}
