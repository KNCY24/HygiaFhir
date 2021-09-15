import { Component, OnInit } from '@angular/core';
import { TabContent } from '../KREMS';
import { RestserviceService } from '../restservice.service';
import { DatePipe,formatDate } from '@angular/common';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.scss']
})
export class ViewAppointmentComponent implements OnInit {

  tabcontent:any= new TabContent();
  listday=["Lundis","Mardis","Mercredis","Jeudis","Vendredis","Samedis","Dimanches"]
  
  constructor(private service:RestserviceService,private datepipe:DatePipe) {
    service.getRappel().subscribe(
      data => {
        this.tabcontent=data;
        console.log(this.tabcontent)
      })
  }

  ngOnInit(): void {
  }

  getStatus(status:string,priority:string){
    if(status=="requested"){
      if(priority=="routine"){
        return "En cours"
      }else{
        return "A venir"
      }
    }else{
      return "Terminé"
    }
  }

  getType(priority:string){
    if(priority=="routine"){
      return "Régulier"
    }else{
      return "Ponctuel"
    }
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

  getFrequence(date:Date, days:string){
    //var listdays=days.split('')
    const dateT=new Date(date)
    return  days+" à "+this.formatTime(dateT.getHours(),dateT.getMinutes())
  }

  transformDate(dateD:Date){
    const date= new Date(dateD)
    const event=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate(),3,0,0))
    //const options = new { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return event.toLocaleDateString('fr-FR')+" à "+this.formatTime(date.getHours(),date.getMinutes())
  }
}
