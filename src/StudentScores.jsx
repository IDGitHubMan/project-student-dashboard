export default function StudentScores({ scores }) {
  return (
    <div>
      <h3>Scores:</h3>
      {Object.keys(scores).map((category) => {
        return (
          <p>
            {category.charAt(0).toUpperCase() + category.slice(1)}:{" "}
            {scores[category] * 100}
          </p>
        );
      })}
    </div>
  );
}
