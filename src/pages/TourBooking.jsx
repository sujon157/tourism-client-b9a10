import { Fade } from "react-awesome-reveal";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";


const TourBooking = () => {
      return (
            <div className=" bg-base-200 grid justify-between gap-16 grid-cols-1 md:grid-cols-2  p-8">
                  <div>
                        <div className="bg-blue-600 flex gap-1 text-white rounded-t-2xl p-4">
                              <Fade delay={700} direction="right">
                                    <p className="mt-1"><CiCircleCheck /></p>
                                    <p className=""> Transaction Order</p>
                              </Fade>
                        </div>
                        <div className="p-8  h-min shadow-2xl">
                              <div className="flex justify-between ">
                                    <div className="relative">
                                          <Fade delay={1200} direction="right">
                                                <h1 className="text-sm font-bold text-blue-700">ORDER SUMMARY</h1>
                                          </Fade>
                                          <hr className="mt-3" />
                                          <Fade direction="left">
                                                <div className="text-xs mt-4 absolute font-bold">
                                                      <p>Order Number: 49</p>
                                                      <p>Booking Date: August 30,2024</p>
                                                      <p>Room:Luxary Suite <span>1 Room <br /> August 30,2024 - August 31,2024(1 Night)</span></p>
                                                </div>
                                          </Fade>

                                    </div>
                                    <div>
                                          <Fade delay={1600} direction="up">
                                                <h1 className="text-sm font-bold text-blue-700">CONTACT DETAIL</h1>
                                          </Fade>                                          <hr className="mt-3" />
                                          <Fade delay={1500} direction="bottom-right">
                                                <div className="absolute text-xs mt-6 font-bold">
                                                      <p>FIRST NAME: MR.MICHAEL</p>
                                                      <p>LAST NAME : PETERSON</p>
                                                      <p>EMAIL: michael@gmail.com</p>
                                                      <p>PHONE: +16107235779</p>
                                                      <p>COUNTRY: USA</p>

                                                </div>
                                          </Fade>
                                    </div>
                                    <div>
                                          <Fade delay={1200} direction="left">
                                                <h1 className="text-sm font-bold text-blue-700">ORDER STATUS</h1>
                                          </Fade>                                          <hr className="mt-3" />
                                          <Fade direction="right">
                                                <div className=" w-max bg-white shadow-2xl font-bold">
                                                      <div className="flex gap-6 p-2 mt-6">
                                                            <p>Pending  </p>
                                                            <span className="mt-1"> <IoIosArrowDown /></span>
                                                      </div>
                                                      <button className="btn btn-primary p-2 mt-4">UPDATE STATUS</button>
                                                </div>
                                          </Fade>
                                    </div>

                              </div>
                              <Fade delay={400} direction="right">
                                    <div className="">
                                          <h2 className="text-sm font-bold text-blue-700 mt-10">TRAVELLER INFO</h2>

                                    </div>
                              </Fade>
                              <hr className="mt-3 " />

                              <Fade delay={500} direction="up">
                                    <h3 className="font-bold text-xs mt-3 ">Luxary Suite</h3>
                              </Fade>

                              <Fade delay={800} direction="down">
                                    <p className="text-sm ">   Guest 1: sdfgsfdg</p>
                              </Fade>
                              <Fade delay={1000} direction="right">
                                    <h2 className="font-bold text-blue-700 mt-10">PRICE BREAKDOWN</h2>
                              </Fade>
                              <hr className="mt-3 " />
                              <Fade delay={800} direction="left">
                                    <div className="flex">
                                          <h3 className="font-bold text-xs mt-3 ">Luxary Suite:</h3>
                                          <Fade delay={800} direction="right" >
                                                <p className="mt-3 text-xs">(1 adult o childrens)</p>

                                          </Fade>
                                    </div>
                              </Fade>
                              <Fade delay={1000} direction="left">
                                    <p className="text-xs">30 August,2024 - 31 August,2024</p>
                              </Fade>                             
                               <div className="flex justify-between font-bold">
                                    <Fade delay={700} direction="left" >
                                          <h2 className="text-sm   mt-10">ROOM PRICE </h2>
                                    </Fade >
                                    <Fade delay={700} direction="right">
                                          <p className="mt-10">$90.00</p>
                                    </Fade>
                              </div>
                              <hr className="mt-3 " />
                              <div className="flex  justify-between font-bold ml-8 md:ml-[300px]">
                                    <Fade delay={900} direction="right">
                                          <h2 className="text-sm  mt-10">TOTAL PRICE </h2>
                                    </Fade>
                                    < Fade delay={900} direction="left">
                                          <p className="mt-10 ml-8 md:ml-24">$90.00</p>

                                    </Fade>
                              </div>
                              <div className="flex  justify-between font-bold ml-10 md:ml-[340px]">
                                    <Fade delay={1000} direction="left">
                                          <h2 className="text-sm  text-black mt-10">TAX 9% </h2>

                                    </Fade>
                                    <Fade delay={1000} direction="right">
                                          <p className="mt-10 ml-9 md:ml-24 text-black">$58.00</p>

                                    </Fade>
                              </div>
                              <hr className="mt-3 " />
                              <div className="flex  justify-between font-bold text-black ml-7  md:ml-[280px]">
                                    <Fade delay={1200} direction="right">
                                          <h2 className="text-sm  text-black mt-10">GRAND TOTAL </h2>

                                    </Fade>
                                    <Fade delay={1200} direction="left">
                                          <p className="mt-10 text-black ml-8 md:ml-24">$148.00</p>
                                    </Fade>

                              </div>
                              <hr className="mt-3 " />

                        </div>

                  </div>
                  <div className=" text-center  space-y-2 md:space-y-16 mt-2 md:mt-24">
                        <Fade direction="right">
                              <h2 className=" text-2xl md:text-4xl font-bold text-blue-500">
                                    Built For The Best
                              </h2>

                        </Fade>
                        <Fade direction="left">
                              <h3 className=" text-xl md:text-4xl font-bold">
                                    Tour Booking & Hotel Booking
                              </h3>
                        </Fade>
                        <Fade delay={700} direction="right">
                              <p>A tour travel is a way to inform your potential customers about the details of your <br /> tours. It is also a way to persuade them to book with you. Overall,it is your  <br /> to showcase your unique selling points,  highlight the benefits of your  <br /> tours, and   a memorable impression on your readers.</p>
                        </Fade>
                        <div className="flex gap-8 ml-8 md:ml-36">
                              <Fade delay={900} direction="left">
                                    <button className="btn btn-secondary p-4 ">Tour Features</button>
                              </Fade>
                              <Fade delay={900} direction="right">
                                    <button className="btn btn-success p-4 text-white  ">Tour Features</button>
                              </Fade>
                        </div>
                  </div>

            </div>
      );
};

export default TourBooking;