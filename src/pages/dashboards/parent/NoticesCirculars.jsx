import React, { useState } from "react";
import { PARENT_DATA } from "../../../data/parentData";
import NoticesHeader from "../../../components/dashboard/parent/NoticesCirculars/NoticesHeader";
import NoticesFilter from "../../../components/dashboard/parent/NoticesCirculars/NoticesFilter";
import NoticesList from "../../../components/dashboard/parent/NoticesCirculars/NoticesList";

const NoticesCirculars = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all"); // all, urgent, saved

  const notices = PARENT_DATA.noticesData?.notices || [];
  const categories = PARENT_DATA.noticesData?.categories || [];

  const filteredNotices = notices.filter((notice) => {
    const matchesCategory =
      selectedCategory === "all" || notice.category === selectedCategory;
    const matchesSearch =
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "urgent" && notice.priority === "high") ||
      (activeTab === "saved" && notice.saved); // Mock saved logic
    return matchesCategory && matchesSearch && matchesTab;
  });

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Page Header */}
      <NoticesHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Tabs & Categories */}
      <NoticesFilter
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      {/* Timeline Layout */}
      <NoticesList
        notices={filteredNotices}
        onClearFilters={handleClearFilters}
      />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default NoticesCirculars;
