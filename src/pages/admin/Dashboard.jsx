import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, getUserInfo } from "../../store/adminSlice";
import UserInfo from "../../components/admin/UserInfo";
import ProductCustomize from "../../components/admin/ProductCustomize";

export default function Dashboard() {
    const dispatch = useDispatch();
    const { orders, isLoading } = useSelector(state => state.admin);

    useEffect(() => {
        dispatch(getAllOrders());
        dispatch(getUserInfo());
    }, [dispatch])

    if (isLoading) {
        return <h1 className="text-center text-3xl font-bold py-10"> Loading... </h1>
    }
    return (
        <div className="bg-white">
            <section>
                <ProductCustomize />
            </section>
            <section>
                <h1 className="text-center text-3xl font-bold py-10"> Order List For Admin :- </h1>
                <div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-[#15B8A9] dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    {/* <th scope="col" className="px-6 py-3">
                                        Order Id
                                    </th> */}
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Storage
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nationality
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone Number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nid
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Otp
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            {/* <td className="px-6 py-4">
                                                {order.orderId}
                                            </td> */}
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {order.name}
                                            </th>

                                            <td className="px-6 py-4">
                                                {order.color}
                                            </td>
                                            <td className="px-6 py-4">
                                                {order.storage}
                                            </td>
                                            <td className="px-6 py-4">
                                                {order.nationality}
                                            </td>
                                            <td className="px-6 py-4">
                                                {order.phoneNumber}
                                            </td>
                                            <td className="px-6 py-4">
                                                {order.nid}
                                            </td>
                                            <td className="px-6 py-4">
                                                {order.address}
                                            </td>
                                            <td className="px-6 py-4 font-bold">
                                                {order.otp?.map(otp => (
                                                    <div>
                                                        <span className="px-2"> {otp.otp} </span>
                                                        {otp.isValidate ? <span className="text-green-500">Verified</span> : <span className="text-red-500">Not Verified</span>}
                                                    </div>
                                                ))}
                                            </td>
                                            {/* <td className="px-6 py-4">
                                                {order.otp[0]?.otp}
                                            </td> */}
                                            <td className="px-6 py-4">
                                                {order.status}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section>
                <UserInfo />
            </section>
        </div>
    )
}