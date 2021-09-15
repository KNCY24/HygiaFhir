import { Component, OnInit } from '@angular/core';
import { TabContent } from '../KREMS';
import { RestserviceService } from '../restservice.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.scss']
})
export class ViewAppointmentComponent implements OnInit {

  tabcontent:any= new TabContent();
  constructor(private service:RestserviceService) {
    service.getRappel().subscribe(
      data => {
        this.tabcontent=data;
        console.log(this.tabcontent)
      })
  }

  ngOnInit(): void {
  }

  getType(priority:string){
    if(priority=="routine"){
      return "Régulier"
    }else{
      return "Ponctuel"
    }
  }
}
