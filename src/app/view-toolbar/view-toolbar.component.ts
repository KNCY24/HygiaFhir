import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Annotation, Task,TabContent } from '../KREMS';
import { RestserviceService } from '../restservice.service';

@Component({
  selector: 'app-view-toolbar',
  templateUrl: './view-toolbar.component.html',
  styleUrls: ['./view-toolbar.component.scss']
})
export class ViewToolbarComponent implements OnInit {
  nbRappels=0;
  task:Task;
  isPopup=false;
  intitule="";
  date="";
  time="";
  frequence="r";
  type="rdv";
  listday=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
  selectedday:boolean[]=[false,false,false,false,false,false,false];
  tabcontent:any= new TabContent();

  constructor(private service:RestserviceService,private router:Router) { 
    this.task=new Task();
    service.getRappel().subscribe(
      data => {
        this.tabcontent=data;
        var count=0;
        let today = new Date().toLocaleDateString();
        console.log(today)

        for(let rappel of this.tabcontent){
          console.log(rappel.executionPeriod.Start.getMonth())
          if(rappel.status="requested"){
            count=count+1;
          }
        }
        this.nbRappels=count;
      })
   }
  

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['/'])
  }


  showPopup(){
    this.isPopup=true;
  }

  closePopup(){
    this.isPopup=false;
  }

  isSelected(indexDay:number):boolean{
    return this.selectedday[indexDay]
  }

  selectDay(indexDay:number){
    this.selectedday[indexDay]=!this.selectedday[indexDay]
  }

  addAppointment(){
    var note=new Annotation();
    if(this.frequence=="r"){
      this.task.priority="routine"
      var date=new Date("January 1,2021 "+this.time)
      this.task.executionPeriod.start=date
      note.text=String(this.selectedday)
      /*for(let day of this.selectedday){
        note.text=note.text+","+this.selectedday
      }*/
      this.task.note.push(note)
    }else{
      this.task.priority="urgent"
      var date=new Date(this.date)
      this.task.executionPeriod.start=new Date(date.getMonth()+1+" "+date.getDate()+","+date.getFullYear()+" "+this.time)
    }
    this.task.description=this.intitule
    this.task.groupIdentifier.use="usual"
    this.task.groupIdentifier.value="none"
    console.log(this.task)
    this.service.postRappel(this.task).subscribe(
      data => {
        this.router.navigate(['rappels'])
        setTimeout(()=> {
          document.location.reload() 
        },1000)
        this.closePopup();
      })
    
  }

}
