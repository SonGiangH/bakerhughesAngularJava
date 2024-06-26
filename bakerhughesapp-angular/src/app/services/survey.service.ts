import { SlidingDTO } from './../dtos/sliding.dto';
import { SurveyDTO } from './../dtos/survey.dto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private apiUrl = 'http://localhost:8088/api/v1/surveys';
  private apiUrlDelete = 'http://localhost:8088/api/v1/surveys/delete';
  private apiUrlSliding = 'http://localhost:8088/api/v1/surveys/sliding';
  private apiUrlCalSurvey =
    'http://localhost:8088/api/v1/surveys/calculator-surveys';

  constructor(private http: HttpClient) {}

  // Ham create Survey trong service
  insertSurvey(SurveyDTO: SurveyDTO): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, SurveyDTO, { headers });
  }

  // Ham get all Survey trong service
  getAllSurveys(): Observable<any> {
    // get survey from api
    return this.http.get<SurveyDTO>(this.apiUrl);
  }

  // Ham get all calculated survey
  getAllCalculatedSurveys(): Observable<any> {
    return this.http.get<SurveyDTO>(this.apiUrlCalSurvey);
  }

  // Clear all data
  clearData(): Observable<any> {
    return this.http.delete<any>(this.apiUrlDelete);
  }

  // update surveys list whenver update sliding
  updateSliding(SlidingDTO: SlidingDTO): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrlSliding, SlidingDTO, { headers });
  }

  // delete survey by ID
  deleteSurveyByID(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8088/api/v1/surveys/${id}`);
  }

  // get survey by ID
  getSurveyById(id: number): Observable<any> {
    return this.http.get(`http://localhost:8088/api/v1/surveys/${id}`);
  }

  // update survey by Id
  updateSurveyById(SurveyDTO: SurveyDTO, id: number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(
      `http://localhost:8088/api/v1/surveys/${id}`,
      SurveyDTO,
      { headers }
    );
  }
}
