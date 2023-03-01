import React from 'react';

function SearchBar2() {
  return (
    <div className="search-container2" dir="rtl">
      <form action="/" method="post">
        <input type="text" placeholder="ابحث بالمسمى الوظيفي..." />
        <button type="submit"><i class="fas fa-search"></i></button>
      </form>
    </div>
  );
}

export default SearchBar2;
