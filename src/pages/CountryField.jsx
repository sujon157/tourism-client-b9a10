
import { Fade } from 'react-awesome-reveal';
import './CountryField.css';
import Swal from 'sweetalert2';
const CountryField = () => {

      const handleAddCountry = (e) => {
            e.preventDefault();
            const form = e.target;
            const country_name = form.country_name.value;
            const image = form.image.value;
            const description = form.description.value;

            const countryInfo = { country_name, image, description };
            console.log(countryInfo);


            fetch('http://localhost:3000/country', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(countryInfo)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                              Swal.fire({
                                    position: "top",
                                    icon: "success",
                                    title: "Country added",
                                    showConfirmButton: true

                              });
                        }
                  })
      }
      return (
            <div>
                  <div className="form-container pt-28 bg-base-200 ">
                        <div className="belt ">



                              <div className="form">

                                    <div className='text-blue-950 text-center'>
                                          <Fade direction='right'>
                                                <h2 className=' text-5xl  font-extrabold'>Add New Country</h2><br />

                                          </Fade>
                                          <Fade direction='left'>
                                                <p>Please fill out the form below to add a new country.</p>

                                          </Fade>
                                          <hr />
                                          <div className="line"></div>
                                          <Fade delay={600} direction='up'>
                                                <p>Note: All fields are required.</p>

                                          </Fade>
                                          <div className="line"></div>
                                          <Fade delay={600} direction='down'>
                                                <p className='mb-3'>Your message will be sent to the specified email address.</p>

                                          </Fade>
                                    </div>
                                    <hr />

                                    <Fade delay={1000} direction='right'>
                                          <form onSubmit={handleAddCountry} className=' text-black border-2 pl-6 py-2 shadow-2xl rounded-xl '>
                                                <input className='rounded-lg' type="text" name='country_name' placeholder="Country_name" required />
                                                <input className='rounded-lg' type="text" name='image' placeholder="PhotoURL" required />
                                                <textarea className='rounded-lg' name="description" id="" cols="50" rows="10" placeholder="Write description here..." required></textarea>

                                                <input type="submit" value="ADD COUNTRY" className='btn btn-circle' />
                                          </form>
                                    </Fade>

                              </div>

                              <div className="progress-wrapper">
                                    <div className="progress-div">
                                          <h3>Your message is sending...</h3>
                                          <div className="progress-outer">
                                                <div className="progress-inner"></div>
                                          </div>
                                    </div>
                              </div>
                              <div className="success-wrapper">
                                    <div className="success">
                                          <i className="ion-android-done"></i>
                                          <h2>Your Message Has Been Sent!</h2>
                                          <button>Back</button>
                                    </div>
                              </div>



                        </div>


                  </div>

            </div>
      );
};

export default CountryField;