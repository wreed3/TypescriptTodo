import React, { useState } from 'react';
import TodoTable from './Components/TodoTable';
import NewTodoForm from './Components/NewTodoForm';

export interface DataProps {
	rowNumber: number;
	rowDescription: string;
	rowAssigned: string;
}

const App = () => {
	const initialTodoData: DataProps[] = [
		// {
		//   rowNumber: 1,
		//   rowDescription: "Feed dog",
		//   rowAssigned: "User One"
		// }, {
		//   rowNumber: 2,
		//   rowDescription: "Get haircut",
		//   rowAssigned: "User Two"
		// }, {
		//   rowNumber: 3,
		//   rowDescription: "Make dinner",
		//   rowAssigned: "User One"
		// }, {
		//   rowNumber: 4,
		//   rowDescription: "Charge phone battery",
		//   rowAssigned: "User One"
		// }
	];

	const [todoData, setTodoData] = useState<DataProps[]>(initialTodoData);
	const [showAddTodoForm, setShowAddTodoForm] = useState<boolean>(false);

	return (
		<div className="mt-5 container">
			<div className="card">
				<div className="card-header">Your Todo's</div>
				<div className="card-body">
					<TodoTable todoData={todoData} setTodoData={setTodoData} />
					<button
						className="btn btn-primary"
						onClick={() => setShowAddTodoForm(!showAddTodoForm)}
					>
						{showAddTodoForm ? 'Close New Todo' : 'New Todo'}
					</button>
					{showAddTodoForm && (
						<NewTodoForm setTodoData={setTodoData} todoData={todoData} />
					)}
				</div>
			</div>
		</div>
	);
};

export default App;
