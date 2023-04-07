import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }, [])
  return (
    <div className="bg">
      <h1>NotFound</h1>
    </div>
  );
};

export default NotFound;
