'use client';
import { useSearchParams, useRouter } from "next/navigation";

const ProjectId = ({ params }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const desc = searchParams.get('desc');
    return (
        <section className="container max-w-6xl mx-auto py-6">
            <div className="w-10 h-10 bg-blue-500 rounded-full text-white grid place-items-center"> {params.id}</div>
            <div className="flex flex-col items-center justify-center gap-2 p-3 shadow-lg rounded-md h-40 hover:shadow-xl max-w-xs mx-auto ">
                <h4 className="font-medium text-2xl">{title}</h4>
                <p>{desc}</p>
                <button onClick={()=> router.push('/project')} className="bg-blue-500 text-white px-4 py-1 rounded-md">Back</button>
            </div>

        </section>
    );
};

export default ProjectId;