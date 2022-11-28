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
  // const [isChecked, setIsChecked] = useState(false);
  const [filterData, setFilterData] = useState("");

  // const [filter, setfilter] = useState({});

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

  const handleFilterChange = () => {
    setIsChecked(!isChecked);

    // console.log("event");
  };
  // const handleChange = () => {
  //   setChecked(!isChecked);
  // };

  // const array = [
  //   { userId: 1, id: 1, title: "delectus aut autem", completed: false },

  //   {
  //     userId: 1,
  //     id: 2,
  //     title: "quis ut nam facilis et officia qui",
  //     completed: false,
  //   },

  //   { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },

  //   { userId: 1, id: 4, title: "et porro tempora", completed: true },

  //   {
  //     userId: 1,
  //     id: 5,
  //     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
  //     completed: false,
  //   },

  //   {
  //     userId: 1,
  //     id: 6,
  //     title: "qui ullam ratione quibusdam voluptatem quia omnis",
  //     completed: false,
  //   },

  //   {
  //     userId: 1,
  //     id: 7,
  //     title: "illo expedita consequatur quia in",
  //     completed: false,
  //   },

  //   {
  //     userId: 1,
  //     id: 8,
  //     title: "quo adipisci enim quam ut ab",
  //     completed: true,
  //   },

  //   {
  //     userId: 1,
  //     id: 9,
  //     title: "molestiae perspiciatis ipsa",
  //     completed: false,
  //   },

  //   {
  //     userId: 1,
  //     id: 10,
  //     title: "illo est ratione doloremque quia maiores aut",
  //     completed: true,
  //   },
  // ];
  // console.log("aar", data);
  const newArray = data.slice(0, 10);

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

    if (isChecked ? "checked" : "") {
      setData(completedFilter);
    }
    // if (isChecked ? "checked" : "") {
    //   setData(unCompletedFilter);
    // }

    setFilterData(e.target.value);
  };

  const completedFilter = newArray.filter((item) => {
    return item.completed === true;
  });

  const unCompletedFilter = newArray.filter((item) => {
    return item.completed === false;
  });

  console.log("newData", newArray);

  // console.log("complatet", data.completed) == true;
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
      <br />
      <input
        type="checkbox"
        name="cks"
        checked={isChecked}
        onChange={() => handleFilterChange()}
      />
      <br />
      {/* <input
        type="checkbox"
        name="ckss"
        checked={isChecked}
        onChange={() => handleChange()}
      /> */}

      <table>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
        </tr>

        {data?.map((item, ind) => {
          return (
            <tr key={ind}>
              <td> {item.userId} </td>
              <td> {item.id} </td>
              <td>{item.title}</td>
              <td> {item.completed}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default NewUser;
