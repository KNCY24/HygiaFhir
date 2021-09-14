import { Component, OnInit } from '@angular/core';
import { Parameter } from '../KREMS';


@Component({
  selector: 'app-add-parameters',
  templateUrl: './add-parameters.component.html',
  styleUrls: ['./add-parameters.component.scss']
})
export class AddParametersComponent implements OnInit {

  parameter : Parameter = new Parameter();

  constructor() { }

  ngOnInit(): void {
  }

}
