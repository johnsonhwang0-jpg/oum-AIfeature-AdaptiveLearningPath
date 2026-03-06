import React, { useState } from 'react';
import { 
  Facebook, Twitter, Instagram, Youtube, Linkedin, Phone, Headphones, 
  Lightbulb, Bell, MessageSquare, Home, ChevronDown, FileText, CheckSquare,
  ArrowLeft, CheckCircle2, AlertCircle, Clock, BookOpen, Target, MoreVertical,
  List
} from 'lucide-react';

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the primary function of management?",
    options: [
      "Planning, Organizing, Leading, Controlling", 
      "Marketing and Sales", 
      "Human Resources Management", 
      "Financial Accounting"
    ],
    answer: 0
  },
  {
    id: 2,
    question: "Which level of management is typically responsible for strategic planning and overall direction?",
    options: [
      "First-line managers", 
      "Middle managers", 
      "Top managers", 
      "Team leaders"
    ],
    answer: 2
  },
  {
    id: 3,
    question: "What does SWOT analysis stand for in strategic management?",
    options: [
      "Strategies, Work, Operations, Tactics", 
      "Strengths, Weaknesses, Opportunities, Threats", 
      "Systems, Wealth, Organization, Team", 
      "Sales, Wages, Output, Taxes"
    ],
    answer: 1
  },
  {
    id: 4,
    question: "Who is widely known as the 'father of scientific management'?",
    options: [
      "Henri Fayol", 
      "Max Weber", 
      "Elton Mayo",
      "Frederick Taylor"
    ],
    answer: 3
  },
  {
    id: 5,
    question: "Which of the following best describes 'efficiency' in management?",
    options: [
      "Doing the right things",
      "Doing things right (minimizing waste)",
      "Achieving organizational goals",
      "Maximizing employee satisfaction"
    ],
    answer: 1
  }
];

