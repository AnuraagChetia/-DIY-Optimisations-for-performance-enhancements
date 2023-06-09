import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    // console.log("Items sorted");
    return [...items].sort((a, b) => a - b);
  }, [items]);

  const desendingList = useMemo(() => {
    return [...items].sort((a, b) => b - a);
  },[items]);
  // console.log("DemoList RUNNING");
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {props.toggleValue &&
          sortedList.map((item) => <li key={item}>{item}</li>)}

        {!props.toggleValue && desendingList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
