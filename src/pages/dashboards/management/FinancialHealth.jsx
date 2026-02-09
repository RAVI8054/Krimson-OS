import React from "react";
import { MANAGEMENT_DATA } from "../../../data/managementData";
import FinancialHealthHeader from "../../../components/dashboard/management/FinancialHealth/FinancialHealthHeader";
import FinancialOverviewCards from "../../../components/dashboard/management/FinancialHealth/FinancialOverviewCards";
import TrusteeReportCard from "../../../components/dashboard/management/FinancialHealth/TrusteeReportCard";
import RevenueCollectionChart from "../../../components/dashboard/management/FinancialHealth/RevenueCollectionChart";
import OutstandingReceivablesCard from "../../../components/dashboard/management/FinancialHealth/OutstandingReceivablesCard";
import ExpenseBreakdownCard from "../../../components/dashboard/management/FinancialHealth/ExpenseBreakdownCard";
import SurplusDeficitCard from "../../../components/dashboard/management/FinancialHealth/SurplusDeficitCard";
import PaymentGatewayTable from "../../../components/dashboard/management/FinancialHealth/PaymentGatewayTable";

/**
 * Screen 4: Financial Health Snapshot
 * Purpose: Track revenue performance and financial stability indicators
 * Key Metrics:
 * - Total Revenue Collected (Monthly, Term, Annual)
 * - Outstanding Receivables
 * - Expense Tracker (linked from Finance & HR)
 * - Surplus/Deficit visualization
 * - Payment gateway settlement reports
 * Integration: Finance API + HR Payroll + Reporting Engine
 * Automation: Monthly snapshot emailed automatically to trustees
 * Design: Interactive chart cards (Pie, Line, and Heatmap formats)
 */

const FinancialHealth = () => {
  const { financialHealth } = MANAGEMENT_DATA;
  const {
    stats,
    revenueData,
    outstandingReceivables,
    expenseTracker,
    surplusDeficit,
    gatewaySettlement,
    trusteeReportSchedule,
  } = financialHealth;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <FinancialHealthHeader />

        {/* Stats Overview */}
        <FinancialOverviewCards stats={stats} />

        {/* Trustee Report Automation */}
        <TrusteeReportCard schedule={trusteeReportSchedule} />

        {/* Revenue Collection */}
        <RevenueCollectionChart revenueData={revenueData} />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Outstanding Receivables */}
          <OutstandingReceivablesCard receivables={outstandingReceivables} />

          {/* Expense Tracker */}
          <ExpenseBreakdownCard expenses={expenseTracker} />
        </div>

        {/* Surplus/Deficit Visualization */}
        <SurplusDeficitCard surplusData={surplusDeficit} />

        {/* Payment Gateway Settlement */}
        <PaymentGatewayTable settlementData={gatewaySettlement} />
      </div>
    </div>
  );
};

export default FinancialHealth;
