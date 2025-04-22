import React from 'react'
import { useParams } from 'react-router-dom';

const Error = () => {
  let params = useParams();

  let filePath = params['*'];

  return (
    <div>
      filePath: {filePath}
    </div>
  )
}

export default Error
