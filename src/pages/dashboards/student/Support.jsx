import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import {
  HelpCircle,
  MessageSquare,
  Heart,
  Shield,
  Book,
  User,
} from "lucide-react";

// Components
import SupportHeader from "../../../components/dashboard/student/Support/SupportHeader";
import FAQSection from "../../../components/dashboard/student/Support/FAQSection";
import RequestHelpSection from "../../../components/dashboard/student/Support/RequestHelpSection";
import WellbeingSection from "../../../components/dashboard/student/Support/WellbeingSection";
import GovtRegulationsSection from "../../../components/dashboard/student/Support/GovtRegulationsSection";

const Support = () => {
  const [activeTab, setActiveTab] = useState("FAQs"); // FAQs | Request Help | Wellness | Govt & Regulations
  const [searchQuery, setSearchQuery] = useState("");

  const { supportFaqs } = STUDENT_DATA;

  // Handle supportFaqs - it could be an array or object
  const faqs = Array.isArray(supportFaqs)
    ? supportFaqs
    : supportFaqs?.faqs || [];
  const wellnessArticles = supportFaqs?.wellnessArticles || [
    {
      icon: "Book",
      color: "green",
      title: "Managing Exam Stress",
      desc: "Practical techniques to stay calm during exams.",
      action: "Read Article",
    },
    {
      icon: "Heart",
      color: "blue",
      title: "Building Resilience",
      desc: "Develop mental strength to handle challenges.",
      action: "Learn More",
    },
    {
      icon: "User",
      color: "purple",
      title: "Self-Care Tips",
      desc: "Simple habits for better mental health.",
      action: "Explore Tips",
    },
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-8 pb-10 max-w-6xl mx-auto animate-fade-in-up">
      {/* Hero Header */}
      <SupportHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {[
          "FAQs",
          "Request Help",
          "Connect with Wellbeing",
          "Govt & Regulations",
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 ${
              activeTab === tab
                ? "bg-cyan-500 text-white shadow-cyan-200"
                : "bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {tab === "FAQs" && <HelpCircle size={18} />}
            {tab === "Request Help" && <MessageSquare size={18} />}
            {tab === "Connect with Wellbeing" && <Heart size={18} />}
            {tab === "Govt & Regulations" && <Shield size={18} />}
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT SECTIONS */}

      {/* 1. FAQs Section */}
      {activeTab === "FAQs" && <FAQSection faqs={filteredFaqs} />}

      {/* 2. Request Help Section */}
      {activeTab === "Request Help" && <RequestHelpSection />}

      {/* 3. Connect with Wellbeing */}
      {activeTab === "Connect with Wellbeing" && (
        <WellbeingSection articles={wellnessArticles} />
      )}

      {/* 4. Govt & Regulations (Singapore Context) */}
      {activeTab === "Govt & Regulations" && <GovtRegulationsSection />}
    </div>
  );
};

export default Support;
