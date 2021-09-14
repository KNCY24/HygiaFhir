import { Component, OnInit } from '@angular/core';
import { Parameter, Parameters } from '../KREMS';
import { RestserviceService } from '../restservice.service';

@Component({
  selector: 'app-view-parameters',
  templateUrl: './view-parameters.component.html',
  styleUrls: ['./view-parameters.component.scss']
})
export class ViewParametersComponent implements OnInit {

  parameters : Parameters = new Parameters();
  parameter : Parameter = new Parameter();
  server : string;
  historiqueGlycemie : number[]=[];
  historiquePoids : number[]=[];
  historiqueActivite : string[]=[];

  constructor(private service: RestserviceService) {
    this.server = service.getServer;  
    service.getParameters().subscribe(
      data => {
        this.parameters=data;
      }
    )
  }

  ngOnInit(): void {
  }

  determineValueGlycemie() : number[] {

    console.log("pourquoi")
    console.log(this.parameters.parameter.length);
    for (let i = 0; i < this.parameters.parameter.length; i++){
      console.log("for");
      if (this.parameters.parameter[i].name=="glycémie"){
        this.historiqueGlycemie.push(this.parameters.parameter[i].valueDecimal);
        console.log("passer")
      } 
    }
    console.log(this.historiqueGlycemie);
    return this.historiqueGlycemie;
  } 

  determineValuePoids() : number[] {

    for (let i = 0; i < this.parameters.parameter.length; i++){
      if (this.parameters.parameter[i].name=="poids"){
        console.log(this.parameters.parameter.length);
        console.log(this.parameters.parameter[i].name);
        console.log(i);
        this.historiquePoids.push(this.parameters.parameter[i].valueDecimal);
      } 
    }
    return this.historiquePoids;
  }

  determineValueActivite() : string[] {

    for (let i = 0; i < this.parameters.parameter.length; i++){
      if (this.parameters.parameter[i].name=="activite"){
        this.historiqueActivite.push(this.parameters.parameter[i].valueString);
      } 
    }
    return this.historiqueActivite;
  }

}
