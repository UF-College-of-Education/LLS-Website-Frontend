import React, { useState, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import AvatarFeedback from './AvatarFeedback';
import ReactGA from 'react-ga4';

const ItemTypes = {
  TEXT: 'text',
};

interface DragItem {
  id: string;
  text: string;
  type: string;
}

// 'James Message content with highlighted sections
const letterSections = [
  { id: 'reflection', text: "validate their feelings or concerns", type: 'draggable', color: 'bg-purple-200' },
  { id: 'separator1', text: '', type: 'separator' },
  { id: 'separator2', text: '', type: 'separator' },
  { id: 'understanding', text: "express affection or love verbally or nonverbally ", type: 'draggable', color: 'bg-blue-200' },
  { id: 'separator3', text: '', type: 'separator' },
  { id: 'separator4', text: '', type: 'separator' },
  { id: 'verification', text: "listen responsively ", type: 'draggable', color: 'bg-red-200' },
  { id: 'separator5', text: '', type: 'separator' }, // New separator
  { id: 'separator6', text: '', type: 'separator' },
];

const questions = [
  {
    id: 'understanding',
    text: " When your loved one shares difficult feelings they are experiencing, like sadness or fear, when you __________ by saying something like 'I can see why you feel that way,' they will feel supported and more comfortable sharing their feelings in the future.",
    correctAnswer: "validate their feelings or concerns",
    color: 'border-purple-400'
  },
  {
    id: 'reflection',
    text: 'When your loved one states why they do not want to talk about an issue, they will feel more understood and supported when you __________ by responding with a question or reflecting on what they said to better understand their concern.',
    correctAnswer: 'listen responsively ',
    color: 'border-red-400'
  },
  {
    id: 'verification',
    text: 'When your loved one is struggling to be honest or resistant to dialoguing about a topic, you can ______ with a kind word or gentle touch to foster their sense of togetherness, which can help them feel more willing to talk openly. ',
    correctAnswer: "express affection or love verbally or nonverbally ",
    color: 'border-blue-400'
  }
];

interface DropZoneProps {
  question: typeof questions[0];
  droppedText: string | null;
  onDrop: (questionId: string, text: string) => void;
  isCorrect: boolean | null;
}

const DropZone: React.FC<DropZoneProps> = ({ question, droppedText, onDrop, isCorrect }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.TEXT,
    drop: (item: DragItem) => {
      onDrop(question.id, item.text);
    },
  });

  return (
    <div
      ref={drop}
      className={`min-h-24  p-4 border-2 border-dashed rounded-lg transition-all duration-200 ${
        droppedText 
          ? `bg-gray-50 ${question.color} border-solid` 
          : 'border-gray-300 hover:border-gray-400'
      }`}
    >
      <div className="text-md font-medium text-gray-700 mb-2">
        {question.text}
      </div>
      {droppedText && (
        <div className="flex items-start gap-2">
          <div className="flex-1 text-sm bg-white p-2 rounded border">
            {droppedText}
          </div>
          {isCorrect !== null && (
            <div className="flex-shrink-0">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

interface DraggableTextProps {
  section: typeof letterSections[0];
  isDragged: boolean;
}



const DraggableText: React.FC<DraggableTextProps> = ({ section, isDragged }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TEXT,
    item: { id: section.id, text: section.text, type: ItemTypes.TEXT },
    canDrag: section.type === 'draggable',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (section.type === 'separator') {
    return <div className="my-4"></div>; // Adds a line space
  }

  return (
    <span
      ref={drag}
      className={`inline cursor-move transition-all duration-200 p-5 text-xl rounded mb-2 ${
        isDragged 
          ? 'opacity-40 bg-gray-200' 
          : isDragging 
            ? 'opacity-60 scale-105' 
            : `${section.color} hover:shadow-md`
      }`}
    >
      {section.text}{' '}
    </span>
  );
};

export default function MarcoLetterActivity() {
    const [droppedAnswers, setDroppedAnswers] = useState<Record<string, string>>({});
    const [checkedAnswers, setCheckedAnswers] = useState<Record<string, boolean>>({});
    const [showResults, setShowResults] = useState(false);
    const [feedback, setFeedback] = useState('Hi this is Anna, Your helper for this activity, lets see how you do!');
    const [emotion, setEmotion] = useState<'correct' | 'wrong'>('correct');

    const API_BASE = import.meta.env.VITE_API_BASE_URL;
    async function recordAttempt(user_email: string, is_successful: boolean) {
      const response =await fetch(`${API_BASE}/record_attempt.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user_email,
          section_code: 25,
          is_successful: is_successful ? '1' : '0',
        }),
      });
      const data = await response.json();
      return data.attempt_number;
    }
    

    const handleDrop = (questionId: string, text: string) => {
        const newAnswers = { ...droppedAnswers };
        Object.keys(newAnswers).forEach(key => {
            if (newAnswers[key] === text) {
                delete newAnswers[key];
            }
        });
        newAnswers[questionId] = text;
        setDroppedAnswers(newAnswers);
        setShowResults(false);
        setCheckedAnswers({});
    };

    const checkAnswers = async() => {
      ReactGA.event({
        category: "Activity",
        action: "StrategiesActivityAttempts",
        label: "strategies_activity"
      });
        const results: Record<string, boolean> = {};
        questions.forEach(question => {
            const userAnswer = droppedAnswers[question.id];
            results[question.id] = userAnswer === question.correctAnswer;
        });
        setCheckedAnswers(results);
        setShowResults(true);
        if (Object.values(results).filter(Boolean).length === questions.length) {
          await recordAttempt(JSON.parse(localStorage.getItem("currentUser") || "{}").email, true);
            setFeedback("Great work! You can drag different answers to each challenging topic to see how other skills can also be used effectively.");
            setEmotion('correct');
        } else {
          await recordAttempt(JSON.parse(localStorage.getItem("currentUser") || "{}").email, false);
            setFeedback("Good effort! Review the incorrect answers and try again to improve your understanding.");
            setEmotion('wrong');
        }
    };

    const resetActivity = () => {
        setDroppedAnswers({});
        setCheckedAnswers({});
        setShowResults(false);
        setFeedback('Okay, lets try again!');
        setEmotion("correct");
    };

    const allAnswered = questions.every(q => droppedAnswers[q.id]);
    const correctCount = Object.values(checkedAnswers).filter(Boolean).length;
    const draggedTexts = new Set(Object.values(droppedAnswers));

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className="bg-blue-50 p-3 mb-4 sm:p-4 rounded-lg border border-blue-200">
                                <p className="text-sm sm:text-base text-blue-700">
                                    <strong>Instructions:</strong> Please read each statement that addresses how to talk to your family about one of the challenging topics we explored. Drag the communication strategy you could use to navigate that conversation and promote open and supportive communication in your family.
                                </p>
                            </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        {/* Letter Section */}
                        <div className="space-y-4 sm:space-y-6">
                            <div className="flex flex-col items-start justify-evenly mb-4">
                                {letterSections.map((section, index) => (
                                    <DraggableText
                                        key={section.id}
                                        section={section}
                                        isDragged={draggedTexts.has(section.text)}
                                    />
                                ))}
                            </div>

                            
                            </div>
                        

                        {/* Questions Section */}
                        <div className="space-y-4 sm:space-y-6">
                            <div className="space-y-3 sm:space-y-4">
                                {questions.map((question) => (
                                    <DropZone
                                        key={question.id}
                                        question={question}
                                        droppedText={droppedAnswers[question.id] || null}
                                        onDrop={handleDrop}
                                        isCorrect={showResults ? checkedAnswers[question.id] : null}
                                    />
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4 z-50">
                                <button
                                    onClick={checkAnswers}
                                    disabled={!allAnswered}
                                    className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                                        allAnswered
                                            ? 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg z-50'
                                            : 'bg-gray-300 text-gray-500 z-50 cursor-not-allowed'
                                    }`}
                                >
                                    Check Answers
                                </button>

                                <button
                                    onClick={resetActivity}
                                    className="flex items-center gap-2 py-3 px-6 z-50 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    <RotateCcw className="w-4 h-4 " />
                                    Reset
                                </button>
                            </div>

                            {/* Results */}
                            {showResults && (
                                <div
                                    className={`p-4 rounded-lg border-2 ${
                                        correctCount === questions.length
                                            ? 'bg-green-50 border-green-300'
                                            : 'bg-yellow-50 border-yellow-300'
                                    }`}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        {correctCount === questions.length ? (
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        ) : (
                                            <XCircle className="w-5 h-5 text-yellow-600" />
                                        )}
                                        <span className="font-semibold">
                                            Results: {correctCount} out of {questions.length} correct
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <AvatarFeedback feedback={feedback} emotion={emotion} />
            </div>
        </DndProvider>
    );
}