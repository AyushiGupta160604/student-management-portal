// import React from 'react';

// interface PaginationProps {
//   currentPage: number;
//   onPageChange: (page: number) => void;
// }

// export const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange }) => {
//   return (
//     <div className="flex justify-center gap-4 mt-6">
//       <button
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
//       >
//         Previous
//       </button>
//       <button
//         onClick={() => onPageChange(currentPage + 1)}
//         className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

import React from 'react';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange }) => {
  return (
    <div className="pagination-container" style={paginationContainerStyle}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ ...buttonStyle, ...(currentPage === 1 ? disabledButtonStyle : {}) }}
      >
        Previous
      </button>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        style={buttonStyle}
      >
        Next
      </button>
    </div>
  );
};

const paginationContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '1.5rem',
};

const buttonStyle: React.CSSProperties = {
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  border: '2px solid #ccc',
  backgroundColor: '#dcd6f7',
  color: '#4c3f91',
  fontWeight: 'bold',
  fontSize: '1rem',
  boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

const disabledButtonStyle: React.CSSProperties = {
  backgroundColor: '#f0f0f0',
  color: '#999',
  cursor: 'not-allowed',
  boxShadow: 'none',
};
