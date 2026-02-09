import React, { useState } from "react";
import SupportHeader from "../../../components/dashboard/parent/SupportCenter/SupportHeader";
import FAQSection from "../../../components/dashboard/parent/SupportCenter/FAQSection";
import TicketsSection from "../../../components/dashboard/parent/SupportCenter/TicketsSection";
import ChatSection from "../../../components/dashboard/parent/SupportCenter/ChatSection";
import { PARENT_DATA } from "../../../data/parentData";

const SupportCenter = () => {
  const [activeTab, setActiveTab] = useState("faq"); // faq, tickets, chat
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [ticketForm, setTicketForm] = useState({
    category: "Academic",
    subject: "",
    description: "",
    priority: "medium",
  });
  const [chatMessages, setChatMessages] = useState(
    PARENT_DATA.supportCenter.chatMessages,
  );
  const [chatInput, setChatInput] = useState("");

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const newMessage = {
      id: chatMessages.length + 1,
      sender: "user",
      text: chatInput,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChatMessages([...chatMessages, newMessage]);
    setChatInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: chatMessages.length + 2,
        sender: "bot",
        text: "Thank you for your message. A support agent will respond shortly. Is there anything else I can help you with?",
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setChatMessages((prev) => [...prev, botResponse]);
    }, 1500);
  };

  const handleSubmitTicket = () => {
    console.log("Submitting ticket:", ticketForm);
    // API call will be added here
    alert("Ticket submitted successfully! You will receive updates via email.");
    setTicketForm({
      category: "Academic",
      subject: "",
      description: "",
      priority: "medium",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <SupportHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* FAQ View */}
      {activeTab === "faq" && (
        <FAQSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          expandedFaq={expandedFaq}
          setExpandedFaq={setExpandedFaq}
        />
      )}

      {/* Tickets View */}
      {activeTab === "tickets" && (
        <TicketsSection
          ticketForm={ticketForm}
          setTicketForm={setTicketForm}
          handleSubmitTicket={handleSubmitTicket}
        />
      )}

      {/* Live Chat View */}
      {activeTab === "chat" && (
        <ChatSection
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
          chatInput={chatInput}
          setChatInput={setChatInput}
          handleSendMessage={handleSendMessage}
        />
      )}

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

export default SupportCenter;
