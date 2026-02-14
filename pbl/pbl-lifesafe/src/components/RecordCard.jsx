import s from "./recordcard.module.css";

const RecordCard = ({ record, onDelete }) => {
  const {
    id,
    type,
    title,
    description,
    date,
    doctor,
    hospital,
  } = record;

  return (
    <div className={s.card}>
      <div className={s.header}>
        <span className={s.badge}>{type}</span>
        <span className={s.date}>{date}</span>
      </div>

      <h4 className={s.title}>{title}</h4>

      <p className={s.meta}>
        <strong>Doctor:</strong> {doctor}
      </p>

      <p className={s.meta}>
        <strong>Hospital:</strong> {hospital}
      </p>

      <p className={s.desc}>{description}</p>

      <div className={s.actions}>
        <button
          className={s.delete}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecordCard;
