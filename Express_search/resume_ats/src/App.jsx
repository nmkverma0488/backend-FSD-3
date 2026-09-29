import { useSate } from 'react'

const App = () => {
  const[search ,setSearch]=useState("")
  //object creaction
  const documents=[
    {
      
      //key:"value"
      name:"fsd",
      file:"Resume(2).pdf"
    }
  ]
  return (
    <div>
      <h1>Notes Portal app</h1>
      <input type= "text" placeholder="search notes here" onClick={(e)=>{
        setSearch(e.target.value);

 } }/>  
 { 
 document.filter((doc)=>{
doc.name.toLowerCase().includes(search).toLocaleLowerCase()
.map((doc)=>{
  <div key={doc.file}>
<h2>{doc.name}</h2>
<a href={`+`}></a>
  </div>
})
 })

 }

       </div>
  )
}

export default App

