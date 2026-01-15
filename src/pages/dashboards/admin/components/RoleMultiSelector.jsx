import React from "react";

const RoleMultiSelector = ({ selectedRoles, onChange, roles }) => {
  const handleToggleRole = (roleValue, checked) => {
    if (checked) {
      if (!selectedRoles.includes(roleValue)) {
        onChange([...selectedRoles, roleValue]);
      }
    } else {
      onChange(selectedRoles.filter((r) => r !== roleValue));
    }
  };

  const defaultRoles = [
    { label: "Student", value: "STUDENT" },
    { label: "Teacher", value: "TEACHER" },
    { label: "Parent", value: "PARENT" },
    { label: "Administrator", value: "ADMINISTRATOR" },
    { label: "Principal", value: "PRINCIPAL" },
    { label: "Finance Officer", value: "FINANCE_OFFICER" },
    { label: "Management", value: "MANAGEMENT" },
    { label: "Registrar", value: "REGISTRAR" },
    { label: "Academic Coordinator", value: "ACADEMIC_COORDINATOR" },
    { label: "Counselor", value: "COUNSELOR" },
    { label: "Librarian", value: "LIBRARIAN" },
    { label: "IT / System Admin", value: "IT_ADMIN" },
  ];

  // Use provided roles or defaults if they have value/label structure?
  // The original code hardcoded the list in the edit form but used state `roles` in add form.
  // The `editForm` in original code used uppercase values (STUDENT/TEACHER etc) while `newUser` used Title Case (Student/Teacher).
  // I should standardize this or support both.
  // The original code:
  // Add User Form (lines 488-503): Uses `roles` state (Title Case values)
  // Edit User Form (lines 781-793): Uses hardcoded list (UPPERCASE values)
  // This is an inconsistency in the original code!
  // However, the `userService` likely expects/returns specific format.
  // If `roles` prop is passed, use it. If not, use generic list?
  // Let's rely on the passed `roles` prop if available, but the `edit` mode in original code used a hardcoded list with specific UPPERCASE values.
  // I will use a merged approach: if `roles` is passed and has items, use it. But for the checkboxes, the user might need specific Backend Enum values.
  // I heavily suspect the backend uses UPPERCASE for roles array, while the single `role` field might be looser or Title Case.
  // I'll stick to the hardcoded list for now as per original `Edit` form behavior, but maybe check if I should make it dynamic.
  // Let's pass the list as a prop `availableRoles`.

  // Wait, I should not hardcode if I can avoid it.
  // UserManagement.jsx lines 491-502 has Title Case values.
  // UserManagement.jsx lines 781-792 has UPPERCASE values.
  // This implies the data model might be mixed or specific.
  // I will assume the parent passes the correct `availableRoles`.

  return (
    <div className="md:col-span-2">
      <label className="block text-sm font-bold text-slate-700 mb-3">
        Roles (Select Multiple)
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-4 bg-slate-50 border border-slate-200 rounded-xl max-h-64 overflow-y-auto">
        {(roles && roles.length > 0 ? roles : defaultRoles).map((r) => {
          const isChecked = selectedRoles.includes(r.value);
          return (
            <label
              key={r.value}
              className={`flex items-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                isChecked
                  ? "bg-blue-100 border-blue-500 text-blue-700"
                  : "bg-white border-slate-300 hover:border-blue-300 text-slate-700"
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => handleToggleRole(r.value, e.target.checked)}
                className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm font-medium">{r.label}</span>
            </label>
          );
        })}
      </div>
      <p className="text-xs text-slate-500 mt-2">
        Selected: {selectedRoles.length} role(s)
      </p>
    </div>
  );
};

export default RoleMultiSelector;
