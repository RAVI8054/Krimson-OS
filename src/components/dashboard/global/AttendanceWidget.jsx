import React from 'react';
import { UserCheck, UserX, Clock } from 'lucide-react';

const AttendanceWidget = () => {
    // Mock data - replace with API data
    const stats = {
        present: 85,
        absent: 10,
        late: 5
    };

    return (
        <div className="h-full w-full bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col cursor-grab active:cursor-grabbing">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-800 font-semibold text-lg">Attendance Today</h3>
                <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                    Live Updates
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-4">
                {/* Present */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <UserCheck className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Present</p>
                            <p className="font-bold text-gray-800">{stats.present}%</p>
                        </div>
                    </div>
                    <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: `${stats.present}%` }}></div>
                    </div>
                </div>

                {/* Absent */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 rounded-lg">
                            <UserX className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Absent</p>
                            <p className="font-bold text-gray-800">{stats.absent}%</p>
                        </div>
                    </div>
                    <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500" style={{ width: `${stats.absent}%` }}></div>
                    </div>
                </div>

                {/* Late */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                            <Clock className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Late</p>
                            <p className="font-bold text-gray-800">{stats.late}%</p>
                        </div>
                    </div>
                    <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500" style={{ width: `${stats.late}%` }}></div>
                    </div>
                </div>
            </div>

            {/* API Integration Comment */}
            {/* TODO: Connect to GET /api/attendance/today/summary */}
        </div>
    );
};

export default AttendanceWidget;
