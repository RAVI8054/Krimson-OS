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
      {
        period: 1,
        subject: "Math",
        time: "08:00 - 09:00",
        type: "Lecture",
        teacher: "Ms. Kumar",
        room: "Room 201",
        teacherImage: "https://i.pravatar.cc/150?img=5",
        status: "completed",
        isSubstitute: false,
      },
      {
        period: 2,
        subject: "English",
        time: "09:00 - 10:00",
        type: "Lecture",
        teacher: "Mr. Davis",
        room: "Room 105",
        teacherImage: "https://i.pravatar.cc/150?img=3",
        status: "completed",
        isSubstitute: false,
      },
      {
        period: 3,
        subject: "Physics",
        time: "10:30 - 11:30",
        type: "Lab",
        teacher: "Mr. Sharma",
        room: "Lab 3",
        teacherImage: "https://i.pravatar.cc/150?img=11",
        status: "active",
        isSubstitute: true,
      },
      {
        period: 4,
        subject: "Chemistry",
        time: "11:30 - 12:30",
        type: "Lecture",
        teacher: "Mrs. Patel",
        room: "Lab 2",
        teacherImage: "https://i.pravatar.cc/150?img=9",
        status: "upcoming",
        isSubstitute: false,
      },
    ],
    tuesday: [
      {
        period: 1,
        subject: "Chemistry",
        time: "08:00 - 09:00",
        type: "Lab",
        teacher: "Mrs. Patel",
        room: "Lab 2",
        teacherImage: "https://i.pravatar.cc/150?img=9",
        status: "upcoming",
        isSubstitute: false,
      },
      {
        period: 2,
        subject: "History",
        time: "09:00 - 10:00",
        type: "Lecture",
        teacher: "Mr. Thompson",
        room: "Room 304",
        teacherImage: "https://i.pravatar.cc/150?img=15",
        status: "upcoming",
        isSubstitute: false,
      },
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
    weeklyAttendance: [
      { week: "Week 1", percentage: 98 },
      { week: "Week 2", percentage: 95 },
      { week: "Week 3", percentage: 92 },
      { week: "Week 4", percentage: 96 },
    ],
  },

  // Screen 4: Assignments
  assignments: [
    {
      id: 1,
      title: "Trigonometry Worksheet",
      subject: "Math",
      dueDate: "Today",
      daysLeft: 0,
      status: "Pending",
      progress: 0,
      type: "Worksheet",
      plagiarismScore: 0,
      plagiarismFlag: false,
    },
    {
      id: 2,
      title: "Essay on Romeo & Juliet",
      subject: "English",
      dueDate: "Tomorrow",
      daysLeft: 1,
      status: "In Progress",
      progress: 50,
      type: "Essay",
      plagiarismScore: 0,
      plagiarismFlag: false,
    },
    {
      id: 3,
      title: "Chemical Reactions Lab",
      subject: "Chemistry",
      dueDate: "2026-01-10",
      status: "Graded",
      grade: "A",
      maxGrade: "A+",
      teacherFeedback:
        "Excellent analysis of the reaction rates. Your conclusion was very well supported by the data.",
      type: "Lab Report",
      plagiarismScore: 2,
      plagiarismFlag: false,
      submittedFile: "chem_lab_report.pdf",
    },
    {
      id: 4,
      title: "History Research Paper",
      subject: "History",
      dueDate: "2026-01-05",
      status: "Submitted",
      progress: 100,
      type: "Research Paper",
      plagiarismScore: 12,
      plagiarismFlag: true,
      submittedFile: "history_paper_draft.docx",
    },
  ],

  // Screen 5: Resources
  // Screen 5: Resources
  resources: [
    {
      id: 1,
      subject: "MATH",
      title: "Calculus Basics",
      type: "Document",
      chapter: "Chapter 4",
      topic: "Calculus",
      week: "Week 1",
      source: "NCERT",
      saved: false,
      read: false,
      url: "#",
    },
    {
      id: 2,
      subject: "HISTORY",
      title: "World War II Notes",
      type: "Document",
      chapter: "Chapter 4",
      topic: "World War II",
      week: "Week 2",
      source: "NCERT",
      saved: true,
      read: false,
      url: "#",
    },
    {
      id: 3,
      subject: "PHYSICS",
      title: "Gravity Experiment",
      type: "Experiment",
      chapter: "Chapter 2",
      topic: "Gravitation",
      week: "Week 3",
      source: "Lab Manual",
      saved: false,
      read: true,
      url: "#",
    },
    {
      id: 4,
      subject: "CHEMISTRY",
      title: "Chemical Reactions",
      type: "Video",
      chapter: "Chapter 5",
      topic: "Organic Chemistry",
      week: "Week 4",
      source: "Khan Academy",
      saved: true,
      read: false,
      url: "#",
    },
    {
      id: 5,
      subject: "BIOLOGY",
      title: "Cell Structure",
      type: "Document",
      chapter: "Chapter 1",
      topic: "Cell Biology",
      week: "Week 1",
      source: "NCERT",
      saved: false,
      read: false,
      url: "#",
    },
    {
      id: 6,
      subject: "MATH",
      title: "Algebra Introduction",
      type: "Video",
      chapter: "Chapter 3",
      topic: "Algebra",
      week: "Week 2",
      source: "MIT OCW",
      saved: false,
      read: true,
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
    // Overall Statistics
    totalPoints: 120,
    rank: "Excellent",
    percentile: "Top 10%",

    // Attendance Trends (for chart)
    attendanceTrends: [
      { month: "Sep", percentage: 95 },
      { month: "Oct", percentage: 92 },
      { month: "Nov", percentage: 98 },
      { month: "Dec", percentage: 94 },
      { month: "Jan", percentage: 96 },
    ],
    punctuality: {
      onTime: 85,
      late: 3,
      percentage: 96.6,
    },

    // Positive Behavior Log
    achievements: [
      {
        id: 1,
        title: "Class Monitor",
        description: "Demonstrated excellent leadership as class monitor",
        points: 25,
        date: "2026-01-15",
        teacher: "Ms. Kumar",
        category: "Leadership",
      },
      {
        id: 2,
        title: "Library Organization",
        description:
          "Organized and catalogued 200+ books in the school library",
        points: 15,
        date: "2026-01-05",
        teacher: "Mrs. Davis",
        category: "Community Service",
      },
      {
        id: 3,
        title: "Science Fair Winner",
        description: "Led team to win first place in inter-school science fair",
        points: 30,
        date: "2025-12-18",
        teacher: "Mr. Sharma",
        category: "Academic",
      },
      {
        id: 4,
        title: "Peer Tutor",
        description: "Helped 5 classmates improve their mathematics grades",
        points: 20,
        date: "2025-12-10",
        teacher: "Ms. Kumar",
        category: "Academic",
      },
    ],

    participationPoints: [
      { subject: "Mathematics", points: 18, maxPoints: 20 },
      { subject: "Science", points: 20, maxPoints: 20 },
      { subject: "English", points: 15, maxPoints: 20 },
      { subject: "History", points: 12, maxPoints: 20 },
    ],

    // Warnings with Counselor Notes
    warnings: [
      {
        id: 1,
        type: "Punctuality",
        severity: "Minor",
        description: "Late to class by 10 minutes",
        date: "2025-12-20",
        teacher: "Mrs. Singh",
        counselorNotes:
          "Student has been advised to manage time better. Parents have been notified. Showed improvement in following week. Continue monitoring.",
        resolved: true,
      },
    ],

    // Consistency Streak
    consistencyStreak: 3,
    streakType: "Zero late arrivals",

    // Legacy logs for backward compatibility
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

  // Screen 13: Parent Link Dashboard
  parentLinkData: {
    // Parent Information
    parentInfo: {
      name: "John Johnson",
      email: "john.johnson@email.com",
      phone: "+1 234-567-8900",
      relationship: "Father",
      linkedDate: "2025-09-01",
      syncEnabled: true,
    },

    // Read-Only Data Mirror (What Parent Sees)
    mirrorData: {
      attendance: {
        percentage: 94.5,
        present: 85,
        absent: 5,
        leave: 0,
        totalDays: 90,
      },
      latestResults: {
        term: "Term 2 - 2025",
        overall: "A Grade",
        overallPercentage: 91,
        subjects: [
          { name: "Mathematics", grade: "A", percentage: 92 },
          { name: "Science", grade: "A+", percentage: 96 },
          { name: "English", grade: "B+", percentage: 85 },
          { name: "History", grade: "A", percentage: 88 },
        ],
      },
      feeStatus: {
        totalDue: 15000,
        paid: 10000,
        pending: 5000,
        dueDate: "2026-02-15",
        status: "Partially Paid",
      },
    },

    // Parental Messages & Alerts
    parentalMessages: [
      {
        id: 1,
        from: "Parent",
        subject: "Permission for field trip",
        message:
          "Please ensure you have all necessary items for the upcoming field trip. Pack your kit tonight and double-check the permission slip.",
        date: "2026-01-18",
        time: "10:30 AM",
        read: false,
        requiresAck: true,
        acknowledged: false,
      },
      {
        id: 2,
        from: "Parent",
        subject: "Study schedule",
        message:
          "We've reviewed your exam timetable. Let's prepare a study schedule this weekend.",
        date: "2026-01-15",
        time: "07:00 PM",
        read: true,
        requiresAck: false,
        acknowledged: false,
      },
    ],

    // Teacher Comments for Parents
    teacherComments: [
      {
        id: 1,
        teacher: "Ms. Kumar",
        subject: "Mathematics",
        comment:
          "Excellent progress this term. Alex shows strong analytical skills and participates actively in class. Keep up the good work!",
        date: "2026-01-15",
        sharedWithParent: true,
        read: false,
      },
      {
        id: 2,
        teacher: "Mr. Sharma",
        subject: "Science",
        comment:
          "Outstanding performance in the science fair project. Alex demonstrated excellent research and presentation skills.",
        date: "2026-01-10",
        sharedWithParent: true,
        read: true,
      },
    ],

    // Joint Activities Requiring Acknowledgment
    jointActivities: [
      {
        id: 1,
        title: "Parent-Teacher Meeting",
        description:
          "Scheduled for next week to discuss term progress and upcoming exams. Your attendance is mandatory.",
        date: "2026-01-25",
        time: "2:00 PM",
        location: "School Main Hall",
        requiresBothAck: true,
        studentAck: false,
        parentAck: true,
      },
      {
        id: 2,
        title: "Field Trip Consent",
        description:
          "Science Museum visit on Feb 5th. Both student and parent acknowledgment required for participation.",
        date: "2026-02-05",
        time: "9:00 AM",
        location: "Science Museum",
        requiresBothAck: true,
        studentAck: false,
        parentAck: false,
      },
    ],
  },

  // Screen 14: Co-Curricular Activities & Achievements
  cocurricularActivities: {
    // Overall Stats
    totalPoints: 185,
    totalActivities: 12,
    certificatesEarned: 6,

    // Activity Categories
    categories: [
      { name: "Sports", count: 5, points: 80, icon: "Trophy" },
      { name: "Arts", count: 4, points: 60, icon: "Palette" },
      { name: "Debate", count: 3, points: 45, icon: "MessageSquare" },
    ],

    // Detailed Activity Log
    activities: [
      {
        id: 1,
        name: "Inter-School Football Championship",
        category: "Sports",
        type: "Competition",
        role: "Team Captain",
        achievement: "Runner Up",
        points: 30,
        date: "2026-01-10",
        description:
          "Led team to finals in regional football tournament with 15 participating schools",
        status: "Completed",
        certificate: true,
      },
      {
        id: 2,
        name: "Annual Art Exhibition",
        category: "Arts",
        type: "Exhibition",
        role: "Participant",
        achievement: "Best Painting Award",
        points: 25,
        date: "2026-01-05",
        description:
          "Exhibited watercolor painting series on environmental themes",
        status: "Completed",
        certificate: true,
      },
      {
        id: 3,
        name: "State-Level Debate Championship",
        category: "Debate",
        type: "Competition",
        role: "Speaker",
        achievement: "Quarter Finalist",
        points: 20,
        date: "2025-12-18",
        description:
          "Participated in state debate championship on climate change policy",
        status: "Completed",
        certificate: true,
      },
      {
        id: 4,
        name: "Basketball Tournament",
        category: "Sports",
        type: "Competition",
        role: "Player",
        achievement: "Winner",
        points: 25,
        date: "2025-12-05",
        description: "Won inter-house basketball tournament as key player",
        status: "Completed",
        certificate: false,
      },
      {
        id: 5,
        name: "Drama Society Performance",
        category: "Arts",
        type: "Performance",
        role: "Lead Actor",
        achievement: "Best Actor",
        points: 20,
        date: "2025-11-20",
        description:
          "Performed lead role in school annual play 'Shakespeare Reimagined'",
        status: "Completed",
        certificate: true,
      },
      {
        id: 6,
        name: "Model UN Conference",
        category: "Debate",
        type: "Conference",
        role: "Delegate",
        achievement: "Best Delegate",
        points: 15,
        date: "2025-11-10",
        description:
          "Represented as delegate for Model UN conference on global security",
        status: "Completed",
        certificate: true,
      },
      {
        id: 7,
        name: "Swimming Gala",
        category: "Sports",
        type: "Competition",
        role: "Participant",
        achievement: "Silver Medal",
        points: 15,
        date: "2025-10-28",
        description: "Won silver medal in 100m freestyle swimming event",
        status: "Completed",
        certificate: false,
      },
      {
        id: 8,
        name: "Music Competition",
        category: "Arts",
        type: "Competition",
        role: "Performer",
        achievement: "Runner Up",
        points: 10,
        date: "2025-10-15",
        description:
          "Performed classical guitar piece in inter-school music competition",
        status: "Completed",
        certificate: true,
      },
      {
        id: 9,
        name: "Elocution Contest",
        category: "Debate",
        type: "Competition",
        role: "Speaker",
        achievement: "Winner",
        points: 10,
        date: "2025-09-25",
        description:
          "Won first place in school elocution contest on 'Future of Technology'",
        status: "Completed",
        certificate: false,
      },
      {
        id: 10,
        name: "Cricket Tournament",
        category: "Sports",
        type: "Competition",
        role: "Organizer",
        achievement: "Organizer Badge",
        points: 5,
        date: "2025-09-15",
        description: "Organized and managed inter-class cricket tournament",
        status: "Completed",
        certificate: false,
      },
      {
        id: 11,
        name: "Photography Workshop",
        category: "Arts",
        type: "Workshop",
        role: "Participant",
        achievement: "Certificate of Completion",
        points: 5,
        date: "2025-09-08",
        description:
          "Completed 3-day workshop on digital photography techniques",
        status: "Completed",
        certificate: false,
      },
      {
        id: 12,
        name: "Athletics Meet",
        category: "Sports",
        type: "Competition",
        role: "Volunteer",
        achievement: "Volunteer Badge",
        points: 5,
        date: "2025-09-01",
        description:
          "Volunteered for annual school athletics meet organization",
        status: "Completed",
        certificate: false,
      },
    ],

    // Achievement Timeline (chronological by month)
    timeline: [
      {
        month: "January",
        year: "2026",
        achievements: [
          { name: "Football Championship", category: "Sports", points: 30 },
          { name: "Art Exhibition", category: "Arts", points: 25 },
        ],
      },
      {
        month: "December",
        year: "2025",
        achievements: [
          { name: "Debate Championship", category: "Debate", points: 20 },
          { name: "Basketball Tournament", category: "Sports", points: 25 },
        ],
      },
      {
        month: "November",
        year: "2025",
        achievements: [
          { name: "Drama Performance", category: "Arts", points: 20 },
          { name: "Model UN", category: "Debate", points: 15 },
        ],
      },
      {
        month: "October",
        year: "2025",
        achievements: [
          { name: "Swimming Gala", category: "Sports", points: 15 },
          { name: "Music Competition", category: "Arts", points: 10 },
        ],
      },
      {
        month: "September",
        year: "2025",
        achievements: [
          { name: "Elocution Contest", category: "Debate", points: 10 },
          { name: "Cricket Tournament", category: "Sports", points: 5 },
          { name: "Photography Workshop", category: "Arts", points: 5 },
          { name: "Athletics Meet", category: "Sports", points: 5 },
        ],
      },
    ],
  },

  // Legacy activities for backward compatibility
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
