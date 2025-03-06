import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Join = () => {
  const [params, setParams] = useSearchParams();
  const name = params.get('name');
  const age = params.get('age');

  return (
    <>
      <div>Join 페이지</div>
      <div>Query String으로 전달받은 이름 : {name}</div>
      <div>Query String으로 전달받은 나이 : {age}</div>
    </>
  )
}

export default Join