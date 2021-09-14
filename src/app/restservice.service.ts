import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Medication } from './KREMS';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {
  server : string="https://fhir.eole-consulting.io/"

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
    return this.http.get<Medication>(this.server+"get/medication")
  }

  

}
