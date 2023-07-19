const initialItems = [
 { id: 1, description: "Passports", quantity: 2, packed: false },
 { id: 2, description: "Socks", quantity: 12, packed: true },
 { id: 3, description: " charger", quantity: 1, packed: false },
];
// the App function
export default function App() {
 return (
  <div className="app">
   <Logo />
   <Form />
   <PackingList />
   <Stats />
  </div>
 );
}

// the first logo on on site
function Logo() {
 return <h1>🌞farAway🌞</h1>;
}
// the function form
function Form() {
 return (
  <form className="add-from">
   <h3>form</h3>
   <select>
    {/* <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option> */}
    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
     <option value={num} key={num}>
      {num}
     </option>
    ))}
   </select>
   <input type="text" placeholder="type here.."></input>
   <button>add</button>
  </form>
 );
}

function PackingList() {
 return (
  <div className="list">
   <ul>
    {initialItems.map((item) => (
     <Item item={item} key={item.id} />
     //{com.na}  {na.of.prop} {na.of.obj}
     // the new props calld item bc we attrate over it
    ))}
   </ul>
  </div>
 );
}

function Item({ item }) {
 // it should be props but we destructuer it
 return (
  <>
   <li>
    <span style={item.packed ? { textDecoration: "line-through" } : {}}>
     {item.description}
     {item.quantity}
    </span>
   </li>
   <button>x</button>
  </>
 );
}

function Stats() {
 return (
  <footer className="stats">
   you have x items in your list and you already packed x
  </footer>
 );
}
