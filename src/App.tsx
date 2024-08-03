import { useState } from "react";

interface FlashCard {
  question: string;
  answer: string;
}

const flashCards: FlashCard[] = [
  {
    question: "What is the command to open a new file in nvim?",
    answer: ":e filename",
  },
  {
    question: "How do you exit nvim?",
    answer: ":q",
  },
  {
    question: "What is the command to save a file in nvim?",
    answer: ":w",
  },
  {
    question: "How do you undo a change in nvim?",
    answer: "u",
  },
  {
    question: "What is the command to redo a change in nvim?",
    answer: "Ctrl + r",
  },
];

const FlashCardApp = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % flashCards.length);
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">nvim Flash Cards</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <p className="text-lg font-bold mb-2">
          {flashCards[currentCard].question}
        </p>
        {showAnswer && (
          <p className="text-lg font-bold mb-2">
            {flashCards[currentCard].answer}
          </p>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleShowAnswer}
        >
          Show Answer
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
          onClick={handleNextCard}
        >
          Next Card
        </button>
      </div>
    </div>
  );
};

export default FlashCardApp;