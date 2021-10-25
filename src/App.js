import React, { useState, useEffect } from "react";
import Table from "./comp/Table/Table";
import List from "./comp/List/List";
import Wrap from "./comp/Wrap";
import lectures from "./api";

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

const batasAwalWaktu = "07.00";
const batasAkhirWaktu = "18.00";

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

  const stringToMinute = (time) => {
    const jam = Number.parseInt(time.substring(0));
    const menit = Number.parseInt(time.substring(time.indexOf(":") + 1));
    console.log(`asli: ${time}  sliced: ${menit}`);
    return jam * 60 + menit;
  };

  const totalMinuteToStringTime = (time) => {
    const jam = Number.parseInt(time / 60)
      .toString()
      .padStart(2, "0");
    const menit = (time % 60).toString().padStart(2, "0");
    return `${jam}.${menit}`;
  };

  const buttonPageHandler = async (page) => {
    const { data } = await lectures.get(`/lectures?page=${page}`);
    setLists(data.data);
    setPages(data.links);
  };

  const buttonClassHandler = (matkulDipilih, kelasDipilih) => {
    // console.log(kelasDipilih);
    // alert(nama);

    kelasDipilih.jadwal.forEach((jadwal) => {
      const waktuMulai = stringToMinute(jadwal.mulai);
      const waktuBerakhir = stringToMinute(jadwal.akhir);
      const perbedaan = waktuBerakhir - waktuMulai;

      const tabelJadwal = document.querySelector(".tabel-jadwal");
      console.log(waktuMulai);
      const divJadwal = tabelJadwal.tBodies[0]
        .querySelector(
          `tr:nth-child(${
            Number.parseInt(waktuMulai / 60) - batasAwalWaktu + 1
          })>td:nth-child(${days.indexOf(jadwal.hari) + 2})`
        )
        .appendChild(document.createElement("div"));

      divJadwal.classList.add("jadwal");

      divJadwal.style.height = `calc(${
        Number.parseInt(perbedaan / 60) * 4
      }rem + ${((perbedaan % 60) / 60) * 4}rem - 1px)`;

      divJadwal.style.marginTop = `calc(-0.05rem + ${
        ((waktuMulai % 60) / 60) * 4
      }rem + 1px)`;

      divJadwal.setAttribute("data-kode-mata-kuliah", matkulDipilih.kode);
      divJadwal.setAttribute("data-kode-kelas", kelasDipilih.kelas);

      const divInformasiJadwal = divJadwal.appendChild(
        document.createElement("div")
      );

      divInformasiJadwal.classList.add("jadwal__detail");

      divInformasiJadwal.appendChild(document.createElement("p")).textContent =
        matkulDipilih.nama;

      divInformasiJadwal.appendChild(
        document.createElement("p")
      ).textContent = `Kelas ${kelasDipilih.kelas}`;

      divInformasiJadwal.appendChild(
        document.createElement("p")
      ).textContent = `${jadwal.waktuMulai} - ${jadwal.waktuBerakhir}`;
    });
  };

  return (
    <React.Fragment>
      <div className="columns">
        <Wrap className="is-4">
          <List
            className="box container"
            listItem={lists}
            pageItem={pages}
            metaItem={metaData}
            pageHandler={buttonPageHandler}
            classHandler={buttonClassHandler}
          />
        </Wrap>
        <Wrap className="block is-8">
          <Table days={days} times={times} />
        </Wrap>
      </div>
    </React.Fragment>
  );
};

export default App;
