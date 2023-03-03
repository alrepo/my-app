import React from 'react';

function SearchBar() {
  return (
    <div className="search-container" dir="rtl">
      {/* <form action="/" method="post">
        <input type="text" placeholder="ابحث بالمسمى الوظيفي..." />
        <button type="submit"><i class="fas fa-search"></i></button>
      </form> */}
      <div className="filter-container">
        <div className="filter location">
          <select>
            <option value="كل المناطق"><span role="img" aria-label="emoji">🌏 </span>كل المناطق</option>
            <option value="الرياض">الرياض</option>
            <option value="مكة المكرمة">مكة المكرمة</option>
            <option value="المنطقة الشرقية">المنطقة الشرقية</option>
          </select>
        </div>
        <div className="filter classification">
          <select>
            <option value="كل الفئات"><span role="img" aria-label="emoji">🍴 </span>كل الفئات</option>
            <option value="فاين دايننق">فاين دايننق</option>
            <option value="وجبات سريعة">وجبات سريعة</option>
            <option value="أبر كاجوال">أبر كاجوال</option>
          </select>
        </div>
        <div className="filter jobNames">
          <select>
            <option value="كل الوظائف"><span role="img" aria-label="emoji">👨‍🍳 </span>كل الوظائف</option>
            <option value="full-time">طاهي/شيف</option>
            <option value="part-time">مدير تشغيل</option>
            <option value="freelance">باريستا</option>
          </select>
        </div>
        <div className="searchButton"><span role="img" aria-label="emoji">🔎 </span>بحث</div>
      </div>
    </div>
  );
}

export default SearchBar;
