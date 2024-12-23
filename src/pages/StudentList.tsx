import { useState, useEffect } from "react";
import { StudentTable } from "../components/StudentManagement/StudentTable";
import { StudentCard } from "../components/StudentManagement/StudentCard";
import { Pagination } from "../components/StudentManagement/Pagination";
import { getStudents } from "../utils/api";
import { Student } from "../utils/types";
import { useIsMobile } from "../hooks/useIsMobile";

const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const pageSize = 10;
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const data = await getStudents(pageSize, currentPage);
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [currentPage]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          background:
            "linear-gradient(to right, rgb(141, 146, 155), rgb(132, 189, 190), rgba(201, 131, 166, 0.52))",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <svg
            style={{
              width: "64px",
              height: "64px",
              margin: "auto",
              animation: "spin 0.1s linear infinite",
            }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="white"
              strokeWidth="4"
              strokeDasharray="62.83"
              strokeDashoffset="31.42"
            />
          </svg>
          <p
            style={{
              marginTop: "16px",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Loading, please wait...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4" style={{ backgroundColor: "#e7fef9" }}>
      {isMobile ? (
        <div className="space-y-4">
          {students.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      ) : (
        <StudentTable students={students} />
      )}
      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default StudentList;