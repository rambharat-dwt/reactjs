import { useDispatch, useSelector } from "react-redux";
import NavigationBar from "./Navbar";
import Navbar from "./Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { getList } from "../../services/actions/Action";

const NewUser = () => {
  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [checked, setChecked] = useState(false);

  const [filterData, setFilterData] = useState("");

  // const list = useSelector((state) => state.rootReducer.getListReducer.payload);
  // console.log(list);
  // const dispatch = useDispatch();

  //   console.log(response.data);
  //   dispatch(getList(response.data));
  // };

  useEffect(() => {
    const fetchList = () => {
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setSearchApiData(json);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchList();
  }, []);

  const handleFilterChange = (e) => {
    setIsChecked(!isChecked);
  };
  const handleCheckChange = (e) => {
    setChecked(!checked);
  };

  // const newArray = data.slice(0, 30);

  const handleChange = (e) => {
    if (e.target.value == "") {
      setData(searchApiData);
    } else {
      const result = searchApiData.filter(
        (item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.userId.toString().includes(e.target.value.toString()) ||
          item.id.toString().includes(e.target.value.toString())
      );
      setData(result);
    }

    setFilterData(e.target.value);
  };

  const completedFilter = data.filter((item) => {
    return item.completed === true;
  });

  const unCompletedFilter = data.filter((item) => {
    return item.completed === false;
  });

  console.log("newData", data);

  const completedFilterArrr = completedFilter.map((item, ind) => {
    return (
      <tr key={ind}>
        <td> {item.userId} </td>
        <td> {item.id} </td>
        <td>{item.title}</td>
        <td> {item.completed}</td>
      </tr>
    );
  });

  const unCompletedFilterArrr = unCompletedFilter.map((item, ind) => {
    return (
      <tr key={ind}>
        <td> {item.userId} </td>
        <td> {item.id} </td>
        <td>{item.title}</td>
        <td> {item.completed}</td>
      </tr>
    );
  });

  return (
    <div>
      <h4>Search data in list</h4>
      <input
        type="text"
        placeholder="search"
        value={filterData}
        onInput={(e) => handleChange(e)}
      ></input>

      
      <br />
      <label>True</label> &nbsp;
      <input
        type="checkbox"
        name="cks"
        onChange={handleFilterChange}
        checked={isChecked}
      />
      <br />
      <br/>
      <label>False</label> &nbsp;
      <input
        type="checkbox"
        name="cks"
        onChange={handleCheckChange}
        checked={checked}
      />
      <table>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
        </tr>
        {!isChecked &&
          !checked &&
          data?.map((item, ind) => {
            return (
              <tr key={ind}>
                <td> {item.userId} </td>
                <td> {item.id} </td>
                <td>{item.title}</td>
                <td> {item.completed}</td>
              </tr>
            );
          })}

        {isChecked &&
          checked &&
          data?.map((item, ind) => {
            return (
              <tr key={ind}>
                <td> {item.userId} </td>
                <td> {item.id} </td>
                <td>{item.title}</td>
                <td> {item.completed}</td>
              </tr>
            );
          })}

        {isChecked && !checked && completedFilterArrr}
        {checked && !isChecked && unCompletedFilterArrr}
      </table>
    </div>
  );
};
export default NewUser;
