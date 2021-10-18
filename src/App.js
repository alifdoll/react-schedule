import React, { useState, useCallback } from "react";
import Table from "./comp/Table/Table";
import List from "./comp/List/List";
import Wrap from "./comp/Wrap";
import axios from "axios";

const test = [
  { id: 1, name: "Alif" },
  { id: 2, name: "Dendy" },
];

const App = () => {
  const listMatkul = useCallback(async () => {
    const { data } = await axios.get(
      "http://api.pusingkuliah.com/api/lectures"
    );
  });

  const [lists, setLists] = useState(listMatkul);
  console.log(listMatkul);
  return (
    <div className="columns">
      <Wrap>
        <List className="box" list={test} />
      </Wrap>
      <Wrap>
        <Table />
      </Wrap>
    </div>
  );
};

export default App;
