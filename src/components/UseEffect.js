import React from "react";

import { useEffect, useState } from "react";

const Effect = () => {
  const [status, setStatus] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);
  const [interest, setInterest] = useState("");

  const getFormData = (e) => {
    // console.log(name, email, password);
    e.preventDefault();

    const data = { name, email, password, interest };
    if (name && email && password && interest) {
      setList((list) => [...list, data]);
      setName("");
      setEmail("");
      setPassword("");
      setInterest("");
    }
  };

  // useEffect(() => {
  //   console.log(("status", status));
  // });

  return (
    <div>
      {/* {status ? <h3>hello world</h3> : null} */}

      <h1>handle form in react</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <select value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option>select option</option>
          <option>mobile</option>
          <option>clothes</option>
        </select>
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
      {list.map((data) => (
        <tr>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.password}</td>
          <td>{data.interest}</td>
        </tr>
      ))}
    </div>
  );
};
export default Effect;
