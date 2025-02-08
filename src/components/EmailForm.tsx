'use client';

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: formData.name,
          email: formData.email,
          phone: formData.phone,
        //   message: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
          message: `${formData.message}`,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '' , message: '' });
      } else {
        const result = await response.json();
        alert(`Failed to send message: ${result.error}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[500px] h-full max-w-md mx-auto dark:bg-[#1F2937] dark:text-white bg-white p-8 rounded-lg shadow-lg">
      
      <div className="mb-6">
    <h1 className='text-2xl font-bold mb-3'>
      Contact
    </h1>
        <Label htmlFor="name" className="block text-gray-700 dark:text-white dark:text-white font-medium mb-2">Name</Label>
        <Input
          type="text"
          id="name"

          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <Label htmlFor="email" className="block text-gray-700 dark:text-white font-medium mb-2">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <Label htmlFor="email" className="block text-gray-700 dark:text-white font-medium mb-2">Phone</Label>
        <Input
          type="phone"
          id="phone"
          name="phone"
          typeof='number'
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <Label htmlFor="message" className="block text-gray-700 dark:text-white font-medium mb-2">Message</Label>
        <Textarea
          id="message"
          name="message"
className='h-[70px]'
          value={formData.message}
          onChange={handleChange}
          required
        ></Textarea>
      </div>
      
      <button type='submit' className="bg-[#2DB188] text-white px-6 py-2 rounded-lg hover:bg-[#258a6a] transition-colors">
Send         </button>

    </form>
  );
}