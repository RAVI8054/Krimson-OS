export const TEACHER_DATA = {
  user: {
    name: "Dr. Sarah Mitchell",
    role: "Senior Science Teacher",
    id: "T-2026-SC-05",
    avatar: "https://i.pravatar.cc/150?img=28",
    subjects: ["Physics", "Chemistry"],
    gradeTaught: ["Grade 9", "Grade 10"],
    experience: "8 Years",
    qualifications: ["M.Sc. Physics", "B.Ed"]
  },
  
  // Screen 1: Home Dashboard
  dashboard: {
    classesToday: [
      { id: 1, subject: "Physics", grade: "Grade 9-A", time: "08:30 AM", room: "Lab 3" },
      { id: 2, subject: "Chemistry", grade: "Grade 10-C", time: "10:00 AM", room: "Room 204" },
      { id: 3, subject: "Physics (Practical)", grade: "Grade 9-B", time: "11:30 AM", room: "Lab 1" }
    ],
    pendingAssignments: 12,
    alerts: [
      { id: 1, type: "Performance", msg: "3 students scored <40% in Unit Test 2" },
      { id: 2, type: "Attendance", msg: "Grade 9-A attendance below 85% this week" }
    ]
  },

  // Screen 2: Class Management
  classes: [
    { id: "C1", grade: "Grade 9-A", subject: "Physics", students: 32, topic: "Newton's Laws" },
    { id: "C2", grade: "Grade 10-C", subject: "Chemistry", students: 28, topic: "Chemical Reactions" },
    { id: "C3", grade: "Grade 9-B", subject: "Physics", students: 30, topic: "Motion Graphs" }
  ],

  // Screen 3: Lesson Planning
  lessons: {
    monday: [
      { id: "L1", title: "Intro to Kinematics", status: "Completed", class: "9-A" },
      { id: "L2", title: "Acid-Base Titration", status: "Pending", class: "10-C" }
    ],
    tuesday: [
      { id: "L3", title: "Force Vectors", status: "Pending", class: "9-B" }
    ]
  },

  // Screen 4: Attendance Log (Mock for one class)
  attendance: [
    { id: "S1", name: "Aarav Singh", roll: 1, status: "Present" },
    { id: "S2", name: "Bianca Liu", roll: 2, status: "Absent", reason: "Sick Leave" },
    { id: "S3", name: "Charlie Tan", roll: 3, status: "Present" },
    { id: "S4", name: "David Kim", roll: 4, status: "Present" }
  ],

  // Screen 5: Assignment Manager
  assignments: [
    { id: "A1", title: "Physics Lab Report", class: "9-A", submitted: 28, total: 32, due: "Tomorrow" },
    { id: "A2", title: "Periodic Table Quiz", class: "10-C", submitted: 15, total: 28, due: "Today" }
  ],

  // Screen 6: Communication
  messages: [
    { id: 1, from: "Parent of Aarav", content: "Regarding his sick leave...", time: "10 min ago", unread: true },
    { id: 2, from: "Principal's Office", content: "Staff meeting reminder", time: "1 hour ago", unread: false }
  ],

  // Screen 8: Calendar
  calendarEvents: [
    { id: 1, title: "Science Fair Info Session", date: "2026-01-10", type: "Event" },
    { id: 2, title: "Department Meeting", date: "2026-01-12", type: "Meeting" }
  ],

  // Screen 9: Insights
  insights: {
    topPerformer: "Grade 9-A",
    attendanceTrend: "+2%",
    riskStudents: [
      { name: "John Doe", issue: "Consistent Low Grades" },
      { name: "Jane Doe", issue: "Truancy" }
    ]
  },

  // Screen 14: Attendance Summary
  attendanceSummary: {
    monthlyAverage: "94.5%",
    classBreakdown: [
      { class: "9-A", percentage: 96 },
      { class: "9-B", percentage: 92 },
      { class: "10-C", percentage: 95 }
    ]
  },

  // Screen 15: Profile Portfolio
  portfolio: {
    certifications: ["Advanced Physics Pedagogy", "Safety in Labs"],
    workshops: ["Digital Classrooms 2025", "Inclusive Education"]
  }
};
