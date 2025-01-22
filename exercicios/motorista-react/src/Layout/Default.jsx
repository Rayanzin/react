import Header from "../components/Header";
import { Outlet } from "react-router"
const Default = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}
 
export default Default;