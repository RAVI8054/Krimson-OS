import React from 'react';
import { Users, FileText, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Card, StatCard } from './SharedComponents';
import { Link } from 'react-router-dom';

const RegistrarDashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">Registrar Overview</h1>
        <p className="text-slate-500">Welcome to the Registrar Control Center.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
            title="Total Students" 
            value="1,248" 
            label="Total Students"
            icon={Users} 
            color="text-blue-500" 
            bg="bg-blue-50"
        />
        <StatCard 
            title="New Inquiries" 
            value="18" 
            label="Pending Inquiries"
            icon={FileText} 
            color="text-amber-500" 
            bg="bg-amber-50"
        />
        <StatCard 
            title="Compliance" 
            value="98%" 
            label="Audit Ready"
            icon={CheckCircle} 
            color="text-green-500" 
            bg="bg-green-50"
        />
        <StatCard 
            title="Reports Due" 
            value="2" 
            label="Action Required"
            icon={AlertCircle} 
            color="text-rose-500" 
            bg="bg-rose-50"
        />
      </div>

      <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Quick Access</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/dashboard/registrar/admissions" className="group">
            <Card className="hover:border-blue-300 transition-all cursor-pointer h-full">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Users className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-700 text-lg">Admissions</h4>
                </div>
                <p className="text-slate-500 text-sm mb-4">Manage new student inquiries, applications, and enrollments.</p>
                <div className="flex items-center text-blue-600 font-bold text-sm gap-2">View Workflow <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/></div>
            </Card>
          </Link>

          <Link to="/dashboard/registrar/records" className="group">
            <Card className="hover:border-purple-300 transition-all cursor-pointer h-full">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-purple-100 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <FileText className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-700 text-lg">Student Records</h4>
                </div>
                <p className="text-slate-500 text-sm mb-4">Access centralized student profiles and document repository.</p>
                <div className="flex items-center text-purple-600 font-bold text-sm gap-2">Manage Records <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/></div>
            </Card>
          </Link>

          <Link to="/dashboard/registrar/compliance" className="group">
            <Card className="hover:border-emerald-300 transition-all cursor-pointer h-full">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-700 text-lg">Compliance</h4>
                </div>
                <p className="text-slate-500 text-sm mb-4">Monitor regulatory reports and PEI/SSG requirements.</p>
                <div className="flex items-center text-emerald-600 font-bold text-sm gap-2">Check Status <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/></div>
            </Card>
          </Link>
      </div>
    </div>
  );
};

export default RegistrarDashboard;
