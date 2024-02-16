import "./todoinput.css";

function TodoInput() {
	return (
		<div className="input_container">
			<div className="todoinput">
				<input className="textInput" type="text" placeholder="Insert Task..." />
				<button>Add Task</button>
			</div>
		</div>
	);
}

export default TodoInput;
