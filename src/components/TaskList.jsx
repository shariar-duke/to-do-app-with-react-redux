import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

export default function TaskList() {
  
  // useSelector hook ta ekhnkar current state take ekta object tar name state tar modhe dhukay dey 
  const todos = useSelector((state) => state.todos);

  return (
    <div className="border-b-[1px] border-gray-300 pb-[12px]">
      {
        todos.map((todo)=> 
          <TaskItem todo={todo}  key={todo.id} />
        )
      }
  
    </div>
  );
}
