import { SlidingDTO } from './../dtos/sliding.dto';
import { SurveyService } from './../services/survey.service';
import { Observable } from 'rxjs';
import { SurveyDTO } from './../dtos/survey.dto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slidingform',
  templateUrl: './slidingform.component.html',
  styleUrls: ['./slidingform.component.scss'],
})
export class SlidingformComponent {
  toolFace: string;
  st: number;
  ed: number;

  // constructor with dependencies injection
  constructor(private surveyService: SurveyService) {
    this.toolFace = '';
    this.st = 0;
    this.ed = 0;
  }

  //

  updateSurveyWithSlidingData() {
    console.log(`${this.toolFace} + ${this.st} + ${this.ed} `);

    const slidingDTO: SlidingDTO = {
      toolFace: this.toolFace,
      st: this.st,
      ed: this.ed,
    };
    // update sliding data
    this.surveyService.updateSliding(slidingDTO).subscribe({
      next: () => {
        // update calculated surveys
        this.surveyService.getAllCalculatedSurveys();
        // reload khi create thanh cong
        window.location.reload();
      },
      complete: () => {
        // update calculated surveys
        this.surveyService.getAllCalculatedSurveys();
        // reload khi create thanh cong
        window.location.reload();
      },
      error: (error: any) => {
        alert(`Cannot insert sliding, error: ${error.error});
        }`);
      },
    });
  }
}
