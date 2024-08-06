import { useState } from "react";
import "./styles.css";

export default function App() {
  const [items1, setItems1] = useState([
    { title: "Item1", checked: false },
    { title: "Item2", checked: false },
    { title: "Item3", checked: false },
  ]);
  const [items, setItems] = useState([
    { title: "Item A", checked: false },
    { title: "Item B", checked: false },
    { title: "Item C", checked: false },
  ]);
  const [state, setState] = useState(false);

  const handleChecked = (index) => {
    const updatedCheckedList1 = [...items1];
    updatedCheckedList1[index].checked = !updatedCheckedList1[index].checked;
    setState(updatedCheckedList1);
  };
  const handleSubmit = () => {
    const ItemsList1 = [...items1];
    const ItmesList2 = [...items];
    ItemsList1.forEach((item, index) => {
      if (item.checked) {
        const temp = ItemsList1[index].title;
        ItemsList1[index].title = ItmesList2[index].title;
        ItmesList2[index].title = temp;
      }
      ItemsList1[index].checked = false;
    });
    setItems(ItmesList2);
    setItems1(ItemsList1);
  };
  return (
    <div className="App">
      <h1>Swap The List Itmes</h1>
      <div>
        <h3>List Items1</h3>
        <ul>
          {items1.map((item, index) => (
            <>
              <li key={index}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleChecked(index)}
                />
                {item.title}
              </li>
            </>
          ))}
        </ul>
      </div>
      <div>
        <h3>List Items2</h3>
        <ul>
          {items.map((item, index) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </div>
      <button type="sumbit" onClick={() => handleSubmit()}>
        Swap the List Items
      </button>
    </div>
  );
}
