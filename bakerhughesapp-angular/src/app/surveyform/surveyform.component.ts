import { SurveyDTO } from './../dtos/survey.dto';
import { SurveyService } from './../services/survey.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-surveyform',
  templateUrl: './surveyform.component.html',
  styleUrls: ['./surveyform.component.scss'],
})
export class SurveyformComponent {
  survey_depth: number;
  inc: number;
  azi: number;

  // dependencies injection (inject HttpClient, Router)
  constructor(private surveyService: SurveyService) {
    this.survey_depth = 0; // initialize value = gia tri ban dau
    this.inc = 0;
    this.azi = 0;
  }

  // submit button
  submitSurvey() {
    // get sensorOFfset from API
    const sensorOffset = 16;

    const surveyDTO: SurveyDTO = {
      id: 0,
      dp_length: 0,
      bit_depth: this.survey_depth + sensorOffset,
      survey_depth: this.survey_depth,
      inc: this.inc,
      azi: this.azi,
      totalseen: 0,
      burm: 0,
      bur30m: 0,
      incbit: 0,
      toolface: '',
      st: 0,
      ed: 0,
      totalslid: 0,
      slidseen: 0,
      slidunseen: 0,
    };

    // create new survey
    this.surveyService.insertSurvey(surveyDTO).subscribe({
      next: () => {
        // call to calculated survey api
        this.surveyService.getAllCalculatedSurveys();
        // reload khi create thanh cong
        window.location.reload();
      },
      complete: () => {
        this.surveyService.getAllCalculatedSurveys();
        window.location.reload();
      },
      error: (error: any) => {
        alert(`Cannot insert survey, error: ${error.error});
        }`);
      },
    });
  }

  // Clear all survey
  clearAllData() {
    this.surveyService.clearData().subscribe({
      next: () => {
        // update calculated surveys
        this.surveyService.getAllCalculatedSurveys();
        window.location.reload();
      },
      complete: () => {},
      error: (error: any) => {
        alert(`Cannot insert survey, error: ${error.error});
        }`);
      },
    });
  }
}
