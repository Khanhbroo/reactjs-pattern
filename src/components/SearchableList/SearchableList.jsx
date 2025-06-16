import { useState } from "react";

const SearchableList = ({ items, itemKeyFn, children }) => {
  const [searchItem, setSearchItem] = useState("");

  const searchResult = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchItem.toLowerCase())
  );

  function handleChange(event) {
    setSearchItem(event.target.value);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResult.map((item, index) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
