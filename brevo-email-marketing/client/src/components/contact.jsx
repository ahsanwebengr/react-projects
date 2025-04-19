import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus(res.data.message);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setStatus(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className='max-w-lg mx-auto p-6 bg-white rounded shadow'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <h2 className='text-2xl font-semibold'>Contact Us</h2>
        <input
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          placeholder='First Name'
          required
          className='border p-2 rounded'
        />
        <input
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          placeholder='Last Name'
          required
          className='border p-2 rounded'
        />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
          required
          className='border p-2 rounded'
        />
        <input
          type='text'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
          placeholder='Subject'
          required
          className='border p-2 rounded'
        />
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Message'
          rows={5}
          required
          className='border p-2 rounded'
        />
        <button
          type='submit'
          className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'
        >
          Send Message
        </button>
        {status && <p className='text-sm text-gray-700'>{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
