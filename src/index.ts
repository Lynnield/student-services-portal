interface Student {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

function isStudent(value: unknown): value is Student {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const student = value as Record<string, unknown>;

  return (
    typeof student.id === "number" &&
    typeof student.name === "string" &&
    typeof student.email === "string" &&
    (student.status === "active" || student.status === "inactive")
  );
}

function formatStudent(student: Student): string {
  return `${student.id} - ${student.name} (${student.status})`;
}

const student: Student = {
  id: 1,
  name: "Lynnield Que",
  email: "lynnield@example.com",
  status: "active",
};

const studentResponse: ApiResponse<Student> = {
  success: true,
  data: student,
};

const studentsResponse: ApiResponse<Student[]> = {
  success: true,
  data: [student],
};

const validData: unknown = {
  id: 2,
  name: "Juan Dela Cruz",
  email: "juan@example.com",
  status: "active",
};

const invalidIdData: unknown = {
  id: "2",
  name: "Juan Dela Cruz",
  email: "juan@example.com",
  status: "active",
};

const missingNameData: unknown = {
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
