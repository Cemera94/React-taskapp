import { useState } from "react";
import "./todotask.css";

function TodoTask({ tasks, setTasks }) {

	const [isEdit, setIsEdit] = useState(null);
	const [editedTask, setEditedTask] = useState('')
	const [toggle, setToggle] = useState(false)

	const handleRemove = (event) => {
		const copyTask = tasks.filter((task) => event !== task.id)

		setTasks(copyTask);
	}

	// ODRADI OVO
	const handleEdit = (event) => {
		setIsEdit(event)
	}

	const editTask = (e) => {
		setEditedTask(e.target.value);
	}

	const handleEditInput = (event) => {
		if (editedTask !== "") {
			event.title = editedTask;
			setIsEdit(null);
		}

		console.log(tasks);
	}

	const handleBack = () => {
		setIsEdit(null);
	}




	return (
		<div className="todotask_container">
			{tasks.length > 0 ? tasks.map((task, index) => {
				return <div className="todo_item" key={task.id}>
					{/* PROMENI OVO */}
					{isEdit !== task.id ? (
						<>
							<h3>{task.title}</h3>
							<div>
								<button onClick={() => handleRemove(task.id)}>REMOVE</button>
								<button onClick={() => handleEdit(task.id)}>EDIT</button>
							</div>
						</>

					) : (
						<>
							<input type="text" placeholder={task.title}
								onChange={(e) => editTask(e)}
							/>
							<div>
								<button onClick={() => handleEditInput(task)}>SAVE</button>
								<button onClick={() => handleBack()}>CANCEL</button>
							</div>
						</>
					)}

				</div>
			}) : <div className="no_task">Nemate nijedan zadatak</div>}
		</div>
	);
}

export default TodoTask;
