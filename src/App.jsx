import { useState } from "react";
import data from "./data/data.json";
import StudentList from "./StudentList";
import CohortList from "./CohortList";
function App() {
  let cohorts = [];
  data.forEach((student) => {
    if (!cohorts.includes(student.cohort.cohortCode)) {
      cohorts.push(student.cohort.cohortCode);
    }
  });
  console.log(cohorts);
  let year1 = cohorts.filter((cohort) => cohort.includes("2025"));
  year1.sort((code1, code2) => {
    const seasons = ["Winter", "Spring", "Summer", "Fall"];
    let c1 = seasons.indexOf(code1.slice(0, code1.indexOf("2")));
    let c2 = seasons.indexOf(code2.slice(0, code2.indexOf("2")));
    return c1 - c2;
  });
  let year2 = cohorts.filter((cohort) => cohort.includes("2026"));
  year2.sort((code1, code2) => {
    const seasons = ["Winter", "Spring", "Summer", "Fall"];
    let c1 = seasons.indexOf(code1.slice(0, code1.indexOf("2")));
    let c2 = seasons.indexOf(code2.slice(0, code2.indexOf("2")));
    return c1 - c2;
  });
  cohorts = [...year1, ...year2];
  console.log(cohorts);
  const [cohort, setCohort] = useState("");
  const [students, setStudents] = useState(data);
  const [viewMode, setViewMode] = useState(2);
  const handleCohort = (c) => {
    if (c) {
      let tempS = data.filter((student) => student.cohort.cohortCode === c);
      setStudents(tempS);
      setCohort(c);
    } else {
      setStudents(data);
      setCohort("");
    }
  };
  return (
    <div>
      <h1 className="header">Student Dashboard</h1>
      <div className="contents">
        <CohortList
          cohorts={cohorts}
          handleCohort={handleCohort}
          cohort={cohort}
        />
        <StudentList
          students={students}
          cohort={cohort}
          viewMode={viewMode}
          setViewMode={setViewMode}
          setStudents={setStudents}
          setCohort={setCohort}
          data={data}
        />
      </div>
    </div>
  );
}

export default App;
