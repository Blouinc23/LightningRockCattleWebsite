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
    <div className="bg-primary mt-[150px] w-full h-[650px] flex justify-center">
      <div className="h-full w-[100%] flex justify-center my-[0px]">
        <div className="flex flex-col items-center w-[1000px] h-[500px] my-[10px]">
          <div className="flex flex-col items-center w-[1000px] h-[500px]">
            <h1 className="text-[64px] text-white">Contact Us</h1>
            <p className="text-[24px] text-white">
              Have a question? Send us a message!
            </p>
            <form
              className="flex flex-col justify-center items-center w-[1000px] h-[500px]"
              onSubmit={submitHandler}
            >
              <input
                className="w-[500px] h-[50px] my-3 px-3 rounded-2xl text-[18px] font-mont p-2"
                type="text"
                name="name"
                placeholder="Name"
              ></input>
              <input 
                className="w-[500px] h-[50px] my-3 px-3 rounded-2xl text-[18px] font-mont p-2"
                type="text"
                name="email"
                placeholder="Email"
              ></input>
              <textarea
                className="w-[500px] h-[200px] my-3 px-3 rounded-2xl text-[18px] font-mont p-2"
                type="text"
                name="message"
                placeholder="Message"
              ></textarea>
              <button className="w-[500px] h-[50px] my-3 bg-blacklite text-white text-[32px] px-3 rounded-2xl hover:bg-opacity-60 transition-all duration-200">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="self-start my-[10px]">
          <h1 className="text-[64px] text-white text-center">Our Location</h1>
          <div className="mb-[10px] flex flex-col justify-between text-center">
            <p className="text-white flex-1 mx-4 text-[24px]">
              1647 Smoak Rd, Walterboro SC 29488
            </p>
            
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Map></Map>
          </div>
          <p className="text-white flex-1 mx-4 text-[24px] text-center mt-[10px]">843-364-9175</p>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
