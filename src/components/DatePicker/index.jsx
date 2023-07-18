import { forwardRef, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CustomDatePicker = ({ icon, placeholder, obj_key, data, setSelectedDate }) => {
    const [err, setErr] = useState(null);

    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button onBlur={() => { !value ? setErr('error') : setErr(null) }}
            style={{ color: !value ? 'grey' : '#000' }} className="datepicker-custom-input" onClick={onClick} ref={ref}>
            {value || placeholder}
            {icon}

            {
                err && !value && <div className="validate-err">required</div>
            }
        </button>
    ));

    return (
        <DatePicker
            selected={data[obj_key] || 0}
            onChange={(date) => setSelectedDate({ ...data, [obj_key]: date })}
            customInput={<ExampleCustomInput />}
            onBeforeInput={(e) => {
                e.preventDefault();
            }}
        />
    )
}

export default CustomDatePicker