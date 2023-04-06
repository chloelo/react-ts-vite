import { useParams, useSearchParams } from 'react-router-dom'

export default function Chapter() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  console.log(searchParams.get('test'))
  return (<>
    <h1>我是Chapter id: {id}</h1>
  </>)
}