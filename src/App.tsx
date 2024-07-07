import { FormEvent } from "react";
import { useColumns, useModal, useTasks } from "./store";
import { nanoid } from "nanoid";
import Column from "./components/Column";
import Modal from "./components/Modal";
import Popup from "./components/Popup";

function App() {
  const { columns,updateColumnsTasks } = useColumns();
  const { tasks,addTask,removeTask } = useTasks();
  const { modalObject,showModal } = useModal();

  //add new task to todo column
  const createTask = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const newContent = target.newtodo.value;
    const newTask = {content:newContent,id:nanoid(8)};
    if (!tasks.some(e => e.content === newContent)) {
      addTask(newTask);
      const firstColumn = columns[0];
      firstColumn.tasksIds.push(newTask.id);
      updateColumnsTasks(firstColumn.tasksIds,firstColumn.id);
      showModal('Nouvelle tâche créée','');
    } else {
      showModal('Vous avez déjà une tâche identique');
    }
    target.newtodo.value = '';
  }

  return (
      <main>
        <h1>DnD Project 3</h1>
        <form className="newtask-container" onSubmit={e => createTask(e)}>
          <label htmlFor="newtodo">New task</label>
          <input type="text" name="newtodo" id="newtodo" />
          <button className="submit-newtask" role="submit"></button>
        </form>
        <div className="tasks-columns">
          {columns.map(column => <Column key={column.id} column={column} />)}
        
        </div>
      </main>
  )
}

export default App;
