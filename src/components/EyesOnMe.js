function EyesOnMe() {
  function blur() {
    return console.log("Hey! Eyes on me!");
  }
  return (
    <div>
      <button onBlur={blur} onFocus={() => console.log("Good!")}>
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
