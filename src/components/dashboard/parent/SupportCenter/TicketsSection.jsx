import React from "react";
import TicketForm from "./TicketForm";
import TicketList from "./TicketList";

const TicketsSection = ({ ticketForm, setTicketForm, handleSubmitTicket }) => {
  return (
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Create Ticket Form */}
      <TicketForm
        ticketForm={ticketForm}
        setTicketForm={setTicketForm}
        handleSubmitTicket={handleSubmitTicket}
      />

      {/* My Tickets List */}
      <TicketList />
    </div>
  );
};

export default TicketsSection;
