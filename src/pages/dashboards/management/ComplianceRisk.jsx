import React, { useState } from "react";
import { MANAGEMENT_DATA } from "../../../data/managementData";
import ComplianceHeader from "../../../components/dashboard/management/ComplianceRisk/ComplianceHeader";
import RiskStats from "../../../components/dashboard/management/ComplianceRisk/RiskStats";
import RiskIndex from "../../../components/dashboard/management/ComplianceRisk/RiskIndex";
import ComplianceChecklist from "../../../components/dashboard/management/ComplianceRisk/ComplianceChecklist";
import DocumentAlerts from "../../../components/dashboard/management/ComplianceRisk/DocumentAlerts";
import BackupLogs from "../../../components/dashboard/management/ComplianceRisk/BackupLogs";
import AuditReadiness from "../../../components/dashboard/management/ComplianceRisk/AuditReadiness";

/**
 * Screen 6: Compliance & Risk Dashboard
 * Purpose: Ensure regulatory compliance and identify risk exposures
 * Features:
 * - Compliance Checklist (PEI, SSG, MOE status)
 * - Document Expiry Alerts (teacher certifications)
 * - Security & Data Backup Logs
 * - Risk Index: Red (Critical), Amber (Moderate), Green (Safe)
 * - Downloadable Compliance Summary Report
 * Integration: Compliance Database + Backup System API
 * Output: "Audit Readiness Index" report generated quarterly
 */

const ComplianceRisk = () => {
  const [selectedRiskLevel, setSelectedRiskLevel] = useState("all");

  // Use fallback in case data is missing
  const compliance = MANAGEMENT_DATA.compliance || {};

  if (!compliance.stats) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <ComplianceHeader />

        {/* Stats Overview */}
        <RiskStats stats={compliance.stats} />

        {/* Risk Index Overview */}
        <RiskIndex data={compliance.riskAssessment} />

        {/* Compliance Checklist */}
        <ComplianceChecklist checklist={compliance.checklist} />

        {/* Document Expiry Alerts */}
        <DocumentAlerts alerts={compliance.documentAlerts} />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Security & Data Backup Logs */}
          <BackupLogs logs={compliance.backupLogs} />

          {/* Audit Readiness Index */}
          <AuditReadiness data={compliance.auditReadiness} />
        </div>
      </div>
    </div>
  );
};

export default ComplianceRisk;
