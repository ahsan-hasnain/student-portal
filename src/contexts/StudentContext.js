
import React, { createContext, useContext, useState } from 'react';

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(
    [
      { id: 1, name: 'John', gender: 'Male', age: 22, studyGroups: ['Math', 'Science'] },
      { id: 2, name: 'Jane', gender: 'Female', age: 24, studyGroups: ['Math', 'Science'] },
      { id: 3, name: 'Mike', gender: 'Male', age: 19, studyGroups: [] },
      { id: 4, name: 'Emily', gender: 'Female', age: 20, studyGroups: ['Math', 'Science'] },
      { id: 5, name: 'David', gender: 'Male', age: 21, studyGroups: [] },
      { id: 6, name: 'Emma', gender: 'Female', age: 25, studyGroups: ['Math', 'Science'] },
      { id: 7, name: 'Alex', gender: 'Male', age: 22, studyGroups: [] },
      { id: 8, name: 'Olivia', gender: 'Female', age: 19, studyGroups: ['Math', 'Science'] },
      { id: 9, name: 'Daniel', gender: 'Male', age: 26, studyGroups: [] },
      { id: 10, name: 'Sophia', gender: 'Female', age: 18, studyGroups: ['Math', 'Science'] },
      { id: 11, name: 'John', gender: 'Male', age: 20, studyGroups: [] },
      { id: 12, name: 'Jane', gender: 'Female', age: 22, studyGroups: ['Math', 'Science'] },
      { id: 13, name: 'Mike', gender: 'Male', age: 23, studyGroups: [] },
      { id: 14, name: 'Emily', gender: 'Female', age: 18, studyGroups: ['Math', 'Science'] },
      { id: 15, name: 'David', gender: 'Male', age: 25, studyGroups: [] },
      { id: 16, name: 'Emma', gender: 'Female', age: 20, studyGroups: ['Math', 'Science'] },
      { id: 17, name: 'Alex', gender: 'Male', age: 19, studyGroups: [] },
      { id: 18, name: 'Olivia', gender: 'Female', age: 21, studyGroups: ['Math', 'Science'] },
      { id: 19, name: 'Daniel', gender: 'Male', age: 24, studyGroups: [] },
      { id: 20, name: 'Sophia', gender: 'Female', age: 22, studyGroups: ['Math', 'Science'] },
    ]
  ); 

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const removeStudent = (studentId) => {
    setStudents(students.filter(student => student.id !== studentId));
  };
  const AddToGroup = (studentId, groupName) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => {
        if (student.id === studentId) {
          if(student.studyGroups.length > 3){
            alert('cannot be added in more than 4 groups')
            return student
          }else{
            if (!student.studyGroups.includes(groupName)) {
              const updatedStudent = { ...student, studyGroups: [...student.studyGroups, groupName] };
              return updatedStudent;
            } else {
              alert('Already in that group');
              return student;
            }
          }
          
        } else {
          return student;
        }
      })
    );
  };
  

  const value = {
    students,
    addStudent,
    removeStudent,
    AddToGroup
  };

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>;
};

const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudentContext must be used within a StudentProvider');
  }
  return context;
};

export { StudentProvider, useStudentContext };
