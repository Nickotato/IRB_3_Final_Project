import React, { useState, useEffect } from "react";
import characters from "../data/characters";
import questions from "../data/questions";
import "./Questions.css";

const Game = () => {
  const shuffleQuestions = (questions) => {
    return Object.keys(questions)
      .map((key) => ({ key, question: questions[key] }))
      .sort(() => Math.random() - 0.5)
      .slice(0, 20);
  };

  const [randomQuestions, setRandomQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [bestGuess, setBestGuess] = useState("");
  const [bestGuessScore, setBestGuessScore] = useState(0);
  const [finalCharacter, setFinalCharacter] = useState("");
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    setRandomQuestions(shuffleQuestions(questions));
  }, []);

  useEffect(() => {
    if (currentQuestionIndex >= randomQuestions.length) {
      calculateFinalAnswer();
    }
  }, [currentQuestionIndex]);

  const updateScores = (answer) => {
    if (currentQuestionIndex >= randomQuestions.length) return;
    const currentQuestionKey = randomQuestions[currentQuestionIndex].key;

    Object.keys(characters).forEach((character) => {
      const attributeValue =
        characters[character].attributes[currentQuestionKey];
      if (attributeValue !== undefined) {
        if (answer === "yes" && attributeValue) characters[character].score++;
        else if (answer === "no" && !attributeValue)
          characters[character].score++;
        else if (answer === "maybe") characters[character].score++;
      }
    });

    updateBestGuess();
  };

  const updateBestGuess = () => {
    let maxScore = -1;
    let guess = "";

    Object.keys(characters).forEach((character) => {
      if (characters[character].score > maxScore) {
        maxScore = characters[character].score;
        guess = character;
      }
    });

    setBestGuess(guess);
    setBestGuessScore(maxScore);
  };

  const calculateFinalAnswer = () => {
    let maxScore = -1;
    let final = "";

    Object.keys(characters).forEach((character) => {
      if (characters[character].score > maxScore) {
        maxScore = characters[character].score;
        final = character;
      }
    });

    setFinalCharacter(final);
  };

  const handleAnswer = (answer) => {
    updateScores(answer);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const renderCharacterList = () => {
    return Object.keys(characters).map((character) => (
      <li key={character} className="character-item">
        <div
          className="character-header"
          onClick={(e) => e.currentTarget.nextSibling.classList.toggle("open")}
        >
          <span>{character}</span>
          <span>▼</span>
        </div>
        <div className="character-details">
          <strong>Attributes:</strong>
          <ul>
            {Object.entries(characters[character].attributes)
              .filter(([_, value]) => value)
              .map(([key]) => (
                <li key={key}>{key}</li>
              ))}
          </ul>
        </div>
      </li>
    ));
  };

  return (
    <div className="layout">
      <div className="container">
        <h1>
          "The Lovely and the Lost" <br />
          20 Questions
        </h1>

        {currentQuestionIndex < randomQuestions.length ? (
          <div id="question-container">
            <p id="question">
              {randomQuestions[currentQuestionIndex]?.question}
            </p>
            <p id="question-number">
              Question {currentQuestionIndex + 1} of 20
            </p>
            <button className="answer-btn" onClick={() => handleAnswer("yes")}>
              Yes
            </button>
            <button className="answer-btn" onClick={() => handleAnswer("no")}>
              No
            </button>
            <button
              className="answer-btn"
              onClick={() => handleAnswer("maybe")}
            >
              Maybe
            </button>
          </div>
        ) : (
          <div id="result-container">
            <h2>Is this your character?</h2>
            <p id="final-character">{finalCharacter}</p>
          </div>
        )}

        <button id="toggle-panel-btn" onClick={() => setShowPanel(!showPanel)}>
          {showPanel ? "Hide Extra Info" : "Show Extra Info"}
        </button>
      </div>

      <div id="extra-info-panel" className={showPanel ? "show" : ""}>
        <h3>Current Best Guess</h3>
        <p id="best-guess">{bestGuess || "No guess yet"}</p>
        <p id="best-guess-score">Score: {bestGuessScore}</p>
        <h3>Possible Characters</h3>
        <ul id="character-list">{renderCharacterList()}</ul>
      </div>
    </div>
  );
};

export default Game;
