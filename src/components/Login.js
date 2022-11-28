import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginUser from "../services/actions/Action";

const Login = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rootReducer.loginReducer);

  const [user, setUser] = useState({ name: "", password: "" });
  const [userError, setUserError] = useState(false);

  //   const [passError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    // if (user.name.length < 4) {
    //   setUserError(false);
    // } else {
    //   setUserError(true);
    // }
    // setUser();

    // if (user.password.length < 4) {
    //   setUserError(true);
    // } else {
    //   setUserError(false);
    // }
    // setUser();
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(user));
    console.log(user);
    setUser("");
  };

  useEffect(() => {
    console.log("data...", data);
  }, [data]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          name="name"
          onChange={handleChange}
        />
        {userError && (
          <span style={{ color: "red", fontSize: "15px" }}>
            name is must be more then 4 char
          </span>
        )}
        <br />
        <br />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          onChange={handleChange}
        />
        {userError && (
          <span style={{ color: "red", fontSize: "15px" }}>
            password is must be more then 4 char
          </span>
        )}

        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default Login;
