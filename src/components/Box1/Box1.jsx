import { useState } from "react"

import { motion } from "framer-motion"

const Box1 = () => {

  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className='box-container'><motion.div className='box'
    animate = {{
      x: isAnimating ? 300 : 0,
    opacity: isAnimating ? 1 : 0.5,
    // backgroundColor: "blue",
    // scale: 2
    rotate: isAnimating ? 360 : 0,
    }}
    initial ={{
      opacity: 0.1
    }}
    transition={{
      type:"spring",
      stiffness: 60,
      
    }}
    onClick={() => setIsAnimating(!isAnimating)}
    >
      </motion.div></div>
  )
}

export default Box1