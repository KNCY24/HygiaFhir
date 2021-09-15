import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-toolbar',
  templateUrl: './view-toolbar.component.html',
  styleUrls: ['./view-toolbar.component.scss']
})
export class ViewToolbarComponent implements OnInit {

  isPopup=true;
  input1="";
  input2="";
  input3="";
  frequence="r";
  listday=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
  selectedday:boolean[]=[false,false,false,false,false,false,false];

  constructor(private router:Router) { }

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

  }

}
