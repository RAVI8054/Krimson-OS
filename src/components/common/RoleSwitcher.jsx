import React, { useState } from 'react';
import { ChevronDown, RefreshCw } from 'lucide-react';
import { authService } from '../../services/authService';
// import { useNavigate } from 'react-router-dom'; // keeping it simple with window.location for full refresh
import { getDashboardPath } from '../../utils/roleNavigation';
import PropTypes from 'prop-types';
import { store } from '../../store';
import { addNotification } from '../../store/slices/uiSlice';

const RoleSwitcher = ({ currentUser }) => {
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // If no roles array or only 1 role, don't show switcher
    if (!currentUser?.roles || currentUser.roles.length <= 1) {
        return null; // Or render nothing
    }


    const handleSwitchRole = async (role) => {
        setLoading(true);
        try {
            await authService.switchRole(role);
            store.dispatch(addNotification({ type: 'success', message: `Switched role to ${role}` }));
            
            // Smart Redirect Logic
            const currentPath = window.location.pathname;
            const isDashboard = currentPath.startsWith('/dashboard');

            if (isDashboard) {
                 // If we are already inside a specific dashboard, we must move to the new role's dashboard
                 const targetPath = getDashboardPath(role);
                 window.location.href = targetPath;
            } else {
                 // If we are on a neutral page (like Welcome), just reload to update the state in place
                 window.location.reload(); 
            }
            
        } catch (error) {
            console.error("Failed to switch role:", error);
            store.dispatch(addNotification({ type: 'error', message: error.message || 'Failed to switch role' }));
            setLoading(false); 
        } finally {
            if (!loading) { 
                 setIsOpen(false);
            }
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
        roles: PropTypes.arrayOf(PropTypes.string),
        name: PropTypes.string // Add name to propTypes if used later, though not used here
    })
};

export default RoleSwitcher;
