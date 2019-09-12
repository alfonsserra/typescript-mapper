import { Component, OnInit } from '@angular/core';
import { PatientData } from './model/patient.model';
import { deserialize, serialize } from './my-json-typescript-mapper';
import { PatientPathologyData } from './model/patient-pathology.model';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {
    this.doTestSerialize();
    this.doTestDeserialize();
  }

  public doTestSerialize() {
    const patient = new PatientData();
    patient.patientName = 'Pedro';

    const pathology = new PatientPathologyData();
    pathology.startDate = new Date();
    pathology.patientPathologyID = 1;
    patient.aPathologyList.push(pathology)
    const serialized = serialize(patient);
    console.log(serialized);
  }

  public doTestDeserialize() {
    let json = {
      PATIENTID:            12,
      PATIENTNAME:          'Pedro',
      PATIENTSURNAME:       'Arriaga',
      DOB:                  '12/12/1992',
      ACTIVE:               'Y',
      PATIENTPATHOLOGYLIST: [
        {
          PATIENTPATHOLOGYID: 1,
          PATIENTID:          1,
          STARTDATE:          '12/12/1992'
        }, {
          PATIENTPATHOLOGYID: 2,
          PATIENTID:          1,
          STARTDATE:          '12/12/1992'
        }
      ]
    };
    let patient = deserialize(PatientData, json);
    console.log(patient);
  }
}
