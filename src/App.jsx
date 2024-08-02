import React from 'react'
import Home from './home/Home'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotivescroll = new LocomotiveScroll();

  return (
    <div>
      <Home />
    </div>
  )
}

export default App