import React, { useState } from "react";
import { PARENT_DATA } from "../../../data/parentData";
import FeeHeader from "../../../components/dashboard/parent/FeePayments/FeeHeader";
import FeeStatusCard from "../../../components/dashboard/parent/FeePayments/FeeStatusCard";
import PaymentReminders from "../../../components/dashboard/parent/FeePayments/PaymentReminders";
import UpcomingPayments from "../../../components/dashboard/parent/FeePayments/UpcomingPayments";
import TransactionHistory from "../../../components/dashboard/parent/FeePayments/TransactionHistory";

const FeePayments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const { feeStatus, transactionHistory } = PARENT_DATA.feePayments;

  const filteredTransactions = transactionHistory.filter((txn) => {
    const matchesSearch =
      txn.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || txn.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getCategoryColor = (category) => {
    const colors = {
      Tuition: "from-blue-500 to-cyan-500",
      Transport: "from-orange-500 to-amber-500",
      Activities: "from-purple-500 to-pink-500",
      Library: "from-emerald-500 to-teal-500",
    };
    return colors[category] || "from-slate-500 to-gray-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Page Header */}
      <FeeHeader />

      {/* Outstanding Payment Card & Due Date */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6 relative z-10">
        <FeeStatusCard feeStatus={feeStatus} />
        <PaymentReminders feeStatus={feeStatus} />
      </div>

      {/* Upcoming Payments Breakdown */}
      <UpcomingPayments
        feeStatus={feeStatus}
        getCategoryColor={getCategoryColor}
      />

      {/* Transaction History */}
      <TransactionHistory
        filteredTransactions={filteredTransactions}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        getCategoryColor={getCategoryColor}
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default FeePayments;
