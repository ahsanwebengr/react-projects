import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import MovieComponent from './MovieComponent';
import axios from 'axios';

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [endMessage, setEndMessage] = useState(false);

  const getCardData = async () => {
    const res = await axios(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    setCard(prev => [...prev, ...res.data]);
    if (page === 10) {
      setEndMessage(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage(prev => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handelInfiniteScroll);
    return () => window.removeEventListener('scroll', handelInfiniteScroll);
  }, []);

  return (
    <>
      <MovieComponent movieInfo={card} />
      {loading && <Loading />}
      {endMessage && !loading && (
        <h2 className='text-4xl font-bold text-center'>All Set ✅</h2>
      )}
    </>
  );
};

export default Home;
