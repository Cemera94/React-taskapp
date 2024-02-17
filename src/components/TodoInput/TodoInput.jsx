import { useState } from "react";
import "./todoinput.css";

function TodoInput({ tasks, setTasks }) {

	const [newTask, setNewTask] = useState('');


	const taskHandler = (event) => {
		setNewTask(event.target.value);
	}

	const addTask = () => {
		setTasks([
			...tasks,
			newTask
		]);
		setNewTask("");
	}

	return (
		<div className="input_container">
			<div className="todoinput">
				<input className="textInput" type="text" placeholder="Insert Task..." onChange={(e) => taskHandler(e)} value={newTask} />
				<button onClick={addTask}>Add Task</button>
			</div>
		</div>
	);
}

export default TodoInput;
