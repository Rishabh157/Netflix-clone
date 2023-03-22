import React from 'react'

const Steps = ({ firstStep, secondSteps }) => {
    return (
        <span className='text-[13px]'> STEP <b>{firstStep}</b> OF <b>{secondSteps}</b> </span>
    )
}

export default Steps;
