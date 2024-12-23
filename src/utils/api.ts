import students from "../students.json";
import { Student } from "./types";

export const getStudents = (pageSize: number, pageNumber: number): Promise<Student[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const startIndex = (pageNumber - 1) * pageSize;
      const paginatedData = students.slice(startIndex, startIndex + pageSize);
      resolve(paginatedData);
    }, 2000);
  });
};