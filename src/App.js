import TodoInput from "./components/TodoInput/TodoInput";
import TodoTask from "./components/TodoTask/TodoTask";

function App() {
	return (
		<div className="container">
			<div className="wrapper">
				<h1 className="title">TODO APP</h1>
				<TodoInput />
				<TodoTask />
			</div>
		</div>
	);
}

export default App;
