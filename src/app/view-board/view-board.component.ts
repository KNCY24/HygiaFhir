import { Component, OnInit } from '@angular/core';
import { HumanName, Medication,Patient,TabContent } from '../KREMS';
import { RestserviceService } from '../restservice.service';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.scss']
})
export class ViewBoardComponent implements OnInit {
  medication:Medication=new Medication();
  patient:Patient=new Patient();
  tabcontent:any= new TabContent();

  nbQuestionnaire=0;

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
    service.getQuestionnaire().subscribe(
      data => {
        this.tabcontent=data;
        var count=0;
        for(let questionnaire of this.tabcontent){
          if(questionnaire.status=='active'){
            count=count+1;
          }
        }
        this.nbQuestionnaire=count;
      })
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
