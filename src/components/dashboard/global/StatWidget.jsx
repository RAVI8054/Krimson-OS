import React from 'react';
import { Users, GraduationCap, School } from 'lucide-react';

const StatWidget = ({ title, count, type }) => {
    const getIcon = () => {
        switch (type) {
            case 'student': return <GraduationCap className="h-6 w-6 text-blue-500" />;
            case 'teacher': return <Users className="h-6 w-6 text-green-500" />;
            case 'class': return <School className="h-6 w-6 text-purple-500" />;
            default: return <Users className="h-6 w-6 text-gray-500" />;
        }
    };

    const getColor = () => {
        switch (type) {
            case 'student': return 'bg-blue-50 border-blue-200';
            case 'teacher': return 'bg-green-50 border-green-200';
            case 'class': return 'bg-purple-50 border-purple-200';
            default: return 'bg-gray-50 border-gray-200';
        }
    };

    return (
        <div className={`h-full w-full p-4 rounded-xl border-2 ${getColor()} flex flex-col justify-between transition-all hover:shadow-md cursor-grab active:cursor-grabbing`}>
            <div className="flex justify-between items-start">
                <h3 className="text-gray-600 font-medium text-sm">{title}</h3>
                {getIcon()}
            </div>

            <div className="mt-2">
                <span className="text-3xl font-bold text-gray-800">{count}</span>
                <div className="text-xs text-gray-500 mt-1 flex items-center">
                    <span className="text-green-600 font-medium mr-1">↑ 12%</span>
                    <span>vs last month</span>
                </div>
            </div>

            {/* Visual Indicator Bar */}
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                <div className="bg-current h-1.5 rounded-full w-[70%]" style={{ color: type === 'student' ? '#3b82f6' : type === 'teacher' ? '#22c55e' : '#a855f7' }}></div>
            </div>

            {/* API Integration Comment */}
            {/* TODO: Connect to GET /api/stats/summary for real counts */}
        </div>
    );
};

export default StatWidget;
