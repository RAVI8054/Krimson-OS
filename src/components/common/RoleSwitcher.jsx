import React, { useState } from 'react';
import { ChevronDown, RefreshCw } from 'lucide-react';
import { authService } from '../../services/authService';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const RoleSwitcher = ({ currentUser }) => {
    // ... logic ...
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // If no roles array or only 1 role, don't show switcher
    if (!currentUser?.roles || currentUser.roles.length <= 1) {
        return null;
    }


    const handleSwitchRole = async (role) => {
        setLoading(true);
        try {
            await authService.switchRole(role);
            toast.success(`Switched role to ${role}`);
            window.location.reload(); // Reload to refresh context/dashboard
        } catch (error) {
            console.error("Failed to switch role:", error);
            toast.error(error.message || "Failed to switch role");
        } finally {
            setLoading(false);
            setIsOpen(false);
        }
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                disabled={loading}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 text-sm font-medium text-slate-600 transition-colors"
            >
                {loading ? <RefreshCw className="h-4 w-4 animate-spin" /> : null}
                <span>Switch Role</span>
                <ChevronDown className="h-4 w-4" />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-2">
                        <p className="px-2 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Available Roles
                        </p>
                        {currentUser.roles.map((role) => (
                            <button
                                key={role}
                                onClick={() => handleSwitchRole(role)}
                                disabled={role === currentUser.role}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-1 transition-colors flex items-center justify-between
                                    ${role === currentUser.role
                                        ? 'bg-blue-50 text-blue-700 font-semibold'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                {role}
                                {role === currentUser.role && <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Backdrop to close */}
            {isOpen && (
                <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
            )}
        </div>
    );
};

RoleSwitcher.propTypes = {
    currentUser: PropTypes.shape({
        role: PropTypes.string,
        roles: PropTypes.arrayOf(PropTypes.string)
    })
};

export default RoleSwitcher;
