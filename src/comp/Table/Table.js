import React from "react";

const Table = ({ days, times }) => {
  const dayList = days.map((day) => {
    return (
      <th
        key={day}
        style={{ border: "1px solid #dbdbdb", textAlign: "center" }}
      >
        {day}
      </th>
    );
  });

  const timeList = times.map((time) => {
    return (
      <tr
        className="table"
        key={time}
        style={{
          height: "100px",
        }}
      >
        <td>{time}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  });

  return (
    <div
      className=" table-container box"
      style={{ overflowY: "auto", overflowX: "auto" }}
    >
      <table
        className="tabel-jadwal table is-fullwidth"
        style={{
          borderBottomColor: "red",
          borderRightColor: " #dbdbdb",
          borderLeftColor: " #dbdbdb",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #dbdbdb", textAlign: "center" }}>
              Waktu
            </th>
            <>{dayList}</>
          </tr>
        </thead>
        <tbody>{timeList}</tbody>
      </table>
    </div>
  );
};

export default Table;
