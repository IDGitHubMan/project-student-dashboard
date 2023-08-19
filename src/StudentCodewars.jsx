export default function StudentCodewars({ codewars }) {
  return (
    <div>
      <div>
        <h3>Codewars:</h3>
        <p>Current total: {codewars.current.total}</p>
        <p>Last week: {codewars.current.lastWeek}</p>
        <p>Goal: {codewars.goal.total}</p>
        <p>
          {`Percent of Goal Achieved: ${(
            (codewars.current.total / codewars.goal.total) *
            100
          ).toFixed()}`}
        </p>
      </div>
    </div>
  );
}
