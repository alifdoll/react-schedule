import React from "react";

const form = ({ className }) => {
  return (
    <div className={className + " mt-6 ml-4"}>
      <label className="label">Mulai</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>

      <label className="label mt-3">Akhir</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>

      <label className="label mt-3">Deskripsi</label>
      <input className="input my-2" type="text" placeholder="Search.." />

      <div class="control">
        <button class="button is-info mt-3">Submit</button>
      </div>
    </div>
  );
};

export default form;
