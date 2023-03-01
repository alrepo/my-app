import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className="search-container" dir="rtl">
      <form>
        <input type="text" placeholder="ابحث بالمسمى الوظيفي..." />
        <button type="submit"><FaSearch className='searchIcon'/></button>
      </form>
      <div className="filter-container">
        <div className="filter">
          <select>
            <option value="كل المناطق">كل المناطق</option>
            <option value="الرياض">الرياض</option>
            <option value="مكة المكرمة">مكة المكرمة</option>
            <option value="المنطقة الشرقية">المنطقة الشرقية</option>
          </select>
        </div>
        <div className="filter">
          <select>
            <option value="">كل الوظائف</option>
            <option value="full-time">طاهي/شيف</option>
            <option value="part-time">مدير تشغيل</option>
            <option value="freelance">باريستا</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
