import { SurveyService } from './../services/survey.service';
import { SurveyDTO } from './../dtos/survey.dto';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  surveys: SurveyDTO[] = [];

  constructor(private surveyService: SurveyService) {}

  // Load component xong thuc hien getAll() ngay
  ngOnInit(): void {
    this.getAllCalculateSurveys();
  }

  // get all survey
  getAll() {
    this.surveyService.getAllSurveys().subscribe({
      next: (response: any) => {
        // Xu ly ket qua khi insert thanh cong
        this.surveys = response.data.map((survey: any) => {
          return {
            id: survey.id,
            dp_length: survey.dpLength,
            bit_depth: survey.bitDepth,
            survey_depth: survey.surveyDepth,
            inc: survey.inc,
            azi: survey.azi,
            totalseen: survey.totalSeen,
            burm: survey.burm,
            bur30m: survey.bur30m,
            incbit: survey.incBit,
            toolface: survey.toolFace,
            st: survey.st,
            ed: survey.ed,
            totalslid: survey.totalSlid,
            slidseen: survey.slidSeen,
            slidunseen: survey.slidUnseen,
          };
        });
      },
      complete: () => {},
      error: (error: any) => {
        alert(`Cannot insert survey, error: ${error.error});
        }`);
      },
    });
  }

  // get all calculated survey
  getAllCalculateSurveys() {
    this.surveyService.getAllCalculatedSurveys().subscribe({
      next: (response: any) => {
        // Xu ly ket qua khi insert thanh cong
        this.surveys = response.data.map((survey: any) => {
          return {
            id: survey.id,
            dp_length: survey.dpLength,
            bit_depth: survey.bitDepth,
            survey_depth: survey.surveyDepth,
            inc: survey.inc,
            azi: survey.azi,
            totalseen: survey.totalSeen,
            burm: survey.burm,
            bur30m: survey.bur30m,
            incbit: survey.incBit,
            toolface: survey.toolFace,
            st: survey.st,
            ed: survey.ed,
            totalslid: survey.totalSlid,
            slidseen: survey.slidSeen,
            slidunseen: survey.slidUnseen,
          };
        });
      },
      complete: () => {},
      error: (error: any) => {
        alert(`Cannot insert survey, error: ${error.error});
        }`);
      },
    });
  }

  // delete survey by ID
  deleteSurvey(id: number) {
    this.surveyService.deleteSurveyByID(id).subscribe({
      next: (response: any) => {
        console.log('Survey deleted successfully:', response);
        this.surveyService.getAllSurveys;
      },
      complete: () => {
        this.surveyService.getAllSurveys;
      },
      error: (error: any) => {
        alert(`Cannot delete survey, error: ${error.error});
        }`);
      },
    });
  }
}
