import './card.scss'

const Card = ({ value }) => {
    // console.log(new Date(value?.scheduled?.start_date).toLocaleDateString());
    return (
        <div className="info-card">
            <div>
                <h3>Client details:</h3>
                <h4>First Name: <span>{value?.clint_details?.firtname}</span></h4>
                <h4>Last Name: <span>{value?.clint_details?.lastname}</span></h4>
                <h4>Phone: <span>{value?.clint_details?.phone}</span></h4>
                <h4>Email: <span>{value?.clint_details?.email}</span></h4>
            </div>

            <div>
                <h3>Job details:</h3>
                <h4>Job type: <span>{value?.job_details?.job_type?.label}</span></h4>
                <h4>Job source: <span>{value?.job_details?.job_source?.label}</span></h4>
                <h4>Job description: <span>{value?.job_details?.job_description}</span></h4>
            </div>

            <div>
                <h3>Service location:</h3>
                <h4>Adress: <span>{value?.service_location?.address}</span></h4>
                <h4>City: <span>{value?.service_location?.city}</span></h4>
                <h4>State: <span>{value?.service_location?.state}</span></h4>
                <h4>Zip code: <span>{value?.service_location?.zip_code}</span></h4>
                <h4>Area: <span>{value?.service_location?.area?.label}</span></h4>
            </div>

            <div>
                <h3>Scheduled:</h3>
                <h4>Start date: <span>{new Date(value?.scheduled?.start_date).toLocaleDateString()}</span></h4>
                <h4>Start time: <span>{new Date(value?.scheduled?.start_time).toLocaleDateString()}</span></h4>
                <h4>End time: <span>{new Date(value?.scheduled?.end_time).toLocaleDateString()}</span></h4>
                <h4>Test select: <span>{value?.scheduled?.test_select?.label}</span></h4>
            </div>
        </div>
    )
}

export default Card