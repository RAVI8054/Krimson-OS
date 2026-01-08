// ============================================================================
// 🔴 API INTEGRATION PENDING - MOCK DATA FOR DEVELOPMENT ONLY
// ============================================================================
// This file contains static mock data for admin dashboard features.
// When backend APIs are ready, replace imports from this file with
// service layer calls from src/services/adminService.js
//
// Backend Endpoints Needed:
// - GET /api/admin/dashboard        (overview stats)
// - GET /api/admin/admissions        (admissions pipeline)
// - GET /api/admin/classes           (class configurations)
// - GET /api/admin/staff             (HR management)
// - GET /api/admin/finance           (financial overview)
// - GET /api/admin/attendance        (attendance logs)
// - GET /api/admin/notifications     (notification history)
// - GET /api/admin/compliance        (compliance documents)
// - GET /api/admin/audit             (audit logs)
// - GET /api/admin/infrastructure    (infrastructure inventory)
// - GET /api/admin/backups           (backup logs)
// - GET /api/admin/analytics         (analytics data)
// - GET /api/admin/tickets           (helpdesk tickets)
// ============================================================================

export const ADMIN_DATA = {
  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 1: Overview
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/dashboard
  // Action: Replace 'overview' object with API call
  // Error Handling: Add try/catch, loading state, retry logic
  // Refresh Rate: Real-time via WebSocket or poll every 30 seconds
  // Auth: Requires admin JWT token in Authorization header
  // ---------------------------------------------------
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

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 2: Admissions
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/admissions?status=all&limit=50
  // Query Params: status (applied|verified|enrolled), grade, dateRange
  // Action: Replace 'admissions' array with paginated API response
  // Features Needed: Filtering, sorting, pagination, search
  // ---------------------------------------------------
  admissions: [
     { id: 101, name: "Rahul S.", stage: "Applied", date: "2026-01-05", grade: "5" },
     { id: 102, name: "Sarah J.", stage: "Verified", date: "2026-01-04", grade: "8" },
     { id: 103, name: "Mike T.", stage: "Enrolled", date: "2026-01-02", grade: "3" }
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 4: Class Config
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/classes
  // Action: Replace 'classes' array with API call
  // Features: CRUD operations (Create/Read/Update/Delete classes)
  // Related Routes:
  //   - POST /api/admin/classes (create new class)
  //   - PUT /api/admin/classes/:id (update class)
  //   - DELETE /api/admin/classes/:id (delete class)
  // ---------------------------------------------------
  classes: [
     { id: "5A", grade: 5, section: "A", teacher: "Mrs. Davis", students: 32 },
     { id: "5B", grade: 5, section: "B", teacher: "Mr. Lee", students: 30 }
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 5: HR/Staff Management
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/staff
  // Action: Replace 'staff' array with API call
  // Features: Staff profiles, attendance tracking, leave management
  // Real-time: Update attendance status via WebSocket
  // ---------------------------------------------------
  staff: [
      { id: "T01", name: "Alisha K.", role: "Teacher", status: "Active", attendance: "Present" },
      { id: "T02", name: "Bob M.", role: "Admin", status: "On Leave", attendance: "Absent" }
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 6: Finance Control
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/finance/overview
  // Action: Replace 'finance' object with API call
  // Features: Transactions list, pending payments, reports
  // Related Routes:
  //   - GET /api/admin/finance/transactions?page=1&limit=20
  //   - GET /api/admin/finance/pending
  // ---------------------------------------------------
  finance: {
      transactions: [
          { id: "TX123", date: "2026-01-07", amount: 5000, type: "Fee Payment", status: "Success" }
      ],
      pending: 120000
  },

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 7: Attendance Oversight
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/attendance/summary?date=2026-01-08
  // Action: Replace 'attendanceLog' array with API call
  // Real-time: Poll every 5 minutes or use WebSocket
  // ---------------------------------------------------
  attendanceLog: [
      { class: "5A", present: 30, absent: 2, teacher: "Present" },
      { class: "5B", present: 28, absent: 2, teacher: "Present" }
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 8: Notification Center
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/notifications
  // Related Routes:
  //   - POST /api/admin/notifications (send new notification)
  //   - PUT /api/admin/notifications/:id (update notification)
  // Features: Create, schedule, track delivery status
  // ---------------------------------------------------
  notifications: [
      { id: 1, title: "School Closed", date: "2025-12-24", groups: ["All"], status: "Sent" }
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 9: Compliance Vault
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/compliance/documents
  // Action: Replace 'documents' array with API call
  // Features: Upload documents, track expiry, send alerts
  // Related Routes:
  //   - POST /api/admin/compliance/documents (upload)
  //   - GET /api/admin/compliance/expiring (get expiring docs)
  // ---------------------------------------------------
  documents: [
      { name: "Fire Safety Cert", expiry: "2026-06-01", status: "Valid" },
      { name: "Staff CPR Training", expiry: "2026-02-15", status: "Expiring Soon" }
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 10: Audit Trail
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/audit/logs?page=1&limit=50
  // Query Params: user, action, dateRange, level (info|warn|error)
  // Features: Filterable logs, export to CSV, search
  // Security: Immutable logs, requires admin privileges
  // ---------------------------------------------------
  auditLogs: [
      { id: 1, user: "Admin", action: "Created User", time: "10:30 AM" },
      { id: 2, user: "Principal", action: "Approved Leave", time: "11:15 AM" }
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 11: Infrastructure
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/infrastructure/inventory
  // Action: Replace 'infrastructure' array with API call
  // Features: Asset tracking, maintenance scheduling, status updates
  // ---------------------------------------------------
  infrastructure: [
      { item: "Laptops", total: 50, inUse: 45, maintenance: 2 },
      { item: "Projectors", total: 10, inUse: 10, maintenance: 0 }
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 12: Backup & Recovery
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/backups/history
  // Related Routes:
  //   - POST /api/admin/backups/trigger (manual backup)
  //   - POST /api/admin/backups/restore (restore from backup)
  // Features: View history, trigger backup, restore
  // ---------------------------------------------------
  backups: [
      { date: "2026-01-06", size: "2.5 GB", status: "Success" },
      { date: "2026-01-05", size: "2.4 GB", status: "Success" }
  ],

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 13: Analytics Engine
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/analytics
  // Query Params: metric, period (daily|weekly|monthly|yearly)
  // Action: Replace 'analytics' object with API call
  // Features: Charts, trend analysis, predictive insights
  // ---------------------------------------------------
  analytics: {
      conversionRate: 65,
      feeCollection: [80, 85, 90, 92], // Percentage by month
      staffUtilization: 95
  },

  // ---------------------------------------------------
  // TODO: API INTEGRATION POINT - Screen 15: Helpdesk/Support
  // ---------------------------------------------------
  // Backend Route: GET /api/admin/tickets?status=open&priority=high
  // Related Routes:
  //   - POST /api/admin/tickets (create ticket)
  //   - PUT /api/admin/tickets/:id (update/resolve ticket)
  //   - POST /api/admin/tickets/:id/comments (add comment)
  // Features: Ticket management, assignment, SLA tracking
  // ---------------------------------------------------
  tickets: [
      { id: "TK101", subject: "Login Issue", from: "Parent", status: "Open", priority: "High" },
      { id: "TK102", subject: "Projector Fault", from: "Teacher", status: "Resolved", priority: "Medium" }
  ]
};
