import "./todotask.css";

function TodoTask({ tasks }) {
	return (
		<div className="todotask_container">
			{tasks.length > 0 ? tasks.map((task, index) => {
				return <div className="todo_item" key={index}>{task}</div>
			}) : <div className="todo_item">Nemate nijedan zadatak</div>}
		</div>
	);
}

export default TodoTask;
