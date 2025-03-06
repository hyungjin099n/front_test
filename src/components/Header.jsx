import React from 'react'

const Header = () => {
  function click(e){
    console.log('클릭 이벤트 발생!');
    console.log(e);
  }

  return (
    <>
      <h1>Header</h1>
      <button type='button' onClick={click}>버튼</button>
    </>
  )
}

export default Header