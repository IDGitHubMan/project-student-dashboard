import { useState } from "react";
import StudentCodewars from "./StudentCodewars";
import StudentScores from "./StudentScores";
import StudentCertifications from "./StudentCertifications";
import NoteForm from "./NoteForm";

export default function Student({
  student,
  viewMode,
  setViewMode,
  setStudents,
  students,
  setCohort,
}) {
  const singleOut = () => {
    setViewMode(0);
    setStudents(students.filter((s) => s.id === student.id));
    setCohort(
      `${student.names.preferredName} ${student.names.middleName[0]}. ${student.names.surname}`
    );
  };
  const [showDetails, setShowDetails] = useState(false);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  let birth = student.dob.split("/");
  return (
    <>
      {viewMode === 2 ? (
        <img
          src={student.profilePhoto}
          className="profilePic"
          onClick={singleOut}
        />
      ) : viewMode === 1 ? (
        <h3
          onClick={singleOut}
        >{`${student.names.preferredName} ${student.names.middleName[0]}. ${student.names.surname}`}</h3>
      ) : (
        <div className="student">
          <img src={student.profilePhoto} className="profilePic" />
          <div
            className={`info ${
              !Object.keys(student.certifications).every(
                (category) => student.certifications[category]
              )
                ? "behind"
                : ""
            }`}
          >
            <h3>{`${student.names.preferredName} ${student.names.middleName[0]}. ${student.names.surname}`}</h3>
            <p>{student.username}</p>
            <p>{`Birthday: ${months[parseInt(birth[0])]} ${birth[1]}, ${
              birth[2]
            }`}</p>
            <p onClick={toggleDetails}>
              {showDetails ? "Show less" : "Show more"}
            </p>
          </div>
          {Object.keys(student.certifications).every(
            (category) => student.certifications[category]
          ) ? (
            <p className="tracker">On track to graduate!</p>
          ) : (
            <></>
          )}
          {showDetails ? (
            <div className="extra-details">
              <StudentCodewars codewars={student.codewars} />
              <StudentScores scores={student.cohort.scores} />
              <StudentCertifications certifications={student.certifications} />
            </div>
          ) : (
            <></>
          )}
          {showDetails ? (
            <>
              <hr className="lineDiv" />
              <NoteForm notes={student.notes} />
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
}
