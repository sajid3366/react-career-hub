import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [allJobs, setAllJobs] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div>
            <div className="text-center">
                <h3 className="text-5xl">This is featured jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.slice(0, allJobs).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={allJobs === jobs.length ? "hidden" : "flex justify-center my-4"}>

                <button onClick={() => setAllJobs(jobs.length)} className="btn btn-primary ">Show All Jobs</button>
            </div>

        </div>
    );
};

export default FeatureJobs;