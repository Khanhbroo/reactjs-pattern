import { useState, useRef } from "react";

const SearchableList = ({ items, itemKeyFn, children }) => {
  const lastChange = useRef();
  const [searchItem, setSearchItem] = useState("");

  const searchResult = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchItem.toLowerCase())
  );

  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchItem(event.target.value);
    }, 500);
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
