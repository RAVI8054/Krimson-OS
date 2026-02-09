import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import ResourceHeader from "../../../components/dashboard/teacher/ResourceLibrary/ResourceHeader";
import LMSIntegrationBanner from "../../../components/dashboard/teacher/ResourceLibrary/LMSIntegrationBanner";
import ResourceStats from "../../../components/dashboard/teacher/ResourceLibrary/ResourceStats";
import ResourceFilters from "../../../components/dashboard/teacher/ResourceLibrary/ResourceFilters";
import ResourceGrid from "../../../components/dashboard/teacher/ResourceLibrary/ResourceGrid";
import ResourceDetailModal from "../../../components/dashboard/teacher/ResourceLibrary/ResourceDetailModal";
import EmptyState from "../../../components/dashboard/teacher/ResourceLibrary/EmptyState";

const ResourceLibrary = () => {
  // Resources data mapped from TEACHER_DATA
  const [resources] = useState(TEACHER_DATA.resources);

  const [selectedResource, setSelectedResource] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSubject, setFilterSubject] = useState("all");
  const [filterGrade, setFilterGrade] = useState("all");
  const [filterFormat, setFilterFormat] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filter resources
  const filteredResources = resources.filter((resource) => {
    // Filter by subject
    if (filterSubject !== "all" && resource.subject !== filterSubject)
      return false;

    // Filter by grade
    if (filterGrade !== "all" && resource.grade !== filterGrade) return false;

    // Filter by format
    if (filterFormat !== "all" && resource.format !== filterFormat)
      return false;

    // Filter by search
    if (searchQuery) {
      return (
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        resource.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      );
    }

    return true;
  });

  // Calculate statistics
  const stats = {
    total: resources.length,
    byFormat: {
      pdf: resources.filter((r) => r.format === "pdf").length,
      video: resources.filter((r) => r.format === "video").length,
      ppt: resources.filter((r) => r.format === "ppt").length,
      worksheet: resources.filter((r) => r.format === "worksheet").length,
      image: resources.filter((r) => r.format === "image").length,
    },
    totalDownloads: resources.reduce((sum, r) => sum + r.downloads, 0),
    avgRating: (
      resources.reduce((sum, r) => sum + r.rating, 0) / resources.length
    ).toFixed(1),
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    console.log("Resource Library loaded - Ready for API integration");
  }, []);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section */}
      <ResourceHeader
        totalResources={stats.total}
        totalDownloads={stats.totalDownloads}
      />

      {/* LMS Integration Banner */}
      <LMSIntegrationBanner />

      {/* Quick Stats */}
      <ResourceStats stats={stats} />

      {/* Search and Filters */}
      <ResourceFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterSubject={filterSubject}
        setFilterSubject={setFilterSubject}
        filterGrade={filterGrade}
        setFilterGrade={setFilterGrade}
        filterFormat={filterFormat}
        setFilterFormat={setFilterFormat}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      {/* Resource Cards Grid */}
      <ResourceGrid
        resources={filteredResources}
        onSelectResource={setSelectedResource}
      />

      {/* Empty State */}
      {filteredResources.length === 0 && (
        <EmptyState
          message="No Resources Found"
          subMessage={
            searchQuery ||
            filterSubject !== "all" ||
            filterGrade !== "all" ||
            filterFormat !== "all"
              ? "Try adjusting your filters"
              : "No resources available"
          }
        />
      )}

      {/* Resource Detail Modal */}
      <ResourceDetailModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />
    </div>
  );
};

export default ResourceLibrary;
