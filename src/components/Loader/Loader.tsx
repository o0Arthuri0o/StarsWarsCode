import React from 'react'
import './Loader.css'
const Loader = () => {
  return (
    <div style={{marginTop:'150px' ,display:"flex", flexDirection:'column', alignItems:'center', justifyContent:'center', gap: "20px", fontFamily:'JetBrains Mono', color:'white'}} >
        <div className='big-circle'>
            <div className='small-circle' ></div>
        </div>
        Loading...
    </div>
  )
}

export default Loader