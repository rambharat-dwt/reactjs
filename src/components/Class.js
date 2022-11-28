import React, { useState } from "react";
import "./Class.css";

const Class = () => {
  // const [cls, setCls] = useState("true");
  const [newcls, setNewcls] = useState([]);

  const handleClick = () => {
    // e.preventDefault();
    // let selectedItem = e ? parseInt(arr.target.id) : null;
    // setCls(selectedItem);
    // console.log(">> clstem", cls);

    if (newcls.includes(list.id)) {
      const clsss = newcls.filter((item) => {
        return item !== list.id;
      });
    } else {
      setNewcls([...newcls, list.id]);
    }

    // setCls(!cls);
  };
  //   const handleClicks = () => {
  //     setClss(!clss);
  //   };

  //   const handleClickss = () => {
  //     setCl(!cl);
  //   };
  //   const handleClicksss = () => {
  //     setClsss(!clsss);
  //   };
  const list = [1, 2, 3, 4];
  return (
    <div>
      <div className="container">
        <h4> hello</h4>
      </div>

      {list.map((data, index) => {
        return (
          <div
            className={`${newcls.includes(list.id) ? "clsss" : "cls "} `}
            key={index}
            onClick={handleClick()}
          >
            {data}
          </div>
        );
      })}

      {/* <div className={clss ? "clss" : null} onClick={handleClicks}>
        my
      </div>
      <div className={cl ? "cl" : null} onClick={handleClickss}>
        name
      </div>
      <div className={clsss ? "clsss" : null} onClick={handleClicksss}>
        is
      </div> */}
    </div>
  );
};
export default Class;
