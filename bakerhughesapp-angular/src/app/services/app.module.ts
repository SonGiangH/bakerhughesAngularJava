import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../home/home.component';
import { SurveyformComponent } from '../surveyform/surveyform.component';
import { SlidingformComponent } from '../slidingform/slidingform.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SurveyService } from './survey.service';
import { AppComponent } from '../app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { EditSurveyComponentComponent } from '../edit-survey-component/edit-survey-component.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SteermodeComponent } from '../steermode/steermode.component';
import { HoldmodeComponent } from '../holdmode/holdmode.component';

@NgModule({
  declarations: [
    HomeComponent,
    SurveyformComponent,
    SlidingformComponent,
    EditSurveyComponentComponent,
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    SteermodeComponent,
    HoldmodeComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [SurveyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
