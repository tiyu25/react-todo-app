import './App.css'
import TodoContainer from './components/todo/TodoContainer'

function App() {

  return (
    <div className="flex justify-center h-screen py-6 bg-gray-f9">
      <div className="relative w-[460px] h-full py-8 px-7 bg-white rounded-3xl overflow-hidden">
        <TodoContainer />
      </div>
    </div>
  )
}

export default App
