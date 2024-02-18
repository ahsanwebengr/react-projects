'use client';
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import SearchBar from '@/components/SearchBar';
import axios from 'axios';

const page = () => {
    const [users, setUsers] = useState({});
    const [search, setSearch] = useState('ahsanwebengr');

    useEffect(() => {
        const getUsers = async () => {
            try {
                const resp = await axios.get(`https://api.github.com/users/${search}`);
                setUsers(resp.data);
                console.log(resp.data);
            } catch (error) {
                console.log(error);
            }
        };

        getUsers();
    }, [search]);

    useEffect(() => {
        console.log(users, 'updated users');
    }, [users]);


    return (
        <div className='min-h-screen flex items-center justify-center flex-col'>
            <SearchBar searchProps={{ search, setSearch }} />
            <Card users={users} />
        </div>
    );
};

export default page;