import FixedButton from "../components/FixedButton";
import Header from "../components/Header";

const Home = () => {
    return ( 
        <div className=" text-white w-screen h-screen bg-[#3b3b3b] ">
            <div className="flex flex-col items-center ">
                <Header/>
                <table className=" mt-10 flex flex-col border-collapse bg-[#555] p-2 w-auto justify-center rounded-md">
                    <tr className="flex items-center">
                        <th className="border-2 border-white">Nome</th>
                        <th className="border-2 border-white">Estado</th>
                        <th className="border-2 border-white">
                            <FixedButton/>
                        </th>
                    </tr>
                    <tr className="flex justify-center items-center ">
                        <td className="border-2 border-white">1</td>
                        <td className="border-2 border-white">2</td>
                        <td className="border-2 border-white">3</td>
                    </tr>
                </table>
            </div>
        </div>
     );
}
 
export default Home;