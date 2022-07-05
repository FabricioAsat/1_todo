import React from "react";

const TodoItem = ({
	item,
	setIdAEditar,
	setValueSubmitButton,
	setValueInput,
	handleDeleteTODO,
	focusInput,
}) => {
	function handleEdit(e) {
		e.preventDefault();
		setIdAEditar(item.id);
		setValueSubmitButton("Editar TODO");
		setValueInput(item.title);
		focusInput.current.focus();
	}

	return (
		<form className="flex my-2 mx-auto px-10 text-xl max-w-3xl">
			<h2 className={`w-full py-1 px-2 font-bold truncate bg-gray-700 `}>{item.title}</h2>
			<button className={`font-bold py-1 px-2 bg-blue-700 `} onClick={handleEdit}>
				Edit
			</button>
			<button
				className={`font-bold py-1 px-2 bg-red-700`}
				onClick={(e) => handleDeleteTODO(e, item.id)}>
				Delete
			</button>
		</form>
	);
};

export default TodoItem;
