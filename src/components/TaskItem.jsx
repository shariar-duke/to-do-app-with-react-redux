 


// eslint-disable-next-line react/prop-types
export default function TaskItem({todo}) {
  console.log("the single todo is", todo)
  return (
    <div className="flex justify-between">

        <div className="flex items-center gap-[10px] ">
        
        <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500">
          
        </div>

        <p>
            {todo?.text}
          </p>
        </div>

        <div className="flex gap-[10px]">
        <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500"></div>
        <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500"></div>
        <div className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500"></div>
        <img src="/images/cancel.png" className="h-4 w-4 cursor-pointer" alt="cancel"/>
        </div>
      
    </div>
  )
}
