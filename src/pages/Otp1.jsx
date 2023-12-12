import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate, } from "react-router-dom";
import "../components/login/login.css"
import { useSelector } from "react-redux";


export default function Otp1() {
    const navigate = useNavigate();
    const { orderId } = useSelector((state) => state.order);
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_URL}/order-v2/store-otp1`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderId,
                otp: Number(e.target.otp.value)
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "success") {
                    navigate("/address");
                    alert(data.message);
                } else {
                    alert(data.message);
                }
            })
    }

    return (
        <div className="flex justify-center items-center bg-white">
            <section id="loginContainer" className="">
                <h1 className="text-center font-semibold text-xl uppercase text-[#336699]">First OTP</h1>
                <div className=" flex justify-center items-center text-center">
                    <p className="mt-1 w-1/4 h-[2px] bg-[#336699]">  </p>
                </div>
                <p className="w-full h-[1px] bg-[#EEEEEE]">  </p>

                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="w-full flex justify-center items-center min-h-[250px]">

                            <div className=" w-[200px] h-[200px] border-[15px] border-[#97A10D] rounded-full relative" />
                            <h1 className="text-[#666666] absolute text-xl"> First OTP </h1>

                        </div>
                        <div className="inputBox">
                            <h1> *Please enter your first OTP </h1>
                            <input className="px-3" name="otp" type="number" />
                        </div>
                        <button type="submit" className="w-full uppercase mt-5 bg-[#15B8A9] py-4 text-white font-semibold tracking-wider"> Submit </button>
                    </div>
                </form>
            </section>
        </div>
    )
}