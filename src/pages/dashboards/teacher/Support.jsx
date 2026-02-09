import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import SupportHeader from "../../../components/dashboard/teacher/Support/SupportHeader";
import KnowledgeBaseTab from "../../../components/dashboard/teacher/Support/KnowledgeBaseTab";
import MyTicketsTab from "../../../components/dashboard/teacher/Support/MyTicketsTab";
import ContactSupportTab from "../../../components/dashboard/teacher/Support/ContactSupportTab";

/**
 * Teacher Support Wrapper
 * Screen 12: Support & Help Center
 */
const Support = () => {
  const { support } = TEACHER_DATA;
  const [activeTab, setActiveTab] = useState("Knowledge Base");
  const [searchQuery, setSearchQuery] = useState("");
  const [tickets, setTickets] = useState(support.tickets || []);
  const [faqs, setFaqs] = useState(support.faqs || []);
  const [tutorials, setTutorials] = useState(support.tutorials || []);

  // API Integration Ready - Effect for fetching data
  useEffect(() => {
    // Placeholder for actual API call
    // const fetchSupportData = async () => {
    //   try {
    //     const response = await fetch('/api/teacher/support');
    //     const data = await response.json();
    //     setTickets(data.tickets);
    //     setFaqs(data.faqs);
    //     setTutorials(data.tutorials);
    //   } catch (error) {
    //     console.error("Error fetching support data:", error);
    //   }
    // };
    // fetchSupportData();
    console.log("Support page loaded - Ready for API integration");
  }, []);

  // Filter FAQs based on search
  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="h-full space-y-8 animate-fadeIn pb-10">
      {/* Header Section */}
      <SupportHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Content Sections based on Active Tab */}
      {activeTab === "Knowledge Base" && (
        <KnowledgeBaseTab
          faqs={filteredFaqs}
          tutorials={tutorials}
          searchQuery={searchQuery}
        />
      )}

      {activeTab === "My Tickets" && <MyTicketsTab tickets={tickets} />}

      {activeTab === "Contact Support" && <ContactSupportTab />}
    </div>
  );
};

export default Support;
