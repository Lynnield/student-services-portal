"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isStudent(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const student = value;
  return (
    typeof student.id === "number" &&
    typeof student.name === "string" &&
    typeof student.email === "string" &&
    (student.status === "active" || student.status === "inactive")
  );
}
function formatStudent(student) {
  return `${student.id} - ${student.name} (${student.status})`;
}
const student = {
  id: 1,
  name: "Lynnield Que",
  email: "lynnield@example.com",
  status: "active",
};
const studentResponse = {
  success: true,
  data: student,
};
const studentsResponse = {
  success: true,
  data: [student],
};
const validData = {
  id: 2,
  name: "Juan Dela Cruz",
  email: "juan@example.com",
  status: "active",
};
const invalidIdData = {
  id: "2",
  name: "Juan Dela Cruz",
  email: "juan@example.com",
  status: "active",
};
const missingNameData = {
  id: 3,
  email: "student@example.com",
  status: "inactive",
};
console.log("Valid student:", isStudent(validData));
console.log("Invalid ID:", isStudent(invalidIdData));
console.log("Missing name:", isStudent(missingNameData));
console.log(studentResponse);
console.log(studentsResponse);
console.log(formatStudent(student));
//# sourceMappingURL=index.js.map
