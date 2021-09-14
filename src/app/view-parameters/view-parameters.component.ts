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

  determineValueGlycemie(){
   
    for (let i = 0; i < this.parameters.parameter.length; i++){
      if (this.parameters.parameter[i].name=="glycémie"){
        this.parameter.valueDecimal = this.parameters.parameter[i].valueDecimal;
      }
    return this.parameter.valueDecimal;
    }

  } 

  determineValuePoids(){

    for (let i = 0; i < this.parameters.parameter.length; i++){
      if (this.parameters.parameter[i].name=="poids"){
        this.parameter.valueDecimal = this.parameters.parameter[i].valueDecimal;
      }
    return this.parameter.valueDecimal;
    }
  }

}
