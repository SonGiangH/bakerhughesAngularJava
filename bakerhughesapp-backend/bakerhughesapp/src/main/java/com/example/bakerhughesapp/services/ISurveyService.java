package com.example.bakerhughesapp.services;


import com.example.bakerhughesapp.dtos.SurveyDTO;
import com.example.bakerhughesapp.models.Sliding;
import com.example.bakerhughesapp.models.Survey;

import java.util.List;

public interface ISurveyService {
    // create new survey
    Survey createSurvey(SurveyDTO surveyDTO);

    // get all surveys
    List<Survey> getAllSurveys();

    // Update existing survey
    Survey updateSurvey(long surveyId, SurveyDTO surveyDTO);

    // delete survey by Id
    void deleteSurveyById(long surveyId);

    Survey getSurveyById(long id);

    void deleteAllSurveys();

    void truncateMyTable();

    List<Survey> createSurveyList(List<SurveyDTO> surveyDTOs);

    Sliding updateSliding(Sliding sliding);
}
