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

  constructor(private service: RestserviceService) {
    this.server = service.getServer;  
    service.getParameters().subscribe(
      data => {
        this.parameters=data;
      });
  }

  ngOnInit(): void {
  }

  getGlycemie(){
    //this.glycemieValue=Number(this.myGlycemie);
  }

  addGlycemie(){
    //this.parameter.name="glycémie";
    //this.parameter.valueDecimal=Number($scope.myGlycemie);
    //this.parameters.parameter.push(this.parameter);
    //this.service.putParameters(this.parameters);
    //console.log(this.parameter.valueDecimal);
    //this.getGlycemie();
    console.log(this.myGlycemie);
  }

  addPoids(){
    this.parameter.name="poids";
    this.parameter.valueDecimal=Number(document.getElementById("input-weight")?.textContent);
    this.parameters.parameter.push(this.parameter);
    this.service.putParameters(this.parameters);
    console.log(this.parameter);
  }

  addActivite(){
    var selectedElmt = <HTMLInputElement>document.getElementById("id-activite");
    this.parameter.name="activite";
    this.parameter.valueString=selectedElmt?.value;
    this.parameters.parameter.push(this.parameter);
    this.service.putParameters(this.parameters);
  }

}
