import AddUser from "@/components/AddUser";
import RenderUser from "@/components/RenderUser";

const page = () => {
  return (
    <>
      <h1 className="mb-4 text-4xl font-semibold">Home Page</h1>
      <AddUser />
      <RenderUser />
    </>
  );
};

export default page;