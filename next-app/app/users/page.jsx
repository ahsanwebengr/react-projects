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
            <h1>All User</h1>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => {
                        return <tr key={user?.id}>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                        </tr>;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default User;