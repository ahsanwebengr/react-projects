import Link from "next/link";

const Project = () => {
    const projects = [
        { id: 1, title: "React JS", description: "lorem Ipsum is dummy text" },
        { id: 2, title: "NEXT JS", description: "lorem Ipsum is dummy text" },
        { id: 3, title: "Node JS", description: "lorem Ipsum is dummy text" },
        { id: 4, title: "Vue JS", description: "lorem Ipsum is dummy text" },
        { id: 5, title: "Angular JS", description: "lorem Ipsum is dummy text" },
    ];
    return (
        <section className="container max-w-6xl mx-auto py-6">
            <h2 className="text-4xl font-semibold mb-4">Project Page</h2>
            <div className="grid grid-cols-3 gap-5">
                {projects?.map((project) => (
                    <div key={project?.id} className="flex flex-col items-center justify-center gap-2 p-3 shadow-lg rounded-md h-40 hover:shadow-xl">
                        <h4 className="font-medium text-2xl">{project?.title}</h4>
                        <p>{project?.description}</p>
                        <Link className="p-2 bg-gray-500 hover:bg-gray-800 px-5 text-white text-center rounded-md" href={{ pathname: `project/${project.id}`, query: { title: project.title, desc: project.description } }}>View</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;