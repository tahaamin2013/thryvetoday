'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
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
                firstname: formData.firstname,
                lastname: formData.lastname,
              email: formData.email,
              phone: formData.phone,
            //   message: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
              message: `${formData.message}`,
            }),
          });
    
          if (response.ok) {
            alert('Message sent successfully!');
            setFormData({ firstname: '',lastname: '', email: '', phone: '' , message: '' });
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
    <Card className="bg-background dark:bg-zinc-950 text-foreground rounded-3xl border border-border">
      <CardHeader className="space-y-1 mb-2">
        <Mail className="h-5 w-5 mb-2 text-primary" />
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold">Contact sales</h2>
        </div>
        <p className="text-muted-foreground">
          Talk to our team about <br /> your enterprise needs.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstname"  // Add this line
                placeholder="Jonathan"
                value={formData.firstname}
                onChange={handleChange}
                className="bg-muted/50 dark:bg-zinc-900 border-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastname"  // Add this line
                placeholder="Jones"
                value={formData.lastname}
                onChange={handleChange}
                className="bg-muted/50 dark:bg-zinc-900 border-input"
              />
            </div>
          </div>


          <div className="grid gap-4 mb-5">
            <div className="space-y-2">
              <Label htmlFor="email"> Email</Label>
              <Input
  id="email"
  name="email"  // Add this line
  type="email"
  placeholder="jonathan@gmail.com"
  value={formData.email}
  onChange={handleChange}
  className="bg-muted/50 dark:bg-zinc-900 border-input"
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
      
          </div>

          <Label htmlFor="message" className="mt-6">How can we help?</Label>
          <Textarea
  id="message"
  name="message"  // Add this line
  placeholder="Tell us more about your enterprise needs."
  className="min-h-[100px] max-h-[150px] bg-muted/50 dark:bg-zinc-900 border-input"
  value={formData.message}
  onChange={handleChange}
/>


          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-5"
          >
Send
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}