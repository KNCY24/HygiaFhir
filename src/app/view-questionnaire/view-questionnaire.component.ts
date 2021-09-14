import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '../KREMS';
import { RestserviceService } from '../restservice.service';

@Component({
  selector: 'app-view-questionnaire',
  templateUrl: './view-questionnaire.component.html',
  styleUrls: ['./view-questionnaire.component.scss']
})
export class ViewQuestionnaireComponent implements OnInit {

  Questionnaire:Questionnaire=new Questionnaire();

  constructor(private service:RestserviceService) {
    service.getQuestionnaire().subscribe(
      data => {
        this.Questionnaire=this.Questionnaire;
      })
   }

  ngOnInit(): void {
  }

}
