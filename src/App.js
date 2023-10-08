import "./App.css";

const age = 15;
age >= 18 ? console.log("text") : console.log("something else");

function App() {
  const age = 19;
  const isGreen = true;

  const names = ["John", "Jane", "Joe", "Jenny"];

  return (
    <div className="App">
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>THIS HAS COLOR</h1>

      {isGreen && <button>This is a button, isGreen is true</button>}

      {names.map((name, key) => {
        return (
          <h1 key={key}>
            {name} {key}
          </h1>
        );
      })}
    </div>
  );
}

export default App;
