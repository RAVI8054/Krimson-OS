import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import CalendarHeader from "../../../components/dashboard/teacher/AcademicCalendar/CalendarHeader";
import IntegrationBanner from "../../../components/dashboard/teacher/AcademicCalendar/IntegrationBanner";
import SyllabusOverlay from "../../../components/dashboard/teacher/AcademicCalendar/SyllabusOverlay";
import CalendarControls from "../../../components/dashboard/teacher/AcademicCalendar/CalendarControls";
import CalendarGrid from "../../../components/dashboard/teacher/AcademicCalendar/CalendarGrid";
import EventModal from "../../../components/dashboard/teacher/AcademicCalendar/EventModal";

const AcademicCalendar = () => {
  // Current date state
  const [currentDate, setCurrentDate] = useState(new Date("2026-01-19"));
  const [selectedDate, setSelectedDate] = useState(null);
  const [filterType, setFilterType] = useState("all"); // 'all', 'school', 'personal', 'exam', 'holiday'
  const [showSyllabusOverlay, setShowSyllabusOverlay] = useState(false);

  // Sample calendar events
  // Transform events from TEACHER_DATA to match component format
  const [events] = useState(
    TEACHER_DATA.events.map((event) => ({
      ...event,
      date: event.start.toISOString().split("T")[0],
      time: event.start.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      source: event.type === "personal" ? "personal" : "school",
      color:
        event.type === "exam"
          ? "red"
          : event.type === "holiday"
            ? "green"
            : "blue",
    })),
  );

  // Syllabus progress data
  const [syllabusProgress] = useState(TEACHER_DATA.syllabusProgress);

  // Calculate time elapsed in academic year (assuming starts Aug 1)
  const academicYearStart = new Date("2025-08-01");
  const academicYearEnd = new Date("2026-05-31");
  const totalDays = Math.floor(
    (academicYearEnd - academicYearStart) / (1000 * 60 * 60 * 24),
  );
  const daysPassed = Math.floor(
    (currentDate - academicYearStart) / (1000 * 60 * 60 * 24),
  );
  const timeElapsedPercent = Math.round((daysPassed / totalDays) * 100);

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/calendar')
    //   .then(res => res.json())
    //   .then(data => setEvents(data));
    console.log("Academic Calendar loaded - Ready for API integration");
  }, []);

  // Get calendar days for current month
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add previous month's days
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ day: "", isCurrentMonth: false });
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    return days;
  };

  // Get events for a specific day
  const getEventsForDay = (day) => {
    if (!day) return [];
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events
      .filter((event) => {
        if (event.endDate) {
          const eventStart = new Date(event.date);
          const eventEnd = new Date(event.endDate);
          const currentDay = new Date(dateStr);
          return currentDay >= eventStart && currentDay <= eventEnd;
        }
        return event.date === dateStr;
      })
      .filter(
        (event) =>
          filterType === "all" ||
          event.type === filterType ||
          event.source === filterType,
      );
  };

  // Navigate months
  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  // Get event color
  const getEventColor = (color) => {
    const colors = {
      red: "bg-red-100 text-red-700 border-red-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      green: "bg-green-100 text-green-700 border-green-200",
      orange: "bg-orange-100 text-orange-700 border-orange-200",
    };
    return colors[color] || colors.blue;
  };

  const getEventDotColor = (color) => {
    const colors = {
      red: "bg-red-500",
      purple: "bg-purple-500",
      blue: "bg-blue-500",
      green: "bg-green-500",
      orange: "bg-orange-500",
    };
    return colors[color] || colors.blue;
  };

  // Check if date is today
  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <CalendarHeader
        currentDate={currentDate}
        monthNames={monthNames}
        eventsCount={events.length}
        timeElapsedPercent={timeElapsedPercent}
        onToggleSyllabus={() => setShowSyllabusOverlay(!showSyllabusOverlay)}
        showSyllabusOverlay={showSyllabusOverlay}
      />

      {/* Integration Banner */}
      <IntegrationBanner />

      {/* Syllabus Progress Overlay */}
      {showSyllabusOverlay && (
        <SyllabusOverlay
          onClose={() => setShowSyllabusOverlay(false)}
          daysPassed={daysPassed}
          totalDays={totalDays}
          timeElapsedPercent={timeElapsedPercent}
          syllabusProgress={syllabusProgress}
        />
      )}

      {/* Calendar Controls */}
      <CalendarControls
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
        onToday={() => setCurrentDate(new Date())}
        filterType={filterType}
        setFilterType={setFilterType}
      />

      {/* Calendar Grid */}
      <CalendarGrid
        dayNames={dayNames}
        daysInMonth={getDaysInMonth()}
        getEventsForDay={getEventsForDay}
        isToday={isToday}
        onSelectDate={setSelectedDate}
        getEventColor={getEventColor}
        getEventDotColor={getEventDotColor}
      />

      {/* Event Detail Modal */}
      <EventModal
        selectedDate={selectedDate}
        onClose={() => setSelectedDate(null)}
        getEventColor={getEventColor}
      />
    </div>
  );
};

export default AcademicCalendar;
