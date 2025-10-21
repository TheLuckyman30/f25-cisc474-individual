interface DropdownProps {
  possibleItems: Array<string>;
  selectedItem: string;
  setSelectedItem: (newInfo: string) => void;
}

function Dropdown({
  possibleItems,
  selectedItem,
  setSelectedItem,
}: DropdownProps) {
  return (
    <form className="flex flex-col select-none">
      <label className="font-bold">Select a view</label>
      <select
        defaultValue={selectedItem}
        onChange={(event) => setSelectedItem(event.currentTarget.value)}
        className="bg-white shadow-md rounded-md w-fit p-2 border border-gray-400 focus:outline-none "
      >
        {possibleItems.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </form>
  );
}

export default Dropdown;
