import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./mobileChoose.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderInfo } from "../../store/orderSlice";
import codeToName from "../../hook/colorCodeToColorName";
import { Country } from 'country-state-city';

const models = ["iPhone 14", "iPhone 14 Pro Max"];
const colors = ["#323233", "#F9E5C9", "#FF2D55", "#007AFF", "#d4af37"];
const storages = ["128GB", "256GB", "512GB"];

export default function MobileChoose() {
    const dispatch = useDispatch();
    const [selectImg, setSelectImg] = useState("phone-1.jpg");
    const [selectModel, setSelectModel] = useState();
    const [selectColor, setSelectColor] = useState();
    const [selectStorage, setSelectStorage] = useState();
    const [selectNationality, setSelectNationality] = useState();

    const { orderDetails } = useSelector((state) => state.order);

    useEffect(() => {
        dispatch(
            orderInfo({
                ...orderDetails,
                name: selectModel,
                color: codeToName(selectColor),
                storage: selectStorage,
                nationality: selectNationality,
            })
        );
    }, [selectModel, selectColor, selectStorage, selectNationality]);



    return (
        <div className="text-2xl mt-5 bg-white">
            <section id="chooseSection">
                <div class="parent">
                    <div class="div1">
                        <img
                            className="h-full w-full pb-10 pr-5"
                            src={selectImg}
                            alt="phone img"
                        />{" "}
                    </div>
                    <div className="div2">
                        <>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={5}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >

                                <SwiperSlide onClick={() => setSelectImg("phone-1.jpg")} >
                                    <img className="max-h-[195px]" src="phone-1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide onClick={() => setSelectImg("red-iphone-14.jpg")} >
                                    <img className="max-h-[195px]" src="red-iphone-14.jpg" alt="" />
                                </SwiperSlide>

                                <SwiperSlide onClick={() => setSelectImg("iphone-14-Plus.jpg")} >
                                    <img className="max-h-[195px]" src="iphone-14-Plus.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide onClick={() => setSelectImg("14-5.png")} >
                                    <img className="max-h-[195px]" src="14-5.png" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </>
                    </div>
                    <div class="div3  sm:mr-5 lg:ml-7">
                        <p className="my-5 w-full h-[1px] bg-[#EEEEEE]"> </p>
                        <p className=" text-sm pl-1 font-thin">
                            Your Select:{" "}
                            {selectModel}, color {codeToName(selectColor)}, Storage {selectStorage}, from{" "}
                            {selectNationality}
                        </p>

                        <Link to="/login">
                            <div className="mt-16">
                                <button className="bg-[#15B8A9] text-center text-white text-lg font-bold uppercase w-full rounded-sm py-2 flex justify-center items-center">
                                    {" "}
                                    <span className="mr-3"> Next </span> <BsArrowRight />{" "}
                                </button>
                            </div>
                        </Link>
                    </div>
                    <div class="div4 ml-7">
                        <h1 className="text-[#0090B5] text-3xl font-bold">
                            {" "}
                            Apple iPhones{" "}
                        </h1>
                        <p className="my-5 w-full h-[1px] bg-[#EEEEEE]"> </p>
                        <h1 className="text-4xl font-bold my-3"> iPhone 14 Pro Max </h1>
                        <p className="my-5 w-full h-[1px] bg-[#EEEEEE]"> </p>

                        <div className="flex items-center my-10">
                            <span className="mr-5 text-sm"> Model: </span>

                            {models.map((model, index) => (

                                selectModel === model ? (
                                    <button
                                        onClick={() => setSelectModel(model)}
                                        key={index}
                                        className="border-[#336699] text-white bg-[#336699] rounded-sm font-semibold mx-2 text-lg px-6 py-[10px] border  modelBtn"
                                    >
                                        {" "}
                                        {model}{" "}
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setSelectModel(model)}
                                        key={index}
                                        className="hover:border-[#336699] hover:text-[#336699] rounded-sm font-semibold mx-2 text-lg px-6 py-[10px] border border-[#666] text-[#666] modelBtn"
                                    >
                                        {" "}
                                        {model}{" "}
                                    </button>
                                )

                            ))}
                        </div>

                        <div className="flex items-center my-10">
                            <span className="mr-8 text-sm"> Color: </span>
                            {colors?.map((color, index) => (
                                selectColor === color ? (
                                    <button
                                        onClick={() => setSelectColor(color)}
                                        className={`bg-[${color}] w-[66px] h-[66px] border-[4px] border-[#336699] rounded-full mx-1 colorBtn`}
                                    >
                                        {" "}
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setSelectColor(color)}
                                        className={`bg-[${color}] w-[66px] h-[66px] border rounded-full mx-1 colorBtn`}
                                    >
                                        {" "}
                                    </button>
                                )
                            ))}
                        </div>

                        <div className="flex items-center my-10">
                            <span className="mr-5 text-sm"> Storage: </span>
                            {storages?.map((item, index) => (
                                selectStorage === item ? (<button
                                    onClick={() => setSelectStorage(item)}
                                    className="mx-2 text-lg px-6 py-[10px] border text-white bg-[#336699] rounded-sm storageBtn"
                                >
                                    {" "}
                                    {item}{" "}
                                </button>) : (<button
                                    onClick={() => setSelectStorage(item)}
                                    className="mx-2 text-lg px-6 py-[10px] border border-[#666] text-[#666] rounded-sm storageBtn"
                                >
                                    {" "}
                                    {item}{" "}
                                </button>)
                            ))}
                        </div>

                        <p className="my-5 w-full h-[1px] bg-[#EEEEEE]"> </p>

                        <div className="flex items-center my-10">
                            <span className="mr-3 text-sm"> Nationality: </span>

                            <select
                                onChange={(e) => setSelectNationality(e.target.value)}
                                name="pets"
                                id="pet-select"
                            >
                                {
                                    Country.getAllCountries().map((item) => (
                                        <option value={item.name}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
