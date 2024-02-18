'use client';
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import SearchBar from '@/components/SearchBar';
import axios from 'axios';

const Page = () => {
    const [users, setUsers] = useState({});
    const [search, setSearch] = useState('ahsanwebengr');

    const searchUser = async () => {
        try {
            const resp = await axios.get(`https://api.github.com/users/${search}`);
            setUsers(resp.data);
            console.log(resp.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchUser();
        setSearch('');
    };

    useEffect(() => {
        console.log(users, 'updated users');
    }, [users]);

    return (
        <div className='min-h-screen flex items-center justify-center flex-col'>
            <SearchBar searchProps={{ search, setSearch, handleSubmit }} />

            <Card users={users} />
        </div>
    );
};

export default Page;
