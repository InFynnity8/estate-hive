import React from 'react'
import { FaApple, FaGoogle, FaMicrosoft, FaAmazon, FaFacebook } from 'react-icons/fa';

const TrustedBy = () => {
    return (
        <section className="text-center py-10 bg-slate-50 px-4">
            <h3 className="text-lg font-semibold text-neutral-700">
                TRUSTED BY
            </h3>

            <div className="flex flex-wrap justify-center items-center gap-10 text-neutral-800 text-5xl my-5">
                <FaApple />
                <FaGoogle />
                <FaMicrosoft />
                <FaAmazon />
                <FaFacebook />
            </div>
        </section>
    )
}

export default TrustedBy