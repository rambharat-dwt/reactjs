import React, { useState } from "react";
import "./Class.css";

const Class = () => {
  // const [cls, setCls] = useState("true");
  const [newcls, setNewcls] = useState([]);

  const handleClick = (items) => {
    // console.log(data);

    if (newcls.includes(items)) {
      const clsss = newcls.filter((item) => {
        return item !== items;
      });
      setNewcls(clsss);
    } else {
      setNewcls([...newcls, items]);
    }


  };
  

  console.log("hhh", handleClick);
  const list = ["one", "two", "three", "four"];
  return (
    <div>
      <div className="cl">
        <h4> hello</h4>
      </div>

      {list.map((items, index) => {
        return (
          <div key={index}>
            <div
              className={`clss ${newcls.includes(items) ? "clsss" : ""} `}
              key={index}
              onClick={() => handleClick(items)}
            >
              {items}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Class;
