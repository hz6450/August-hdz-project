import React, { useState } from 'react';
import './SearchEngine.css'; // 스타일 파일

const SearchEngine = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    
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
