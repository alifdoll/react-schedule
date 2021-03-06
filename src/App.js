import React, { useState, useEffect } from "react";
import Table from "./comp/Table/Table";
import List from "./comp/List/List";
import Wrap from "./comp/Wrap";
import lectures from "./api";
import Form from "./comp/Form/Form";

const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
const times = [
  "07.00",
  "08.00",
  "09.00",
  "10.00",
  "11.00",
  "12.00",
  "13.00",
  "14.00",
  "15.00",
  "16.00",
  "18.00",
  "19.00",
  "20.00",
];
const title = "Jadwal Kuliah";

const App = () => {
  const [lists, setLists] = useState([]);
  const [pages, setPages] = useState({});
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    const listMatkul = async () => {
      const { data } = await lectures.get("/lectures");
      setLists(data.data);
      setPages(data.links);
      setMetaData(data.meta);
    };
    listMatkul();
  }, []);

  const searchCourse = async (val) => {
    const { data } = await lectures.get("/lectures", {
      params: {
        search: val,
      },
    });
    setLists(data.data);
    setPages(data.links);
    setMetaData(data.meta);
  };

  const buttonPageHandler = async (page) => {
    const { data } = await lectures.get(`/lectures?page=${page}`);
    setLists(data.data);
    setPages(data.links);
  };

  return (
    <React.Fragment>
      <div className="columns">
        <Wrap className="is-3 pt-6">
          <Form className="box container" />
          {/* <List
            className="box container"
            listItem={lists}
            pageItem={pages}
            metaItem={metaData}
            pageHandler={buttonPageHandler}
            searchCourse={searchCourse}
          /> */}
        </Wrap>
        <Wrap className="block is-9">
          <Table days={days} times={times} />
        </Wrap>
      </div>
    </React.Fragment>
  );
};

export default App;
