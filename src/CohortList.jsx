export default function CohortList({ cohorts, handleCohort, cohort }) {
  {
    console.log(cohort);
  }
  return (
    <aside className="cohort-list">
      <h2>Choose a Cohort</h2>

      {!cohort ? (
        <></>
      ) : (
        <p
          className="cohort"
          onClick={() => {
            handleCohort("");
          }}
        >
          All Students
        </p>
      )}

      {cohorts.map((c, index) => {
        return (
          <p
            className="cohort"
            onClick={() => {
              handleCohort(c);
            }}
            key={index}
          >
            {c.slice(0, c.indexOf("2")) + " " + c.slice(c.indexOf(2))}
          </p>
        );
      })}
    </aside>
  );
}
