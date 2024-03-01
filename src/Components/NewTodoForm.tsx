import React, { useState } from 'react';
import { DataProps } from '../App';

export interface NewTodoFormProps {
	todoData: DataProps[];
	setTodoData: (value: any) => void;
}

const NewTodoForm = ({ setTodoData, todoData }: NewTodoFormProps) => {
	const [rowDescription, setRowDescription] = useState<string>('');

	const [rowAssigned, setRowAssigned] = useState<string>('');

	const addTodo = () => {
		if (rowAssigned !== '' && rowDescription !== '') {
			let rowNumber = 0;
			const newTodo = {
				rowNumber: rowNumber,
				rowDescription: rowDescription,
				rowAssigned: rowAssigned,
			};
			if (todoData.length > 0) {
				rowNumber = todoData[todoData.length - 1].rowNumber + 1;
			} else {
				rowNumber = 1;
			}
			setTodoData((todoData: DataProps[]) => [
				...todoData,
				{ ...newTodo, rowNumber },
			]);
			setRowAssigned('');
			setRowDescription('');
		}
		return {};
	};

	return (
		<div className="mt-5">
			<form>
				<div className="mb-3">
					<label className="form-label">Assigned</label>
					<input
						type="text"
						className="form-control"
						required
						value={rowAssigned}
						onChange={(event) => setRowAssigned(event.target.value)}
					></input>
				</div>
				<div className="mb-3">
					<label className="form-label">Description</label>
					<textarea
						className="form-control"
						rows={3}
						required
						value={rowDescription}
						onChange={(event) => setRowDescription(event.target.value)}
					></textarea>
				</div>
				<button
					type="button"
					className="btn btn-primary mt-3"
					onClick={addTodo}
				>
					Add New Todo
				</button>
			</form>
		</div>
	);
};
export default NewTodoForm;
