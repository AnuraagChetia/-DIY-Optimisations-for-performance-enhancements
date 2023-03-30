import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const [toggleSort, setToggleSort] = useState(true);
  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const changeListHandler = () => {
    setToggleSort((prevToggle) => !prevToggle);
  };

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} toggleValue={toggleSort} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeListHandler}>Change sort order</Button>
    </div>
  );
}

export default App;
