import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFoundPage(){
    return(
        <div className='not-found-page'>
            <h1>Page Not Found</h1>
            <Link to='/'>Return Home</Link>
        </div>
    )
 }