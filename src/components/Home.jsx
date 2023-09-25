import React from "react";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
    <div className="flex flex-col md:flex-row p-4 mx-10" style={{height: '629px'}}>
    
    <div className="md:w-1/2 p-4 flex items-center justify-center" style={{ height: '493px', width: '652px' }}>
  <p className="text-white text-4xl leading-7 text-center">
    Searching for Augmented<br />
    <br/>Development Teams<br />
    <br/>to steer your product towards triumph?
  </p>
</div>


<div className="md:w-1/2 p-4" style={{ height: '493px', width: '652px' }}>


  <div className="bg-white shadow-md p-4 rounded-lg h-full">
    <h3 className="text-xl font-semibold mb-4">Fill out the form</h3>
    <p className="text-sm mb-4">Our Team will touch base with you within 24 hours.</p>
    <form>
      <div className="mb-4 flex">
        <div className="w-1/2 mr-2">
          <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Full Name"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Email"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 font-semibold mb-2">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Country"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-gray-700 font-semibold mb-2">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Contact Number"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="requirements" className="block text-gray-700 font-semibold mb-2">
          Tell us your requirement
        </label>
        <textarea
          id="requirements"
          name="requirements"
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="4"
          placeholder="Your Requirements"
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white bg-black font-sm px-4 rounded-md bottom-4 left-4 right-4"
      >
        Submit
      </button>
    </form>
  </div>
</div>

    </div>
    <Footer/>
    </div>
  );
};

export default Home;
