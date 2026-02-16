import React from 'react'
import {useGSAP} from "@gsap/react"

const App = () => {
//todo implement the gsap.to() methdo
useGSAP(()=>{
  gsap.to("#blue-box",{
    x:250,
    repeat:-1,
    yoyo:true,
    rotation:360,
  })

},[])

  return (
    <div className='bg-blue-500  h-11 w-3xl '>
      hello world
    </div>
  )
}

export default App
