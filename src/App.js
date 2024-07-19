import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card";
import H from "./Components/H";

function App() {
  const obj = {
    name: "Sonu",
    age: 23,
    gender: "male",
    role: "Developer",
  };
  class name {
    constructor(name, age, role) {
      this.name = name;
      this.age = age;
      this.role = role;
    }
  }

  const UsingClassData = new name("deepak kumar", 20, "React Native developer");

  return (
    <>
      <div className="App">
      <h1 className="bg-black text-cyan-50 text-3xl m-4">
        IN this project use Props Concepts And bg Chnager
      </h1>
      <Card name="MonuKumarYadav" data={obj} data1={UsingClassData} />
      <span className="bg-black text-cyan-50 text-3xl m-6">
        chnage the color click on the card button part button{" "}
      </span>
    </div>

    <H/>
    </>
  );
}

export default App;
