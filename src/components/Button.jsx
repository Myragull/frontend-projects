
function Button({setcolor,label,color}) {
  return (
    <div>
         <button className="w-[90px] h-[42px] rounded-[16px] " onClick={()=>setcolor(color)}
            style={{ background: color }}
            >
          {label}
        </button>
    </div>
  )
}

export default Button