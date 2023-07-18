import { memo, useState } from 'react';
import Select from 'react-select'

const CustomSelect = ({ width, options, setSelectedData, data, obj_key, placeholder }) => {
    const [err, setErr] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedData({ ...data, [obj_key]: selectedOption });
    };

    return (
        <div style={{ width: width, position: 'relative' }}>
            <Select
                onBlur={() => { !Object.keys(data).includes(obj_key) ? setErr('error') : setErr(null) }}
                value={Object.keys(data).includes(obj_key) ? data[obj_key] : null}
                onChange={handleChange}
                placeholder={placeholder}
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? '#eaeaea' : '#eaeaea',
                        boxShadow: 'none',
                        outline: 'none',
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        width: width,
                        height: '40px',
                        '&:hover': {
                            borderColor: '#cfcfcf',
                        }
                    }),
                    option: (styles) => {
                        return {
                            ...styles,
                            backgroundColor: '#fff',
                            color: '#000',
                            fontSize: '14px',
                        };
                    },
                }}
                options={options}
            />
            {
                err && !Object.keys(data).includes(obj_key) && <div className="validate-err">required</div>
            }
        </div>
    )
}

export default memo(CustomSelect)