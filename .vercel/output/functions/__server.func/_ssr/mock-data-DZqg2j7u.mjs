const employees = [
  { id: "e1", name: "Emma Thompson", role: "Senior Designer", department: "Design", status: "Active", salary: "£62,000", joinDate: "12 Jan 2024", email: "emma.t@acme.co" },
  { id: "e2", name: "John Carter", role: "Software Engineer", department: "Engineering", status: "On Leave", salary: "£71,500", joinDate: "03 Mar 2023", email: "john.c@acme.co" },
  { id: "e3", name: "Sarah Jones", role: "HR Manager", department: "People", status: "Active", salary: "£68,000", joinDate: "21 Sep 2022", email: "sarah.j@acme.co" },
  { id: "e4", name: "Liam Patel", role: "Account Executive", department: "Sales", status: "Active", salary: "£54,000", joinDate: "08 May 2024", email: "liam.p@acme.co" },
  { id: "e5", name: "Olivia Brown", role: "Marketing Lead", department: "Marketing", status: "Probation", salary: "£58,000", joinDate: "17 Feb 2025", email: "olivia.b@acme.co" },
  { id: "e6", name: "Noah Wilson", role: "Finance Analyst", department: "Finance", status: "Active", salary: "£49,500", joinDate: "01 Jun 2023", email: "noah.w@acme.co" }
];
const employeeTimeline = {
  e1: [
    { date: "Jan 2025", title: "Joined Company", description: "Started as Senior Designer in the Design team." },
    { date: "Feb 2025", title: "Contract Uploaded", description: "Employment contract signed and filed." },
    { date: "Apr 2025", title: "Salary Increase Approved", description: "Approved by Sarah Jones following performance review." },
    { date: "Jun 2025", title: "Leave Approved", description: "10 days annual leave approved." },
    { date: "Aug 2025", title: "Training Completed", description: "Advanced Figma certification completed." }
  ],
  e2: [
    { date: "Mar 2023", title: "Joined Company", description: "Hired as Software Engineer." },
    { date: "Nov 2024", title: "Promotion Reviewed", description: "Promotion to Senior Engineer under review." },
    { date: "May 2025", title: "Leave Approved", description: "Parental leave approved — payroll adjustment pending." }
  ],
  e3: [
    { date: "Sep 2022", title: "Joined Company", description: "Hired as HR Manager." },
    { date: "Mar 2025", title: "Promotion Approved", description: "Promoted to Head of People — payroll update missing." }
  ]
};
const recentActivity = [
  { type: "Promotion Approved", who: "Sarah Jones", when: "2 hours ago" },
  { type: "Salary Change", who: "Emma Thompson", when: "Yesterday" },
  { type: "Leave Approved", who: "John Carter", when: "2 days ago" },
  { type: "Contract Updated", who: "Liam Patel", when: "4 days ago" }
];
const riskAlerts = [
  { id: "r1", severity: "High", title: "Salary increase approved but payroll update missing", employee: "Emma Thompson", status: "Open", description: "April 2025 salary uplift approved by Sarah Jones — no corresponding payroll record found." },
  { id: "r2", severity: "High", title: "Promotion approved but payroll grade not updated", employee: "Sarah Jones", status: "Open", description: "Promotion to Head of People recorded in March 2025 without payroll grade change." },
  { id: "r3", severity: "Medium", title: "Employee onboarded but contract not uploaded", employee: "Olivia Brown", status: "In Progress", description: "Start date passed without signed employment contract on file." },
  { id: "r4", severity: "Medium", title: "Right To Work document expiring in 30 days", employee: "Liam Patel", status: "Open", description: "Visa documentation requires renewal by next month." },
  { id: "r5", severity: "Low", title: "Training certificate expires in 14 days", employee: "Noah Wilson", status: "Open", description: "AML compliance certificate renewal required." }
];
const payrollReady = [
  { employee: "Emma Thompson", change: "Salary Change", note: "April uplift verified" },
  { employee: "Liam Patel", change: "Contract Updated", note: "New terms reflected" },
  { employee: "Noah Wilson", change: "Bonus Approved", note: "Q2 performance bonus" }
];
const payrollNeedsReview = [
  { employee: "John Carter", change: "Leave Approved", note: "Payroll adjustment missing" },
  { employee: "Sarah Jones", change: "Promotion Approved", note: "Payroll grade update missing" }
];
const compliance = [
  { employee: "Emma Thompson", document: "Right To Work", status: "Valid", expiry: "12 Jan 2027" },
  { employee: "Emma Thompson", document: "DBS Check", status: "Valid", expiry: "10 Mar 2026" },
  { employee: "John Carter", document: "Right To Work", status: "Valid", expiry: "03 Mar 2028" },
  { employee: "Sarah Jones", document: "DBS Check", status: "Expiring Soon", expiry: "02 Feb 2026" },
  { employee: "Liam Patel", document: "Right To Work", status: "Expiring Soon", expiry: "20 Jan 2026" },
  { employee: "Noah Wilson", document: "Training Certificate", status: "Expiring Soon", expiry: "28 Jan 2026" },
  { employee: "Olivia Brown", document: "Employment Contract", status: "Expired", expiry: "10 Nov 2025" }
];
const documents = [
  { name: "Employment Contract — Emma Thompson.pdf", employee: "Emma Thompson", type: "Employment Contract", date: "12 Jan 2024", body: "This Employment Contract sets out the terms of employment between Acme Co. and Emma Thompson, effective 12 January 2024. Position: Senior Designer. Salary: £62,000 per annum. Notice period: 1 month." },
  { name: "DBS Certificate — Sarah Jones.pdf", employee: "Sarah Jones", type: "DBS Certificate", date: "02 Feb 2024", body: "Enhanced DBS Certificate issued to Sarah Jones. No convictions or cautions recorded. Valid for verification purposes." },
  { name: "Right To Work — John Carter.pdf", employee: "John Carter", type: "Right To Work", date: "03 Mar 2023", body: "Right to Work verification confirmed for John Carter under Share Code provided. Eligibility verified to 03 March 2028." },
  { name: "Training Certificate — Noah Wilson.pdf", employee: "Noah Wilson", type: "Training Certificate", date: "28 Jan 2025", body: "AML Compliance training successfully completed by Noah Wilson. Valid for 12 months from issue." },
  { name: "Employment Contract — Liam Patel.pdf", employee: "Liam Patel", type: "Employment Contract", date: "08 May 2024", body: "Employment Contract for Liam Patel as Account Executive. Salary: £54,000. Commission scheme attached." }
];
const aiSuggestedQuestions = [
  "Why was Emma promoted?",
  "When was John's leave approved?",
  "Show salary changes for Sarah.",
  "Which employees have expiring documents?"
];
const aiResponses = {
  "Why was Emma promoted?": {
    answer: "Emma Thompson's salary uplift in April 2025 was approved by Sarah Jones following a strong Q1 performance review. The decision is recorded in the workforce memory with linked evidence.",
    evidence: [
      { title: "Performance Review — Q1 2025", date: "10 April 2025", source: "Document" },
      { title: "Approval by Sarah Jones", date: "15 April 2025", source: "Decision Log" }
    ]
  },
  "When was John's leave approved?": {
    answer: "John Carter's parental leave was approved on 18 May 2025 by Sarah Jones. A payroll adjustment is still pending and has been flagged in Risk Alerts.",
    evidence: [
      { title: "Leave Request — John Carter", date: "12 May 2025", source: "Form" },
      { title: "Approval Note", date: "18 May 2025", source: "Decision Log" }
    ]
  },
  "Show salary changes for Sarah.": {
    answer: "Sarah Jones was promoted to Head of People in March 2025. A payroll grade update tied to this promotion is currently missing and has been flagged.",
    evidence: [
      { title: "Promotion Memo", date: "06 March 2025", source: "Document" },
      { title: "Open Risk Alert", date: "06 March 2025", source: "Risk Engine" }
    ]
  },
  "Which employees have expiring documents?": {
    answer: "Three employees have documentation expiring within 30 days: Sarah Jones (DBS), Liam Patel (Right To Work), Noah Wilson (Training Certificate).",
    evidence: [
      { title: "Compliance Snapshot", date: "Today", source: "Compliance Module" }
    ]
  }
};
export {
  recentActivity as a,
  aiResponses as b,
  aiSuggestedQuestions as c,
  payrollNeedsReview as d,
  employees as e,
  documents as f,
  compliance as g,
  employeeTimeline as h,
  payrollReady as p,
  riskAlerts as r
};
