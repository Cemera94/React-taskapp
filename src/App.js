import { useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoTask from "./components/TodoTask/TodoTask";

function App() {

	const [tasks, setTasks] = useState([]);


	return (
		<div className="container">
			<div className="wrapper">
				<h1 className="title">TODO APP</h1>
				<TodoInput tasks={tasks} setTasks={setTasks} />
				<TodoTask tasks={tasks} />
			</div>
		</div>
	);
}

export default App;
