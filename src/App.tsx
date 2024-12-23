import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import StudentList from "./pages/StudentList";
import Dashboard from "./pages/Dashboard";
// import StudentDetails from "./pages/StudentDetails";
// import AddEditStudent from "./pages/AddEditStudent";
// import NotFound from "./pages/NotFound";
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentList />} />
        {/* <Route path="/students/:id" element={<StudentDetails />} /> */}
        {/* <Route path="/students/add" element={<AddEditStudent />} />
        <Route path="/students/edit/:id" element={<AddEditStudent />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;