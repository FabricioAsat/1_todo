import { useRef, useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
	const [valueInput, setValueInput] = useState("");
	const [idAEditar, setIdAEditar] = useState("");
	const [valueSubmitButton, setValueSubmitButton] = useState("Crear TODO");
	const [todo, setTodo] = useState([]);
	const focusInput = useRef(null);

	function handleEditTODO(e) {
		e.preventDefault();
		todo.find((item) => (item.id === idAEditar ? (item.title = valueInput) : ""));

		setValueSubmitButton("Crear TODO");
		setValueInput("");
	}

	function handleDeleteTODO(e, id) {
		e.preventDefault();
		const todoFilter = todo.filter((item) => item.id !== id);
		setTodo(todoFilter);
	}

	function handleChangeInput(e) {
		setValueInput(e.target.value);
	}

	function handleCreateTODO(e) {
		e.preventDefault();
		setValueInput("");

		// De esta forma pongo las tareas nueval al inicio
		setTodo([{ title: valueInput, id: crypto.randomUUID() }, ...todo]);
	}
	return (
		<div>
			<div className="py-4">
				<form className="flex flex-col gap-1 items-center">
					<label htmlFor="inputTodo" className="text-2xl lg:text-3xl font-bold mb-6">
						TODO Proyect
					</label>
					<input
						ref={focusInput}
						type="text"
						placeholder="Ingresa una tarea"
						id="inputTodo"
						className={`w-8/12 text-xl p-2 max-w-3xl bg-gray-800 placeholder:text-slate-100/75`}
						autoComplete="off"
						onChange={handleChangeInput}
						value={valueInput}
					/>

					<input
						type="submit"
						className="bg-green-700 font-medium px-6 py-2 cursor-pointer m-4"
						value={valueSubmitButton}
						disabled={valueInput.length === 0}
						onClick={valueSubmitButton === "Crear TODO" ? handleCreateTODO : handleEditTODO}
					/>
				</form>

				{/* Crea la lista de TODOS */}
				{todo.map((item, index) => (
					<TodoItem
						key={index}
						item={item}
						setIdAEditar={setIdAEditar}
						setValueSubmitButton={setValueSubmitButton}
						setValueInput={setValueInput}
						handleDeleteTODO={handleDeleteTODO}
						focusInput={focusInput}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
