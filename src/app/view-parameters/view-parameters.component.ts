import { Component, OnInit } from '@angular/core';
import { Parameter, Parameters } from '../KREMS';
import { RestserviceService } from '../restservice.service';
import { DatePipe,formatDate } from '@angular/common';

@Component({
  selector: 'app-view-parameters',
  templateUrl: './view-parameters.component.html',
  styleUrls: ['./view-parameters.component.scss']
})
export class ViewParametersComponent implements OnInit {

  parameters : Parameters = new Parameters();
  parameter : Parameter = new Parameter();
  historiqueGlycemie : Parameter[]=[];
  historiquePoids : Parameter[]=[];
  historiqueActivite : Parameter[]=[];

  constructor(private service: RestserviceService,private datepipe:DatePipe) {
    service.getParameters().subscribe(
      data => {
        this.parameters=data;
        this.determineValueGlycemie();
        this.determineValuePoids();
        this.determineValueActivite();
      }
    );

    
  }

  ngOnInit(): void {
  }

  determineValueGlycemie() : Parameter[] {
    for (let i = 0; i < this.parameters.parameter.length; i++){
      if (this.parameters.parameter[i].name=="Glycémie"){
        this.historiqueGlycemie.push(this.parameters.parameter[i]);
      } 
    }
    return this.historiqueGlycemie;
  } 

  determineValuePoids() : Parameter[] {

    for (let i = 0; i < this.parameters.parameter.length; i++){
      if (this.parameters.parameter[i].name=="Poids"){
        this.historiquePoids.push(this.parameters.parameter[i]);
      } 
    }
    return this.historiquePoids;
  }

  determineValueActivite() : Parameter[] {

    for (let i = 0; i < this.parameters.parameter.length; i++){
      if (this.parameters.parameter[i].name=="Activité"){
        this.historiqueActivite.push(this.parameters.parameter[i]);
      } 
    }
    return this.historiqueActivite;
  }
  
  formatTime(hour:number,minute:number){
    var hourtext=String(hour)
    var minutetext=String(minute)
    if(hour<10){
      hourtext="0"+hour
    }
    if(minute<10){
      minutetext="0"+minute
    }
    return hourtext+"h"+minutetext
  }
  
  transformDate(dateD:Date){
    const date= new Date(dateD)
    const event=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate(),3,0,0))
    //const options = new { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return event.toLocaleDateString('fr-FR')+" à "+this.formatTime(date.getHours(),date.getMinutes())
  }

}
