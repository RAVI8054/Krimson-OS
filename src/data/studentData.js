export const STUDENT_DATA = {
  user: {
    name: "Alex Johnson",
    role: "Grade 10 Student",
    id: "S-2026-1054",
    section: "10-B",
    avatar: "https://i.pravatar.cc/150?img=12",
    house: "Red House",
    attendance: "94%"
  },

  // Screen 1: Home Dashboard
  dashboard: {
    nextClass: { subject: "Physics", room: "Lab 3", time: "10:30 AM", teacher: "Mr. Sharma" },
    assignmentsDue: 3,
    examCountdown: { subject: "Mathematics Mid-Term", days: 5 },
    performanceTrend: "+5%",
    notifications: [
      { id: 1, text: "Science Fair registration closes tomorrow" },
      { id: 2, text: "New assignment uploaded in History" }
    ]
  },

  // Screen 2: Timetable
  timetable: {
    monday: [
      { period: 1, subject: "Math", time: "08:00 - 09:00", type: "Lecture" },
      { period: 2, subject: "English", time: "09:00 - 10:00", type: "Lecture" },
      { period: 3, subject: "Physics", time: "10:30 - 11:30", type: "Lab" }
    ],
    tuesday: [
       { period: 1, subject: "Chemistry", time: "08:00 - 09:00", type: "Lab" }
    ]
  },

  // Screen 3: Attendance
  attendance: {
    heatmap: { 
       present: ["2026-01-01", "2026-01-02", "2026-01-03", "2026-01-05"], 
       absent: ["2026-01-04"] 
    },
    totalDays: 120,
    presentDays: 112,
    percentage: 93.3
  },

  // Screen 4: Assignments
  assignments: [
    { id: 1, title: "Trigonometry Worksheet", subject: "Math", dueDate: "Today", status: "Pending", progress: 0 },
    { id: 2, title: "Essay on Romeo & Juliet", subject: "English", dueDate: "Tommorow", status: "In Progress", progress: 50 },
    { id: 3, title: "Chemical Reactions Lab", subject: "Chemistry", dueDate: "2026-01-10", status: "Submitted", grade: "A" }
  ],

  // Screen 5: Resources
  resources: [
    { id: 1, title: "Calculus Basics", subject: "Math", type: "Video", url: "#" },
    { id: 2, title: "World War II Notes", subject: "History", type: "PDF", url: "#" }
  ],

  // Screen 6: Exams
  exams: [
    { id: 1, title: "Math Mid-Term", date: "2026-01-15", time: "09:00 AM", syllabus: "Chapters 1-5" },
    { id: 2, title: "Physics Unit Test", date: "2026-01-20", time: "10:00 AM", syllabus: "Optics" }
  ],

  // Screen 7: Grades
  grades: [
    { subject: "Mathematics", term1: 85, term2: 92, trend: "up" },
    { subject: "English", term1: 78, term2: 80, trend: "up" },
    { subject: "Science", term1: 88, term2: 85, trend: "down" }
  ],

  // Screen 8: Communication
  messages: [
    { id: 1, from: "Mrs. Davis (English)", content: "Great job on the essay!", time: "2 hrs ago", unread: true },
    { id: 2, from: "Admin Office", content: "Fee reminder for Term 2", time: "Yesterday", unread: false }
  ],

  // Screen 9: Analytics
  analytics: {
    strength: { math: 90, science: 85, english: 75, history: 60, sports: 95 },
    rank: 5,
    percentile: "92nd"
  },

  // Screen 10: Fees
  fees: {
    totalDue: 1500,
    dueDate: "2026-01-31",
    status: "Pending",
    history: [
      { id: 101, date: "2025-09-01", amount: 1500, status: "Paid" }
    ]
  },

  // Screen 11: Behavior
  behavior: {
    points: 120,
    logs: [
       { date: "2026-01-05", type: "Positive", note: "Helped organize library" },
       { date: "2025-12-20", type: "Warning", note: "Late to class" }
    ]
  },

  // Screen 12: Profile
  profile: {
     goals: ["Score 95% in Math", "Join Debate Club"],
     interests: ["Robotics", "Football"],
     clubs: ["Science Club", "Football Team"]
  },

  // Screen 14: CCA
  activities: [
     { id: 1, name: "Inter-School Debate", date: "2025-11-10", role: "Participant", achievement: "Runner Up" },
     { id: 2, name: "Annual Sports Day", date: "2025-12-05", role: "Volunteer", achievement: "Organizer Badge" }
  ]
};
