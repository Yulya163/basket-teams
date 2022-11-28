import './error.css';

type ErrorProps = {
    errMessage: string;     
}


function Error({errMessage}: ErrorProps): JSX.Element {
    return (
        <div className="error error-center-position">
            Something went wrong. {errMessage}. Please try again later
        </div>
    )
}

export default Error;