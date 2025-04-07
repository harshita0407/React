import { useState } from "react";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
  
  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded"
      />
      <ul className="mt-2">
        {filteredItems.map((item, index) => (
          <li key={index} className="border-b p-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
