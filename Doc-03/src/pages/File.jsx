import { useParams } from "react-router-dom";

const File = () => {
  const { "*": splat} = useParams();
  return (
    <div>
      File name - {splat}
    </div>
  )
}

export default File
