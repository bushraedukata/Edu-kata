import React, { useState } from 'react';

const questions = [
  {
    question: "What does Scrooge represent in *A Christmas Carol*?",
    options: ["Greed", "Love", "Charity", "Joy"],
    answer: "Greed",
    skill: "Analyse"
  },
  {
    question: "In *Macbeth*, who says 'Out, damned spot!'?",
    options: ["Macbeth", "Lady Macbeth", "Banquo", "Duncan"],
    answer: "Lady Macbeth",
    skill: "Infer"
  },
  {
    question: "Which theme is central to *An Inspector Calls*?",
    options: ["Social Responsibility", "Love", "War", "Freedom"],
    answer: "Social Responsibility",
    skill: "Contextual Understanding"
  }
];

export default function StudentQuiz() {
  const [username, setUsername] = useState('');
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if(option === questions[currentQ].answer){
      setScore(score + 1);
    }
    const nextQ = currentQ + 1;
    if(nextQ < questions.length){
      setCurrentQ(nextQ);
    } else {
      alert(`Quiz complete, ${username}! Your score: ${score + 1}/${questions.length}`);
    }
  }

  if(!startQuiz){
    return (
      <div>
        <h2>Enter your username to start:</h2>
        <input 
          type="text" 
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => setStartQuiz(true)} disabled={!username}>Start Quiz</button>
      </div>
    )
  }

  return (
    <div>
      <h3>{questions[currentQ].question}</h3>
      {questions[currentQ].options.map(option => (
        <button key={option} onClick={() => handleAnswer(option)} style={{display: 'block', margin: '10px'}}>{option}</button>
      ))}
    </div>
  )
}
