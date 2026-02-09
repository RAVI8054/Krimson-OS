import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import ResourceHeader from "../../../components/dashboard/student/LessonResources/ResourceHeader";
import ResourceFilters from "../../../components/dashboard/student/LessonResources/ResourceFilters";
import ResourcesGrid from "../../../components/dashboard/student/LessonResources/ResourcesGrid";
import RecommendedResources from "../../../components/dashboard/student/LessonResources/RecommendedResources";
import ResourceModal from "../../../components/dashboard/student/LessonResources/ResourceModal";

const LessonResources = () => {
  const { resources, recommendedResources } = STUDENT_DATA;

  // Filter States
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedWeek, setSelectedWeek] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const [resourceStates, setResourceStates] = useState(resources);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [modalType, setModalType] = useState(null); // 'details' or 'video'

  // Extract unique values for filters
  const subjects = ["All", ...new Set(resources.map((r) => r.subject))];
  const topics = ["All", ...new Set(resources.map((r) => r.topic))];
  const weeks = ["All", ...new Set(resources.map((r) => r.week))];
  const types = ["All", ...new Set(resources.map((r) => r.type))];

  const toggleSaved = (id) => {
    setResourceStates((prev) =>
      prev.map((r) => (r.id === id ? { ...r, saved: !r.saved } : r)),
    );
  };

  const toggleRead = (id) => {
    setResourceStates((prev) =>
      prev.map((r) => (r.id === id ? { ...r, read: !r.read } : r)),
    );
  };

  const openResourceModal = (resource, type) => {
    setSelectedResource(resource);
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedResource(null);
    setModalType(null);
  };

  const handleDownload = (e, title) => {
    e.stopPropagation();
    // Simulate download
    alert(`Downloading ${title}...`);
  };

  const filteredResources = resourceStates.filter((res) => {
    const matchSubject =
      selectedSubject === "All" || res.subject === selectedSubject;
    const matchTopic = selectedTopic === "All" || res.topic === selectedTopic;
    const matchWeek = selectedWeek === "All" || res.week === selectedWeek;
    const matchType = selectedType === "All" || res.type === selectedType;
    return matchSubject && matchTopic && matchWeek && matchType;
  });

  const clearFilters = () => {
    setSelectedSubject("All");
    setSelectedTopic("All");
    setSelectedWeek("All");
    setSelectedType("All");
  };

  const hasActiveFilters =
    selectedSubject !== "All" ||
    selectedTopic !== "All" ||
    selectedWeek !== "All" ||
    selectedType !== "All";

  // Mock recommended resources if they are not in STUDENT_DATA (just in case, though they likely are)
  const safeRecommendedResources = recommendedResources || [
    {
      icon: "📚",
      subject: "PHYSICS",
      title: "Fundamentals of Quantum Mechanics",
    },
    {
      icon: "🧬",
      subject: "BIOLOGY",
      title: "Advanced Genetics: Patterns of Inheritance",
    },
    {
      icon: "🔢",
      subject: "MATH",
      title: "Calculus: Real World Applications",
    },
  ];

  return (
    <div className="space-y-8 relative">
      <ResourceHeader />

      <ResourceFilters
        filters={{ selectedSubject, selectedTopic, selectedWeek, selectedType }}
        setFilters={(newFilters) => {
          if (newFilters.selectedSubject !== undefined)
            setSelectedSubject(newFilters.selectedSubject);
          if (newFilters.selectedTopic !== undefined)
            setSelectedTopic(newFilters.selectedTopic);
          if (newFilters.selectedWeek !== undefined)
            setSelectedWeek(newFilters.selectedWeek);
          if (newFilters.selectedType !== undefined)
            setSelectedType(newFilters.selectedType);
        }}
        options={{ subjects, topics, weeks, types }}
        clearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
      />

      <ResourcesGrid
        resources={filteredResources}
        toggleSaved={toggleSaved}
        toggleRead={toggleRead}
        openResourceModal={openResourceModal}
        handleDownload={handleDownload}
      />

      <RecommendedResources recommendedResources={safeRecommendedResources} />

      <ResourceModal
        isOpen={modalOpen}
        selectedResource={selectedResource}
        modalType={modalType}
        closeModal={closeModal}
        handleDownload={handleDownload}
      />
    </div>
  );
};

export default LessonResources;
