
export class Clinic {
    benefits:Benefit[];
    expenses: Expense[];
    medicines: Medicine[];
    inventories:Inventory[];
    patients: Patient[];
    users:User[];
    constructor(){
        this.benefits=[];
        this.expenses=[];
        this.medicines=[];
        this.inventories=[];
        this.patients=[];
        this.users=[];
        
    }
}

export class Allergy {
    idallergy:number=0;
    name:string="";
}

export class Benefit {
    idbenefit:number=0;
    date:Date  =new Date();
    dateCreation:Date=new Date()
    packaging:string="";
    quantity:number=0;
    price : number = 0;
    due : number = 0;
    idpatient:number=0;
    detailstock :DetailStock=new DetailStock();
}

export class Charge {
    idcharge:number=0;
    name : string = "";
    amount : number = 0;
    duration:string="";
    frequency:number=0;
}

export class Consultation {
    idconsultation:number=0;
    issue : string = "";
    date : Date  =new Date();
    dateCreation:Date=new Date()
    remarks : string = "";
    user:string="";
    observations:Observation[]=[];
    diagnoses:Diagnosis[]=[];
    prescriptions:Prescription[]=[];
}

export class Dependant {
    iddependant:number=0;
    relationship : string = "";
    age : number = 0;
    occupation : string="";
    remarks : string = "";
}

export class DetailStock {
    iddetailstock:number=0;
    packaging : string = "";
    quantity : number =0 ;
    more:number=0;
}

export class Diagnosis {
    iddiagnosis:number=0;
    classification : string = "";
    details : string = "";
    remarks:string="";
}

export class Emergency {
    idemergency:number=0;
    name :string="";
    relationship:string="";
    phone:string="";
    remarks:string="";
}

export class Expense {
    idexpense:number=0;
    date:Date =new Date();
    packaging : string = "";
    quantity:number=0;
    amount:number=0;
    detailstock :DetailStock=new DetailStock();
}

export class Family {
    idfamily:number=0;
    relationship:string="";
    age : number = 0;
    occupation : string="";
    remarks : string = "";
}

export class History {
    idhistory:number=0;
    relationship:string="";
    disease:string="";
}

export class Medicine {
    idmedicine : number = 0;
    name : string = "";
    packaging : string = "";
    quantity : number =0 ;
    expiration : Date  =new Date();
    retailprice : number = 0;
    source :string="";
    detailstock:DetailStock=new DetailStock();
    ventes:Benefit[]=[];
    achats:Expense[]=[];

}

export class Inventory {
    idinventory:number=0;
    name:string="";
    source:string="";
}

export class Observation {
    idobservation:number= 0;
    name : string = "";
    details : string = "";
    remarks : string = "";
}

export class Pathology {
    idpathology:number=0;
    type:string="";
    name : string = "";
}

export class Patient {
    idpatient : number = 0;
    name : string = "";
    sexe : string = "";
    date : Date = new Date();
    birthlocation: String ="";
    phone : string = "";
    address : string = "";
    weight : number = 0;
    height : number = 0;
    occupation:string="";
    category : string = "";
    remarks : string ="";
    allergy:Allergy=new Allergy();
    charges:Charge[]=[]
    consultations:Consultation[]=[];
    dependants:Dependant[]=[];
    families:Family[]=[];
    histories:History[]=[];
    pathologies:Pathology[]=[];
    resources:Resource[]=[];
    situation:Situation=new Situation();
    emergencies:Emergency[]=[];
    treatments:Treatment[]=[];
    iduser : number = 0;
}

export class Prescription {
    idprescription:number=0;
    typeprescription:string="";
    details : string = "";
    remarks : string = "";
}

export class Resource {
    idresource:number=0;
    source : string = "";
    amount : number = 0;
    duration : string = "";
    frequency : number = 0;
}

export class Situation {
    idsituation:number=0;
    typesituation : string = "";
    occupation : string="";
    remarks:string="";
}

export class Treatment {
    idtreatment:number=0;
    name : string = "";
    start : Date =new Date();
    deadline : Date =new Date();
    duration : string = "";
    frequency : number = 0;
    quantity : string="" ;
    remarks:string="";
}

export class User {
    iduser : number = 0;
    name : string = "";
    role : string = "";
    date: Date = new Date();
    sexe: string="";
    username : string = "";
    password : string = "";

}
