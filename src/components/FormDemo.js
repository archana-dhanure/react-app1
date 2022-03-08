import React, { useEffect, useState } from "react";

function FormDemo() {
  let [userData, setUserData] = useState({ name: "", age: "", city: "" });
  function handleUserData(e, keyname) {
    let updateObj = { [keyname]: e.target.value };
    setUserData({ ...userData, ...updateObj });
  }

  useEffect(() => {}, [userData.city]);

  return (
    <React.Fragment>
      Name: <input type="input" onChange={(e) => handleUserData(e, "name")} />
      Age: <input type="input" onChange={(e) => handleUserData(e, "age")} />
      City:
      <select onChange={(e) => handleUserData(e, "city")}>
        <option disabled> Select City</option>
        <option value="pune">Pune</option>
        <option value="mumbai"> Mumbai</option>
      </select>
      <input type="input" />
    </React.Fragment>
  );
}

export default FormDemo;
