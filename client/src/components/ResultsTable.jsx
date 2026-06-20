function ResultsTable({ results }) {
  if (!results.length) return null;

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>College</th>
          <th>Branch</th>
          <th>Cutoff</th>
          <th>Chance</th>
        </tr>
      </thead>

      <tbody>
        {results.map((college, index) => (
          <tr key={index}>
            <td>{college.collegeName}</td>
            <td>{college.branchCode}</td>
            <td>{college.cutoff}</td>
            <td>{college.chance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultsTable;