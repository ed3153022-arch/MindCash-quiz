'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { quizQuestions } from '@/lib/quiz-data';

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [dragOrder, setDragOrder] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [multiSliderValues, setMultiSliderValues] = useState<number[]>([]);
  const [selectedEmotion, setSelectedEmotion] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Reset all answer states when question changes
    setSelectedAnswer(null);
    setSliderValue(50);
    setSelectedImage(null);
    setSelectedEmotion(null);
    
    const question = quizQuestions[currentQuestion];
    if (question.dragItems) {
      setDragOrder([...question.dragItems]);
    }
    if (question.multiSliders) {
      setMultiSliderValues(new Array(question.multiSliders.length).fill(50));
    }
  }, [currentQuestion]);

  const handleAnswerSelect = (points: number) => {
    setSelectedAnswer(points);
  };

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
    const newOrder = [...dragOrder];
    const draggedItem = newOrder[dragIndex];
    newOrder.splice(dragIndex, 1);
    newOrder.splice(dropIndex, 0, draggedItem);
    setDragOrder(newOrder);
  };

  const handleImageSelect = (points: number) => {
    setSelectedImage(points);
  };

  const handleMultiSliderChange = (index: number, value: number) => {
    const newValues = [...multiSliderValues];
    newValues[index] = value;
    setMultiSliderValues(newValues);
  };

  const handleEmotionSelect = (points: number) => {
    setSelectedEmotion(points);
  };

  const getAnswerValue = () => {
    const question = quizQuestions[currentQuestion];
    
    switch (question.type) {
      case 'slider':
        return Math.round((sliderValue / 100) * 2); // Convert 0-100 to 0-2 scale
      case 'drag-order':
        // Score based on order: first item gets more points
        const originalOrder = question.dragItems || [];
        let score = 0;
        dragOrder.forEach((item, index) => {
          const originalIndex = originalOrder.indexOf(item);
          if (index === 0) score += 2; // First position
          else if (index === 1) score += 1; // Second position
          // Third position gets 0 points
        });
        return Math.min(score, 2); // Cap at 2 points
      case 'image-choice':
        return selectedImage || 0;
      case 'multi-slider':
        // Average of all sliders, converted to 0-2 scale
        const average = multiSliderValues.reduce((sum, val) => sum + val, 0) / multiSliderValues.length;
        return Math.round((average / 100) * 2);
      case 'emotion-scale':
        return selectedEmotion || 0;
      default:
        return selectedAnswer || 0;
    }
  };

  const isAnswerSelected = () => {
    const question = quizQuestions[currentQuestion];
    
    switch (question.type) {
      case 'slider':
        return true; // Slider always has a value
      case 'drag-order':
        return dragOrder.length > 0;
      case 'image-choice':
        return selectedImage !== null;
      case 'multi-slider':
        return multiSliderValues.length > 0;
      case 'emotion-scale':
        return selectedEmotion !== null;
      default:
        return selectedAnswer !== null;
    }
  };

  const handleNext = () => {
    if (!isAnswerSelected()) return;

    const answerValue = getAnswerValue();
    const newAnswers = [...answers, answerValue];
    setAnswers(newAnswers);
    setIsVisible(false);

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Quiz completed, save score and redirect to paywall
        const totalScore = newAnswers.reduce((sum, score) => sum + score, 0);
        localStorage.setItem('quizScore', totalScore.toString());
        router.push('/paywall');
      }
    }, 300);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  const renderQuestionContent = () => {
    switch (question.type) {
      case 'slider':
        return (
          <div className="space-y-6">
            <div className="px-4">
              <input
                type="range"
                min={question.sliderConfig?.min || 0}
                max={question.sliderConfig?.max || 100}
                step={question.sliderConfig?.step || 1}
                value={sliderValue}
                onChange={(e) => handleSliderChange(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${sliderValue}%, #374151 ${sliderValue}%, #374151 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>0</span>
                <span className="text-[#D4AF37] font-bold text-lg">{sliderValue}</span>
                <span>100</span>
              </div>
            </div>
          </div>
        );

      case 'drag-order':
        return (
          <div className="space-y-4">
            <p className="text-gray-400 text-sm mb-4">Arraste os itens para ordenar por prioridade:</p>
            {dragOrder.map((item, index) => (
              <div
                key={item}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                className="bg-gray-800/50 p-4 rounded-xl border-2 border-gray-700 cursor-move hover:border-[#D4AF37] transition-all duration-300 flex items-center"
              >
                <div className="bg-[#D4AF37] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                  {index + 1}
                </div>
                <span className="text-lg">{item}</span>
                <div className="ml-auto text-gray-400">⋮⋮</div>
              </div>
            ))}
          </div>
        );

      case 'image-choice':
        return (
          <div className="grid md:grid-cols-3 gap-6">
            {question.images?.map((image, index) => (
              <button
                key={index}
                onClick={() => handleImageSelect(image.points)}
                className={`relative overflow-hidden rounded-xl border-3 transition-all duration-300 hover:scale-105 ${
                  selectedImage === image.points
                    ? 'border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm text-center">
                    {image.caption}
                  </div>
                )}
                {selectedImage === image.points && (
                  <div className="absolute inset-0 bg-[#D4AF37]/20 flex items-center justify-center">
                    <div className="bg-[#D4AF37] text-black rounded-full w-8 h-8 flex items-center justify-center">
                      ✓
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        );

      case 'multi-slider':
        return (
          <div className="space-y-8">
            {question.multiSliders?.map((slider, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-lg font-medium">{slider.label}</label>
                  <span className="text-[#D4AF37] font-bold text-lg">
                    {multiSliderValues[index] || 50}
                  </span>
                </div>
                <input
                  type="range"
                  min={slider.min}
                  max={slider.max}
                  step={slider.step}
                  value={multiSliderValues[index] || 50}
                  onChange={(e) => handleMultiSliderChange(index, parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${multiSliderValues[index] || 50}%, #374151 ${multiSliderValues[index] || 50}%, #374151 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-400">
                  <span>0</span>
                  <span>100</span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'emotion-scale':
        return (
          <div className="flex flex-col items-center space-y-4">
            {question.emotions?.map((emotion, index) => (
              <button
                key={index}
                onClick={() => handleEmotionSelect(emotion.points)}
                className={`flex items-center p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 w-full max-w-xs ${
                  selectedEmotion === emotion.points
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 shadow-lg shadow-[#D4AF37]/20'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="text-4xl mr-4">{emotion.icon}</div>
                <span className="text-lg">{emotion.label}</span>
              </button>
            ))}
          </div>
        );

      default:
        // Multiple choice (original format)
        return (
          <div className="space-y-4">
            {question.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option.points)}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                  selectedAnswer === option.points
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 shadow-lg shadow-[#D4AF37]/20'
                    : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                    selectedAnswer === option.points
                      ? 'border-[#D4AF37] bg-[#D4AF37]'
                      : 'border-gray-500'
                  }`}>
                    {selectedAnswer === option.points && (
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    )}
                  </div>
                  <span className="text-lg">{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-2xl font-bold text-[#D4AF37] mb-4">MindCash Quiz</h1>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-gray-400">
            Pergunta {currentQuestion + 1} de {quizQuestions.length}
          </p>
        </div>

        {/* Question */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mb-8">
            <h2 className="text-2xl font-semibold mb-8 leading-relaxed">
              {question.question}
            </h2>

            {/* Dynamic Question Content */}
            {renderQuestionContent()}
          </div>

          {/* Next Button */}
          <div className="text-center">
            <button
              onClick={handleNext}
              disabled={!isAnswerSelected()}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                isAnswerSelected()
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black hover:shadow-lg hover:shadow-[#D4AF37]/20 hover:scale-105'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Finalizar' : 'Próxima'}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #D4AF37;
          cursor: pointer;
          border: 2px solid #000;
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #D4AF37;
          cursor: pointer;
          border: 2px solid #000;
        }
      `}</style>
    </div>
  );
}