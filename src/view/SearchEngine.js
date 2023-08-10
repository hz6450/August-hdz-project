import React, { useState } from 'react';
import '../styles/SearchEngine.css';

const SearchEngine = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // 여기에 검색 실행하는 로직을 추가하세요.
    // 예: 검색 결과를 가져오는 API 호출 등
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="search-engine-container">
      <div className="delivery-header">
        <h1>음식 배달 검색</h1>
      </div>
      <div className="search-box">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="음식명을 입력하세요"
        />
        <button onClick={handleSearch}>검색</button>
      </div>
    </div>
  );
};

export default SearchEngine;
