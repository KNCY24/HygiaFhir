
import { Byte } from "@angular/compiler/src/util";

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

export class Identifier{
    use : string = "";
    type : CodeableConcept = new CodeableConcept();
    system : string = ""; //uri
    value : string = "";
    period : Period = new Period();
    assigner : Organization = new Organization(); //Reference(Organization)
}

export class Period{
    start:Date=new Date();
    end:Date=new Date();
}

export class CodeableConcept {
    coding:Coding[]=[];
    text:string="";
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


export class Dosage{
    text:string="";
    site:CodeableConcept=new CodeableConcept();
    route:CodeableConcept=new CodeableConcept();
    method:CodeableConcept=new CodeableConcept();
    //dose
    rateRatio:Ratio=new Ratio();
    //rateQuantity
}

export class Patient {
    resourceType: string="Patient";
    identifier : Identifier[]=[]
    id : string = "";
    active : boolean = false;
    name : HumanName[]=[];
    telecom : ContactPoint[]=[];
    gender : string = "";
    birthDate : Date = new Date();
    deceasedBoolean : boolean = false;
    deceasedDateTime : Date = new Date();
    address : Address[]=[];
    maritalStatus : CodeableConcept = new CodeableConcept();
    multipleBirthBoolean : boolean = false;
    multipleBirthInteger : number = 0;
    photo : Attachement[]=[];
    contact : Contact[]=[];
    communication : Communication[]=[];
    //generalPractitioner: 
    managingOrganization : Organization = new Organization(); //Reference(Organization)
    link : Link[]=[];
}

export class HumanName{
    use : string="";
    text : string="";
    family : string="";
    given : string[]=[];
    prefixe : string[]=[];
    suffix : string[]=[];
    period : Period = new Period();

}


export class Address{
    use : string = "";
    type : string = "";
    text : string = "";
    line : string[]=[];
    city : string = "";
    district : string = "";
    state : string = "";
    postalCode : string = "";
    country : string = "";
    period : Period = new Period();
}


export class Coding{
    system : string = ""; //uri
    version : string = "";
    code : string = "";
    display : string = "";
    userSelected : boolean = false;
}

export class Attachement{
    contentType : string = "";
    language : string = "";
    data : Byte = 0;
    url : string = "";
    size : number = 0;
    hash : Byte = 0;
    title : string = "";
    creation : Date = new Date();
}

export class Contact {
    relationship : CodeableConcept[]=[];
    name : HumanName = new HumanName();
    telecom : ContactPoint[]=[]
    adress : Address = new Address();
    gender : string = "";
    organization : Organization = new Organization(); //Reference(Organization)
    period : Period = new Period();

}

export class ContactPoint{
    system : string = "";
    value : string = "";
    use : string = "";
    rank : number = 0;
    period : Period = new Period();
}

export class Organization{
    resourceType : string = "Organization";
    identifier : Identifier[]=[];
    active : boolean = false;
    type : CodeableConcept[]=[];
    name : string = "";
    alias : string[]=[];
    telecom : ContactPoint[]=[];
    address : Address[]=[];
    //partOf : Organization = new Organization();
    contact : ContactAutre = new ContactAutre();
    endpoint : Endpoint[]=[]; //Reference(Endpoint)
}



export class ContactAutre{
    purpose : ContactPoint = new ContactPoint();
    name : HumanName = new HumanName();
    telecom : ContactPoint[]=[];
    address : Address = new Address();
}

export class Endpoint{
    resourceType : string = "Endpoint";
    identifier : Identifier[]=[];
    status : string ="";
    connectionType : Coding = new Coding();
    name : string = "";
    managingOrganization : Organization = new Organization(); //Reference(Organization)
    contact : ContactPoint[]=[];
    period : Period = new Period();
    payloadType : CodeableConcept[]=[];
    payloadMimeType : string[]=[];
    address : string=""; //url
    header : string[]=[];
}

export class Communication{
    language : CodeableConcept = new CodeableConcept();
    preferred : boolean = false;
}

export class Link{
    //other : 
    type : string = "";
}

export class Parameters{
    resourceType="Parameters";
    parameter : Parameter[]=[];
}

export class Parameter{
    name : string ="";
    valueBase64Binary : Byte = 0;
    valueBoolean : boolean = false;
    valueCanonical : string = "";
    valueCode : string = "";
    valueDate : Date = new Date();
    valueDateTime : Date = new Date();
    valueDecimal : number = 0;
    valueId : string = "";
    //valueInstant : Time = new Time();
    valueInterger : number = 0;
    valueMarkdown : string = ""; //markdown
    valueOid : string = ""; //oid
    valuePositiveInt : number = 0;
    valueString : string = "";
    //valueTime : Time = new TimeRanges();
    valueUnsignedInt : number = 0;
    valueUri : string = ""; //uri
    valueUrl : string = ""; //url
    valueUuid : string = ""; //uuid;
    valueAddress : Address = new Address();
    valueAge : number = 0; //Age
    valueAnnotation : Annotation = new Annotation();
    valueAttachement : Attachement = new Attachement();
    valueCodeableConcept : CodeableConcept = new CodeableConcept();
    valueCoding : Coding = new Coding();
    valueContactPoint : ContactPoint = new ContactPoint();
    valueCount : number = 0;
    valueDistance : number = 0;
    valueDuration : number = 0;
    valueHumanName : HumanName = new HumanName();
    valueIdentifier : Identifier = new Identifier();
    valueMoney : Money = new Money;
    valuePeriod : Period = new Period;
    valueQuantity : Quantity = new Quantity();
    valueRange : Range = new Range();
    valueRatio : Ratio = new Ratio();
    valueReference : Reference = new Reference();
    valueSampleData : SampledData = new SampledData();
    valueSignature : Signature = new Signature();
    valueTiming : Timing = new Timing();
    valueContactDetail : ContactDetail = new ContactDetail();
    valueContributor : Contributor = new Contributor();
    valueDataRequirement : DataRequirement = new DataRequirement();
    valueExpression : Expression = new Expression();
    valueParameterDefinition : ParameterDefinition = new ParameterDefinition();
    valueRelatedArtifact : RelatedArtifact = new RelatedArtifact();
    valueTriggerDefinition : TriggerDefinition = new TriggerDefinition();
    valueUsageContext : UsageContext = new UsageContext();
    valueDosage : Dosage = new Dosage();
    valueMeta : Metadata = new Metadata();
    resource : Resource = new Resource();
    part : []=[];
}

export class Annotation{
    //authorReference :
    authorString : string = "";
    time : Date = new Date();
    text : string = ""; //markdown
}

export class Money{
    value : number = 0;
    currency : string ="";
}

export class Range{
    low : Quantity = new Quantity(); //Quantity(SimpleQuantity)
    high : Quantity = new Quantity(); //Quantity(SimpleQuantity)
}

export class Reference{
    reference : string = "";
    type : string = "";
    identifier : Identifier = new Identifier();
    display : string = "";
}

export class SampledData{
    origin : Quantity = new Quantity(); //Quantity(SimpleQuantity)
    period : number = 0;
    factor : number = 0;
    lowerLimit : number = 0;
    upperLimit : number = 0;
    dimensions : number = 0;
    data : string = "";
}

export class Signature{
    type : Coding[]=[];
    //when : Time = TimeRanges();
    //who : 
    //onBehalfOf : 
    targetFormat : string = "";
    sigFormat : string = "";
    data : Byte = 0;
}

export class Timing{
    
}

export class ContactDetail{

}

export class Contributor{

}

export class DataRequirement{

}

export class Expression{

}

export class ParameterDefinition{

}

export class RelatedArtifact{

}

export class TriggerDefinition{

}

export class UsageContext{

}

export class Resource{

}

export class Metadata{

}