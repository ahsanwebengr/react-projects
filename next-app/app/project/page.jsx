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
                {projects.map((project) => (
                    <Link href={`project/${project.id}`} key={project?.id} className="flex flex-col gap-2 p-3 shadow-lg rounded-md hover:shadow-xl">
                        <h4 className="font-medium text-2xl">{project?.title}</h4>
                        <p>{project?.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Project;