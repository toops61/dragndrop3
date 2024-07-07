import { useTasks } from "../store";
import { IDType } from "../utils/interface";

export default function Task({taskID,index}:{taskID:IDType,index:number}) {
    const { tasks } = useTasks();

    const task = tasks.find(e => e.id === taskID);
  return (
    <div 
        className="task">
        <p>{task?.content}</p>
    </div>
  )
}