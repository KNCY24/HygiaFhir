import { Component, OnInit } from '@angular/core';
import { Answer, ItemR, Questionnaire, QuestionnaireResponse, TabContent } from '../KREMS';
import { RestserviceService } from '../restservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-questionnaire',
  templateUrl: './view-questionnaire.component.html',
  styleUrls: ['./view-questionnaire.component.scss']
})
export class ViewQuestionnaireComponent implements OnInit {

  tabcontent:any= new TabContent();
  isQuestionnaire:boolean=true;
  questionnaire:Questionnaire=new Questionnaire();
  questionnaireResponse:QuestionnaireResponse=new QuestionnaireResponse();
  item:ItemR=new ItemR();
  answer:Answer=new Answer();

  constructor(private service:RestserviceService,private router:Router) {
    service.getQuestionnaire().subscribe(
      data => {
        this.tabcontent=data;
        var count=0;
        for(let questionnaire of this.tabcontent){
          if(questionnaire.status=='active'){
            this.questionnaire=questionnaire;
            count=count+1;
          }
        }
        if(count==0){
          this.isQuestionnaire=false
        }
      })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.questionnaire.status='draft'
    let i=0
    this.questionnaireResponse.authored=new Date();
    this.questionnaireResponse.author="613f4631a5b46400122cf50c"
    this.questionnaireResponse.status="completed"
    while( i < document.getElementsByName("text").length){
      this.item=new ItemR();
      this.answer=new Answer();
      this.item.linkId=String(i+1)
      this.item.text=document.getElementsByName('text')[i].innerText ;
      this.answer.valueString=(<HTMLInputElement>document.getElementsByName('answer')[i]).value
      this.item.answer.push(this.answer)
      this.questionnaireResponse.item.push(this.item)
      i=i+1
    }
    this.service.postQuestionnaireResponse(this.questionnaireResponse).subscribe(
      data => {
        this.service.validQuestionnaire(this.questionnaire.id,this.questionnaire).subscribe(
          data=>{
            this.service.getQuestionnaire().subscribe(
              data => {
                this.tabcontent=data;
                var count=0;
                for(let questionnaire of this.tabcontent){
                  if(questionnaire.status=='active'){
                    this.questionnaire=questionnaire;
                    count=count+1;
                  }
                }
                if(count==0){
                  this.isQuestionnaire=false
                }
                this.router.navigate(['questionnaire'])
              })
          }
        )
      }
    )
  }

}
