import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const EditNote = () => {
  const [urlPara, setUrlPara] = useState(useParams());
  return (
    <div>EditNote {urlPara.id}</div>
  )
}

export default EditNote