import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Opss!!!</h1>
            <Link to='/'>Bo back to home</Link>

        </div>
    );
};

export default ErrorPage;