import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import Link from 'next/link'



const FAQ = () => {
    return (
        <section className="relative px-6 md:px-16 py-16 text-white min-h-[100vh]">
            <div className="absolute inset-0">
                <Image
                    src="/faq.jpg"
                    alt="Luxury house"
                    fill
                    priority
                    quality={100}
                    className="object-cover"
                />
            </div>
            <div className="z-10 relative">

                <h1 className='text-xl md:text-2xl text-center mb-5'>Frequently Asked Questions (FAQs)</h1>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full "
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Can I get a refund for canceling a booked  reservation?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-300">
                            <p>
                                You may cancel your reservation after making payment. However, please note that the refund process can be lengthy, especially if the funds are not being reused to book another room within the app.
                            </p>
                            <p>
                                The refund steps include reversing the payment from the hostel’s account back into our account, updating the hostel’s availability list, and invalidating your receipt. Once our confirmation team verifies the cancellation, transaction costs will be deducted and the remaining amount deposited into your account.
                            </p>
                            <p>
                                We strongly advise making payments only for reservations you are certain about to avoid the stress and reduced refund that comes with cancellations.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How long does it take to make transaction?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-300">
                            <p>
                                We offer worldwide shipping through trusted courier partners.
                                Standard delivery takes 3-5 business days, while express shipping
                                ensures delivery within 1-2 business days.
                            </p>
                            <p>
                                All orders are carefully packaged and fully insured. Track your
                                shipment in real-time through our dedicated tracking portal.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How secure is Estate Hive?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-300">
                            <p>
                                We stand behind our products with a comprehensive 30-day return
                                policy. If you&apos;re not completely satisfied, simply return the
                                item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Who do I have to call after booking the property?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-300">
                            <p>
                                We stand behind our products with a comprehensive 30-day return
                                policy. If you&apos;re not completely satisfied, simply return the
                                item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Is Estate Hive a legit business?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-neutral-300">
                            <p>
                                We stand behind our products with a comprehensive 30-day return
                                policy. If you&apos;re not completely satisfied, simply return the
                                item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <p className='text-center mt-5'>
                    <Link href="#" className=' text-center mt-5 underline'>Ask a personalized question</Link>
                </p>
            </div>
        </section>
    )
}

export default FAQ