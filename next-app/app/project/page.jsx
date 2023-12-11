import Link from "next/link";

const Project = () => {
    const projects = [
        { id: 1, title: "React JS", description: "The library for web and native user interfaces" },
        { id: 2, title: "NEXT JS", description: "The React Framework for the Web" },
        { id: 3, title: "Node JS", description: "Node.js® is an open-source, cross-platform JavaScript runtime environment." },
        { id: 4, title: "Vue JS", description: "The Progressive React Framework" },
        { id: 5, title: "Angular JS", description: "The web development framework for building the future" },
    ];
    return (
        <section>
            <h2 className="text-4xl font-semibold mb-4">Project Page</h2>
            <div className="grid grid-cols-3 gap-5">
                {projects?.map((project) => (
                    <div key={project?.id} className="flex flex-col items-center justify-center gap-2 p-3 shadow-lg rounded-md min-h-[230px] hover:shadow-xl">
                        <h4 className="font-medium text-2xl">{project?.title}</h4>
                        <p className="text-center p-2">{project?.description}</p>
                        <Link className="btn btn-neutral" href={{ pathname: `project/${project.id}`, query: { title: project.title, desc: project.description } }}>View</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;