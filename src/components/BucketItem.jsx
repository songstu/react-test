import "./BucketItem.css";

function BucketItem({ data, onDelete, onToggle }) {
    return (
        <div className={`bucket-item ${data.isDone ? "done" : ""}`}>
            
            <div className="bucket-content" onClick={() => onToggle(data.id)}>
                <span className="checkbox">
                    {data.isDone ? "🛫" : "🧳"}
                </span>
                
                {/* 🌟 나라와 지역, 그리고 할 일을 분리해서 보여줍니다 */}
                <div className="text-info">
                    <span className="location-badge">
                        📍 {data.country} - {data.region}
                    </span>
                    <p className="activity-text">{data.activity}</p>
                </div>
            </div>

            <button className="delete-btn" onClick={(e) => {
                e.stopPropagation(); // 삭제 버튼 누를 때 체크되는 현상 방지!
                onDelete(data.id);
            }}>
                취소
            </button>
        </div>
    );
}

export default BucketItem;