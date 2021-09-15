import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import { Parameter, Parameters } from '../KREMS';
import { RestserviceService } from '../restservice.service';


@Component({
  selector: 'app-add-parameters',
  templateUrl: './add-parameters.component.html',
  styleUrls: ['./add-parameters.component.scss']
})
export class AddParametersComponent implements OnInit {

  parameters : Parameters = new Parameters();
  parameter : Parameter = new Parameter();
  server : string;
  glycemieValue : number=0;
  poidsValue : number = 0;
  activite : string = "";
  $scope: any;
  myGlycemie: string ="";
  myWeight : string = "";
  myActivity: string ="";

  constructor(private service: RestserviceService) {
    console.log("HELLLLOOOO");
    this.server = service.getServer;  
    service.getParameters().subscribe(
      data => {
        this.parameters=data;
      });
  }

  ngOnInit(): void {
  }


  addGlycemie(){
    this.parameter.name="glycémie";
    this.parameter.valueDecimal=Number(this.myGlycemie);
    this.parameter.valueDate=new Date();
    this.parameters.parameter.push(this.parameter);
    this.service.putParameters(this.parameters).subscribe(
      data=>{
        this.parameters=data;
      }
    );
  }

  addPoids(){
    this.parameter.name="poids";
    this.parameter.valueDecimal=Number(this.myWeight);
    this.parameter.valueDate=new Date();
    this.parameters.parameter.push(this.parameter);
    console.log(this.parameters.parameter);
    this.service.putParameters(this.parameters).subscribe(
      data=>{
        this.parameters=data;
      }
    );   
  }

  addActivite(){
    var selectedElmt = <HTMLInputElement>document.getElementById("id-activite");
    this.parameter.name="activite";
    this.parameter.valueString=selectedElmt?.value;
    this.parameters.parameter.push(this.parameter);
    this.service.putParameters(this.parameters);
  }

}
