/**
 * Maps user roles to their respective dashboard paths.
 * @param {string} role - The user's role.
 * @returns {string} The path to the dashboard.
 */
export const getDashboardPath = (role) => {
    if (!role) return '/login';
    
    // Normalize role string to handle different casing if necessary
    const normalizedRole = role.toLowerCase(); // or keep it case-sensitive if backend is strict

    switch (role) { // Using the exact strings from ROLES constant usually
        case 'Administrator':
        case 'Admin': // Handling potential variations
            return '/dashboard/admin';
            
        case 'Teacher':
            return '/dashboard/teacher';
            
        case 'Student':
            return '/dashboard/student';
            
        case 'Principal':
            return '/dashboard/principal';
            
        case 'Academic Coordinator':
        case 'Coordinator':
            return '/dashboard/coordinator';
            
        case 'Registrar':
            return '/dashboard/registrar';

        case 'Finance':
        case 'Accountant':
            return '/dashboard/finance';

        case 'Parent':
        case 'Guardian':
            return '/dashboard/parent';

        case 'Management':
        case 'Director': // Potential aliases
            return '/dashboard/management';

        case 'Librarian':
            return '/dashboard/librarian';

        case 'System Administrator':
        case 'IT Admin':
            return '/dashboard/it-admin';

        case 'School Counselor':
        case 'Counselor':
            return '/dashboard/counselor';
            
        default:
            console.warn(`Unknown role: ${role}, defaulting to welcome page or student dashboard`);
            return '/welcome'; // Safer fallback than student dashboard
    }
};
