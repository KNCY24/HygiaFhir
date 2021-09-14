import { Component, OnInit } from '@angular/core';
import { HumanName, Medication,Patient } from '../KREMS';
import { RestserviceService } from '../restservice.service';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.scss']
})
export class ViewBoardComponent implements OnInit {
  medication:Medication=new Medication();
  patient:Patient=new Patient();

  constructor(private service:RestserviceService) {
    service.getMedication().subscribe(
      data => {
        this.medication=data;
      })
    service.getPatient().subscribe(
      data => {
        this.patient=data;
      }
    )
   }

  ngOnInit(): void {
  }

  getGender(gender:String){
    if(gender=="male"){
      return "monsieur"
    }else{
      return "madame"
    }
  }

  getOfficialName(name:HumanName[]){
    for(let i=0;i<name.length;i++){
      if(name[i].use=="official"){
        return name[i].family
      }
    }
    return name[0].family
  }

}
