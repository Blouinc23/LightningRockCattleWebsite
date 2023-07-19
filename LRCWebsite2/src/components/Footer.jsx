import React, { useState } from "react";
import Map from "./Map";

function Footer(props) {
  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    console.log(payload);
  }

  return (
    <div className="bg-primary mt-[150px] w-full lg:h-[650px] h-auto flex  justify-center">
      <div className="h-full lg:w-[100%] flex lg:flex-row flex-col justify-center my-[0px]">
        <div className="flex flex-col items-center w-[1000px] h-[500px] my-[10px]">
          <div className="flex flex-col items-center w-[1000px] h-[500px]">
            <h1 className="lg:text-[64px] text-[48px] text-white">Contact Us</h1>
            <p className="lg:text-[24px] text-[14px] text-white">
              Have a question? Send us a message!
            </p>
            <form
              className="flex flex-col justify-center items-center lg:w-[1000px] lg:h-[500px] w-[40vw]"
              onSubmit={submitHandler}
            >
              <input
                className="lg:w-[500px] lg:h-[50px] w-[75vw] my-3 px-3 rounded-2xl text-[18px] font-mont p-2"
                type="text"
                name="name"
                placeholder="Name"
              ></input>
              <input 
                className="lg:w-[500px] lg:h-[50px] w-[75vw] my-3 px-3 rounded-2xl text-[18px] font-mont p-2"
                type="text"
                name="email"
                placeholder="Email"
              ></input>
              <textarea
                className="lg:w-[500px] lg:h-[200px] h-[25vh] w-[75vw] my-3 px-3 rounded-2xl text-[18px] font-mont p-2"
                type="text"
                name="message"
                placeholder="Message"
              ></textarea>
              <button className="lg:w-[500px] lg:h-[50px] w-[50vw] my-3 bg-blacklite text-white text-[32px] px-3 rounded-2xl hover:bg-opacity-60 transition-all duration-200">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="self-center lg:my-[10px] mt-[50px] lg:w-auto w-[100vw]  mb-[50px]">
          <h1 className="text-[64px] text-white text-center">Our Location</h1>
          <div className="mb-[10px] flex flex-col justify-between text-center">
            <p className="text-white flex-1 mx-4 text-[24px]">
              1647 Smoak Rd, Walterboro SC 29488
            </p>
            
          </div>
          <div className="rounded-2xl overflow-hidden lg:w-auto w-[90vw] lg:mx-0 mx-[5vw]">
            <Map></Map>
          </div>
          <p className="text-white flex-1 mx-4 text-[24px] text-center mt-[10px]">843-364-9175</p>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
