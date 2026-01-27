import React, { useState } from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Upload, FileText, CheckCircle, Clock, XCircle, TrendingUp, AlertTriangle, Info, ChevronDown, ChevronUp, Lock, Unlock, Microscope, Target } from 'lucide-react';

const AssignmentsCenter = () => {
  const [tab, setTab] = useState('Pending');
  const [scanningId, setScanningId] = useState(null);
  const [scanResults, setScanResults] = useState({}); // { id: { score: 12, flagged: true } }
  const [expandedDecisions, setExpandedDecisions] = useState({});
  const { assignments } = STUDENT_DATA;
  
  // Mock AI Mastery Data - In production, this would come from backend AI analysis
  const masteryData = {
    3: {
      score: 92, 
      status: 'Mastered',
      concepts: [
        { name: 'Quadratic Equations', strength: 'strong' },
        { name: 'Factorization', strength: 'strong' },
        { name: 'Graph Interpretation', strength: 'partial' }
      ],
      nextAction: 'advance',
      nextActionText: 'You can proceed to Assignment 12: Advanced Algebra',
      feedback: {
        wellDone: 'Excellent grasp of quadratic solving techniques and systematic approach.',
        improve: 'Minor improvements needed in graph interpretation.',
        reason: 'Your mastery score is 92%, demonstrating strong understanding of core concepts.',
        nextSteps: 'Continue to advanced algebra topics and review graph interpretation notes.'
      },
      canProgress: true
    },
    5: {
      score: 78,
      status: 'Strong Pass',
      concepts: [
        { name: 'Photosynthesis', strength: 'strong' },
        { name: 'Cell Structure', strength: 'partial' },
        { name: 'Enzymes', strength: 'strong' }
      ],
      nextAction: 'reinforcement',
      nextActionText: 'Complete one reinforcement task before next assignment',
      feedback: {
        wellDone: 'Great understanding of photosynthesis and enzyme functions.',
        improve: 'Cell structure details need more attention.',
        reason: 'Your score of 78% shows solid understanding with room for reinforcement.',
        nextSteps: 'Complete the cell structure review quiz, then proceed to next assignment.'
      },
      canProgress: true,
      reinforcementTask: 'Cell Structure Review Quiz (5 questions)'
    },
    6: {
      score: 55,
      status: 'Weak',
      concepts: [
        { name: 'Essay Structure', strength: 'partial' },
        { name: 'Thesis Development', strength: 'weak' },
        { name: 'Citation Format', strength: 'strong' }
      ],
      nextAction: 'remedial',
      nextActionText: 'Complete remedial tasks before proceeding',
      feedback: {
        wellDone: 'Your citation formatting is accurate and consistent.',
        improve: 'Thesis statements need more clarity and essay structure requires improvement.',
        reason: 'With a score of 55%, additional practice is needed to build mastery.',
        nextSteps: 'Watch the essay structure tutorial, complete 5 practice exercises, and retake assessment.'
      },
      canProgress: false,
      remedialTasks: [
        'Watch: Essay Structure Fundamentals (12 min)',
        'Read: Thesis Development Guide',
        'Practice: 5 Thesis Writing Exercises',
        'Reassessment Quiz'
      ]
    },
    7: {
      score: 35,
      status: 'Not Mastered',
      concepts: [
        { name: 'Trigonometry Basics', strength: 'weak' },
        { name: 'Angle Calculation', strength: 'weak' },
        { name: 'Unit Circle', strength: 'weak' }
      ],
      nextAction: 'block',
      nextActionText: 'Progress blocked - Full remediation required',
      feedback: {
        wellDone: 'You showed effort in attempting all questions.',
        improve: 'Core trigonometry concepts need comprehensive review.',
        reason: 'Your score of 35% indicates fundamental gaps that must be addressed.',
        nextSteps: 'Complete the full remedial program and schedule a review session with your teacher.'
      },
      canProgress: false,
      teacherNotified: true,
      remedialTasks: [
        'Watch: Trigonometry Foundations (20 min)',
        'Read: Unit Circle Explained (with examples)',
        'Practice: 10 Basic Angle Questions',
        'Practice: 10 Unit Circle Questions',
        'One-on-one Teacher Session',
        'Complete Reassessment'
      ]
    },
    10: {
      score: 88,
      status: 'Strong Pass',
      concepts: [
        { name: 'Ionic Bonding', strength: 'strong' },
        { name: 'Covalent Bonding', strength: 'strong' },
        { name: 'Metallic Bonding', strength: 'partial' }
      ],
      nextAction: 'reinforcement',
      nextActionText: 'Complete one reinforcement task before next assignment',
      feedback: {
        wellDone: 'Excellent understanding of ionic and covalent bonding principles.',
        improve: 'Metallic bonding concepts need slight review.',
        reason: 'Your 88% demonstrates strong mastery with minor gaps.',
        nextSteps: 'Review metallic bonding notes and proceed to molecular geometry.'
      },
      canProgress: true,
      reinforcementTask: 'Metallic Bonding Quick Review (3 questions)'
    },
    11: {
      score: 65,
      status: 'Pass',
      concepts: [
        { name: 'Timeline Accuracy', strength: 'strong' },
        { name: 'Historical Analysis', strength: 'partial' },
        { name: 'Context Understanding', strength: 'partial' }
      ],
      nextAction: 'reinforcement',
      nextActionText: 'Complete targeted practice before next assignment',
      feedback: {
        wellDone: 'Timeline dates and events are accurate and well-organized.',
        improve: 'Historical analysis lacks depth. Add more context and significance to events.',
        reason: 'Your 65% shows good factual knowledge but needs deeper analytical thinking.',
        nextSteps: 'Read the historical analysis guide and practice with 2 sample events.'
      },
      canProgress: true,
      reinforcementTask: 'Historical Analysis Practice (2 events)'
    }
  };

  // Add Detailed Concept Weakness Analysis (Mock)
  const conceptWeaknessAnalysis = {
    6: [ // English Essay (Weak)
      {
        concept: 'Thesis Development',
        gap: 'Lack of Specificity',
        observation: 'Thesis statements tend to be broad generalizations rather than arguable claims.',
        recommendation: 'Use the "Though/However" formula to create tension in your argument.',
        action: 'Practice: Refine 3 broad thesis statements'
      },
      {
        concept: 'Essay Structure',
        gap: 'Topic Sentence Alignment',
        observation: 'Paragraphs often drift from the main point introduced in the topic sentence.',
        recommendation: 'Ensure every sentence in the body paragraph directly supports the topic sentence.',
        action: 'Review: Paragraph Unity Guide'
      }
    ],
    7: [ // Trigonometry (Not Mastered)
      {
        concept: 'Unit Circle',
        gap: 'Quadrant-Sign Confusion',
        observation: 'Consistently misidentifying +/- signs for Sine and Cosine in Quadrants II and III.',
        recommendation: 'Remember "All Students Take Calculus" (ASTC) mnemonic for signs.',
        action: 'Drill: 20 Quadrant Sign Identification problems'
      },
      {
        concept: 'Angle Calculation',
        gap: 'Reference Angle Calculation',
        observation: 'Difficulty converting obtuse angles to acute reference angles.',
        recommendation: 'Visualize the angle to the nearest x-axis (180° or 360°).',
        action: 'Practice: Find reference angles for 10 given angles'
      }
    ],
    5: [ // Biology (Strong Pass - but has partial concept)
       {
        concept: 'Cell Structure',
        gap: 'Organelle Function Differentiation',
        observation: 'Confusing functions of Golgi Apparatus and Endoplasmic Reticulum.',
        recommendation: 'Create a comparison table highlighting synthesis vs. packaging roles.',
        action: 'Task: Complete Organelle Match-up Activity'
       }
    ]
  };

  // Filter logic
  const displayedAssignments = assignments.filter(a => {
      if (tab === 'Pending') return a.status === 'Pending' || a.status === 'In Progress';
      return a.status === tab;
  });

  const getDeadlineColor = (days) => {
      if (days <= 1) return 'text-red-500 bg-red-50 border-red-100';
      if (days <= 3) return 'text-orange-500 bg-orange-50 border-orange-100';
      return 'text-green-600 bg-green-50 border-green-100';
  };

  const getMasteryColor = (score) => {
    if (score >= 90) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (score >= 75) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 60) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (score >= 40) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getMasteryBadge = (status) => {
    const badges = {
      'Mastered': 'bg-emerald-500 text-white',
      'Strong Pass': 'bg-green-500 text-white',
      'Pass': 'bg-blue-500 text-white',
      'Weak': 'bg-orange-500 text-white',
      'Not Mastered': 'bg-red-500 text-white'
    };
    return badges[status] || 'bg-gray-500 text-white';
  };

  const getConceptTagColor = (strength) => {
    const colors = {
      'strong': 'bg-green-100 text-green-700 border-green-300',
      'partial': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      'weak': 'bg-red-100 text-red-700 border-red-300'
    };
    return colors[strength] || 'bg-gray-100 text-gray-700 border-gray-300';
  };

  const handleScan = (id) => {
      setScanningId(id);
      setTimeout(() => {
          setScanningId(null);
          setScanResults(prev => ({
              ...prev,
              [id]: { score: Math.floor(Math.random() * 15), flagged: true }
          }));
      }, 2000);
  };

  const toggleDecisionExplanation = (id) => {
    setExpandedDecisions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 p-8 rounded-3xl shadow-lg border border-cyan-100">
         <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">Homework & Assignments</h2>
            <p className="text-sm text-slate-600 font-semibold mt-2">✨ AI-powered mastery tracking • Adaptive learning paths • Personalized feedback</p>
         </div>
         <div className="flex bg-gradient-to-r from-cyan-100 via-blue-100 to-pink-100 p-1.5 rounded-xl w-full md:w-auto shadow-md">
            {['Pending', 'Submitted', 'Graded'].map(t => (
               <button 
                  key={t} 
                  onClick={() => setTab(t)}
                  className={`flex-1 md:flex-none px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${tab === t ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white shadow-lg scale-105' : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'}`}
               >
                  {t}
               </button>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
         {displayedAssignments.map(assign => (
            <div key={assign.id} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col h-full">
               <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide border ${
                     assign.status.includes('Pending') || assign.status === 'In Progress' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                     assign.status === 'Submitted' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-green-50 text-green-600 border-green-100'
                  }`}>
                     {assign.type || 'Assignment'}
                  </span>
                  {assign.dueDate !== 'Today' && assign.dueDate !== 'Tomorrow' && (
                       <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
                           <Clock size={12}/> {assign.dueDate}
                       </div>
                  )}
               </div>

               <h3 className="text-xl font-bold text-slate-800 mb-2">{assign.title}</h3>
               <p className="text-sm font-semibold text-slate-500 mb-6 flex-grow">{assign.subject}</p>

               {/* PENDING VIEW */}
               {(tab === 'Pending') && (
                  <div className="space-y-4">
                     <div className={`flex items-center gap-3 p-3 rounded-xl border ${getDeadlineColor(assign.daysLeft)}`}>
                        <Clock size={18} />
                        <div className="flex-1">
                            <p className="text-xs font-bold uppercase opacity-80">Deadline</p>
                            <p className="text-sm font-bold">{assign.dueDate} ({assign.daysLeft <= 0 ? 'Today' : `${assign.daysLeft} days left`})</p>
                        </div>
                     </div>

                     <div>
                        <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                            <span>Progress</span>
                            <span>{assign.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                            <div className="bg-indigo-500 h-full rounded-full transition-all duration-500" style={{ width: `${assign.progress}%` }}></div>
                        </div>
                     </div>
                     
                     {/* AI Plagiarism Check Mockup */}
                     {assign.status === 'In Progress' && (
                         <div className="mt-2">
                             {scanningId === assign.id ? (
                                <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center gap-2 text-indigo-600 font-bold text-xs animate-pulse">
                                    <div className="w-3 h-3 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                                    AI Scanning content...
                                </div>
                             ) : scanResults[assign.id] ? (
                                <div className={`p-3 border rounded-xl flex items-center gap-2 text-xs font-bold ${scanResults[assign.id].score > 10 ? 'bg-red-50 border-red-100 text-red-600' : 'bg-green-50 border-green-100 text-green-600'}`}>
                                    {scanResults[assign.id].score > 10 ? <XCircle size={14}/> : <CheckCircle size={14}/>}
                                    AI Check: {scanResults[assign.id].score}% Plagiarism Detected
                                </div>
                             ) : (
                                <button 
                                    onClick={() => handleScan(assign.id)}
                                    className="w-full py-2 bg-purple-50 hover:bg-purple-100 text-purple-600 border border-purple-100 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
                                >
                                    ✨ Run AI Plagiarism Check
                                </button>
                             )}
                         </div>
                     )}

                     <div className="flex gap-3 pt-2">
                        <button className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl text-xs hover:bg-indigo-700 flex items-center justify-center gap-2 transition-colors">
                           <Upload size={16}/> Upload File
                        </button>
                        <button className="px-5 py-3 border border-slate-200 rounded-xl text-slate-600 font-bold hover:bg-slate-50 transition-colors">Details</button>
                     </div>
                  </div>
               )}

               {/* SUBMITTED VIEW */}
               {tab === 'Submitted' && (
                   <div className="space-y-4">
                       <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-3">
                           <div className="p-2 bg-white rounded-lg border border-slate-100">
                               <FileText size={20} className="text-indigo-500" />
                           </div>
                           <div className="flex-1 overflow-hidden">
                               <p className="text-xs font-bold text-slate-500 uppercase">Submitted File</p>
                               <p className="text-sm font-bold text-slate-700 truncate">{assign.submittedFile || 'assignment.pdf'}</p>
                           </div>
                           <CheckCircle size={20} className="text-green-500" />
                       </div>

                       {assign.plagiarismFlag && (
                           <div className="p-4 bg-red-50 border border-red-100 rounded-2xl">
                               <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-1">
                                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                   Plagiarism Alert
                               </div>
                               <p className="text-xs text-red-600 font-medium">
                                   AI detection flagged potential overlap. Plagiarism Score: {assign.plagiarismScore}%
                               </p>
                           </div>
                       )}

                        <button className="w-full py-3 border border-slate-200 rounded-xl text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors">
                            View Submission
                        </button>
                   </div>
               )}

               {/* GRADED VIEW - Enhanced with AI Mastery System */}
               {tab === 'Graded' && masteryData[assign.id] && (
                   <div className="space-y-4">
                       {/* Mastery Score Indicator */}
                       <div className={`p-4 border-2 rounded-2xl ${getMasteryColor(masteryData[assign.id].score)}`}>
                         <div className="flex items-center justify-between mb-3">
                           <div className="flex items-center gap-2">
                             <TrendingUp size={20} />
                             <p className="text-xs font-bold uppercase">Mastery Score</p>
                           </div>
                           <span className={`px-3 py-1 rounded-full text-xs font-bold ${getMasteryBadge(masteryData[assign.id].status)}`}>
                             {masteryData[assign.id].status}
                           </span>
                         </div>
                         <div className="flex items-baseline gap-2">
                           <span className="text-4xl font-extrabold">{masteryData[assign.id].score}%</span>
                           <span className="text-sm font-bold opacity-70">mastery achieved</span>
                         </div>
                       </div>

                       {/* Grade Display */}
                       <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                           <div>
                               <p className="text-xs font-bold text-slate-500 uppercase mb-1">Final Grade</p>
                               <div className="flex items-baseline gap-1">
                                   <span className="text-3xl font-extrabold text-slate-700">{assign.grade}</span>
                                   <span className="text-sm font-bold text-slate-400">/ {assign.maxGrade || '100'}</span>
                               </div>
                           </div>
                           <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg border-4 border-white shadow-sm">
                               {assign.grade}
                           </div>
                       </div>

                       {/* Concept Strength Tags */}
                       <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                         <p className="text-xs font-bold text-slate-500 uppercase mb-3">Concept Mastery</p>
                         <div className="flex flex-wrap gap-2">
                           {masteryData[assign.id].concepts.map((concept, idx) => (
                             <span 
                               key={idx}
                               className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${getConceptTagColor(concept.strength)}`}
                             >
                               {concept.name}
                               <span className="ml-1.5">
                                 {concept.strength === 'strong' && '●'}
                                 {concept.strength === 'partial' && '◐'}
                                 {concept.strength === 'weak' && '○'}
                               </span>
                             </span>
                           ))}
                         </div>
                         <div className="flex gap-4 mt-3 text-xs font-medium text-slate-500">
                           <span className="flex items-center gap-1"><span className="text-green-600">● Strong</span></span>
                           <span className="flex items-center gap-1"><span className="text-yellow-600">◐ Partial</span></span>
                           <span className="flex items-center gap-1"><span className="text-red-600">○ Needs Work</span></span>
                         </div>
                       </div>

                       {/* Next Action Panel */}
                       <div className={`p-4 border-2 rounded-2xl ${
                         masteryData[assign.id].canProgress 
                           ? 'bg-emerald-50 border-emerald-200' 
                           : 'bg-orange-50 border-orange-200'
                       }`}>
                         <div className="flex items-start gap-3">
                           <div className={`p-2 rounded-lg ${
                             masteryData[assign.id].canProgress 
                               ? 'bg-emerald-100' 
                               : 'bg-orange-100'
                           }`}>
                             {masteryData[assign.id].canProgress ? (
                               <Unlock size={20} className="text-emerald-600" />
                             ) : (
                               <Lock size={20} className="text-orange-600" />
                             )}
                           </div>
                           <div className="flex-1">
                             <p className="text-xs font-bold uppercase mb-1 text-slate-600">Next Action</p>
                             <p className={`text-sm font-bold ${
                               masteryData[assign.id].canProgress 
                                 ? 'text-emerald-700' 
                                 : 'text-orange-700'
                             }`}>
                               {masteryData[assign.id].nextActionText}
                             </p>
                           </div>
                         </div>

                         {/* Remedial Tasks */}
                         {masteryData[assign.id].remedialTasks && (
                           <div className="mt-4 space-y-2">
                             <p className="text-xs font-bold text-orange-700 uppercase">Required Tasks:</p>
                             {masteryData[assign.id].remedialTasks.map((task, idx) => (
                               <div key={idx} className="flex items-center gap-2 text-xs text-orange-600 font-medium">
                                 <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                                 {task}
                               </div>
                             ))}
                           </div>
                         )}

                         {/* Reinforcement Task */}
                         {masteryData[assign.id].reinforcementTask && (
                           <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                             <p className="text-xs font-bold text-blue-700 mb-1">⚡ Quick Reinforcement</p>
                             <p className="text-xs text-blue-600 font-medium">{masteryData[assign.id].reinforcementTask}</p>
                           </div>
                         )}

                         {/* Teacher Notification */}
                         {masteryData[assign.id].teacherNotified && (
                           <div className="mt-3 flex items-center gap-2 text-xs text-orange-600 font-medium">
                             <AlertTriangle size={14} />
                             Teacher has been notified for additional support
                           </div>
                         )}
                       </div>

                       {/* AI Feedback Section */}
                       <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl">
                         <div className="flex items-center gap-2 mb-3">
                           <div className="p-1.5 bg-indigo-100 rounded-lg">
                             <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                               <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5h2v2H9v-2zm0-6h2v4H9V5z"/>
                             </svg>
                           </div>
                           <p className="text-xs font-bold text-indigo-700 uppercase">✨ AI Feedback</p>
                         </div>
                         
                         <div className="space-y-3">
                           <div>
                             <p className="text-xs font-bold text-green-700 mb-1">✓ What you did well:</p>
                             <p className="text-xs text-slate-700 leading-relaxed">{masteryData[assign.id].feedback.wellDone}</p>
                           </div>
                           
                           <div>
                             <p className="text-xs font-bold text-orange-700 mb-1">⚠ Areas for improvement:</p>
                             <p className="text-xs text-slate-700 leading-relaxed">{masteryData[assign.id].feedback.improve}</p>
                           </div>
                           
                           <div>
                             <p className="text-xs font-bold text-blue-700 mb-1">→ Next Steps:</p>
                             <p className="text-xs text-slate-700 leading-relaxed">{masteryData[assign.id].feedback.nextSteps}</p>
                           </div>
                         </div>
                       </div>

                       {/* Why This Decision? - Expandable */}
                       <button
                         onClick={() => toggleDecisionExplanation(assign.id)}
                         className="w-full p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
                       >
                         <div className="flex items-center justify-between">
                           <div className="flex items-center gap-2 text-slate-700">
                             <Info size={16} />
                             <span className="text-xs font-bold">Why this decision?</span>
                           </div>
                           {expandedDecisions[assign.id] ? (
                             <ChevronUp size={16} className="text-slate-500" />
                           ) : (
                             <ChevronDown size={16} className="text-slate-500" />
                           )}
                         </div>
                         
                         {expandedDecisions[assign.id] && (
                           <div className="mt-3 pt-3 border-t border-slate-200 text-left">
                             <p className="text-xs text-slate-600 leading-relaxed">
                               {masteryData[assign.id].feedback.reason}
                             </p>
                             <div className="mt-3 p-3 bg-white rounded-lg border border-slate-200">
                               <p className="text-xs font-bold text-slate-500 mb-2">Decision Logic:</p>
                               <div className="space-y-1 text-xs text-slate-600">
                                 <div className="flex items-center gap-2">
                                   <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                                   Mastery score: {masteryData[assign.id].score}%
                                 </div>
                                 <div className="flex items-center gap-2">
                                   <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                                   Category: {masteryData[assign.id].status}
                                 </div>
                                 <div className="flex items-center gap-2">
                                   <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                                   Action: {masteryData[assign.id].nextAction === 'advance' ? 'Unlock next assignment' : 
                                            masteryData[assign.id].nextAction === 'reinforcement' ? 'Light reinforcement required' :
                                            masteryData[assign.id].nextAction === 'remedial' ? 'Targeted remediation' : 'Full remediation + teacher notification'}
                                 </div>
                                 <div className="flex items-center gap-2">
                                   <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                                   Progress status: {masteryData[assign.id].canProgress ? 'Unlocked' : 'Blocked until mastery ≥ 60%'}
                                 </div>
                               </div>
                             </div>
                           </div>
                         )}
                       </button>
                       
                       {/* Teacher Feedback (if available) */}
                       {assign.teacherFeedback && (
                           <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                               <p className="text-xs font-bold text-slate-400 uppercase mb-2">👨‍🏫 Teacher Feedback</p>
                               <p className="text-sm text-slate-600 italic leading-relaxed">"{assign.teacherFeedback}"</p>
                           </div>
                       )}

                       <button className="w-full py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm">
                           Download Graded Paper
                       </button>
                   </div>
               )}

               {/* Fallback Graded View (if no mastery data) */}
               {tab === 'Graded' && !masteryData[assign.id] && (
                   <div className="space-y-4">
                       <div className="flex items-center justify-between p-4 bg-green-50/50 border border-green-100 rounded-2xl">
                           <div>
                               <p className="text-xs font-bold text-green-600 uppercase mb-1">Final Grade</p>
                               <div className="flex items-baseline gap-1">
                                   <span className="text-3xl font-extrabold text-green-700">{assign.grade}</span>
                                   <span className="text-sm font-bold text-green-500">/ {assign.maxGrade || '100'}</span>
                               </div>
                           </div>
                           <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg border-4 border-white shadow-sm">
                               {assign.grade}
                           </div>
                       </div>
                       
                       {assign.teacherFeedback && (
                           <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                               <p className="text-xs font-bold text-slate-400 uppercase mb-2">Teacher Feedback</p>
                               <p className="text-sm text-slate-600 italic leading-relaxed">"{assign.teacherFeedback}"</p>
                           </div>
                       )}

                       <button className="w-full py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm">
                           Download Graded Paper
                       </button>
                   </div>
               )}

            </div>
         ))}
      </div>
    </div>
  );
};

export default AssignmentsCenter;
