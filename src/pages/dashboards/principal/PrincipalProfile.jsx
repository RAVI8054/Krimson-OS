import React from 'react';
import { 
  User, 
  Shield, 
  PenTool, 
  Lock, 
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  UserCheck,
  FileSignature,
  Key,
  Upload,
  Edit3,
  Camera,
  CheckCircle,
  AlertCircle,
  Clock,
  Building,
  Users,
  Settings
} from 'lucide-react';

const PrincipalProfile = () => {
  // Static data for principal profile
  const principalData = {
    name: 'Dr. Robert Anderson',
    title: 'Principal & Chief Academic Officer',
    employeeId: 'P-1001',
    joinDate: 'January 2018',
    email: 'robert.anderson@krimsonschool.edu',
    phone: '+91 98765 43210',
    location: 'New Delhi, India',
    qualification: 'PhD in Educational Leadership',
    university: 'University of Cambridge',
    experience: '18 years in Education',
    profileImage: null, // Will show placeholder
    bio: 'Dedicated educational leader with a passion for fostering academic excellence and holistic student development. Committed to creating an inclusive learning environment that empowers both students and staff.',
    achievements: [
      'National Excellence Award in Education 2024',
      'Certified Educational Administrator',
      'Published 12 research papers on pedagogy'
    ],
    professionalHistory: [
      { year: '2018 - Present', role: 'Principal', institution: 'Krimson International School' },
      { year: '2014 - 2018', role: 'Vice Principal', institution: 'Delhi Public School' },
      { year: '2010 - 2014', role: 'Academic Coordinator', institution: 'St. Xavier\'s School' }
    ]
  };

  // Proxy access data
  const proxyData = {
    assignedTo: 'Ms. Sarah Johnson',
    role: 'Vice Principal',
    accessLevel: 'Temporary Administrative Access',
    validUntil: '31 Dec 2026',
    status: 'active',
    grantedOn: '15 Jan 2026'
  };

  // Digital signature data
  const signatureData = {
    status: 'active',
    issuedOn: '01 Jan 2024',
    validUntil: '31 Dec 2026',
    certificateId: 'DS-2024-P1001-K',
    issuer: 'National Digital Signature Authority',
    securityLevel: 'Level 3 - Highest'
  };

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Page Header */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-100 via-blue-100 to-cyan-100 rounded-full blur-2xl opacity-40 -ml-24 -mb-24"></div>
        
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-2xl flex items-center justify-center text-white shadow-xl">
            <Shield size={32} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              Principal Profile & Credentials
            </h1>
            <p className="text-slate-600 mt-1 text-sm md:text-base">
              Manage profile, credentials, and institutional representation
            </p>
          </div>
        </div>
      </div>

      {/* Main Profile Card */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
        {/* Cover Image Section */}
        <div className="h-40 md:h-48 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -mr-20 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-2xl -ml-16 -mb-20"></div>
          
          {/* Profile Picture */}
          <div className="absolute -bottom-16 md:-bottom-20 left-6 md:left-8">
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white p-2 shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
                  {principalData.profileImage ? (
                    <img src={principalData.profileImage} alt="Principal" className="w-full h-full rounded-2xl object-cover" />
                  ) : (
                    <User size={64} />
                  )}
                </div>
              </div>
              <button className="absolute bottom-2 right-2 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera size={18} />
              </button>
            </div>
          </div>

          {/* Security Badge */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/30 flex items-center gap-2">
            <Shield className="text-white" size={16} />
            <span className="text-white text-sm font-semibold">Administrative Security Level</span>
          </div>
        </div>

        {/* Profile Content */}
        <div className="pt-20 md:pt-24 px-6 md:px-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">{principalData.name}</h2>
              <p className="text-slate-600 mt-1 flex items-center gap-2">
                <Building size={16} />
                {principalData.title}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  Since {principalData.joinDate}
                </span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="flex items-center gap-1">
                  <Award size={14} />
                  {principalData.employeeId}
                </span>
              </div>
            </div>
            
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
              <Edit3 size={18} />
              <span>Edit Profile</span>
              <span className="text-xs opacity-80">(get in app)</span>
            </button>
          </div>

          {/* Contact & Bio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Mail className="text-cyan-600" size={18} />
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="text-slate-400 flex-shrink-0 mt-1" size={16} />
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-sm font-medium text-slate-800">{principalData.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-slate-400 flex-shrink-0 mt-1" size={16} />
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="text-sm font-medium text-slate-800">{principalData.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-slate-400 flex-shrink-0 mt-1" size={16} />
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="text-sm font-medium text-slate-800">{principalData.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <User className="text-blue-600" size={18} />
                  Professional Bio
                </h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                  <Edit3 size={14} />
                  Update <span className="text-xs opacity-70">(get in app)</span>
                </button>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm">{principalData.bio}</p>
              
              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="text-purple-600" size={18} />
                    <div>
                      <p className="text-xs text-slate-500">Qualification</p>
                      <p className="text-sm font-semibold text-slate-800">{principalData.qualification}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="text-indigo-600" size={18} />
                    <div>
                      <p className="text-xs text-slate-500">Experience</p>
                      <p className="text-sm font-semibold text-slate-800">{principalData.experience}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional History & Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Professional History */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Briefcase className="text-indigo-600" size={18} />
                  Professional History
                </h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                  <Upload size={14} />
                  Update <span className="text-xs opacity-70">(get in app)</span>
                </button>
              </div>
              <div className="space-y-4">
                {principalData.professionalHistory.map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center flex-shrink-0">
                        <Building className="text-blue-600" size={16} />
                      </div>
                      {idx < principalData.professionalHistory.length - 1 && (
                        <div className="w-0.5 h-full bg-gradient-to-b from-blue-200 to-transparent mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="text-xs text-slate-500 font-semibold">{item.year}</p>
                      <p className="font-bold text-slate-800">{item.role}</p>
                      <p className="text-sm text-slate-600">{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Award className="text-amber-600" size={18} />
                Key Achievements
              </h3>
              <div className="space-y-3">
                {principalData.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-sm text-slate-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security & Access Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Digital Signature Management */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-blue-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FileSignature className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Digital Signature Management</h3>
                  <p className="text-xs text-slate-600">For official document approvals</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                  <div>
                    <p className="text-xs text-slate-500">Status</p>
                    <div className="flex items-center gap-2 mt-1">
                      <CheckCircle className="text-green-600" size={16} />
                      <p className="font-bold text-green-600 text-sm">Active & Verified</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded-xl">
                    <p className="text-xs text-slate-500">Issued On</p>
                    <p className="font-semibold text-slate-800 text-sm">{signatureData.issuedOn}</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl">
                    <p className="text-xs text-slate-500">Valid Until</p>
                    <p className="font-semibold text-slate-800 text-sm">{signatureData.validUntil}</p>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl">
                  <p className="text-xs text-slate-500 mb-1">Certificate ID</p>
                  <p className="font-mono font-bold text-slate-800 text-sm">{signatureData.certificateId}</p>
                </div>

                <div className="p-3 bg-white rounded-xl">
                  <p className="text-xs text-slate-500 mb-1">Security Level</p>
                  <div className="flex items-center gap-2">
                    <Shield className="text-purple-600" size={16} />
                    <p className="font-semibold text-purple-600 text-sm">{signatureData.securityLevel}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm">
                  <Settings size={16} />
                  Manage Signature
                  <span className="text-xs opacity-80">(get in app)</span>
                </button>
              </div>
            </div>

            {/* Proxy Access Assignment */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl border-2 border-pink-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <UserCheck className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Proxy Access Assignment</h3>
                  <p className="text-xs text-slate-600">Delegate access to Vice Principal</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 mb-4 border border-slate-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                      <Users className="text-purple-700" size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{proxyData.assignedTo}</p>
                      <p className="text-xs text-slate-500">{proxyData.role}</p>
                    </div>
                  </div>
                  
                  {/* Toggle Switch */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-600 peer-checked:to-purple-600"></div>
                  </label>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Access Level</span>
                    <span className="font-semibold text-slate-800">{proxyData.accessLevel}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Granted On</span>
                    <span className="font-semibold text-slate-800">{proxyData.grantedOn}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Valid Until</span>
                    <div className="flex items-center gap-1">
                      <Clock className="text-amber-600" size={14} />
                      <span className="font-semibold text-amber-600">{proxyData.validUntil}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-green-600">Access Currently Active</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm">
                  <Key size={16} />
                  Modify Access
                  <span className="text-xs opacity-80">(get in app)</span>
                </button>
              </div>

              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-xs text-amber-800">
                    Proxy access grants temporary administrative permissions. Review and update regularly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Integration & SSO Info */}
          <div className="mt-6 bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <Shield className="text-cyan-600" size={18} />
                  System Integration & Security
                </h4>
                <p className="text-sm text-slate-600">
                  This profile is synchronized with <span className="font-semibold text-blue-600">Single Sign-On (SSO)</span> and integrated with the <span className="font-semibold text-purple-600">HR/Staff Database</span> for seamless authentication and access management.
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-xl border border-green-200">
                <CheckCircle className="text-green-600" size={16} />
                <span className="text-sm font-semibold text-green-700">SSO Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalProfile;
