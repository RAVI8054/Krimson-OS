import React, { useState } from "react";
import { PARENT_DATA } from "../../../data/parentData";
import SurveyList from "../../../components/dashboard/parent/FeedbackSurvey/SurveyList";
import SurveyForm from "../../../components/dashboard/parent/FeedbackSurvey/SurveyForm";

const FeedbackSurvey = () => {
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [responses, setResponses] = useState({});
  const [comments, setComments] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  // Get surveys from parentData
  const surveys = PARENT_DATA.feedbackSurvey.surveys;

  const handleRatingClick = (questionId, rating) => {
    setResponses({
      ...responses,
      [questionId]: rating,
    });
  };

  const handleCommentChange = (questionId, value) => {
    setComments({
      ...comments,
      [questionId]: value,
    });
  };

  const handleSubmitSurvey = () => {
    console.log("Submitting survey:", selectedSurvey.id);
    console.log("Responses:", responses);
    console.log("Comments:", comments);
    // API call will be added here
    alert("Survey submitted! This will be sent to the Feedback Engine API.");
    setSelectedSurvey(null);
    setResponses({});
    setComments({});
  };

  if (selectedSurvey) {
    return (
      <SurveyForm
        survey={selectedSurvey}
        onBack={() => setSelectedSurvey(null)}
        responses={responses}
        onRatingClick={handleRatingClick}
        comments={comments}
        onCommentChange={handleCommentChange}
        onSubmit={handleSubmitSurvey}
      />
    );
  }

  return (
    <SurveyList
      surveys={surveys}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onSelectSurvey={setSelectedSurvey}
    />
  );
};

export default FeedbackSurvey;
