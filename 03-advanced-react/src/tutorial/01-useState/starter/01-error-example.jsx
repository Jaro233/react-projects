const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count++;
    console.log(count);
  };
  return (
    <>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick}>
        increace
      </button>
    </>
  );
};

export default ErrorExample;
