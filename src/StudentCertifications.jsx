export default function StudentCertifications({ certifications }) {
  return (
    <div>
      <h3>Certifications</h3>
      {Object.keys(certifications).map((category, index) => {
        return (
          <p>
            {category.includes("I")
              ? category.charAt(0).toUpperCase() +
                category.slice(1, 4) +
                " " +
                category.slice(4)
              : category.charAt(0).toUpperCase() + category.slice(1)}
            : {certifications[category]}
            <span>{certifications[category] ? "✅" : "❌"}</span>
          </p>
        );
      })}
    </div>
  );
}
