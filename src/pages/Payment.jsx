import { Fade } from 'react-awesome-reveal';
import './Payment.css';


const Payment = () => {
      return (
            <div className=" grid md:grid-cols-2 bg-base-200 justify-between p-20">
                  <div>
                        <div className="flex  gap-10">
                              <Fade direction='left'>
                                    <img src="https://i.ibb.co/7vq6X7S/paypal-svgrepo-com.png" alt="paypal" className="w-40 h-32 " />
                              </Fade>
                              <Fade direction='right'>
                                    <img src="https://i.ibb.co/zsWsQzk/stripe-svgrepo-com.png" alt="stripe-svgrepo-com" className="bg-white shadow-2xl rounded-xl w-40 h-24 p-4 mt-8" />
                              </Fade>
                        </div>
                        <div className="flex  gap-10">
                              <Fade delay={600} direction='left'>
                                    <img src="https://i.ibb.co/BjpW2YG/payu-svgrepo-com.png" alt="payU" className="w-40 h-32  " />
                              </Fade>
                              <Fade delay={600} direction='right'>
                                    <img src="https://i.ibb.co/CPk2H0c/woo-svgrepo-com.png" alt="woo" className="bg-white shadow-2xl rounded-xl w-40 h-24 p-4 mt-8" />
                              </Fade>
                        </div>
                        <div className="flex  gap-10">
                              <Fade delay={900} direction='left'>
                                    <img src="https://i.ibb.co/FDgmbWy/1656227518bkash-logo-png.png" alt="Bkash" className="w-40 h-20 bg-white shadow-2xl p-3 rounded-lg  " />
                              </Fade>
                              <Fade delay={900} direction='right'>
                                    <img src="https://i.ibb.co/2n2cfLn/1679248828-Nagad-Logo-PNG.png" alt="nagad" className="bg-white shadow-2xl rounded-xl w-40 h-24  p-3 mt-8" />
                              </Fade>
                        </div>
                  </div>
                  <div>
                        <Fade delay={1400} direction='down'>
                              <h2 className="text-6xl font-bold text-gray-800">Payment <span className="text-blue-800 ">Methods</span></h2> <br />
                        </Fade>
                        <div className="flex justify-between gap-1">

                              <Fade delay={900} direction='left'>
                                    <h3 className="text-gray-600 text-2xl font-bold">Checkout by normal booking<span className="text-blue-400">.12+ methods</span></h3>
                              </Fade>


                              <Fade delay={900} direction='right'>
                                    <img src="https://i.ibb.co/0qVhnYp/dollar-symbol-money-svgrepo-com.png" alt="dollar" className='w-14 h-10 md:w-28 md:h-28 ' />
                              </Fade>


                        </div>
                        < Fade delay={800} direction='left'>
                              <p className='text-gray-400 mb-4'>By this way you can build checkout form by our Form Builder  build <br />-in, with various fields types for make checkout form match with your <br /> requirements.</p>
                        </Fade>
                        <Fade delay={1200} direction='up'>
                              <h3 className='text-gray-600 text-2xl font-bold mt-3'>Checkout by with Woocommerce</h3>

                        </Fade>
                        <Fade   delay={800} direction='right'>
                              <p className='text-gray-400'>Allow you checkout with multi-items. Can use with many payment <br /> gateways support by WooCoommerce.</p>
                        </Fade>
                  </div>
            </div>


      );
};

export default Payment;