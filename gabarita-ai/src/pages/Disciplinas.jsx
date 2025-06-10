"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TelaInicial from "../components/TelaInicial";
import TelaQuestoes from "../components/TelaQuestoes";
import TelaResultados from "../components/TelaResultados";
import { questions, subjectInfo, levelDefinitions } from "../data/testData";

const Disciplinas = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(undefined)
  );
  const [showResults, setShowResults] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [activeTab, setActiveTab] = useState("geral");

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(Array(questions.length).fill(undefined));
    setShowResults(false);
    setTestStarted(false);
    setActiveTab("geral");
  };

  const backToStart = () => {
    setShowResults(false);
    setTestStarted(false);
    setActiveTab("geral");
  };

  if (!testStarted) {
    return (
      <TelaInicial
        onStartTest={() => setTestStarted(true)}
        questions={questions}
        subjectInfo={subjectInfo}
        levelDefinitions={levelDefinitions}
      />
    );
  }

  if (showResults) {
    return (
      <TelaResultados
        selectedAnswers={selectedAnswers}
        questions={questions}
        subjectInfo={subjectInfo}
        levelDefinitions={levelDefinitions}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onResetTest={resetTest}
        onBackToStart={backToStart}
      />
    );
  }

  return (
    <TelaQuestoes
      currentQuestion={currentQuestion}
      questions={questions}
      selectedAnswers={selectedAnswers}
      subjectInfo={subjectInfo}
      onAnswerSelect={handleAnswerSelect}
      onNext={handleNext}
      onPrevious={handlePrevious}
    />
  );
};

export default Disciplinas;
