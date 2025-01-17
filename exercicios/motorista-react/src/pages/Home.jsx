import FixedButton from "../components/FixedButton";
import Header from "../components/Header";

const Home = () => {
    return ( 
        <div className="text-white w-screen h-screen bg-[#3b3b3b] ">
            <div className="flex flex-col items-center ">
                <Header/>
                <table className="broder-2 border-white mt-10 flex flex-col border-collapse bg-[#555] p-2 w-auto justify-center rounded-md">
                    <tr className="flex items-center gap-20">
                        <th>Nome</th>
                        <th>Estado</th>
                        <th>
                            <FixedButton/>
                        </th>
                    </tr>
                    <tr className="flex justify-center items-center">
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </table>
            </div>
        </div>
     );
}
 
export default Home;