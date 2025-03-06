
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const ItemDetail = () => {
  const [params, setParams] = useSearchParams();
  const [itemInfo, setItemInfo] = useState({});

  const itemCode = params.get('itemCode');

  useEffect(() => {
    axios.get(`/api/items?itemCode=${itemCode}`)
    .then((res) => {setItemInfo(res.data)})
    .catch();
  }, []);

  return (
    <><div>상품 상세 페이지</div></>
  )
}

export default ItemDetail