import { useSelector } from "react-redux";

const Sidebar = ({ onGroupSelect }) => {
  const groups = useSelector((state) => state.chat.groups);

  return (
    <div className="w-1/8 bg-emerald-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4 ">Chat Groups</h2>
      <ul className="">
        {groups.map((group) => (
          <li
            key={group.id}
            className="cursor-pointer hover:bg-emerald-500 p-2 border-b"
            onClick={() => onGroupSelect(group.id)}
          >
            {group.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
