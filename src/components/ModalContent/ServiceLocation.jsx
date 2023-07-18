import { memo } from "react";
import CustomInput from "components/CustomInput"
import CustomSelect from "components/Select";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const ServiceLocation = ({ serviceLocation, setServiceLocation }) => {

    return (
        <div className='client-details'>
            <h2>Service location</h2>
            <div className={'form'}>
                <CustomInput
                    value={serviceLocation.address ? serviceLocation.address : ''}
                    onChange={(e) => setServiceLocation({ ...serviceLocation, address: e.target.value })}
                    className={'formFeild'} placeholder='Adress' type='text' name="adress"
                />
                <CustomInput
                    value={serviceLocation.city ? serviceLocation.city : ''}
                    onChange={(e) => setServiceLocation({ ...serviceLocation, city: e.target.value })}
                    className={'formFeild'} placeholder='City' name="city" type="text"
                />
                <CustomInput
                    value={serviceLocation.state ? serviceLocation.state : ''}
                    onChange={(e) => setServiceLocation({ ...serviceLocation, state: e.target.value })}
                    className={'formFeild'} placeholder='State' name="state" type="text"
                />
                <div className='fio'>
                    <CustomInput
                        value={serviceLocation.zip_code ? serviceLocation.zip_code : ''}
                        onChange={(e) => setServiceLocation({ ...serviceLocation, zip_code: e.target.value })}
                        className={'formFeild'} placeholder='Zip code' name="zip-code" type="text"
                    />
                    <CustomSelect
                        placeholder={'Area'}
                        obj_key={'area'}
                        data={serviceLocation}
                        setSelectedData={setServiceLocation}
                        width={'167px'}
                        options={options}
                    />
                </div>
            </div>

        </div>
    )
}

export default memo(ServiceLocation)