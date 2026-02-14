import { useEffect, useState } from "react";
import PatientSummary from "../components/PatientSummary";
import RecordForm from "../components/RecordForm";
import RecordCard from "../components/RecordCard";
import s from "./records.module.css";

const Records = () => {
  const [records, setRecords] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Load records from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("records"));
    if (data) setRecords(data);
  }, []);

  // Save records whenever updated
  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  const addRecord = (record) => {
    setRecords([record, ...records]);
    setShowForm(false);
  };

  const deleteRecord = (id) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <>
      <h1>Medical Records</h1>

      <PatientSummary />

      <div className={s.topBar}>
        <button
          className={s.addBtn}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close" : "+ Add Medical Record"}
        </button>
      </div>

      {showForm && <RecordForm onAdd={addRecord} />}

      <div className={s.list}>
        {records.length === 0 ? (
          <p className={s.empty}>No medical records yet.</p>
        ) : (
          records.map((rec) => (
            <RecordCard
              key={rec.id}
              record={rec}
              onDelete={deleteRecord}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Records;
