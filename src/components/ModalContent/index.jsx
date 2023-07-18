import React, { useContext, useEffect, useState } from 'react'
import ClientDetails from './ClientDetails'
import JobDetails from './JobDetails'
import ServiceLocation from './ServiceLocation'
import Scheduled from './Scheduled'
import useUniqueId from 'hooks/useId'
import { CreatNewJobContext } from 'context/createNewJobContext'
import './content.scss'

const ModalContent = ({ handleClose, isOpen }) => {
  const [clintDetails, setClintDetails] = useState({});
  const [jobDetails, setJobDetails] = useState({})
  const [serviceLocation, setServiceLocation] = useState({})
  const [scheduled, setScheduled] = useState({})

  const [err, setErr] = useState('')

  const { dispatch } = useContext(CreatNewJobContext);

  useEffect(() => {
    if (isOpen === false) {
      setClintDetails({})
      setJobDetails({})
      setScheduled({})
      setServiceLocation({})
      setErr('')
    }
  }, [isOpen])

  const saveData = () => {
    if (
      Object.keys(clintDetails).length >= 3 &&
      Object.keys(jobDetails).length >= 2 &&
      Object.keys(serviceLocation).length == 5 &&
      Object.keys(scheduled).length == 4
    ) {
      dispatch({
        type: 'SAVE', payload: [{
          id: useUniqueId,
          clint_details: clintDetails,
          job_details: jobDetails,
          service_location: serviceLocation,
          scheduled: scheduled,
        }]
      })

      handleClose()
      setClintDetails({})
      setJobDetails({})
      setScheduled({})
      setServiceLocation({})
    } else {
      setErr('Please enter the fields')
    }
  }

  return (
    <div className={'modal-content'}>
      {
        err && <span className='alert-err'>{err}</span>
      }
      <ClientDetails clintDetails={clintDetails} setClintDetails={setClintDetails} />
      <JobDetails jobDetails={jobDetails} setJobDetails={setJobDetails} />
      <ServiceLocation serviceLocation={serviceLocation} setServiceLocation={setServiceLocation} />
      <Scheduled scheduled={scheduled} setScheduled={setScheduled} />

      <button onClick={saveData} className='send-form-btn' type="button">Save all</button>
    </div>
  )
}

export default ModalContent