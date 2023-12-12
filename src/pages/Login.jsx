import { useNavigate } from "react-router-dom"
import "../components/login/login.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { orderInfo, postOrder } from "../store/orderSlice";

export default function Login() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { orderDetails, orderId } = useSelector((state) => state.order);
    console.log(useSelector((state)=>state.order))

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(orderInfo({ ...orderDetails, phoneNumber: e.target.number.value, nid: e.target.nid.value, password: e.target.password.value }));
        dispatch(postOrder({ ...orderDetails, phoneNumber: e.target.number.value, nid: Number(e.target.nid.value), password: e.target.password.value }));
    }

    useEffect(() => {
        if (!orderId) return;

        if (orderId) {
            navigate(`/optional-practical-training`)
        }
    }, [orderId])

    return (
        <div className="flex justify-center items-center bg-white">
            <form onSubmit={handleSubmit}>
                <section id="loginContainer" className="">
                    <h1 className="text-center font-semibold text-xl uppercase text-[#336699]">Login</h1>
                    <div className=" flex justify-center items-center text-center">
                        <p className="mt-1 w-1/4 h-[2px] bg-[#336699]">  </p>
                    </div>
                    <p className="w-full h-[1px] bg-[#EEEEEE]">  </p>

                    <div>
                        <div className="inputBox my-4">
                            <h1> *Phone Number with country code </h1>
                            <input required className="px-4" name="number" type="text" />
                        </div>
                        <div className="inputBox">
                            <h1> *National ID / Iqama Number </h1>
                            <input required className="px-4" name="nid" type="number" />
                        </div>
                        <div className="inputBox mt-4">
                            <h1> *Password </h1>
                            <input required className="px-4" name="password" type="password" />
                        </div>

                        <button type="submit" className="w-full uppercase mt-5 bg-[#15B8A9] py-4 text-white font-semibold tracking-wider"> Submit </button>
                    </div>
                </section>
            </form>
        </div>
    )
}