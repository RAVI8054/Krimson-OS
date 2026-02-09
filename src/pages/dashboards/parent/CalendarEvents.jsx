import React, { useState, useEffect } from "react";
import { PARENT_DATA } from "../../../data/parentData";
import CalendarHeader from "../../../components/dashboard/parent/CalendarEvents/CalendarHeader";
import CalendarFilter from "../../../components/dashboard/parent/CalendarEvents/CalendarFilter";
import EventList from "../../../components/dashboard/parent/CalendarEvents/EventList";
import PaginationControls from "../../../components/dashboard/parent/CalendarEvents/PaginationControls";

const CalendarEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const events = PARENT_DATA.calendarEvents.events;

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" || event.type === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRSVP = (eventId) => {
    console.log("RSVP for event:", eventId);
    // API call will be added here
  };

  const handleDownloadBrochure = (eventId) => {
    console.log("Download brochure for event:", eventId);
    // API call will be added here
  };

  const handleSyncCalendar = (type) => {
    console.log("Sync with calendar:", type);
    // API call will be added here
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-SG", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Page Header */}
      <CalendarHeader handleSyncCalendar={handleSyncCalendar} />

      {/* Search and Filters */}
      <CalendarFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredEventsCount={filteredEvents.length}
        totalEventsCount={events.length}
      />

      {/* Events List */}
      <EventList
        currentItems={currentItems}
        handleRSVP={handleRSVP}
        handleDownloadBrochure={handleDownloadBrochure}
        formatDate={formatDate}
        filteredEventsLength={filteredEvents.length}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />

      {/* Pagination Controls */}
      <PaginationControls
        filteredEventsLength={filteredEvents.length}
        itemsPerPage={itemsPerPage}
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
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

export default CalendarEvents;
