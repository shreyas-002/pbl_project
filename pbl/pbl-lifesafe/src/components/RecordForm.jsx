import { useState } from "react";
import s from "./recordform.module.css";

const RecordForm = ({ onAdd }) => {
  const [type, setType] = useState("Lab Report");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState("");
  const [hospital, setHospital] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const submit = (e) => {
    e.preventDefault();

    if (!title || !desc || !date || !doctor || !hospital) return;

    const newRecord = {
      id: Date.now(),
      type,
      title,
      description: desc,
      date,
      doctor,
      hospital,
      createdAt: new Date().toISOString(),
    };

    onAdd(newRecord);

    setTitle("");
    setDesc("");
    setDate("");
    setDoctor("");
    setHospital("");
  };

  return (
    <form className={s.form} onSubmit={submit}>
      <h3 className={s.heading}>Add Medical Record</h3>

      <select
        className={s.input}
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option>Lab Report</option>
        <option>Prescription</option>
        <option>Diagnosis</option>
        <option>Vaccination</option>
        <option>Scan / Imaging</option>
      </select>

      <input
        className={s.input}
        type="text"
        placeholder="Record Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        className={s.textarea}
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />

      <input
        className={s.input}
        type="date"
        max={today}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <input
        className={s.input}
        type="text"
        placeholder="Doctor Name"
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
        required
      />

      <input
        className={s.input}
        type="text"
        placeholder="Hospital / Clinic"
        value={hospital}
        onChange={(e) => setHospital(e.target.value)}
        required
      />

      <button className={s.btn} type="submit">
        Save Record
      </button>
    </form>
  );
};

export default RecordForm;
