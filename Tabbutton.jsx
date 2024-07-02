// import React from 'react';

export default function Tabbutton({ children, onSelect }) {
  const handleClick = () => {
    if (onSelect) {
      onSelect();
    }
  };
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}

// export default function Tabbutton ({children , onSelect }) {
    
// return <li ><button onClick={handleclick} > {children}</button></li>  ;
// }