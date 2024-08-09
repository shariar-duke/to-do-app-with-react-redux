import { useSelector } from "react-redux";


const numberofTodos = (todos)=> 
{
  switch(todos) {
    case 0 : 
    return "No tasks"

    case 1: 
      return "1 task"

    default:
      return `${todos} tasks`
  }
}
export default function Footer() {
  const todos = useSelector((state) => state.todos);
  // to do remaining , mane holo j todo gula complet hoy nai se gula nia aso 
  const todoRemaining = todos.filter((todo)=> !todo.completed).length;

  return (
    <div className="flex justify-between mt-[10px]">
      <p className="text-[12px] text-gray-600">{numberofTodos(todoRemaining)} left</p>
      <div className="flex gap-[4px]">
      <p className="text-[12px] text-gray-600">All</p>
      <p className="text-[12px] text-gray-600">|</p>
      <p className="text-[12px] text-gray-600">Incomplete</p>
      <p className="text-[12px] text-gray-600">|</p>
      <p className="text-[12px] text-gray-600">Complete</p>
      <div className="flex gap-[4px] items-center">
        <div className={`flex-shrink-0 h-3 w-3 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500`}></div>
        <div className={`flex-shrink-0 h-3 w-3 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500`}></div>
        <div className={`flex-shrink-0 h-3 w-3 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500`}></div>
     
        </div>
      </div>
    </div>
  )
}
