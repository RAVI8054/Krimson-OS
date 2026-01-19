export const STUDENT_DATA = {
  user: {
    name: "Alex Johnson",
    role: "Grade 10 Student",
    id: "S-2026-1054",
    section: "10-B",
    avatar: "https://i.pravatar.cc/150?img=12",
    house: "Red House",
    attendance: "94%",
  },

  // Screen 1: Home Dashboard
  dashboard: {
    nextClass: {
      subject: "Physics",
      room: "Lab 3",
      time: "10:30 AM",
      teacher: "Mr. Sharma",
    },
    assignmentsDue: 3,
    examCountdown: { subject: "Mathematics Mid-Term", days: 5 },
    performanceTrend: "+5%",
    streak: 5, // Days attending consecutively
    notifications: [
      {
        id: 1,
        text: "Science Fair registration closes tomorrow",
        category: "event",
        priority: "high",
      },
      {
        id: 2,
        text: "New assignment uploaded in History",
        category: "assignment",
        priority: "medium",
      },
      {
        id: 3,
        text: "Physics lab report graded - A+",
        category: "grade",
        priority: "low",
      },
    ],
    // Quick Actions
    quickActions: [
      {
        id: 1,
        title: "Join Class",
        icon: "video",
        status: "active",
        color: "cyan",
        description: "Physics Lab starts in 15 min",
      },
      {
        id: 2,
        title: "Submit Assignment",
        icon: "upload",
        status: "pending",
        color: "blue",
        description: "3 assignments due today",
      },
      {
        id: 3,
        title: "View Report",
        icon: "chart",
        status: "ready",
        color: "pink",
        description: "Mid-term results available",
      },
      {
        id: 4,
        title: "Study Materials",
        icon: "book",
        status: "normal",
        color: "purple",
        description: "230 resources available",
      },
      {
        id: 5,
        title: "Ask Doubts",
        icon: "message",
        status: "normal",
        color: "indigo",
        description: "Teacher available now",
      },
      {
        id: 6,
        title: "Check Schedule",
        icon: "calendar",
        status: "normal",
        color: "violet",
        description: "5 classes today",
      },
    ],
    // Today's Timetable
    todayTimetable: [
      {
        period: 1,
        subject: "Mathematics",
        time: "08:00 - 09:00",
        teacher: "Ms. Kumar",
        room: "Room 201",
        type: "Lecture",
        status: "completed",
      },
      {
        period: 2,
        subject: "English",
        time: "09:00 - 10:00",
        teacher: "Mr. Davis",
        room: "Room 105",
        type: "Literature",
        status: "completed",
      },
      {
        period: 3,
        subject: "Physics",
        time: "10:30 - 11:30",
        teacher: "Mr. Sharma",
        room: "Lab 3",
        type: "Lab",
        status: "current",
        timeLeft: "15 min",
      },
      {
        period: 4,
        subject: "Chemistry",
        time: "11:30 - 12:30",
        teacher: "Dr. Patel",
        room: "Lab 2",
        type: "Practical",
        status: "upcoming",
      },
      {
        period: 5,
        subject: "History",
        time: "14:00 - 15:00",
        teacher: "Mrs. Singh",
        room: "Room 303",
        type: "Discussion",
        status: "upcoming",
      },
    ],
    // Today's Homework
    todayHomework: [
      {
        id: 1,
        title: "Trigonometry Worksheet",
        subject: "Math",
        dueTime: "Today 5:00 PM",
        progress: 60,
        status: "in-progress",
        priority: "high",
      },
      {
        id: 2,
        title: "Essay on Climate Change",
        subject: "English",
        dueTime: "Today 11:59 PM",
        progress: 0,
        status: "pending",
        priority: "high",
      },
      {
        id: 3,
        title: "Physics Lab Report",
        subject: "Physics",
        dueTime: "Tomorrow 9:00 AM",
        progress: 90,
        status: "almost-done",
        priority: "medium",
      },
    ],
    // Achievement Badges
    achievementBadges: [
      {
        id: 1,
        title: "5 Day Streak",
        icon: "🔥",
        color: "orange",
        description: "Perfect attendance",
      },
      {
        id: 2,
        title: "Math Wizard",
        icon: "🎯",
        color: "blue",
        description: "95% in Math test",
      },
      {
        id: 3,
        title: "Quick Learner",
        icon: "⚡",
        color: "yellow",
        description: "Completed 10 modules",
      },
      {
        id: 4,
        title: "Team Player",
        icon: "🤝",
        color: "green",
        description: "Group project excellence",
      },
    ],
    // Multiple Upcoming Exams
    upcomingExams: [
      {
        id: 1,
        subject: "Mathematics Mid-Term",
        date: "2026-01-24",
        daysLeft: 5,
        syllabus: "Chapters 1-5",
        priority: "high",
      },
      {
        id: 2,
        subject: "Physics Unit Test",
        date: "2026-01-27",
        daysLeft: 8,
        syllabus: "Optics & Waves",
        priority: "medium",
      },
      {
        id: 3,
        subject: "Chemistry Practical",
        date: "2026-01-29",
        daysLeft: 10,
        syllabus: "Organic Chemistry",
        priority: "medium",
      },
    ],
  },

  // Screen 2: Timetable
  timetable: {
    monday: [
      { period: 1, subject: "Math", time: "08:00 - 09:00", type: "Lecture" },
      { period: 2, subject: "English", time: "09:00 - 10:00", type: "Lecture" },
      { period: 3, subject: "Physics", time: "10:30 - 11:30", type: "Lab" },
    ],
    tuesday: [
      { period: 1, subject: "Chemistry", time: "08:00 - 09:00", type: "Lab" },
    ],
  },

  // Screen 3: Attendance
  attendance: {
    heatmap: {
      present: ["2026-01-01", "2026-01-02", "2026-01-03", "2026-01-05"],
      absent: ["2026-01-04"],
    },
    totalDays: 120,
    presentDays: 112,
    percentage: 93.3,
  },

  // Screen 4: Assignments
  assignments: [
    {
      id: 1,
      title: "Trigonometry Worksheet",
      subject: "Math",
      dueDate: "Today",
      status: "Pending",
      progress: 0,
    },
    {
      id: 2,
      title: "Essay on Romeo & Juliet",
      subject: "English",
      dueDate: "Tommorow",
      status: "In Progress",
      progress: 50,
    },
    {
      id: 3,
      title: "Chemical Reactions Lab",
      subject: "Chemistry",
      dueDate: "2026-01-10",
      status: "Submitted",
      grade: "A",
    },
  ],

  // Screen 5: Resources
  resources: [
    {
      id: 1,
      title: "Calculus Basics",
      subject: "Math",
      type: "Video",
      url: "#",
    },
    {
      id: 2,
      title: "World War II Notes",
      subject: "History",
      type: "PDF",
      url: "#",
    },
  ],

  // Screen 6: Exams
  exams: [
    {
      id: 1,
      title: "Math Mid-Term",
      date: "2026-01-15",
      time: "09:00 AM",
      syllabus: "Chapters 1-5",
    },
    {
      id: 2,
      title: "Physics Unit Test",
      date: "2026-01-20",
      time: "10:00 AM",
      syllabus: "Optics",
    },
  ],

  // Screen 7: Grades
  grades: [
    { subject: "Mathematics", term1: 85, term2: 92, trend: "up" },
    { subject: "English", term1: 78, term2: 80, trend: "up" },
    { subject: "Science", term1: 88, term2: 85, trend: "down" },
  ],

  // Screen 8: Communication
  messages: [
    {
      id: 1,
      from: "Mrs. Davis (English)",
      content: "Great job on the essay!",
      time: "2 hrs ago",
      unread: true,
    },
    {
      id: 2,
      from: "Admin Office",
      content: "Fee reminder for Term 2",
      time: "Yesterday",
      unread: false,
    },
  ],

  // Screen 9: Analytics
  analytics: {
    strength: { math: 90, science: 85, english: 75, history: 60, sports: 95 },
    rank: 5,
    percentile: "92nd",
  },

  // Screen 10: Fees
  fees: {
    totalDue: 1500,
    dueDate: "2026-01-31",
    status: "Pending",
    history: [{ id: 101, date: "2025-09-01", amount: 1500, status: "Paid" }],
  },

  // Screen 11: Behavior
  behavior: {
    points: 120,
    logs: [
      { date: "2026-01-05", type: "Positive", note: "Helped organize library" },
      { date: "2025-12-20", type: "Warning", note: "Late to class" },
    ],
  },

  // Screen 12: Profile
  profile: {
    goals: ["Score 95% in Math", "Join Debate Club"],
    interests: ["Robotics", "Football"],
    clubs: ["Science Club", "Football Team"],
  },

  // Screen 14: CCA
  activities: [
    {
      id: 1,
      name: "Inter-School Debate",
      date: "2025-11-10",
      role: "Participant",
      achievement: "Runner Up",
    },
    {
      id: 2,
      name: "Annual Sports Day",
      date: "2025-12-05",
      role: "Volunteer",
      achievement: "Organizer Badge",
    },
  ],
};
