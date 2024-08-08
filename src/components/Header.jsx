

export default function Header() {
  return (
    <div >
       <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src="/images/notes.png" alt="todo" className="w-6 h-6" />
        <input type="text" placeholder="Type your todo" className="w-full text-lg px-4 py-1 border-none outline-none text-gray-500 bg-gray-100" />
        <button
          type="submit">
             <img src="/images/plus.png" alt="todo" className="w-7 h-7" />
        </button>
        </form>
    </div>
  )
}
