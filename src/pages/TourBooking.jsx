import { CiCircleCheck } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";


const TourBooking = () => {
      return (
            <div className=" bg-slate-200 grid justify-between gap-16 md:grid-cols-2 p-8">
                  <div>
                        <div className="bg-blue-600 flex gap-1 text-white rounded-t-2xl p-4">
                              <p className="mt-1"><CiCircleCheck /></p>
                              <p className=""> Transaction Order</p>
                        </div>
                        <div className="p-8 bg-white  h-min shadow-2xl">
                              <div className="flex justify-between ">
                                    <div className="relative">
                                          <h1 className="text-sm font-bold text-blue-700">ORDER SUMMARY</h1>
                                          <hr className="mt-3" />
                                          <div className="text-xs mt-4 absolute font-bold">
                                                <p>Order Number: 49</p>
                                                <p>Booking Date: August 30,2024</p>
                                                <p>Room:Luxary Suite <span>1 Room <br /> August 30,2024 - August 31,2024(1 Night)</span></p>
                                          </div>

                                    </div>
                                    <div>
                                          <h1 className="text-sm font-bold text-blue-700">CONTACT DETAIL</h1>
                                          <hr className="mt-3" />
                                          <div className="absolute text-xs mt-6 font-bold">
                                                <p>FIRST NAME: MR.MICHAEL</p>
                                                <p>LAST NAME : PETERSON</p>
                                                <p>EMAIL: michael@gmail.com</p>
                                                <p>PHONE: +16107235779</p>
                                                <p>COUNTRY: USA</p>

                                          </div>
                                    </div>
                                    <div>
                                          <h1 className="text-sm font-bold text-blue-700">ORDER STATUS</h1>
                                          <hr className="mt-3" />
                                          <div className=" w-max bg-white shadow-2xl font-bold">
                                                <div className="flex gap-6 p-2 mt-6">
                                                      <p>Pending  </p>
                                                      <span className="mt-1"> <IoIosArrowDown /></span>
                                                </div>
                                                <button className="btn btn-primary p-2 mt-4">UPDATE STATUS</button>
                                          </div>
                                    </div>

                              </div>
                              <h2 className="text-sm font-bold text-blue-700 mt-10">TRAVELLER INFO</h2>
                              <hr className="mt-3 " />

                              <h3 className="font-bold text-xs mt-3 ">Luxary Suite</h3>
                              <p className="text-xs">Guest 1: sdfgsfdg</p>
                              <h2 className="text-sm font-bold text-blue-700 mt-10">PRICE BREAKDOWN</h2>
                              <hr className="mt-3 " />
                              <div className="flex">
                                    <h3 className="font-bold text-xs mt-3 ">Luxary Suite:</h3>
                                    <p className="mt-3 text-xs">(1 adult o childrens)</p>

                              </div>
                              <p className="text-xs">30 August,2024 - 31 August,2024</p>
                              <div className="flex justify-between">
                                    <h2 className="text-sm font-bold  mt-10">ROOM PRICE </h2>
                                    <p className="mt-10">$90.00</p>
                              </div>
                              <hr className="mt-3 " />
                              <div className="flex  justify-between ml-[300px]">
                                    <h2 className="text-sm font-bold  mt-10">TOTAL PRICE </h2>
                                    <p className="mt-10 ml-24">$90.00</p>

                              </div>
                              <div className="flex  justify-between  ml-[340px]">
                                    <h2 className="text-sm font-bold  mt-10">TAX 9% </h2>
                                    <p className="mt-10 ml-24">$58.00</p>

                              </div>
                              <hr className="mt-3 " />
                              <div className="flex  justify-between  ml-[280px]">
                                    <h2 className="text-sm font-bold  mt-10">GRAND TOTAL </h2>
                                    <p className="mt-10 ml-24">$148.00</p>

                              </div>
                              <hr className="mt-3 " />

                        </div>

                  </div>
                  <div className="space-y-16 mt-24">
                      <h2 className="text-3xl font-bold text-blue-500">
                      Built For The Best
                      </h2>
                      <h3 className="text-4xl font-bold">
                      Tour Booking & Hotel Booking
                      </h3>
                      <p>A tour travel is a way to inform your potential customers about the details of your <br /> tours. It is also a way to persuade them to book with you. Overall,it is your  <br /> to showcase your unique selling points,  highlight the benefits of your  <br /> tours, and   a memorable impression on your readers.</p>
                    <div className="flex gap-8">
                    <button className="btn btn-secondary p-4">Tour Features</button>
                    <button className="btn btn-success p-4 text-white">Tour Features</button>
                    </div>
                  </div>

            </div>
      );
};

export default TourBooking;