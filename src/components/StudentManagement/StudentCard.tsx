// import React from 'react';
// import styled from 'styled-components';

// interface Student {
//   name: string;
//   age: number;
//   marks: number;
//   rollNumber: string;
// }

// interface StudentCardProps {
//   student: Student;
// }

// // Card styled component
// const Card = styled.div`
//   max-width: 350px;
//   margin: 2rem auto;
//   background-color: rgba(255, 255, 255, 0.9); 
//   border-radius: 15px;
//   overflow: hidden;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   transition: all 0.3s ease;
  
//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
//   }
// `;

// // Banner Image styled component
// const BannerImage = styled.div`
//   background-image: url("https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80");
//   background-position: center;
//   background-size: cover;
//   height: 200px;
//   width: 100%;
//   border-radius: 15px 15px 0 0;
// `;

// // Student Name styled component
// const StudentName = styled.h2`
//   font-family: 'Righteous', sans-serif;
//   color: #333;
//   font-size: 1.8rem;
//   margin: 1rem 0;
//   text-transform: uppercase;
// `;

// // Info styled component for age, marks, and roll number
// const StudentInfo = styled.p`
//   color: #555;
//   font-family: 'Lato', sans-serif;
//   font-size: 1rem;
//   line-height: 1.5;
//   margin: 0.5rem 0;
//   text-transform: uppercase;
//   letter-spacing: 1px;
// `;

// // Button styles
// const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 10px;
//   margin-top: 20px;
// `;

// const Button = styled.button<{ variant: 'outline' | 'fill' }>`
//   padding: 12px 24px;
//   border-radius: 24px;
//   font-size: 1rem;
//   letter-spacing: 2px;
//   cursor: pointer;
//   border: ${({ variant }) => (variant === 'outline' ? '1px solid #00d4ff' : 'none')};
//   background: ${({ variant }) => (variant === 'outline' ? 'transparent' : '#00d4ff')};
//   color: ${({ variant }) => (variant === 'outline' ? '#00d4ff' : '#fff')};
//   transition: all 0.3s ease;
//   font-weight: ${({ variant }) => (variant === 'fill' ? 'bold' : 'normal')};

//   &:hover {
//     transform: scale(1.125);
//     color: #fff;
//     border-color: #fff;
//     filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.125));
//   }
// `;

// export const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
//   return (
//     <Card>
//       <BannerImage />
//       <StudentName>{student.name}</StudentName>
//       <StudentInfo>Age: {student.age}</StudentInfo>
//       <StudentInfo>Marks: {student.marks}</StudentInfo>
//       <StudentInfo>Roll Number: {student.rollNumber}</StudentInfo>
//       <ButtonWrapper>
//         <Button variant="outline">More Info</Button>
//         <Button variant="fill">Enroll</Button>
//       </ButtonWrapper>
//     </Card>
//   );
// };


// Type 2

// import React from 'react';
// import styled from 'styled-components';

// interface Student {
//   name: string;
//   age: number;
//   marks: number;
//   rollNumber: string;
// }

// interface StudentCardProps {
//   student: Student;
// }

// // Card styled component
// const Card = styled.div`
//   width: 300px;
//   background: #fff;
//   border-radius: 12px;
//   padding: 20px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   margin: 1rem;
//   position: relative;
//   font-family: 'Arial', sans-serif;
//   overflow: hidden;
//   border: 2px solid #eaeaea;
// `;

// // Banner Image styled component
// const BannerImage = styled.div`
//   height: 150px;
//   background-image: url("stud.jpg");
//   background-size: cover;
//   background-position: center;
//   border-radius: 10px;
//   margin-bottom: 15px;
// `;

// // Title with Student Name
// const StudentName = styled.h3`
//   font-size: 1.4rem;
//   margin: 0;
//   font-weight: bold;
//   color: #333;
// `;

// // Information text for Age, Marks, Roll number
// const InfoText = styled.p`
//   font-size: 0.9rem;
//   margin: 5px 0;
//   color: #666;
// `;

// // Button styles
// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   font-size: 1rem;
//   background-color: #00d4ff;
//   color: #fff;
//   border: none;
//   border-radius: 25px;
//   cursor: pointer;
//   margin-top: 15px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0086a8;
//   }
// `;

// const BorderBottom = styled.div`
//   border-bottom: 1px solid #ddd;
//   margin-bottom: 10px;
// `;

// export const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
//   return (
//     <Card>
//       <BannerImage />
//       <StudentName>{student.name}</StudentName>
//       <BorderBottom />
//       <InfoText>Age: {student.age}</InfoText>
//       <InfoText>Marks: {student.marks}</InfoText>
//       <InfoText>Roll Number: {student.rollNumber}</InfoText>
//       <Button>Enroll</Button>
//     </Card>
//   );
// };

import React from 'react';
import styled from 'styled-components';

interface Student {
  name: string;
  age: number;
  marks: number;
  rollNumber: string;
}

interface StudentCardProps {
  student: Student;
}

const NoteCard = styled.div`
  width: 300px;
  background: #fef9e7;
  border: 2px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  position: relative;
  font-family: 'Courier New', Courier, monospace;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 60%;
  height: 150px;
  background-image: url("stud.webp");
  background-size: cover;
  background-position: center;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
  text-align: center;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  text-align: center;
  margin: 10px 0;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin: 10px 0;
`;

const ExtraDetails = styled.div`
  font-size: 0.85rem;
  color: #777;
  margin-top: 15px;
  text-align: center;
`;

const NoteDecoration = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 15px;
  background: #eee;
  border-radius: 4px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
`;

export const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <NoteCard>
      <NoteDecoration />
      <ImageWrapper/>
      <Title>Name: {student.name}</Title>
      <Price>Age: {student.age}</Price>
      <Description>Marks: {student.marks}</Description>
      {student.rollNumber && <ExtraDetails>Roll Number: {student.rollNumber}</ExtraDetails>}
    </NoteCard>
  );
};