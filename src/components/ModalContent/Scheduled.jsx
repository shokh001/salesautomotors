import { memo } from 'react';
import CustomDatePicker from 'components/DatePicker';
import CustomSelect from 'components/Select';
import { BsFillCalendarWeekFill, BsFillAlarmFill } from 'react-icons/bs';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Scheduled = ({ scheduled, setScheduled }) => {

  return (
    <div className='client-details'>
      <h2 className='scheduled-title'>Scheduled</h2>
      <div className={'form'}>
        <CustomDatePicker
          obj_key={'start_date'} data={scheduled} setSelectedDate={setScheduled}
          placeholder={'Start date'} icon={<BsFillCalendarWeekFill className='datepicker-icon' />}
        />

        <div className='date-pickers'>
          <CustomDatePicker
            obj_key={'start_time'} data={scheduled} setSelectedDate={setScheduled}
            placeholder={'Start time'} icon={<BsFillAlarmFill className='datepicker-icon' />}
          />
          <CustomDatePicker
            obj_key={'end_time'} data={scheduled} setSelectedDate={setScheduled}
            placeholder={'End time'} icon={<BsFillAlarmFill className='datepicker-icon' />}
          />
        </div>
      </div>
      <CustomSelect
        obj_key={'test_select'} data={scheduled} setSelectedData={setScheduled}
        placeholder={'Test select'} width={'335px'} options={options}
      />
    </div>
  )
}

export default memo(Scheduled)