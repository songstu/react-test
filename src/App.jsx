import { useState } from "react";
import BucketItem from './components/BucketItem';
import './App.css';

function App() {
  // 1. 3개의 입력창이 각각 가지고 있을 상태들
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [activity, setActivity] = useState("");
  
  // 2. 여행 버킷리스트 배열 (미리 예시 데이터를 몇 개 넣어둘게요!)
  const [bucketList, setBucketList] = useState([
    { 
      id: 1, 
      country: "일본", 
      region: "후쿠오카", 
      activity: "포켓몬 센터 가서 피카츄 굿즈 구경하기!", 
      isDone: false 
    },
    { 
      id: 2, 
      country: "한국", 
      region: "제주도", 
      activity: "애월 해안도로 드라이브하고 전복죽 먹기", 
      isDone: true 
    },
    { 
      id: 3, 
      country: "미국", 
      region: "샌프란시스코", 
      activity: "이정후 야구 직관하기", 
      isDone: false 
    }
  ]);

  // 3. '버킷리스트 담기' 버튼을 눌렀을 때 실행될 함수
  const addBucket = () => {
    // 세 칸 중 하나라도 비어있으면 추가되지 않게 막습니다.
    if (country === "" || region === "" || activity === "") {
      alert("나라, 지역, 하고 싶은 일을 모두 적어주세요!");
      return; 
    }

    // 🌟 핵심: 3개의 입력값을 하나의 묶음(객체)으로 만듭니다.
    const newBucket = {
      id: Date.now(),
      country: country,
      region: region,
      activity: activity,
      isDone: false
    };

    setBucketList([...bucketList, newBucket]);
    
    // 추가 후에는 다음 입력을 위해 입력창 3개를 모두 비워줍니다.
    setCountry(""); 
    setRegion("");
    setActivity("");
  };

  const deleteBucket = (targetId) => {
    const newBucketList = bucketList.filter((item) => item.id !== targetId);
    setBucketList(newBucketList);
  };

  const toggleComplete = (targetId) => {
    const newBucketList = bucketList.map((item) => {
      if (item.id === targetId) {
        return { ...item, isDone: !item.isDone };
      } 
      return item;
    });
    setBucketList(newBucketList);
  };

  return (
    <div className='app-wrap'>
      <h2>✈️ 나의 세계여행 버킷리스트</h2>
      
      {/* 🌟 입력창이 3개로 늘어났어요! */}
      <div className="input-box">
        <input 
          type="text" 
          placeholder="나라 (예: 일본)" 
          value={country}
          onChange={(e) => setCountry(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="지역 (예: 후쿠오카)" 
          value={region}
          onChange={(e) => setRegion(e.target.value)} 
        />
        <input 
          className="activity-input"
          type="text" 
          placeholder="가장 하고 싶은 일은?" 
          value={activity}
          onChange={(e) => setActivity(e.target.value)} 
        />
        <button onClick={addBucket}>담기 🎒</button>
      </div>

      <div className='bucket-board'>
        {bucketList.map((item) => (
          <BucketItem 
            key={item.id} 
            data={item} 
            onDelete={deleteBucket} 
            onToggle={toggleComplete} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;