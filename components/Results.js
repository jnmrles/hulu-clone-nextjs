const { default: ThumbNail } = require("./ThumbNail");

function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <ThumbNail key={results.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
