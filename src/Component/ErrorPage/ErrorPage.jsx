import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-3xl font-bold text-center mt-[250px]">
            <h1>Not Found Page.......</h1>
            <Link className="btn text-[30px] mt-5 bg-[#23BE0A]" to="/">Go Back</Link>
        </div>
    );
};

export default ErrorPage;