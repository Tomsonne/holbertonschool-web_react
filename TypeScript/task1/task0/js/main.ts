interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Doe",
  age: 20,
  location: "Paris",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "London",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = table.insertRow();
headerRow.insertCell().innerText = "First Name";
headerRow.insertCell().innerText = "Location";

studentsList.forEach((student) => {
  const row = table.insertRow();
  row.insertCell().innerText = student.firstName;
  row.insertCell().innerText = student.location;
});

document.body.appendChild(table);
