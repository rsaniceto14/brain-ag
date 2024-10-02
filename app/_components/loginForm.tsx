import { Input } from "./ui/input";

const LoginPage = () => {
    return ( 
        <div className="h-screen flex justify-center items-center bg-slate-600 px-5">
            <div className="bg-white p-12 rounded-lg w-96 max-w-full">
            <Input />
            </div>
        </div>
     );
}
 
export default LoginPage;