import CustomInput from 'components/CustomInput'
import { memo } from 'react'

const ClientDetails = ({ clintDetails, setClintDetails }) => {

    return (
        <div className='client-details'>
            <h2>Client details</h2>
            <div className={'form'}>
                <div className='fio'>
                    <CustomInput
                        value={clintDetails.firtname ? clintDetails.firtname : ''}
                        onChange={(e) => setClintDetails({ ...clintDetails, firtname: e.target.value })}
                        className={'formFeild'} placeholder='First Name' name="firstname" type="text" />
                    <CustomInput
                        value={clintDetails.lastname ? clintDetails.lastname : ''}
                        onChange={(e) => setClintDetails({ ...clintDetails, lastname: e.target.value })}
                        className={'formFeild'} placeholder='Last Name' name="lastname" type="text" />
                </div>

                <CustomInput
                    value={clintDetails.phone ? clintDetails.phone : ''}
                    onChange={(e) => setClintDetails({ ...clintDetails, phone: e.target.value })}
                    className={'formFeild'} placeholder='Phone' type='number' name="phone" />

                <CustomInput
                    requred={'true'}
                    value={clintDetails.email ? clintDetails.email : ''}
                    onChange={(e) => setClintDetails({ ...clintDetails, email: e.target.value })}
                    className={'formFeild'} placeholder='Email (Optional)' name="email" type="email" />
            </div>

        </div>
    )
}

export default memo(ClientDetails)