import { Byte } from "@angular/compiler/src/util";


export class Medication {
    resourceType:string="Medication";
    identifier:Identifier[]=[];
    code:CodeableConcept=new CodeableConcept();
    status:string="";
    manufacturer: string = ""; //Reference(Organization)
    form:CodeableConcept=new CodeableConcept();
    amount:Ratio=new Ratio();
    ingredient: Ingredient[]=[];
    batch:Batch=new Batch();
}

export class Identifier{
    use : string = "official";
    type : CodeableConcept = new CodeableConcept();
    system : string = ""; //uri
    value : string = "none";
    period : Period = new Period();
    assigner : string = ""; //Reference(Organization)
}

export class Period{
    start:Date=new Date();
    end:Date=new Date();
}

export class CodeableConcept {
    coding:Coding[]=[];
    text:string="none";
}

export class Ingredient {
    itemCodeableConcept:CodeableConcept=new CodeableConcept();
    itemReference : string = ""; //Reference(Substance|Medication)
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
    partOf : string = ""; //Reference(MedicationAdministration|Procedure)
    status:string="";
    statusReason:CodeableConcept[]=[];
    category:CodeableConcept=new CodeableConcept();
    medicationCodeableConcept:CodeableConcept=new CodeableConcept();
    medicationReference: string = ""; //Reference(Medication)
    subject : string = ""; //Reference(Patient|Group) 
    context : string = ""; //Reference(Encounter|EpisodeOfCare)
    supportingInformation: string[]=[];//Reference(Any) 
    effectiveDateTime:Date=new Date();
    effectivePeriod:Period=new Period();
    performer:Performer[]=[];
    reasonCode:CodeableConcept[]=[];
    reasonreference : string[]=[]; //Reference(Condition|Observation|DiagnosticReport)
    request : string = ""; //Reference(MedicationRequest) 
    device : string = ""; //Reference(Device)
    note:Annotation[]=[];
    dosage:Dosage=new Dosage();
    eventHistory : string[]=[]; //Reference(Provenance)
}

export class Performer{
    function:CodeableConcept=new CodeableConcept();
    actor: string = ""; //Reference
}


