import './Payment.css';
const Payment = () => {
      return (
            <div className=" bg-slate-50 flex justify-between p-20">
                  <div>
                        <div className="flex  gap-10">
                              <img src="https://i.ibb.co/7vq6X7S/paypal-svgrepo-com.png" alt="paypal" className="w-40 h-32 " />
                              <img src="https://i.ibb.co/zsWsQzk/stripe-svgrepo-com.png" alt="stripe-svgrepo-com" className="bg-white shadow-2xl rounded-xl w-40 h-24 p-4 mt-8" />
                        </div>
                        <div className="flex  gap-10">
                              <img src="https://i.ibb.co/BjpW2YG/payu-svgrepo-com.png" alt="payU" className="w-40 h-32  " />
                              <img src="https://i.ibb.co/CPk2H0c/woo-svgrepo-com.png" alt="woo" className="bg-white shadow-2xl rounded-xl w-40 h-24 p-4 mt-8" />
                        </div>
                        <div className="flex  gap-10">
                              <img src="https://i.ibb.co/FDgmbWy/1656227518bkash-logo-png.png" alt="Bkash" className="w-40 h-32  " />
                              <img src="https://i.ibb.co/2n2cfLn/1679248828-Nagad-Logo-PNG.png" alt="nagad" className="bg-white shadow-2xl rounded-xl w-40 h-24 p-4 mt-8" />
                        </div>
                  </div>
                  <div>
                        <h2 className="text-6xl font-bold text-gray-800">Payment <span className="text-blue-800 ">Methods</span></h2> <br />
                        <div className="flex  gap-6">

                              <h3 className="text-gray-600 text-2xl font-bold">Checkout by normal booking. <span className="text-blue-400">.12+ methods</span></h3>


                              <img src="https://i.ibb.co/0qVhnYp/dollar-symbol-money-svgrepo-com.png" alt="dollar" className='w-28 h-28 ' />


                        </div>
                        <p className='text-gray-400 mb-4'>By this way you can build checkout form by our Form Builder  build <br />-in, with various fields types for make checkout form match with your <br /> requirements.</p>
                        <h3 className='text-gray-600 text-2xl font-bold mt-3'>Checkout by with Woocommerce</h3>
                        <p className='text-gray-400'>Allow you checkout with multi-items. Can use with many payment <br /> gateways support by WooCoommerce.</p>
                  </div>
            </div>


      );
};

export default Payment;