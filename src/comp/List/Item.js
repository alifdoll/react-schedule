import React from "react";

const Item = ({ matkul, classHandler }) => {
  const buttonClassHandler = (matkulDipilih, kelas) => {
    const kelasDipilih = matkulDipilih.kelas[0].find((kode) => {
      return kode.kelas == kelas;
    });
    classHandler(matkulDipilih, kelasDipilih);
  };

  const classes = matkul.kelas[0].map((item) => {
    const days = item.jadwal.map((day) => {
      const dayString = `${day.hari} ${day.mulai}-${day.akhir}`;
      return (
        <div className="column">
          <p>{dayString}</p>
        </div>
      );
    });
    return (
      <div className="columns is-fullwidth mr-1">
        <div className="column">
          <div
            className="button is-fullwidth is-small is-rounded is-clickable belum-dipilih"
            onClick={() => {
              buttonClassHandler(matkul, item.kelas);
            }}
          >
            <p className="has-text-left">{item.kelas}</p>
          </div>
          <>{days}</>
        </div>
      </div>
    );
  });

  return (
    <div className="box pl-5" style={{ height: "100%", width: "100%" }}>
      <div className=" columns">
        <div className="column">
          <p className="has-text-weight-bold ">
            {matkul.nama} ({matkul.sks}) SKS
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <p>{matkul.kode}</p>
        </div>
      </div>

      <div className="columns is-multiline">
        <>{classes}</>
      </div>
    </div>
  );
};

export default Item;
