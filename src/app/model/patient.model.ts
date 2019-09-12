import numberCustomConverter from './custom-converter/number-converter';
import booleanCustomConverter from './custom-converter/boolean-converter';
import dateCustomConverter from './custom-converter/date-converter';
import { JsonProperty } from '../my-json-typescript-mapper';
import { PatientPathologyData } from './patient-pathology.model';

export class PatientData {

  public static GENDER_MALE = 'M';
  public static GENDER_FEMALE = 'F';
  public static GENDER_UNKNOWN = 'U';

  @JsonProperty({customConverter: numberCustomConverter, name: 'PATIENTID'})
  public patientID: number = undefined;

  @JsonProperty('PATIENTNAME')
  public patientName: string = undefined;

  @JsonProperty('PATIENTSURNAME')
  public patientSurname: string = undefined;

  @JsonProperty('SSN')
  public sSN: string = undefined;

  @JsonProperty('EXTERNALID')
  public externalID: string = undefined;

  @JsonProperty('IDENTITYCARD')
  public identityCard: string = undefined;

  @JsonProperty('NTS')
  public nTS: string = undefined;

  @JsonProperty('GENDER')
  public gender: string = undefined;

  @JsonProperty({customConverter: dateCustomConverter, name: 'DOB'})
  public dOB: Date = undefined;

  @JsonProperty('ADDRESS')
  public address: string = undefined;

  @JsonProperty('CITY')
  public city: string = undefined;

  @JsonProperty('STATE')
  public state: string = undefined;

  @JsonProperty('COUNTRY')
  public country: string = undefined;

  @JsonProperty('POSTALCODE')
  public postalCode: string = undefined;

  @JsonProperty('PHONE')
  public phone: string = undefined;

  @JsonProperty('EMAIL')
  public email: string = undefined;

  @JsonProperty('COMMENTS')
  public comments: string = undefined;

  @JsonProperty({customConverter: booleanCustomConverter, name: 'ACTIVE'})
  public active: boolean = undefined;

  @JsonProperty({clazz: PatientPathologyData, name: 'PATIENTPATHOLOGYLIST'})
  public aPathologyList: PatientPathologyData[] = [];
}

