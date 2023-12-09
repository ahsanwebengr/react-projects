import AddUser from "@/components/AddUser";
import RenderUser from "@/components/RenderUser";

const page = () => {
  return (
    <div className="max-w-6xl mx-auto my-6 container">
      <h1 className="mb-4 text-4xl font-semibold">Home Page</h1>
      <AddUser />
      <RenderUser />
    </div>
  );
};

export default page;