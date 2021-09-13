export class Medication {
    resourceType:string="Medication";
    identifier:Identifier[]=[];
    code:CodeableConcept=new CodeableConcept();
    status:string="";
    //manufacturer:
    form:CodeableConcept=new CodeableConcept();
    amount:Ratio=new Ratio();
    ingredient: Ingredient[]=[];
    batch:Batch=new Batch();
}

export class Identifier {
    use:string="";
    type:CodeableConcept=new CodeableConcept();
    system:string="";
    value:string="";
    period:Period=new Period();
    //assigner
}

export class Period{
    start:Date=new Date();
    end:Date=new Date();
}

export class CodeableConcept {
    coding:Coding[]=[];
    text:string="";
}

export class Coding{
    system:string="";
    version:string="";
    code:string="";
    display:string="";
    userSelected:boolean=false;
}

export class Ingredient {
    itemCodeableConcept:CodeableConcept=new CodeableConcept();
    //itemReference
    isActive:boolean=false;
    strength:Ratio=new Ratio();
}

export class Ratio {
    numerator:Quantity=new Quantity();
    denominator:Quantity=new Quantity();
}

export class Quantity {
    value:number=0;
    comparator:string="";
    unit:string="";
    system:string="";
    code:string="";
}

export class Batch {
    lotNumber:string="";
    expirationDate:Date=new Date();
}

export class MedicationAdministration {
    resourceType:string="MedicationAdministration";
    identifier:Identifier[]=[];
    instantiates:string[]=[];
    //partOf
    status:string="";
    statusReason:CodeableConcept[]=[];
    category:CodeableConcept=new CodeableConcept();
    medicationCodeableConcept:CodeableConcept=new CodeableConcept();
    //medicationReference:
    //subject
    //context
    //supportingInformation:
    effectiveDateTime:Date=new Date();
    effectivePeriod:Period=new Period();
    performer:Performer[]=[];
    reasonCode:CodeableConcept[]=[];
    //reasonreference
    //request
    //device
    note:Annotation[]=[];
    dosage:Dosage=new Dosage();
    //eventHistory
}

export class Performer{
    function:CodeableConcept=new CodeableConcept();
    //actor:
}

export class Annotation{
    //authorReference
    authorString:string="";
    time:Date=new Date();
    text:string="";
}

export class Dosage{
    text:string="";
    site:CodeableConcept=new CodeableConcept();
    route:CodeableConcept=new CodeableConcept();
    method:CodeableConcept=new CodeableConcept();
    //dose
    rateRatio:Ratio=new Ratio();
    //rateQuantity
}