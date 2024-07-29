'use client'
import React, { useState } from 'react';

const Sidebar = ({ data }) => {
  return (
    <div className="w-64 p-4 bg-gray-100 rounded-lg max-h-[865px] overflow-auto">
      <Section title="Product Type" items={data.productTypes} />
      <Section title="Categories" items={data.categories} />
      <Section title="Artist" items={data.artists} />
    </div>
  );
};

const Section = ({ title, items }) => {
  const [visibleItems, setVisibleItems] = useState(4); // Initial number of items to show

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 4); // Load 4 more items
  };

  const handleLoadLess = () => {
    setVisibleItems((prev) => Math.max(prev - 4, 4)); // Load 4 less items, but not less than 4
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold pb-3">{title}</h2>
      <ul>
        {items.slice(0, visibleItems).map((item, index) => (
          <li key={index} className="flex items-center text-[#636363] text-base">
            <input
              type="checkbox"
              className="form-checkbox  text-[#636363] rounded bg-[#636363] checked:bg-[#636363] checked:border-transparent"
            />
            <span className="ml-2">{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex space-x-2 mt-2">
        {visibleItems < items.length && (
          <button
            onClick={handleLoadMore}
            className="text-black-500 text-sm font-semibold underline"
          >
            LOAD MORE...
          </button>
        )}
        {visibleItems > 4 && (
          <button
            onClick={handleLoadLess}
            className="text-black-500 text-sm font-bold underline"
          >
            LOAD LESS...
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
