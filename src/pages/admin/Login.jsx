import { useSelector } from "react-redux";
import "../../components/login/login.css"

export default function Login() {
    // const {isAdminLogin} = useSelector(state => state.adminLogin);
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_URL}/admin/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.isAdminLoginValidate) {
                    localStorage.setItem("token", data.token);
                    window.location.href = "/admin/dashboard";
                } else {
                    alert(data.message);
                }
            })
    }
    return (
        <div className="flex justify-center items-center bg-white">
            <form onSubmit={handleSubmit}>
                <section id="loginContainer" className="">
                    <h1 className="text-center font-semibold text-xl uppercase text-[#336699]">Admin Login</h1>
                    <div className=" flex justify-center items-center text-center">
                        <p className="mt-1 w-1/4 h-[2px] bg-[#336699]">  </p>
                    </div>
                    <p className="w-full h-[1px] bg-[#EEEEEE]">  </p>

                    <div>
                        <div className="inputBox">
                            <h1> *Phone Number </h1>
                            <input required className="px-4" name="email" type="text" />
                        </div>
                        <div className="inputBox">
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