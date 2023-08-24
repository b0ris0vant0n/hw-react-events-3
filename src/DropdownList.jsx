const DropdownList = ({ items, selected, onItemClick }) => {
  return (
    <ul className="dropdown">
      {items.map((item, index) => (
        <li
          key={index}
          className={selected === item ? 'active' : ''}
          onClick={() => onItemClick(item)}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default DropdownList;
