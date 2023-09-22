import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    // console.log(jobs, id);
    const job = jobs.find(job => job.id == id);
    console.log(job);
    return (
        <div>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border md:col-span-3">
                    <h2 className="text-2xl">{job.job_title}</h2>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Apply</h2>
                    <button className="btn btn-primary">Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;