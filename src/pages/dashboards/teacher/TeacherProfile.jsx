import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, Award, Calendar, 
  Download, Upload, Edit, BookOpen, Users, 
  TrendingUp, Star, CheckCircle, FileText, Briefcase
} from 'lucide-react';

/**
 * Screen 15: Teacher Profile & Professional Portfolio
 * Purpose: Manage professional profile and showcase teaching achievements
 * Features:
 * - Personal information and subjects taught
 * - Upload teaching credentials and certificates
 * - Display professional growth milestones
 * - Peer and Principal endorsements
 * - Sharable "Digital Teaching Portfolio" PDF
 */

const TeacherProfile = () => {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  // Static data - ready for API integration
  const teacherData = {
    name: "Sarah Martinez",
    designation: "Senior Mathematics Teacher",
    employeeId: "TCH-2019-045",
    email: "sarah.martinez@school.edu",
    phone: "+1 (555) 123-4567",
    location: "Science Block, Room 204",
    department: "Mathematics Department",
    yearsOfExperience: 8,
    bio: "Passionate educator dedicated to making mathematics accessible and engaging for all students. Specializing in innovative teaching methodologies and student-centered learning approaches.",
    avatar: "SM",
    subjects: [
      { name: "Advanced Calculus", grade: "Grade 11-12", students: 45 },
      { name: "Algebra II", grade: "Grade 10", students: 38 },
      { name: "Geometry", grade: "Grade 9", students: 42 },
    ],
    stats: {
      totalStudents: 125,
      classesManaged: 3,
      workshopsAttended: 12,
      certificationsEarned: 8
    }
  };

  const credentials = [
    { id: 1, title: "Master's in Mathematics Education", institution: "University of Education", year: "2018", type: "Degree" },
    { id: 2, title: "Teaching Excellence Certification", institution: "National Board", year: "2020", type: "Certificate" },
    { id: 3, title: "Advanced Pedagogy Training", institution: "Educational Institute", year: "2021", type: "Certificate" },
    { id: 4, title: "Digital Learning Specialist", institution: "Tech Education Center", year: "2022", type: "Certificate" },
  ];

  const milestones = [
    { id: 1, title: "Joined Krimson School", date: "2019-08-15", type: "Career", icon: Briefcase },
    { id: 2, title: "Student-Centered Learning Workshop", date: "2020-03-10", type: "Workshop", icon: Users },
    { id: 3, title: "Teacher of the Year Award", date: "2021-05-20", type: "Achievement", icon: Award },
    { id: 4, title: "Advanced Mathematics Pedagogy", date: "2021-09-15", type: "Workshop", icon: BookOpen },
    { id: 5, title: "STEM Education Conference", date: "2022-07-08", type: "Conference", icon: TrendingUp },
    { id: 6, title: "Digital Teaching Tools Certification", date: "2023-01-12", type: "Certificate", icon: CheckCircle },
  ];

  const endorsements = [
    { 
      id: 1, 
      name: "Dr. Robert Chen", 
      role: "Principal", 
      avatar: "RC",
      rating: 5, 
      comment: "Sarah demonstrates exceptional dedication to student success and consistently implements innovative teaching methods.",
      date: "2023-06-15"
    },
    { 
      id: 2, 
      name: "Emily Johnson", 
      role: "Vice Principal", 
      avatar: "EJ",
      rating: 5, 
      comment: "Outstanding collaborative spirit and mentorship to new teachers. A true asset to our mathematics department.",
      date: "2023-05-20"
    },
    { 
      id: 3, 
      name: "Michael Brown", 
      role: "Senior Teacher - Science", 
      avatar: "MB",
      rating: 5, 
      comment: "Sarah's interdisciplinary approach and willingness to collaborate across departments is exemplary.",
      date: "2023-04-10"
    },
  ];

  const handleDownloadPortfolio = () => {
    // Placeholder for PDF generation API call
    console.log("Generating Digital Teaching Portfolio PDF...");
    alert("PDF Portfolio generation will be implemented with backend API");
  };

  const handleUploadCredential = (e) => {
    // Placeholder for file upload API call
    const file = e.target.files[0];
    if (file) {
      console.log("Uploading credential:", file.name);
      alert(`File "${file.name}" ready for upload. Backend integration pending.`);
    }
  };

  const subjectColors = [
    'from-cyan-400 to-blue-500',
    'from-blue-400 to-pink-500',
    'from-pink-400 to-cyan-500'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* Gradient Banner */}
          <div className="h-32 md:h-40 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-10 w-32 h-32 bg-pink-300/30 rounded-full blur-2xl"></div>
          </div>

          {/* Profile Info */}
          <div className="px-6 md:px-8 pb-8 -mt-16 relative z-10">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
              {/* Avatar */}
              <div className="relative">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-2xl border-4 border-white">
                  {teacherData.avatar}
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                  <Edit className="w-4 h-4 text-blue-600" />
                </button>
              </div>

              {/* Name and Info */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {teacherData.name}
                </h1>
                <p className="text-lg text-gray-600 font-medium mb-1">{teacherData.designation}</p>
                <p className="text-sm text-gray-500">Employee ID: {teacherData.employeeId}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 w-full md:w-auto">
                <button 
                  onClick={handleDownloadPortfolio}
                  className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2 justify-center"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Portfolio</span>
                </button>
                <button className="flex-1 md:flex-none px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-200 flex items-center gap-2 justify-center">
                  <Edit className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 via-blue-50 to-pink-50 rounded-2xl border border-cyan-100">
              <p className="text-gray-700 leading-relaxed">{teacherData.bio}</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Students", value: teacherData.stats.totalStudents, icon: Users, gradient: "from-cyan-400 to-blue-500" },
            { label: "Classes Managed", value: teacherData.stats.classesManaged, icon: BookOpen, gradient: "from-blue-400 to-pink-500" },
            { label: "Workshops Attended", value: teacherData.stats.workshopsAttended, icon: TrendingUp, gradient: "from-pink-400 to-cyan-500" },
            { label: "Certifications", value: teacherData.stats.certificationsEarned, icon: Award, gradient: "from-cyan-500 to-pink-500" },
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-colors">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email Address</p>
                  <p className="text-gray-800 font-medium">{teacherData.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-colors">
                <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                  <p className="text-gray-800 font-medium">{teacherData.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-colors">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="text-gray-800 font-medium">{teacherData.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-colors">
                <Briefcase className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Department</p>
                  <p className="text-gray-800 font-medium">{teacherData.department}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-colors">
                <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Years of Experience</p>
                  <p className="text-gray-800 font-medium">{teacherData.yearsOfExperience} years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subjects Taught */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-400 to-pink-500 rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Subjects Taught</h2>
            </div>

            <div className="space-y-4">
              {teacherData.subjects.map((subject, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-102 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{subject.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${subjectColors[index]} shadow-md`}>
                          {subject.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">{subject.students} Students</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Teaching Credentials & Certificates */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-pink-400 to-cyan-500 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Teaching Credentials & Certificates</h2>
            </div>
            <label className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2 cursor-pointer">
              <Upload className="w-4 h-4" />
              <span>Upload Certificate</span>
              <input 
                type="file" 
                className="hidden" 
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleUploadCredential}
              />
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {credentials.map((credential) => (
              <div 
                key={credential.id}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-gray-800 leading-tight">{credential.title}</h3>
                      <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold rounded-full">
                        {credential.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{credential.institution}</p>
                    <p className="text-xs text-gray-500">Year: {credential.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Growth Milestones */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Professional Growth Milestones</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-pink-400 rounded-full"></div>

            <div className="space-y-6">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const gradients = [
                  'from-cyan-400 to-blue-500',
                  'from-blue-400 to-pink-500',
                  'from-pink-400 to-cyan-500'
                ];
                const gradient = gradients[index % gradients.length];

                return (
                  <div key={milestone.id} className="relative flex gap-6 group">
                    {/* Timeline Node */}
                    <div className={`hidden md:flex w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10 flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h3 className="font-bold text-lg text-gray-800">{milestone.title}</h3>
                        <span className={`px-3 py-1 bg-gradient-to-r ${gradient} text-white text-xs font-semibold rounded-full w-fit`}>
                          {milestone.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{new Date(milestone.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Peer & Principal Endorsements */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-400 to-pink-400 rounded-xl">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Peer & Principal Endorsements</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {endorsements.map((endorsement) => (
              <div 
                key={endorsement.id}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 flex items-center justify-center text-white font-bold shadow-md">
                    {endorsement.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{endorsement.name}</h3>
                    <p className="text-xs text-gray-500">{endorsement.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(endorsement.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-gray-700 leading-relaxed mb-3 line-clamp-4">
                  "{endorsement.comment}"
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(endorsement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeacherProfile;
