import { useState } from "react";
import { DropdownItem } from "../types/DropdownItem";

interface DropdownProps {
  items: DropdownItem[];
  selectedItem?: DropdownItem;
  onSelect: (item: DropdownItem) => void;
  placeholder?: string;
  className?: string;
}

function Dropdown({
  items,
  selectedItem,
  onSelect,
  placeholder = "Select an option",
  className = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (item: DropdownItem) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${className}`}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedItem ? selectedItem.label : placeholder}
        <span className="arrow">&#x25BC;</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item) => (
            <li key={item.value} onClick={() => handleSelect(item)}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
