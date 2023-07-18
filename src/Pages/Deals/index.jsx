import { useContext } from 'react'
import { CreatNewJobContext } from 'context/createNewJobContext';
import Card from 'components/Card';
import './deal.scss'

const Deals = () => {
  const { data } = useContext(CreatNewJobContext);
  return (
    <div className='deals'>
      {
        data.map((value) => <Card key={value.id} value={value} />)
      }
    </div>
  )
}

export default Deals