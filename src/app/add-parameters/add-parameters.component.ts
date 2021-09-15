import { Component, OnInit } from '@angular/core';
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
  myGlycemie: string ="";
  myWeight : string = "";
  myActivity: string ="";

  constructor(private service: RestserviceService) {
    service.getParameters().subscribe(
      data => {
        this.parameters=data;
      });
  }

  ngOnInit(): void {
  }

  addParameter(type:string){
    this.parameter=new Parameter()
    this.parameter.name=type
    var date=new Date()
    this.parameter.valueDateTime=new Date(date.getMonth()+1+" "+date.getDate()+","+date.getFullYear()+" "+date.getTime());
    if(type=="Glycémie"){
      this.parameter.valueDecimal=Number(this.myGlycemie);
    }else if(type=="Poids"){
      this.parameter.valueDecimal=Number(this.myWeight);
    }else{
      this.parameter.valueString=this.myActivity
    }
    
    this.parameters.parameter.push(this.parameter);
    console.log(this.parameter)
    console.log(this.parameters)
    this.service.putParameters(this.parameters).subscribe(
      data=>{
        this.parameters=data;
        this.myGlycemie="";
        this.myWeight= "";
        this.myActivity="";
      }
    );
  }

}
