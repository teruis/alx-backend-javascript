/**
 * Retrieves a list of students.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
function getListStudents() {
  const students = [
    { id: 1, firstName: "Guillaume", location: "San Francisco" },
    { id: 2, firstName: "James", location: "Columbia" },
    { id: 5, firstName: "Serena", location: "San Francisco" },
  ];
  return students;
}

module.exports = getListStudents;

