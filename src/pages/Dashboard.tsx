import { Link } from "react-router-dom";
import studentData from "../students.json";

const Dashboard = () => {
  const totalStudents = studentData.length;
  const averageMarks = (
    studentData.reduce((acc, student) => acc + student.marks, 0) / totalStudents
  ).toFixed(2);
  const attendancePercentage = (
    studentData.reduce((acc, student) => acc + parseFloat(student.attendance), 0) / totalStudents
  ).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center tracking-wide">Student Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card for Total Students */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Total Students</h2>
          <p className="text-5xl font-bold">{totalStudents}</p>
        </div>

        {/* Card for Average Marks */}
        <div className="bg-gradient-to-br from-green-500 to-teal-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Average Marks</h2>
          <p className="text-5xl font-bold">{averageMarks}</p>
        </div>

        {/* Card for Attendance Percentage */}
        <div className="bg-gradient-to-br from-pink-500 to-red-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Average Attendance</h2>
          <p className="text-5xl font-bold">{attendancePercentage}%</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/students"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-full font-medium text-lg shadow-md transition"
        >
          View All Students
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;