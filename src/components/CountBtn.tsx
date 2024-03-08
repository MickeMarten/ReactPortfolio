import { useState } from "react";


function VisitedBtn(){

    const [count, setCount] = useState(0)

     function timesVisited(){
    setCount(count + 1)
  }

  return (
    <div> 
        <p>First time here? Click the button and let's se how many visitors I get!</p>
      <button onClick={timesVisited} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">{count}</button>
      </div>
  )
}

export default VisitedBtn;