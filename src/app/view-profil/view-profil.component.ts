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

   formatDate(dateD:Date){
    const date= new Date(dateD)
    const event=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate(),3,0,0))
    //const options = new { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return event.toLocaleDateString('fr-FR')
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
          return prenoms[0] + " "+prenoms[1]
        }
      }
    }
    return name[0].given[0]+" "+name[0].given[1]
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
      let taille=telecom.length
      var numeros:string[]=[]; 
      if(telecom[taille-1].system=="phone"){
        numeros.push(telecom[taille-1].value)
      }
      for(let i=0;i<taille;i++){
        
        if(telecom[i].system=="email"){
          numeros.push(telecom[i].value)
          return numeros
        }
        else{
          return "-"
        }
      }
      return telecom[0].value
    }
    getTelephone(telecom: ContactPoint[]){
      let taille=telecom.length
      var numeros:string[]=[]; 
      if(telecom[taille-1].system=="phone"){
        numeros.push(telecom[taille-1].value)
      }
      for(let i=0;i<taille;i++){
        if(telecom[i].system=="phone"){
          numeros.push(telecom[i].value)
          return numeros
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
