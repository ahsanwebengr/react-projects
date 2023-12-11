'use client';
import { useSearchParams, useRouter } from "next/navigation";

const ProjectId = ({ params }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const desc = searchParams.get('desc');
    const dev = JSON.parse(searchParams.get('dev'));
    return (
        <section>
            <div className="w-10 h-10 bg-blue-500 rounded-full text-white grid place-items-center"> {params.id}</div>
            <div className="flex flex-col items-center justify-center gap-2 p-3 shadow-lg rounded-md h-48 hover:shadow-xl max-w-sm mx-auto">
                <h4 className="font-medium text-2xl">{title}</h4>
                <p className="text-center">{desc}</p>
                {dev && <p className="text-md">Developer: <b>{dev.name}</b></p>}
                <button onClick={() => router.push('/project')} className="btn btn-primary text-white btn-wide">Back</button>
            </div>

        </section>
    );
};

export default ProjectId;