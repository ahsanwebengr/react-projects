'use client';
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import SearchBar from '@/components/SearchBar';
import axios from 'axios';

const Page = () => {
    const [users, setUsers] = useState({});
    const [search, setSearch] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const searchUser = async () => {
        try {
            const resp = await axios.get(`https://api.github.com/users/${search}`);
            setUsers(resp.data);
            setErrorMessage(null);
        } catch (error) {
            if (error.response.status === 404) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Unexpected error: ' + error.response.data.message);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchUser();
        setSearch('');
    };

    useEffect(() => {
        // console.log(users, 'users');
    }, [users]);

    return (
        <div className='min-h-screen flex items-center justify-center flex-col'>
            <SearchBar searchProps={{ search, setSearch, handleSubmit }} />

            <Card users={users} errorMessage={errorMessage} />
        </div>
    );
};

export default Page;
