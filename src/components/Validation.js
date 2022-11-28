import { useState } from "react";
import Child from "./Child";

const Validation = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [newUname, setNewUname] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleNameChange = (e) => {
    // setUserName(e.target.value);
    const value = e.target.value;

    if (value.length < 4) {
      setUserError(true);
    } else {
      setUserError(false);
    }
    setUserName(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (value.length < 4) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length < 4 || password.length < 4) {
      alert("type valid values");
    } else {
      alert("form submitted successfuly");
    }
    setUserError(false);
    setPasswordError(false);
    setNewUname(userName);
    setNewPassword(password);
    setPassword("");
    setUserName("");
  };
  const handleReset = () => {
    setNewUname("");
    setNewPassword("");
    // setPassword("");
    // setUserName("");
  };

  return (
    <>
      <h3>hello,i am Parent Component</h3>
      {/* <h3>password:{newPassword}</h3> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          name="name"
          value={userName}
          onChange={handleNameChange}
        />
        {userError ? (
          <span style={{ color: "red", fontSize: "15px" }}>
            username must be more then 4 char
          </span>
        ) : (
          ""
        )}
        <br />
        <br />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError ? (
          <span style={{ color: "red", fontSize: "15x" }}>
            password must be more then 4 char
          </span>
        ) : (
          ""
        )}
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
      <Child uname={userName} pass={newPassword} reset={handleReset} />
    </>
  );
};
export default Validation;
