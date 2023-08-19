import Student from "./Student";

export default function StudentList({
  students,
  cohort,
  viewMode,
  setViewMode,
  setStudents,
  setCohort,
  data,
}) {
  const handleViewChange = (e) => {
    setViewMode(e.target.selectedIndex);
    setStudents(data);
  };
  return (
    <div className="student-list">
      <h2 className="extra">
        {cohort
          ? `${cohort.slice(0, cohort.indexOf("2"))} ${cohort.slice(
              cohort.indexOf(2)
            )}`
          : "All Students"}
      </h2>
      <h4 className="extra">Students: {students.length}</h4>
      <select
        className="view-drop"
        onChange={handleViewChange}
        value={
          viewMode == 0 ? "Detailed" : viewMode == 1 ? "List" : "Thumbnails"
        }
      >
        <option>Detailed</option>
        <option>List</option>
        <option>Thumbnails</option>
      </select>
      <div className="students">
        {students.map((student) => {
          return (
            <Student
              student={student}
              viewMode={viewMode}
              setViewMode={setViewMode}
              setStudents={setStudents}
              students={students}
              setCohort={setCohort}
            />
          );
        })}
      </div>
    </div>
  );
}
