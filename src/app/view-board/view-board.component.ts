import { Component, OnInit } from '@angular/core';
import { Medication,Patient } from '../KREMS';
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

}
