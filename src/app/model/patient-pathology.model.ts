import { JsonProperty } from '../my-json-typescript-mapper';
import numberCustomConverter from './custom-converter/number-converter';
import dateCustomConverter from './custom-converter/date-converter';

export class PatientPathologyData {

  @JsonProperty({customConverter: numberCustomConverter, name: 'PATIENTPATHOLOGYID'})
  public patientPathologyID: number = undefined;

  @JsonProperty({customConverter: numberCustomConverter, name: 'PATIENTID'})
  public patientID: number = undefined;

  @JsonProperty({customConverter: dateCustomConverter, name: 'STARTDATE'})
  public startDate: Date = undefined;

  @JsonProperty({customConverter: dateCustomConverter, name: 'ENDDATE'})
  public endDate: Date = undefined;

}

