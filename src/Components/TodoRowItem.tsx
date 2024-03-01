import React from 'react';

export interface TodoRowItemProps {
	rowNumber: number;
	rowDescription: string;
	rowAssigned: string;
	deleteTodo: (rowNumber: number) => void;
}

const TodoRowItem = ({
	rowNumber,
	rowDescription,
	rowAssigned,
	deleteTodo,
}: TodoRowItemProps) => {
	return (
		<tr>
			<th scope="row">{rowNumber}</th>
			<td>{rowDescription}</td>
			<td>{rowAssigned}</td>
			<td>
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => deleteTodo(rowNumber)}
				>
					Delete
				</button>
			</td>
		</tr>
	);
};
export default TodoRowItem;
