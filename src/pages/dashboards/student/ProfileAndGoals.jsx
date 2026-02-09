import React, { useState } from "react";
import UserProfile from "../../../components/common/UserProfile";
import { STUDENT_DATA } from "../../../data/studentData";
import { authService } from "../../../services/authService";
import { User, Lock, Bell, Shield, FileText } from "lucide-react";

// Components
import SecuritySettings from "../../../components/dashboard/student/ProfileAndGoals/SecuritySettings";
import SystemPreferences from "../../../components/dashboard/student/ProfileAndGoals/SystemPreferences";
import RolePermissions from "../../../components/dashboard/student/ProfileAndGoals/RolePermissions";
import ActivityLog from "../../../components/dashboard/student/ProfileAndGoals/ActivityLog";
import EditProfileModal from "../../../components/dashboard/student/ProfileAndGoals/EditProfileModal";
import ManageListModal from "../../../components/dashboard/student/ProfileAndGoals/ManageListModal";

const ProfileAndGoals = () => {
  const { profile, user, analytics, profileActivityLog } = STUDENT_DATA;
  const [profileData, setProfileData] = useState(profile);
  const [userData, setUserData] = useState(
    authService.getCurrentUser() || user,
  );

  // Tab State
  const [activeTab, setActiveTab] = useState("overview"); // 'overview', 'security', 'preferences', 'permissions', 'activity'

  // Modal States
  const [activeModal, setActiveModal] = useState(null);
  const [newItemText, setNewItemText] = useState("");

  // Settings State
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    dashboardLayout: "grid",
    theme: "light",
  });

  const activityLog = profileActivityLog.recentActivity;

  // Handlers
  const handleEditProfile = () => setActiveModal("profile");
  const handleEditGoals = () => setActiveModal("goals");
  const handleEditInterests = () => setActiveModal("interests");
  const handleEditClubs = () => setActiveModal("clubs");
  const closeModal = () => {
    setActiveModal(null);
    setNewItemText("");
  };

  const handleAddItem = (field) => {
    if (!newItemText.trim()) return;
    setProfileData((prev) => ({
      ...prev,
      [field]: [...prev[field], newItemText],
    }));
    setNewItemText("");
  };

  const handleRemoveItem = (field, index) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setUserData((prev) => ({
      ...prev,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    }));
    closeModal();
  };

  const combinedProfileData = {
    ...profileData,
    overallGrade: analytics.grade,
    onEditProfile: handleEditProfile,
    onEditGoals: handleEditGoals,
    onEditInterests: handleEditInterests,
    onEditClubs: handleEditClubs,
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-10">
      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-100 flex overflow-x-auto">
        {[
          {
            id: "overview",
            label: "Profile Overview",
            icon: <User size={18} />,
          },
          {
            id: "security",
            label: "Security & Login",
            icon: <Lock size={18} />,
          },
          { id: "preferences", label: "Preferences", icon: <Bell size={18} /> },
          {
            id: "permissions",
            label: "Permissions",
            icon: <Shield size={18} />,
          },
          {
            id: "activity",
            label: "Activity Log",
            icon: <FileText size={18} />,
          },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex justify-center items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content Area */}

      {/* OVERVIEW TAB */}
      {activeTab === "overview" && (
        <UserProfile
          role="student"
          user={userData}
          detailedInfo={combinedProfileData}
        />
      )}

      {/* SECURITY TAB */}
      {activeTab === "security" && <SecuritySettings />}

      {/* PREFERENCES TAB */}
      {activeTab === "preferences" && (
        <SystemPreferences
          preferences={preferences}
          setPreferences={setPreferences}
        />
      )}

      {/* PERMISSIONS TAB */}
      {activeTab === "permissions" && <RolePermissions />}

      {/* ACTIVITY LOG TAB */}
      {activeTab === "activity" && <ActivityLog activityLog={activityLog} />}

      {/* Modals */}
      {/* 1. Edit Profile Modal */}
      {activeModal === "profile" && (
        <EditProfileModal
          userData={userData}
          onClose={closeModal}
          onUpdate={handleUpdateUser}
        />
      )}

      {/* 2. Edit Goals Modal */}
      {activeModal === "goals" && (
        <ManageListModal
          title="Manage Academic Goals"
          items={profileData.goals}
          newItemText={newItemText}
          setNewItemText={setNewItemText}
          onAdd={() => handleAddItem("goals")}
          onRemove={(idx) => handleRemoveItem("goals", idx)}
          onClose={closeModal}
          color="blue"
        />
      )}

      {/* 3. Edit Interests Modal */}
      {activeModal === "interests" && (
        <ManageListModal
          title="Update Interests"
          items={profileData.interests}
          newItemText={newItemText}
          setNewItemText={setNewItemText}
          onAdd={() => handleAddItem("interests")}
          onRemove={(idx) => handleRemoveItem("interests", idx)}
          onClose={closeModal}
          color="pink"
        />
      )}

      {/* 4. Edit Clubs Modal */}
      {activeModal === "clubs" && (
        <ManageListModal
          title="Manage Clubs"
          items={profileData.clubs}
          newItemText={newItemText}
          setNewItemText={setNewItemText}
          onAdd={() => handleAddItem("clubs")}
          onRemove={(idx) => handleRemoveItem("clubs", idx)}
          onClose={closeModal}
          color="cyan"
        />
      )}
    </div>
  );
};

export default ProfileAndGoals;
