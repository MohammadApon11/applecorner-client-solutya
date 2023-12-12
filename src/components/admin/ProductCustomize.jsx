import axios from "axios";
import "../../components/login/login.css"
import "./v2/productCustomize.css";
import { useState } from "react";
import apiInstance from "../../config/axios";
import CheckIcon from '@mui/icons-material/Check';

export default function ProductCustomize() {
    const [color, setSelectColor] = useState();
    const [images, setImages] = useState([]);
    const [selectColor, setSelectedColor] = useState({});

    const handleSubmit = (e) => {
        const fileSizeInMB = e[0].size / (1024 * 1024);
        if (fileSizeInMB > 5) return alert('File size exceeds the limit of 5 MB');

        const formData = new FormData();
        formData.append('file', e[0]);
        formData.append('upload_preset', 'wxj2u9db');
        axios.post('https://api.cloudinary.com/v1_1/drgjxes6c/image/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            return setImages([...images, res.data.url]);
        }).catch(err => {
            alert('Error while uploading image');
        })
    }

    const handleUpload = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const modelArr = e.target.model.value.split(',');
        const storageArr = e.target.storage.value.split(',');
        const colorArr = Object.values(color);

        apiInstance.post('/product/add', { model: modelArr, color: colorArr, images, storage: storageArr, name })
            .then(res => {
                if (res.data.status === "success") {
                    alert("Product added successfully");
                    e.target.reset();
                    setImages([]);
                    setSelectedColor({});
                }
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <section id="mainContainer">
            <form onSubmit={handleUpload}>
                <section id="container" className="">
                    <h1 className="text-center font-semibold text-xl uppercase text-[#336699]">Update Product</h1>
                    <div className=" flex justify-center items-center text-center">
                        <p className="mt-1 w-1/4 h-[2px] bg-[#336699]">  </p>
                    </div>
                    <p className="w-full h-[1px] bg-[#EEEEEE]">  </p>

                    <div>
                        <div className="inputBox">
                            <h1> *Name </h1>
                            <input name="name" required className="px-4" type="text" />
                        </div>
                        <div className="inputBox">
                            <h1> *Model </h1>
                            <input required className="px-4" name="model" type="text" />
                        </div>
                        <div className="inputBox">
                            <h1> *Storage </h1>
                            <input required className="px-4" name="storage" type="text" />
                        </div>

                        <div className="my-8 flex imgUploadBox">
                            <input onChange={(e) => handleSubmit(e.target.files)} name="image1" type="file" multiple />
                            <input onChange={(e) => handleSubmit(e.target.files)} name="image2" type="file" multiple />
                            <input onChange={(e) => handleSubmit(e.target.files)} name="image2" type="file" multiple />
                            <input onChange={(e) => handleSubmit(e.target.files)} name="image2" type="file" multiple />
                            <input onChange={(e) => handleSubmit(e.target.files)} name="image2" type="file" multiple />
                        </div>

                        <div className="w-full flex gap-5 colors">
                            <div className="grid items-center justify-center">
                                <input onClick={() => { setSelectColor({ ...color, spaceBlack: "#323233" }); setSelectedColor({ ...selectColor, spaceBlack: true }) }} className="bg-[#323233] w-[66px] h-[66px] border rounded-full mx-1 colorBtn relative color" />
                                {
                                    selectColor.spaceBlack && <span className="absolute ml-6 text-white font-bold selectIcon"> <CheckIcon /> </span>
                                }
                            </div>  {/* space black */}

                            <div className="grid items-center justify-center">
                                <input onClick={() => { setSelectColor({ ...color, sand: "#F9E5C9" }); setSelectedColor({ ...selectColor, sand: true }) }} className="bg-[#F9E5C9] w-[66px] h-[66px] border rounded-full mx-1 colorBtn relative color" />

                                {
                                    selectColor.sand && <span className="absolute ml-6 text-white font-bold selectIcon"> <CheckIcon /> </span>
                                }
                            </div> {/* sand */}

                            <div className="grid items-center justify-center">
                                <input onClick={() => { setSelectColor({ ...color, gold: "#d4af37" }); setSelectedColor({ ...selectColor, gold: true }) }} className="bg-[#d4af37] w-[66px] h-[66px] border rounded-full mx-1 colorBtn relative color" />

                                {
                                    selectColor.gold && <span className="absolute ml-6 text-white font-bold selectIcon"> <CheckIcon /> </span>
                                }
                            </div> {/* gold */}

                            <div className="grid items-center justify-center">
                                <input onClick={() => { setSelectColor({ ...color, silver: "#d1cddb" }); setSelectedColor({ ...selectColor, silver: true }) }} className="bg-[#d1cddb] w-[66px] h-[66px] border rounded-full mx-1 colorBtn relative color" />

                                {
                                    selectColor.silver && <span className="absolute ml-6 text-white font-bold selectIcon"> <CheckIcon /> </span>
                                }
                            </div> {/* silver */}

                            <div className="grid items-center justify-center">
                                <input onClick={() => { setSelectColor({ ...color, spaceGrey: "#171E27" }); setSelectedColor({ ...selectColor, spaceGrey: true }) }} className="bg-[#171E27] w-[66px] h-[66px] border rounded-full mx-1 colorBtn relative color" />

                                {
                                    selectColor.spaceGrey && <span className="absolute ml-6 text-white font-bold selectIcon"> <CheckIcon /> </span>
                                }

                            </div> {/* space grey */}

                            <div className="grid items-center justify-center">
                                <input onClick={() => { setSelectColor({ ...color, graphite: "#52514f" }); setSelectedColor({ ...selectColor, graphite: true }) }} className="bg-[#52514f] w-[66px] h-[66px] border rounded-full mx-1 colorBtn relative color" />

                                {
                                    selectColor.graphite && <span className="absolute ml-6 text-white font-bold selectIcon"> <CheckIcon /> </span>
                                }

                            </div> {/* graphite */}

                            <div className="grid items-center justify-center">
                                <input onClick={() => { setSelectColor({ ...color, pink: "#FF2D55" }); setSelectedColor({ ...selectColor, pink: true }) }} className="bg-[#FF2D55] w-[66px] h-[66px] border rounded-full mx-1 colorBtn color" />

                                {
                                    selectColor.pink && <span className="absolute ml-6 text-white font-bold selectIcon"> <CheckIcon /> </span>
                                }
                            </div>
                            {/* pink */}

                            <div className="grid items-center justify-center">
                                <input onClick={() => { setSelectColor({ ...color, blue: "#007AFF" }); setSelectedColor({ ...selectColor, blue: true }) }} className="bg-[#007AFF] w-[66px] h-[66px] border rounded-full mx-1 colorBtn relative color " />

                                {
                                    selectColor.blue && <span className="absolute ml-6 text-white font-bold selectIcon"> <CheckIcon /> </span>
                                }
                            </div> {/* blue */}

                            <div className="grid items-center justify-center">
                                <input onClick={() => { setSelectColor({ ...color, lightBlue: "#96ABC0" }); setSelectedColor({ ...selectColor, lightBlue: true }) }} className="bg-[#96ABC0] w-[66px] h-[66px] border rounded-full mx-1 colorBtn color" />
                                {
                                    selectColor.lightBlue && <span className="absolute ml-6 text-white font-bold selectIcon"> <CheckIcon /> </span>
                                }
                            </div>

                            {/* light blue */}
                        </div>

                        <button type="submit" disabled className="w-full uppercase mt-5 bg-[#15B8A9] py-4 text-white font-semibold tracking-wider disabled"> Submit </button>
                    </div>
                </section>
            </form>
        </section>
    )
}