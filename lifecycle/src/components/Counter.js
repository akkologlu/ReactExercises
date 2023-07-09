import {useState,useEffect} from "react"

function Counter() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Mehmet");
    useEffect(()=> {
        console.log('Component mount edildi');
        setInterval(()=> {
            setNumber((n) => n+1);
        },1000)
      },[]);
      useEffect(()=> {
        console.log("number state güncellendi!")
      },[number]);
      
  return (
    <div>
        <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>Click</button>

      
    </div>
  )
}

export default Counter