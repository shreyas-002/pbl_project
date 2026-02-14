import s from "./patient.module.css";

const PatientSummary = () => {
  const usr = JSON.parse(localStorage.getItem("usr")) || {};

  return (
    <div className={s.card}>
      <h3 className={s.title}>Patient Summary</h3>

      <div className={s.info}>
        <div>
          <span className={s.label}>Name:</span>
          <span>{usr.name || usr.nm || "Not Provided"}</span>
        </div>

        <div>
          <span className={s.label}>Age:</span>
          <span>{usr.age || "Not Provided"}</span>
        </div>

        <div>
          <span className={s.label}>Phone:</span>
          <span>{usr.phone || "Not Provided"}</span>
        </div>
      </div>
    </div>
  );
};

export default PatientSummary;
