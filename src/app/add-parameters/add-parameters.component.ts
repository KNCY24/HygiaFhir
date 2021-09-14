import { Component, OnInit } from '@angular/core';
import { Parameter } from '../KREMS';
import { RestserviceService } from '../restservice.service';


@Component({
  selector: 'app-add-parameters',
  templateUrl: './add-parameters.component.html',
  styleUrls: ['./add-parameters.component.scss']
})
export class AddParametersComponent implements OnInit {

  parameter : Parameter = new Parameter();
  server : string;

  constructor(private service: RestserviceService) {
    this.server = service.getServer;  
  }

  ngOnInit(): void {
  }

}
