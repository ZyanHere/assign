import React from 'react';

const CommonHeader = () => {
    return (
        <div className="mt-6 mb-3 px-4">
            <div className="text-2xl sm:text-3xl md:text-4xl text-black flex justify-center font-bold text-center">
                Let's get to know
            </div>
            <div className="hidden md:block text-xl text-black justify-center opacity-50 mt-2 text-center">
                Please fill in this short form so that we can get to know you better
            </div>
        </div>
    );
}

export default CommonHeader;
