import { columnType } from "../utils/interface";
import Task from "./Task";

export default function Column({column}:{column:columnType;}) {
  return (
        <div className={column.title + " container"}>
            <h2>{column.title}</h2>
            {column.tasksIds.map((taskID,ind) => <Task taskID={taskID} index={ind} key={taskID} />)}
        </div>
  )
}