const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
        throw new Error('Failed to fetch data.');
    }
    return res.json();
};
const User = async () => {
    const users = await getData();
    return (
        <div>
            <h1 className="text-4xl font-semibold mb-4">All User</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <td>No.</td>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => {
                            return <tr className="hover" key={user?.id}>
                                <td>{index+1}</td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                            </tr>;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;