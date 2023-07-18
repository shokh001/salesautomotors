import { memo } from 'react';
import CustomSelect from 'components/Select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const JobDetails = ({ jobDetails, setJobDetails }) => {

  return (
    <div className='job-details'>
      <h2>Job details</h2>
      <div className='job-details-selects'>
        <CustomSelect        
          placeholder={'Job type'}
          obj_key={'job_type'}
          data={jobDetails}
          setSelectedData={setJobDetails}
          width={'162px'}
          options={options}
        />
        <CustomSelect
          placeholder={'Job source'}
          obj_key={'job_source'}
          data={jobDetails}
          setSelectedData={setJobDetails}
          width={'162px'}
          options={options}
        />
      </div>
      <textarea
        value={jobDetails.job_description ? jobDetails.job_description : ''}
        onChange={(e) => setJobDetails({ ...jobDetails, job_description: e.target.value })}
        className="job-description"
        placeholder='Job description (optional)'
        cols="30"
        rows="4"
      >
      </textarea>
    </div>
  )
}

export default memo(JobDetails)