
export  function Button({callCallback,Style,text}) {
  // console.log("data is",handelClick)
  // console.log("color is",Style)
  // console.log("text is",text)
  return (
    <div>
    <button className="btn waves-effect waves-light" style={{ backgroundColor: Style }} onClick={()=>callCallback(true)} >{text}</button>
   
    </div>
    )
}


