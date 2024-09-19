import { useState } from "react"

function App() {
  const [text,setText] = useState("Hello");
  const inputHandler = (e) =>{
    setText(e.target.value)
  }
const clearVal = () =>{
  setText("Text is gone")
}
  return (
    <>
    <div>
      <h1>{text}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum dignissim a,
         cum porttitor risus facilisis sociosqu vulputate tellus proin orci. 
         Suspendisse gravida turpis molestie blandit mollis pretium mi iaculis 
         phasellus feugiat rhoncus justo, dui lectus taciti integer aptent nibh risus 
         tincidunt ante euismod convallis. Ultricies eu curae mus ligula accumsan non
          in habitant vel fames, nunc quisque at vivamus senectus ullamcorper semper primis 
          purus hendrerit lobortis, condimentum odio porttitor gravida cursus himenaeos et
         aenean scelerisque.
      </p>
    </div>
    <div>
      <h1>{text}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum dignissim a,
         cum porttitor risus facilisis sociosqu vulputate tellus proin orci. 
         Suspendisse gravida turpis molestie blandit mollis pretium mi iaculis 
         phasellus feugiat rhoncus justo, dui lectus taciti integer aptent nibh risus 
         tincidunt ante euismod convallis. Ultricies eu curae mus ligula accumsan non
          in habitant vel fames, nunc quisque at vivamus senectus ullamcorper semper primis 
          purus hendrerit lobortis, condimentum odio porttitor gravida cursus himenaeos et
         aenean scelerisque.
      </p>
    </div>
    
    
      <input type="text" onChange={inputHandler} />
      <button onClick={clearVal}>Click</button>
    </>
  )
}

export default App
