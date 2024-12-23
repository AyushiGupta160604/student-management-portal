import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Student {
  name: string;
  age: number;
  marks: number;
  avgMarks: number;
  rollNumber: string;
  class: string;
  city: string;
  attendance: string;
}

interface StudentTableProps {
  students: Student[];
}

export const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  return (
    <div style={styles.tableContainer}>
      <Table style={styles.table}>
        <TableHeader>
          <TableRow style={styles.headerRow}>
            <TableHead style={styles.headerCell}>Name</TableHead>
            <TableHead style={styles.headerCell}>Age</TableHead>
            <TableHead style={styles.headerCell}>Marks</TableHead>
            <TableHead style={styles.headerCell}>Avg Marks</TableHead>
            <TableHead style={styles.headerCell}>Roll Number</TableHead>
            <TableHead style={styles.headerCell}>Class</TableHead>
            <TableHead style={styles.headerCell}>City</TableHead>
            <TableHead style={styles.headerCell}>Attendance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index} style={styles.bodyRow}>
              <TableCell style={styles.bodyCell}>{student.name}</TableCell>
              <TableCell style={styles.bodyCell}>{student.age}</TableCell>
              <TableCell style={styles.bodyCell}>{student.marks}</TableCell>
              <TableCell style={styles.bodyCell}>{student.avgMarks}</TableCell>
              <TableCell style={styles.bodyCell}>{student.rollNumber}</TableCell>
              <TableCell style={styles.bodyCell}>{student.class}</TableCell>
              <TableCell style={styles.bodyCell}>{student.city}</TableCell>
              <TableCell style={styles.bodyCell}>{student.attendance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const styles = {
  tableContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    height: "100%",
    boxSizing: "border-box" as const,
    backgroundColor: "#e7fef9",
    // backgroundColor: "rgb(158, 161, 167)",
  },
  table: {
    width: "90%",
    maxWidth: "1200px",
    borderCollapse: "separate" as const,
    borderSpacing: "0",
    backgroundColor: "black",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    overflow: "hidden",
  },
  headerRow: {
    backgroundColor: "#E5CFFB", 
  },
  headerCell: {
    padding: "15px",
    fontWeight: "bold",
    color: "black",
    textAlign: "center" as const,
    textTransform: "uppercase" as const,
    fontSize: "14px",
  },
  bodyRow: {
    backgroundColor: "#f9f9f9",
    borderBottom: "2px solid #ddd", 
  },
  bodyCell: {
    padding: "15px",
    textAlign: "center" as const,
    fontSize: "14px",
    color: "#333",
    boxShadow: "inset 0 -1px 0 rgba(0, 0, 0, 0.1)", 
  },
};