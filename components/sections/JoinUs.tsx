import React from 'react'
import { Button } from '../ui/button'

const JoinUs = () => {
    return (
        <section className="px-6 md:px-16 py-16 bg-slate-50">
            <div className="container  flex flex-col md:flex-row items-center justify-between gap-6">
   
                <h2 className="text-xl md:text-2xl font-medium text-zinc-800">
                    Join our community of trusted real estate partners and grow your reach.
                </h2>

                <Button
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-700 hover:text-white rounded-full px-6 py-8 text-md cursor-pointer font-medium transition-colors bg-transparent"
                >
                    Become a member
                </Button>
            </div>
        </section>
    )
}

export default JoinUs