import { useParams } from "react-router-dom"

export default function ServiceDetails() {
  const {id: serviceId} = useParams()

  console.log(serviceId)

  return (
    <>
     <p> dhfkjdshfalkjfh</p>
    </>
  )
}