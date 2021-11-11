import "./style.css";
import Desconhecido from "../image/Desconhecido.png";

const Students = ({ champions }) => {
  return (
    <ul className="champions">
      {champions.map((item) => (
        <li key={item.name} className="students">
          {console.log(item)}
          <img
            className="students__img"
            src={!item.image ? Desconhecido : item.image}
            alt={item.name}
          />
          <h3 className="students__name">{item.name}</h3>
          <p className={item.house}>{item.house}</p>
        </li>
      ))}
    </ul>
  );
};

export default Students;
