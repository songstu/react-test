import './Card.css';

function Card({ id, title, desc, img, selected, setSelected }) {
  const isSelected = selected === id;

  return (
    <div
      className={`card ${isSelected ? 'selected' : ''}`}
      onClick={() => setSelected(id)}
    >
      <img src={img} alt={title} />

      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-desc">{desc}</div>
        <button>자세히 보기</button>
      </div>
    </div>
  );
}

export default Card;