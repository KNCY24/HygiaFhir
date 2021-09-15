import { Component, OnInit } from '@angular/core';
import { HumanName, Patient, Address,ContactPoint, Contact } from '../KREMS';
import { RestserviceService } from '../restservice.service';
@Component({
  selector: 'app-view-profil',
  templateUrl: './view-profil.component.html',
  styleUrls: ['./view-profil.component.scss']
})
export class ViewProfilComponent implements OnInit {

  patient:Patient=new Patient();

  constructor(private service:RestserviceService) {

    service.getPatient().subscribe(
      data => {
        this.patient=data;
      }
    )
   }
   getOfficialFamilyName (name:HumanName[]){
     for(let i=0;i<name.length;i++){
       if(name[i].use=="official"){
         return name[i].family
       }
     }
     return name[0].family
   }
   getOfficialGivenName (name:HumanName[]){
    for(let i=0;i<name.length;i++){
      if(name[i].use=="official"){
        let prenoms=name[i].given;
        for(let f=0;f<prenoms.length;f++){
          return name[i].given
        }
      }
    }
    return name[0].given
  }
    getAddress(address: Address[]){
      for(let i=0;i<address.length;i++){
        if(address[i].use=="home"){
          return address[i].text
        }
      }
      return address[0].text
    }
    getEmail(telecom: ContactPoint[]){
      for(let i=0;i<telecom.length;i++){
        
        if(telecom[i].system=="email"){
          return telecom[i].value
        }
        else{
          return "-"
        }
      }
      return telecom[0].value
    }
    getTelephone(telecom: ContactPoint[]){
      
      for(var index in telecom){
      console.log(index)
        if(telecom[index].system=="phone"){
          return telecom[index].value
        }
        else{
          return "-"
        }
      }
      return telecom[0].value
    }
    getPhoneEmergency(contact: Contact[]){
      for(let i=0;i<contact.length;i++){
        let telecom:ContactPoint[]=contact[i].telecom
        for(let f=0;f<telecom.length;f++){
          if(telecom[i].system=="phone"){
          return telecom[i].value
        }
      } 
    }
    return contact[0].telecom[0].value
  }
  getFamilyEmergency(contact: Contact[]){
    for(let i=0;i<contact.length;i++){
        return contact[i].name.family
      
    }
    return contact[0].name.family
  }
  getGivenEmergency(contact: Contact[]){
    for(let i=0;i<contact.length;i++){
      return contact[i].name.given
    
    }
    return contact[0].name.given
  }
  ngOnInit(): void {
  }

}
