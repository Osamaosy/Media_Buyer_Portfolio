import { useState } from 'react';
import { MessageCircle, Mail, Facebook } from 'lucide-react';
import Button from './button';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! I will contact you soon');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a href="https://wa.me/201234567890" className="bg-slate-700 p-8 rounded-lg text-center hover:bg-green-600 transition">
            <MessageCircle size={40} className="mx-auto mb-4 text-green-400" />
            <h3 className="font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-300">Quick & Fast Contact</p>
          </a>
          <a href="mailto:ilham@example.com" className="bg-slate-700 p-8 rounded-lg text-center hover:bg-blue-600 transition">
            <Mail size={40} className="mx-auto mb-4 text-blue-400" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-gray-300">ilham@mediabuyer.com</p>
          </a>
          <a href="https://facebook.com" className="bg-slate-700 p-8 rounded-lg text-center hover:bg-blue-600 transition">
            <Facebook size={40} className="mx-auto mb-4 text-blue-400" />
            <h3 className="font-bold mb-2">Facebook</h3>
            <p className="text-gray-300">@ilhammediacontent</p>
          </a>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-700 p-8 rounded-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-slate-600 text-white px-4 py-3 rounded mb-4 placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-slate-600 text-white px-4 py-3 rounded mb-4 placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-slate-600 text-white px-4 py-3 rounded mb-4 placeholder-gray-400"
          ></textarea>
          <Button className="w-full" onClick={handleSubmit}>Send Message</Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;