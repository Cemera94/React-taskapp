import "./todotask.css";

function TodoTask() {
	return (
		<div className="todotask_container">
			<div className="todo_item">
				<h3>URADI DOMACI ZADATAK</h3>
				<div className="buttons">
					<button>Remove</button>
					<button>Edit</button>
				</div>
			</div>
		</div>
	);
}

export default TodoTask;
