import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashboardPage = async () => {

    const session = await getServerSession()

    if(!session){
        redirect("/");
    }
    
    return ( 
        <div>
            <h1>Bem Vindo, {session?.user?.name}</h1>
        </div>

     );
}
 
export default DashboardPage;