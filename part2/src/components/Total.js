const Total = ({parts}) => {
  console.log(parts)
  let total = parts.reduce((agg, currVal) => agg + currVal['exercises'],0)
  console.log(total)

  return (
    <p>
      Total of {total} exercises
    </p>
  );
};

export default Total;