import { Component, OnInit } from '@angular/core';
import { Medication } from '../KREMS';
import { RestserviceService } from '../restservice.service';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.scss']
})
export class ViewBoardComponent implements OnInit {
  medication:Medication=new Medication();

  constructor(private service:RestserviceService) {
    service.getMedication().subscribe(
      data => {
        this.medication=this.medication;
      })
   }

  ngOnInit(): void {
  }

}
