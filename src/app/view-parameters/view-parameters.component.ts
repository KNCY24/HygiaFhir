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
  historiqueGlycemie : Parameter[]=[];
  historiquePoids : Parameter[]=[];
  historiqueActivite : Parameter[]=[];

  constructor(private service: RestserviceService) {
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

}
