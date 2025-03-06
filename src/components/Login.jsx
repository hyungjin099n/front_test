import React from 'react'
import { useParams } from 'react-router-dom'

const Login = () => {
  const param = useParams();
  console.log(param);

  

  return (
    <>
      <div>Login 페이지</div>
      <div>
        URL Parameter로 전달받은 값 : {param.num}
      </div>
    </>
  )
}

export default Login