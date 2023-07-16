const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: false },
];

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
// that is comment and edit and again....
function Logo() {
	return <h1>🌞farAway🌞</h1>;
}
function Form() {
	return (
		<div className="add-from">
			<h1>form</h1>
		</div>
	);
}
function PackingList() {
	return (
		<div className="list">
			<ul>
				{initialItems.map((item) => (
					<Item item={item} />
					//{com.na}  {na.of.prop} {na.of.obj}
					// the new props calld item bc we attrate over it
				))}
			</ul>
		</div>
	);
}
function Stats() {
	return (
		<footer className="stats">
			you have x items in your list and you already packed x{" "}
		</footer>
	);
}
function Item({ item }) {
	// it should be props but we destructuer it
	return <li>{item.description}</li>;
}
