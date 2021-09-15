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
  notifs:Task[]=[];

  constructor(private service:RestserviceService,private router:Router) { 
    this.task=new Task();
    service.getRappel().subscribe(
      data => {
        this.tabcontent=data;
        console.log(this.tabcontent)
        var count=0;
        let today = new Date()
        for(let rappel of this.tabcontent){
          console.log(this.tabcontent.length)
          if(rappel.owner.reference==='613f4631a5b46400122cf50c'){
            console.log(rappel.description)
            let date=rappel.executionPeriod.start
            let days=rappel.note[0].text
            var listdays=days.split(',')
            const dateT=new Date(date)
            var ret=""
            for(let i=0;i<7;i++){
              if(listdays[i]=="true"){
                if(ret!=""){
                  ret=ret+", "+this.listday[i]
                }else{
                  ret=this.listday[i]
                }
              }
            }
            
            let DateNotif= new Date(date);
            console.log(ret)
            if(DateNotif.toLocaleDateString()==today.toLocaleDateString() || ret.includes(today.toLocaleDateString('fr-fr', {  weekday: 'long' }))){
              this.notifs.push(rappel)
              count=count+1;
            }
          }
        }
        this.nbRappels=count;
      })
   }
   getIntitule(intitule:String){
    return intitule
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
    this.task.owner.reference="613f4631a5b46400122cf50c"
    if(this.frequence=="r"){
      this.task.priority="routine"
      var date=new Date("January 1,2021 "+this.time)
      this.task.executionPeriod.start=date
      note.text=String(this.selectedday)
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
  formatTime(hour:number,minute:number){
    var hourtext=String(hour)
    var minutetext=String(minute)
    if(hour<10){
      hourtext="0"+hour
    }
    if(minute<10){
      minutetext="0"+minute
    }
    return hourtext+"h"+minutetext
  }

  getFrequence(date:Date){
    const dateT=new Date(date)
    
    return  this.formatTime(dateT.getHours(),dateT.getMinutes())
  }
}
