import { Outlet } from "react-router-dom";
import Home from "../components/home/Home";
import Footer from "../components/footer/Footer";
import NavBer from "../components/home/navber/NavBer";

const Root =()=>{
    return(
        <div>
          <NavBer></NavBer>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    )
}
export default Root;