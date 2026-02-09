import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PARENT_DATA } from "../../../data/parentData";
import ProfileHeader from "../../../components/dashboard/parent/ParentProfile/ProfileHeader";
import PersonalInfoTab from "../../../components/dashboard/parent/ParentProfile/PersonalInfoTab";
import SecurityTab from "../../../components/dashboard/parent/ParentProfile/SecurityTab";
import PreferencesTab from "../../../components/dashboard/parent/ParentProfile/PreferencesTab";
import PermissionsTab from "../../../components/dashboard/parent/ParentProfile/PermissionsTab";
import ActivityLogTab from "../../../components/dashboard/parent/ParentProfile/ActivityLogTab";

const ParentProfile = () => {
  const { user, children, profileData } = PARENT_DATA;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  const [notificationPrefs, setNotificationPrefs] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const handleLogout = () => {
    navigate("/login");
  };

  const toggleNotification = (type) => {
    setNotificationPrefs((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-in-up">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Account Settings
          </h1>
          <p className="text-slate-500 text-sm">
            Manage your personal information, security, and preferences.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar Navigation */}
        <ProfileHeader
          user={user}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onLogout={handleLogout}
        />

        {/* Right Content Area */}
        <div className="flex-1 space-y-6">
          {/* PERSONAL INFO TAB */}
          {activeTab === "profile" && (
            <PersonalInfoTab user={user} children={children} />
          )}

          {/* SECURITY TAB */}
          {activeTab === "security" && (
            <SecurityTab loginHistory={profileData?.loginHistory || []} />
          )}

          {/* PREFERENCES TAB */}
          {activeTab === "preferences" && (
            <PreferencesTab
              notificationPrefs={notificationPrefs}
              toggleNotification={toggleNotification}
            />
          )}

          {/* PERMISSIONS TAB */}
          {activeTab === "permissions" && <PermissionsTab user={user} />}

          {/* ACTIVITY LOG TAB */}
          {activeTab === "activity" && (
            <ActivityLogTab activityLogs={profileData?.activityLogs || []} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ParentProfile;
