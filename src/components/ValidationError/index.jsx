import { useCallback, useContext } from 'react'
import { CreatNewJobContext } from 'context/createNewJobContext';
import './validate.scss'

const ValidationError = () => {
	const { data } = useContext(CreatNewJobContext);

	const errorMessage = useCallback(() => {
		return Object.keys(error).map(name => {
			const msg = error[name].join(', ')
			return `${name} - ${msg}`
		})
	}, [error])

	return (
		error !== null &&
		errorMessage().map(error => (
			<div className='alert alert-danger m-1 p-1 text-start' role='alert' key={error}>
				{error}
			</div>
		))
	)
}

export default ValidationError