import PropTypes from 'prop-types';
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary, } = job;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={logo} /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className='border-2 rounded px-4 py-2 mr-4  font-bold border-sky-400 '>{remote_or_onsite}</button>
                    <button className='border-2 rounded px-4 py-2 mr-4  font-bold border-sky-400 '>{job_type}</button>
                </div>
                <div className='flex gap-3'>
                    <h2 className="flex mr-2"><MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn> {location}</h2>
                    <h2 className='flex mr-2'><AiOutlineDollarCircle className='text-2xl '></AiOutlineDollarCircle> {salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired
}

export default Job;