function CoursePage({ onStartQuiz }: { onStartQuiz: () => void }) {
  return (
    <div className="min-h-screen bg-[#edf2f9] font-sans pb-12">
      {/* Top Bar */}
      <div className="bg-[#222] text-gray-300 text-xs py-1.5 px-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <Facebook size={14} className="hover:text-white cursor-pointer" /> 
          <Twitter size={14} className="hover:text-white cursor-pointer" /> 
          <Instagram size={14} className="hover:text-white cursor-pointer" /> 
          <Youtube size={14} className="hover:text-white cursor-pointer" /> 
          <Linkedin size={14} className="hover:text-white cursor-pointer" />
          <span className="font-bold hover:text-white cursor-pointer">TikTok</span>
        </div>
        <div className="flex space-x-6">
          <span className="flex items-center cursor-pointer hover:text-white"><Phone size={14} className="mr-1.5"/> +603-7801 1800 (General Line)</span>
          <span className="flex items-center cursor-pointer hover:text-white"><Headphones size={14} className="mr-1.5"/> eCRM</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-[#2d3136] text-white py-3 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="flex items-center text-yellow-500 font-bold text-xl tracking-tight cursor-pointer">
            <Lightbulb className="mr-2" size={24} /> myINSPIRE@OUM
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-semibold">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Dashboard</a>
            <a href="#" className="hover:text-gray-300">My courses</a>
          </nav>
        </div>
        <div className="flex items-center space-x-5">
          <Bell size={18} className="cursor-pointer hover:text-gray-300" />
          <MessageSquare size={18} className="cursor-pointer hover:text-gray-300" />
          <div className="w-px h-6 bg-gray-600"></div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-800 font-bold text-sm">N</div>
            <span className="text-sm font-medium">ND Teacher</span>
          </div>
        </div>
      </div>

      {/* Sub Nav */}
      <div className="bg-[#3a3f44] text-white py-2.5 px-4 flex space-x-3 text-xs font-medium overflow-x-auto whitespace-nowrap">
        <button className="bg-[#5c6bc0] px-4 py-1.5 rounded-full shadow-sm">Course</button>
        <button className="border border-gray-500 px-4 py-1.5 rounded-full hover:bg-gray-600 transition-colors">Participants</button>
        <button className="border border-gray-500 px-4 py-1.5 rounded-full hover:bg-gray-600 transition-colors">Grades</button>
        <button className="border border-gray-500 px-4 py-1.5 rounded-full hover:bg-gray-600 transition-colors">Question bank</button>
        <button className="border border-gray-500 px-4 py-1.5 rounded-full hover:bg-gray-600 transition-colors">Competencies</button>
      </div>

      {/* Breadcrumbs Area */}
      <div className="bg-[#5c6bc0] text-white py-4 px-6 relative overflow-hidden flex justify-between items-center">
        {/* Background pattern simulation */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="flex items-center text-sm space-x-2 relative z-10 overflow-x-auto whitespace-nowrap">
          <Home size={14} className="cursor-pointer hover:text-gray-200 shrink-0" /> <span className="text-blue-300 shrink-0">/</span>
          <span className="cursor-pointer hover:text-gray-200 shrink-0">Dashboard</span> <span className="text-blue-300 shrink-0">/</span>
          <span className="cursor-pointer hover:text-gray-200 shrink-0">My courses</span> <span className="text-blue-300 shrink-0">/</span>
          <span className="cursor-pointer hover:text-gray-200 shrink-0">BBPP1103ND</span> <span className="text-blue-300 shrink-0">/</span>
          <span className="font-bold shrink-0">e-Lesson Week 1</span>
        </div>
        
        <button className="relative z-10 bg-black/20 p-1.5 rounded hover:bg-black/30 transition-colors shrink-0 ml-4">
          <MoreVertical size={16} />
        </button>
      </div>

      {/* Floating Action Buttons (Left/Right) */}
      <div className="hidden md:block fixed left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-r-full shadow-md cursor-pointer hover:bg-gray-50 z-20">
        <List size={20} className="text-gray-600" />
      </div>
      <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-l-full shadow-md cursor-pointer hover:bg-gray-50 z-20">
        <ChevronDown size={20} className="text-gray-600 rotate-[-90deg]" />
      </div>

      {/* Main Content */}
      <div className="max-w-[1100px] mx-auto mt-6 bg-white shadow-sm rounded-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 font-bold text-gray-700 text-sm">
          Course Intro
        </div>
        
        <div className="relative h-[200px] md:h-[300px] bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
            alt="Course Hero" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wide">PRINCIPLES OF MANAGEMENT</h1>
          </div>
        </div>
        
        <div className="p-4 md:p-8">
          {/* Tabs */}
          <div className="flex flex-col md:flex-row border border-gray-200 mb-8 rounded-sm overflow-hidden text-sm">
            <button className="px-5 py-3.5 text-gray-600 font-semibold hover:bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 flex-1 text-left">
              Course Announcement (Curre...
            </button>
            <button className="px-5 py-3.5 text-gray-800 font-bold flex items-center border-b md:border-b-0 md:border-r border-gray-200 flex-1 text-left bg-gray-50">
              <ChevronDown size={16} className="mr-2 text-gray-500" /> Learning Materials
            </button>
            <button className="px-5 py-3.5 text-gray-600 font-semibold hover:bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 flex-1 text-left">
              READ ME FIRST: e-Lesson Overvi...
            </button>
            <button className="px-5 py-3.5 text-[#5c6bc0] font-bold border-t-2 md:border-t-0 md:border-t-2 border-[#5c6bc0] bg-white flex-1 text-left md:-mt-[2px]">
              e-Lesson Week 1
            </button>
            <div className="hidden md:block flex-1 bg-gray-50"></div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-[#2c3e50] mb-8 flex flex-col md:flex-row md:items-baseline">
            Topic 1 : What is Management? 
            <span className="italic text-gray-600 font-medium text-base md:text-lg md:ml-3 mt-1 md:mt-0">(Learning Time: 2 hours)</span>
          </h2>

          <div className="space-y-5 md:ml-2">
            <div className="flex items-center text-[#2196f3] hover:underline cursor-pointer group">
              <FileText size={24} className="mr-4 text-[#00bcd4] group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-base">Learning Outcomes</span>
            </div>
            <div 
              className="flex items-center text-[#2196f3] hover:underline cursor-pointer group"
              onClick={onStartQuiz}
            >
              <CheckSquare size={24} className="mr-4 text-[#e91e63] group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-base font-medium">Check Your Initial Understanding!</span>
            </div>
          </div>

          <div className="mt-12 text-[15px] text-gray-800 font-bold md:ml-2">
            <p className="mb-6">Before we proceed, please read Topic 1 in your module</p>
            <p className="italic font-semibold">Go through the following resources while/after reading the above topic</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Quiz({ onFinish, onCancel }: { onFinish: (score: number) => void, onCancel: () => void }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleSelect = (optionIdx: number) => {
    setAnswers({ ...answers, [currentQ]: optionIdx });
  };

  const handleNext = () => {
    if (currentQ < QUIZ_QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      let score = 0;
      QUIZ_QUESTIONS.forEach((q, idx) => {
        if (answers[idx] === q.answer) score++;
      });
      onFinish(score);
    }
  };

  const q = QUIZ_QUESTIONS[currentQ];
  const isLast = currentQ === QUIZ_QUESTIONS.length - 1;
  const hasAnswered = answers[currentQ] !== undefined;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:py-12">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onCancel}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors font-medium"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Course
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#5c6bc0] p-6 md:p-8 text-white">
            <h2 className="text-2xl font-bold">Initial Understanding Quiz</h2>
            <p className="text-blue-100 mt-2">Let's see what you already know about Principles of Management.</p>
            
            <div className="mt-6 bg-black/20 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-white h-full transition-all duration-300"
                style={{ width: `${((currentQ + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              ></div>
            </div>
            <div className="text-right text-sm mt-2 text-blue-100 font-medium">
              Question {currentQ + 1} of {QUIZ_QUESTIONS.length}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">{q.question}</h3>
            
            <div className="space-y-3">
              {q.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    answers[currentQ] === idx 
                      ? 'border-[#5c6bc0] bg-blue-50 text-[#5c6bc0] font-medium' 
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center shrink-0 ${
                      answers[currentQ] === idx ? 'border-[#5c6bc0]' : 'border-gray-300'
                    }`}>
                      {answers[currentQ] === idx && <div className="w-3 h-3 bg-[#5c6bc0] rounded-full"></div>}
                    </div>
                    <span>{opt}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNext}
                disabled={!hasAnswered}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  hasAnswered 
                    ? 'bg-[#5c6bc0] text-white hover:bg-[#4a569d] shadow-md hover:shadow-lg' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isLast ? 'Submit Quiz' : 'Next Question'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Results({ score, onBack }: { score: number, onBack: () => void }) {
  const total = QUIZ_QUESTIONS.length;
  const percentage = (score / total) * 100;
  
  type Level = "Beginner" | "Intermediate" | "Advanced";
  let level: Level = "Beginner";
  let feedback = "";

  if (percentage <= 40) {
    level = "Beginner";
    feedback = "You are new to these concepts! That's perfectly fine. We recommend taking the full standard learning time to build a strong foundation for Topic 1.";
  } else if (percentage <= 80) {
    level = "Intermediate";
    feedback = "You have a good baseline understanding! You can skim through the introductory definitions and focus more on the specific roles and history. You've just saved yourself about 45 minutes of study time!";
  } else {
    level = "Advanced";
    feedback = "Excellent! You already have a strong grasp of the core concepts. You can safely skip the basics and just do a quick review of the later sections. You've saved over an hour of study time!";
  }

  const topics = [
    {
      name: "1.1 Definition & Functions of Management",
      times: { Beginner: 30, Intermediate: 10, Advanced: 5 },
      focus: { Beginner: "High", Intermediate: "Low (Skim)", Advanced: "Skip/Quick Review" }
    },
    {
      name: "1.2 Levels & Types of Managers",
      times: { Beginner: 30, Intermediate: 15, Advanced: 5 },
      focus: { Beginner: "High", Intermediate: "Low (Skim)", Advanced: "Skip/Quick Review" }
    },
    {
      name: "1.3 Management Roles & Skills",
      times: { Beginner: 30, Intermediate: 25, Advanced: 15 },
      focus: { Beginner: "High", Intermediate: "Medium", Advanced: "Low (Review)" }
    },
    {
      name: "1.4 Evolution of Management Thought",
      times: { Beginner: 30, Intermediate: 25, Advanced: 15 },
      focus: { Beginner: "High", Intermediate: "Medium", Advanced: "Low (Review)" }
    },
  ];

  const formatTime = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = Math.round(mins % 60);
    if (h > 0 && m > 0) return `${h}h ${m}m`;
    if (h > 0) return `${h} hr`;
    return `${m} mins`;
  };

  const totalAdjustedMins = topics.reduce((acc, curr) => acc + curr.times[level], 0);
  const totalBaseMins = 120; // 2 hours
  const savedMins = totalBaseMins - totalAdjustedMins;

  const getFocusColor = (focusText: string) => {
    if (focusText.includes("High")) return "bg-red-100 text-red-800 border-red-200";
    if (focusText.includes("Medium")) return "bg-orange-100 text-orange-800 border-orange-200";
    if (focusText.includes("Skip")) return "bg-gray-100 text-gray-600 border-gray-200";
    return "bg-green-100 text-green-800 border-green-200"; // Low
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:py-12">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors font-medium"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Course
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#5c6bc0] to-[#3f51b5] p-8 text-white text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-4">
              <Target size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Your Initial Assessment</h2>
            <p className="text-blue-100 text-lg">You scored {score} out of {total} ({percentage}%)</p>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="mr-4 mt-1 mb-4 md:mb-0 shrink-0">
                {percentage > 80 ? <CheckCircle2 size={32} className="text-green-500" /> : <AlertCircle size={32} className="text-blue-500" />}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Assessed Level: <span className="text-[#5c6bc0]">{level}</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">{feedback}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <BookOpen className="mr-3 text-[#5c6bc0]" /> Topic 1 Study Plan
              </h3>
              
              <div className="bg-green-50 border border-green-200 px-4 py-2 rounded-lg flex items-center">
                <Clock className="text-green-600 mr-2" size={20} />
                <div>
                  <div className="text-xs text-green-800 font-semibold uppercase tracking-wider">Estimated Time</div>
                  <div className="text-green-700 font-bold text-lg">
                    {formatTime(totalAdjustedMins)} <span className="text-sm font-normal text-green-600 line-through ml-1">2 hr</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Based on your current understanding, here is our recommendation on how you should allocate your time for the sub-topics in <strong>Topic 1: What is Management?</strong>
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 border-b border-gray-200">
                    <th className="p-4 font-bold">Sub-Topic</th>
                    <th className="p-4 font-bold">Recommended Focus</th>
                    <th className="p-4 font-bold">Estimated Time</th>
                  </tr>
                </thead>
                <tbody>
                  {topics.map((topic, idx) => {
                    const time = topic.times[level];
                    const focusText = topic.focus[level];
                    const focusColor = getFocusColor(focusText);

                    return (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-gray-800">{topic.name}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${focusColor}`}>
                            {focusText}
                          </span>
                        </td>
                        <td className="p-4 text-gray-600 flex items-center font-medium">
                          <Clock size={16} className="mr-2 text-gray-400" /> {formatTime(time)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            {savedMins > 0 && (
              <div className="mt-6 text-center text-green-700 font-medium bg-green-50 py-3 rounded-lg border border-green-100">
                🎉 By taking this assessment, you've optimized your learning path and saved <strong>{formatTime(savedMins)}</strong>!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<'course' | 'quiz' | 'results'>('course');
  const [score, setScore] = useState(0);

  const handleStartQuiz = () => {
    window.scrollTo(0, 0);
    setView('quiz');
  };
  
  const handleFinishQuiz = (finalScore: number) => {
    setScore(finalScore);
    window.scrollTo(0, 0);
    setView('results');
  };
  
  const handleBackToCourse = () => {
    window.scrollTo(0, 0);
    setView('course');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {view === 'course' && <CoursePage onStartQuiz={handleStartQuiz} />}
      {view === 'quiz' && <Quiz onFinish={handleFinishQuiz} onCancel={handleBackToCourse} />}
      {view === 'results' && <Results score={score} onBack={handleBackToCourse} />}
    </div>
  );
}
