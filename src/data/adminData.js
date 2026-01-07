export const ADMIN_DATA = {
  // Screen 1: Overview
  overview: {
     users: 2450,
     staff: 150,
     classes: 45,
     courses: 12,
     attendance: { students: 96, staff: 98 },
     pipeline: { inquiries: 120, verified: 45, enrolled: 12 },
     finance: { collected: 450000, due: 120000 },
     alerts: [
        { id: 1, text: "Fire Safety Inspection Due", type: "Urgent" },
        { id: 2, text: "Waitlist exceeding capacity in Grade 1", type: "Warning" }
     ]
  },

  // Screen 2: Admissions
  admissions: [
     { id: 101, name: "Rahul S.", stage: "Applied", date: "2026-01-05", grade: "5" },
     { id: 102, name: "Sarah J.", stage: "Verified", date: "2026-01-04", grade: "8" },
     { id: 103, name: "Mike T.", stage: "Enrolled", date: "2026-01-02", grade: "3" }
  ],

  // Screen 4: Class Config (User Mgmt is dynamic)
  classes: [
     { id: "5A", grade: 5, section: "A", teacher: "Mrs. Davis", students: 32 },
     { id: "5B", grade: 5, section: "B", teacher: "Mr. Lee", students: 30 }
  ],

  // Screen 5: HR
  staff: [
      { id: "T01", name: "Alisha K.", role: "Teacher", status: "Active", attendance: "Present" },
      { id: "T02", name: "Bob M.", role: "Admin", status: "On Leave", attendance: "Absent" }
  ],

  // Screen 6: Finance
  finance: {
      transactions: [
          { id: "TX123", date: "2026-01-07", amount: 5000, type: "Fee Payment", status: "Success" }
      ],
      pending: 120000
  },

  // Screen 7: Attendance Oversight
  attendanceLog: [
      { class: "5A", present: 30, absent: 2, teacher: "Present" },
      { class: "5B", present: 28, absent: 2, teacher: "Present" }
  ],

  // Screen 8: Notifications
  notifications: [
      { id: 1, title: "School Closed", date: "2025-12-24", groups: ["All"], status: "Sent" }
  ],

  // Screen 9: Compliance
  documents: [
      { name: "Fire Safety Cert", expiry: "2026-06-01", status: "Valid" },
      { name: "Staff CPR Training", expiry: "2026-02-15", status: "Expiring Soon" }
  ],

  // Screen 10: Audit
  auditLogs: [
      { id: 1, user: "Admin", action: "Created User", time: "10:30 AM" },
      { id: 2, user: "Principal", action: "Approved Leave", time: "11:15 AM" }
  ],

  // Screen 11: Infrastructure
  infrastructure: [
      { item: "Laptops", total: 50, inUse: 45, maintenance: 2 },
      { item: "Projectors", total: 10, inUse: 10, maintenance: 0 }
  ],

  // Screen 12: Backup
  backups: [
      { date: "2026-01-06", size: "2.5 GB", status: "Success" },
      { date: "2026-01-05", size: "2.4 GB", status: "Success" }
  ],

  // Screen 13: Analytics
  analytics: {
      conversionRate: 65,
      feeCollection: [80, 85, 90, 92], // Mock trend
      staffUtilization: 95
  },

  // Screen 15: Helpdesk
  tickets: [
      { id: "TK101", subject: "Login Issue", from: "Parent", status: "Open", priority: "High" },
      { id: "TK102", subject: "Projector Fault", from: "Teacher", status: "Resolved", priority: "Medium" }
  ]
};
