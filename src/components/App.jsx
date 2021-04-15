import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    const { value, name } = event.target;

    // console.log(newValue);
    // console.log(inputName);
    setFullName((prevValue) => {
      // if (inputName === "fName") {
      if (name === "fName") {
        return {
          // fName: newValue,
          fName: value,
          lName: prevValue.lName
        };
      }
      // else if (inputName === "lName") {
      else if (name === "lName") {
        return {
          fName: prevValue.fName,
          // lname: newValue
          lname: value
        };
      }
    });
  }
  // const [lName, setLName] = useState("");

  // function updateFName(event) {
  //   const firstName = event.target.value;
  //   setFName(firstName);
  // }

  // function updateLName(event) {
  //   const lastName = event.target.value;
  //   setLName(lastName);
  // }

  return (
    <div className="container">
      <h1>
        {/* Hello {fName} {lName} */}
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          // onChange={updateFName}
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          // onChange={updateLName}
          placeholder="Last Name"
          value={fullName.lName}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
