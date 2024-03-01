import { TodoRowItem } from './TodoRowItem';
import { DataProps } from '../App';
import React from 'react';

export interface TodoTableProps {
	todoData: DataProps[];
	setTodoData: (value: DataProps[]) => void;
}

export const TodoTable = ({ todoData, setTodoData }: TodoTableProps) => {
	const deleteTodo = (deleteRowNumber: number) => {
		let filterTodoData = todoData.filter(
			(todo) => todo.rowNumber !== deleteRowNumber
		);
		setTodoData(filterTodoData);
	};
	return (
		<table className="table table-hover">
			<thead className="table-light">
				<tr>
					<th scope="col">#</th>
					<th scope="col">Description</th>
					<th scope="col">Assigned </th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody className="table-group-divider">
				{todoData.map((todo) => {
					return (
						<TodoRowItem
							key={todo.rowNumber}
							rowNumber={todo.rowNumber}
							rowDescription={todo.rowDescription}
							rowAssigned={todo.rowAssigned}
							deleteTodo={deleteTodo}
						/>
					);
				})}
			</tbody>
		</table>
	);
};