export class Dosage{
    text:string="";
    site:CodeableConcept=new CodeableConcept();
    route:CodeableConcept=new CodeableConcept();
    method:CodeableConcept=new CodeableConcept();
    dose : string = ""; //Reference
    rateRatio:Ratio=new Ratio();
    rateQuantity : string = ""; //Reference
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
    photo : Attachment[]=[];
    contact : Contact[]=[];
    communication : Communication[]=[];
    generalPractitioner: string[]=[]; //Reference
    managingOrganization : string=""; //Reference
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

export class Attachment{
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
    organization : string = ""; //Reference(Organization)
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
    partOf : string = ""; //Reference(Organazation)
    contact : ContactAutre = new ContactAutre();
    endpoint : string[]=[]; //Reference(Endpoint)
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
    managingOrganization : string = ""; //Reference(Organization)
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
    other : string =""; //Reference(Patient|RelatedPerson)
    type : string = "";
}

export class Parameters{
    resourceType : string="Parameters";
    parameter : Parameter[]=[];
}

export class Parameter{
    name : string ="";
    valueBase64Binary : Byte = 0;
    valueBoolean : boolean = false;
    valueCanonical : string = "";
    valueCode : string = "";
    valueDate : string="";
    valueDateTime : Date = new Date();
    valueDecimal : number = 0;
    valueId : string = "";
    valueInstant : Date = new Date();
    valueInterger : number = 0;
    valueMarkdown : string = ""; //markdown
    valueOid : string = ""; //oid
    valuePositiveInt : number = 0;
    valueString : string = "";
    valueTime : Date = new Date();
    valueUnsignedInt : number = 0;
    valueUri : string = ""; //uri
    valueUrl : string = ""; //url
    valueUuid : string = ""; //uuid;
    valueAddress : Address = new Address();
    valueAge : number = 0; //Age
    valueAnnotation : Annotation = new Annotation();
    valueAttachment : Attachment = new Attachment();
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
    authorReference : string = ""; //Reference(Practitioner|Patient|RelatedPerson|Organization)
    authorString : string = "unknown";
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
    display : string = "none";
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
    when : Date = new Date();
    who : string = ""; //Reference(Practitioner|PractitionerRole|RelatedPerson|Patient|Device|Organization)
    onBehalfOf : string = ""; //Reference(Practitioner|PractitionerRole|RelatedPerson|Patient|Device|Organization)
    targetFormat : string = "";
    sigFormat : string = "";
    data : Byte = 0;
}

export class Timing{
    event : Date[]=[];
    repeat : Repeat = new Repeat();
    code : CodeableConcept = new CodeableConcept();   
}

export class Repeat{
    boundsDuration : number = 0;
    boundsRange : Range = new Range();
    boundsPeriod : Period = new Period();
    count : number = 0;
    countMax : number = 0;
    duration : number = 0;
    durationMax : number = 0;
    durationUnit : string = "";
    frequency : number = 0;
    frequencyMax : number = 0;
    period : number = 0;
    periodMax : number = 0;
    periodUnit : number = 0;
    dayOfWeek : string[]=[];
    timeOfDay : Date[]=[]; 
    when : string[]=[];
    offset : number = 0;
}

export class Contributor{
    type : string = "";
    name : string = "";
    contact : ContactDetail[]=[];
}

export class DataRequirement{
    type : string = "";
    //profile : 
    subjectCodeableConcept : CodeableConcept = new CodeableConcept();
    //subjectReference : 
    mustSupport : string[]=[];
    //codeFilter : 
    //dataFilter : 
    limit : number = 0;
    //sort :
}

export class Expression{
    description : string = "";
    name : string = ""; //id
    language : string = "";
    expression : string = "";
    reference : string = "";
}

export class ParameterDefinition{
    name : string = "";
    use : string = "";
    min : number = 0;
    max : string = "";
    documentation : string = "";
    type : string = "";
    //profile : 
}

export class RelatedArtifact{
   type : string = "";
   label : string = "";
   display : string = "";
   citation : string = "";
   document : Attachment = new Attachment();
   resource : any; 
}

export class TriggerDefinition{
    type : string = "";
    name : string = "";
    timingTiming : Timing = new Timing();
  //timingReference : 
    timingDate : Date = new Date();
    timingDateTime : Date = new Date();
    data : DataRequirement[]=[];
    condition : Expression = new Expression();

}

export class UsageContext{
    code : Coding = new Coding();
    valueCodeableConcept : CodeableConcept = new CodeableConcept();
    valueQuantity : Quantity = new Quantity();
    valueRange : Range = new Range();
    valueReference : any; //PlanDefinition ou ResearchStudy ou InsurancePlan ou HealthcareService ou Groupe ou Location ou Organization
}

export class Resource{
    id : string = "";
    meta : Metadata = new Metadata();
}

export class Metadata{
    versionId : string = "";
    lastUpdated : Date = new Date();
    source : string = "";
    //profile :
    security : Coding[]=[];
    tag : Coding[]=[];
}

export class TabContent{
    tab:any[]=[];
}

export class Questionnaire {
    //hellooooooo
    id:string="";
    resourceType: string="Questionnaire";
    url: string="";
    identifier:Identifier[]=[];
    version: string="";
    name: string="";
    title: string="";
    //"derivedFrom" 
    status: string="";
    experimental:boolean = true;
    subjectType:string[]=[];
    date: Date =new Date();
    publisher: string="";
    contact: ContactDetail[]=[];
    description: string = "";
    useContext: UsageContext[]=[];
    jurisdiction: CodeableConcept[]=[];
    purpose: string="";
    copyright: string="";
    approvalDate: Date =new Date();
    lastReviewDate: Date =new Date();
    effectivePeriod: Period= new Period();
    code: Coding[]=[];
    item: Item[]=[];
    enableBehavior: string="";
    required: boolean = true;
    repeats: boolean = true;
    readOnly: boolean = true;
    maxLength: number=0;
    //answerValueSet: 
    answerOption: AnswerOption[]=[];
    initial: Initial[]=[];

}

export class ContactDetail{
    name: string="";
    telecom: ContactPoint[]=[];
}

export class Item{
    linkId : string="";
    definition : string="";
    code : Coding[]=[];
    prefix : string="";
    text : string="";
    type : string="";
    enableWhen: EnableWhen[]=[];
}
export class EnableWhen{
    question : string="";
    operator : string="";
    answerBoolean : boolean = true;
    answerDecimal : number=0;
    answerInteger : number=0;
    answerDate : Date =new Date();
    answerDateTime : Date =new Date();
    answerTime : Date =new Date();
    answerString :string="";
    answerCoding : Coding=new Coding();
    answerQuantity : number=0;
    answerReference : string = ""; //Reference(Any)
}
export class AnswerOption{
    valueInteger : number=0;
    valueDate : Date =new Date();
    valueTime : Date =new Date();
    valueString : string="";
    valueCoding : Coding=new Coding();
    valueReference : string = "";  
    initialSelected : boolean = true;
}

export class Initial{
    valueBoolean : boolean = true;
    valueDecimal :  number=0;
    valueInteger : number=0;
    valueDate : Date =new Date();
    valueDateTime : Date =new Date();
    valueTime : Date =new Date();
    valueString : string="";
    valueUri : string="";
    valueAttachment : Attachment =new Attachment ();
    valueCoding : Coding=new Coding();
    valueQuantity : number=0;
    valueReference : string = ""; //Reference(Any)
}

export class QuestionnaireResponse {
    resourceType : string="QuestionnaireResponse";
    // from Resource: id; meta; implicitRules; and language
    // from DomainResource: text; contained; extension; and modifierExtension
    identifier :  string ="" ; // Unique id for this set of answers
    basedOn :  string[]=[]; //Reference(CarePlan|ServiceRequest) ; // Request fulfilled by this QuestionnaireResponse
    partOf :  string[]=[]; //Reference(Observation|Procedure) ; // Part of this action
    questionnaire :  string="" ; // Form being answered
    status : string =""; // R!  in-progress | completed | amended | entered-in-error | stopped
    subject :  Reference = new Reference(); //Reference(Any) ; // The subject of the questions
    encounter :  string = ""; //Reference(Encounter) ; // Encounter created as part of
    authored :Date =new Date(); // Date =new Date() the answers were gathered
    author :  string = ""; //Reference(Device|Practitioner|PractitionerRole|Patient|RelatedPerson|Organization) ; // Person who received and recorded the answers
    source : Reference=new Reference(); //Reference(Patient|Practitioner|PractitionerRole|RelatedPerson) ; // The person who answered the questions
    item :ItemR[]=[];
}
export class ItemR{
    linkId : string ="";
    definition : string =""; 
    text : string ="";
    answer : Answer[]=[];
}
export class  Answer{
    valueBoolean: boolean = false;
    valueDecimal : number =0;
    valueInteger : number =0;
    valueString: string ="";
}
export class Task{
    resourceType : string="Task";
    // from Resource: id; meta; implicitRules; and language
    // from DomainResource: text; contained; extension; and modifierExtension
    identifier :  Identifier[] = [] // Task Instance Identifier
    //instantiatesCanonical : { canonical(ActivityDefinition) }; // Formal definition of task
    instantiatesUri : string=""; // Formal definition of task
    //basedOn : [{ Reference(Any) }]; // Request fulfilled by this task
    groupIdentifier :  Identifier = new Identifier(); // Requisition or grouper id
    //partOf : [{ Reference(Task) }]; // Composite task
    status : string="requested"; // R!  draft | requested | received | accepted | +
    statusReason : CodeableConcept = new CodeableConcept(); // Reason for current status
    businessStatus : CodeableConcept = new CodeableConcept(); // E.g. Specimen collected; IV prepped
    intent : string="unknown"; // R!  unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option
    priority : string=""; // routine | urgent | asap | stat
    code : CodeableConcept = new CodeableConcept(); // Task Type
    description : string=""; // Human-readable explanation of task
    //focus : { Reference(Any) }; // What task is acting on
    //for : { Reference(Any) }; // Beneficiary of the Task
    //encounter : { Reference(Encounter) }; // Healthcare event d: string=""ng which this task originated
    executionPeriod : Period = new Period(); // Start and end time of execution
    authoredOn : Date = new Date();// C? Task Creation Date
    lastModified : Date = new Date(); // C? Task Last Modified Date
    //requester : { Reference(Device|Organization|Patient|Practitioner|
    //PractitionerRole|RelatedPerson) }; // Who is asking for task to be done
    performerType : CodeableConcept[] = []; // Requested performer
    //owner : { Reference(Practitioner|PractitionerRole|Organization|CareTeam|
    //HealthcareService|Patient|Device|RelatedPerson) }; // Responsible individual
    //location : { Reference(Location) }; // Where task occurs
    reasonCode : CodeableConcept = new CodeableConcept();// Why task is needed
    //reasonReference : { Reference(Any) }; // Why task is needed
    //insurance : [{ Reference(Coverage|ClaimResponse) }]; // Associated insurance coverage
    note :  Annotation[]=[]; // Comments made about the task
    //relevantHistory : [{ Reference(Provenance) }]; // Key events in history of the Task
    restriction : Restriction=new Restriction();
    input : Input[]=[]
    output : Output[]=[];
}
      
export class Restriction{ // Constraints on fulfillment tasks
    repetitions: number = 1; // How many times to repeat
    period: Period = new Period();// When fulfillment sought
    //recipient : [{ Reference(Patient|Practitioner|PractitionerRole|
    //RelatedPerson|Group|Organization) }] // For whom is fulfillment sought?
}
     
export class Input{ // Information used to perform task
    type : CodeableConcept = new CodeableConcept(); // R!  Label for the input
    // value[x]: Content to use in performing the task. One of these 50:
    valueBase64Binary : Byte = 0;
    valueBoolean : boolean = false;
    valueCanonical : string = "";
    valueCode : string="";
    valueDate : Date = new Date();
    valueDateTime : Date = new Date();
    valueDecimal : number = 0;
    valueId : string = "";
    valueInstant : Date = new Date();
    valueInteger : number = 0;
    valueMarkdown : string="";
    valueOid : string="";
    valuePositiveInt : number = 0;
    valueString : string="";
    valueTime : Date = new Date();
    valueUnsignedInt : number = 0;
    valueUri: string="";
    valueUrl : string="";
    valueUuid : string="";
    valueAddress: Address = new Address();
    valueAge : number = 0;
    valueAnnotation : Annotation = new Annotation();
    valueAttachment : Attachment = new Attachment();
    valueCodeableConcept: CodeableConcept = new CodeableConcept();
    valueCoding : Coding = new Coding();
    valueContactPoint : ContactPoint = new ContactPoint();
    valueCount : number = 0;
    valueDistance : number = 0;
    valueDuration : number = 0;
    valueHumanName : HumanName = new HumanName();
    valueIdentifier :  Identifier = new Identifier();
    valueMoney : Money = new Money;
    valuePeriod : Period = new Period();
    valueQuantity : Quantity = new Quantity();
    valueRange : Range = new Range();
    valueRatio : Ratio = new Ratio();
    valueReference : Reference = new Reference();
    valueSampledData : SampledData = new SampledData();
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
}
    
export class Output{
    type : CodeableConcept = new CodeableConcept(); // R!  Label for output
    // value[x]: Result of output. One of these 50:
    valueBase64Binary : Byte = 0;
    valueBoolean : boolean = false;
    valueCanonical : string = "";
    valueCode : string="";
    valueDate : Date = new Date();
    valueDateTime : Date = new Date();
    valueDecimal : number = 0;
    valueId : string = "";
    valueInstant : Date = new Date();
    valueInteger : number = 0;
    valueMarkdown : string="";
    valueOid : string="";
    valuePositiveInt : number = 0;
    valueString : string="";
    valueTime : Date = new Date();
    valueUnsignedInt : number = 0;
    valueUri : string="";
    valueUrl : string="";
    valueUuid : string="";
    valueAddress : Address = new Address();
    valueAge : number = 0;
    valueAnnotation : Annotation = new Annotation();
    valueAttachment : Attachment = new Attachment();
    valueCodeableConcept : CodeableConcept = new CodeableConcept();
    valueCoding : Coding = new Coding();
    valueContactPoint : ContactPoint = new ContactPoint();
    valueCount :number = 0;
    valueDistance : number = 0;
    valueDuration : number = 0;
    valueHumanName : HumanName = new HumanName();
    valueIdentifier :  Identifier = new Identifier();
    valueMoney : Money = new Money;
    valuePeriod :  Period = new Period();
    valueQuantity :  Quantity = new Quantity();
    valueRange : Range = new Range();
    valueRatio : Ratio = new Ratio();
    valueReference : Reference = new Reference();
    valueSampledData : SampledData = new SampledData();
    valueSignature : Signature = new Signature();
    valueTiming : Timing = new Timing();
    valueContactDetail :ContactDetail = new ContactDetail();
    valueContributor : Contributor = new Contributor();
    valueDataRequirement : DataRequirement = new DataRequirement();
    valueExpression : Expression = new Expression();
    valueParameterDefinition : ParameterDefinition = new ParameterDefinition();
    valueRelatedArtifact : RelatedArtifact = new RelatedArtifact();
    valueTriggerDefinition : TriggerDefinition = new TriggerDefinition();
    valueUsageContext :  UsageContext = new UsageContext();
    valueDosage : Dosage = new Dosage();
    valueMeta : Metadata = new Metadata();
}