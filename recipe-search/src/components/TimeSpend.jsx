import React from 'react';

const TimeSpend = ({ title, value }) => {
    return (
        <>
            <div className="flex flex-col items-center gap-3">
                <h5 className='text-xl font-semibold'>{title}</h5>
                <p className='text-lg'>{value}</p>
            </div>
        </>
    );
};

export default TimeSpend;