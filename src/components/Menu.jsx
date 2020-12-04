import React, { useRef } from "react";
import { useClickAway } from "react-use";

function Menu({ items, style, closeMenu }) {
  const menuRef = useRef(null);

  useClickAway(menuRef, closeMenu);

  const handleClick = (event, action) => {
    if (action) action();
  };

  return !items || !items.length ? null : (
    <div className="Menu" ref={menuRef} style={style}>
      {items.map((item, itemIndex) => (
        <span
          onClick={(event) => handleClick(event, item.clickAction)}
          className="Menu__item"
          key={`item-${itemIndex}`}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}

export default Menu;
