'use client';

import { Instagram  } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Resend() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carBrand: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Odesílání...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Děkujeme, zpráva byla odeslána.');
      setFormData({ name: '', email: '', phone: '', carBrand: '', message: '' });
    } else {
      setStatus('Chyba při odesílání.');
    }
  };

  return (
    <div id='contact' className="bg-black text-white py-16 px-4">
      <div className="max-w-11/12 mx-auto flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <div>
            <h6 className="text-3xl mb-4">Kontaktujte mě</h6>
            <p>Máte zájem o moje služby nebo potřebujete více informací? Neváhejte mě kontaktovat.</p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-lg font-medium">Telefon</p>
              <p className="text-gray-400">+420 123 456 789</p>
            </div>
            <div>
              <p className="text-lg font-medium">Email</p>
              <p className="text-gray-400">info@mldetailing.cz</p>
            </div>
            <div>
              <p className="text-lg font-medium">Adresa</p>
              <p className="text-gray-400">Náměstí Svobody 1, Olomouc</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-[var(--card-gray)] p-6 rounded-xl shadow-lg">
          <p className="text-xl font-medium mb-4">Nezávazná konzultace</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Jméno a příjmení"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-[var(--bg-gray text-white rounded-md border border-neutral-700"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-[var(--bg-gray text-white rounded-md border border-neutral-700"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-[var(--bg-gray text-white rounded-md border border-neutral-700"
              />
            </div>

            <div>
              <input
                type="text"
                name="carBrand"
                placeholder="Značka vozidla"
                value={formData.carBrand}
                onChange={handleChange}
                className="w-full p-3 bg-[var(--bg-gray text-white rounded-md border border-neutral-700"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Zpráva"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 bg-[var(--bg-gray text-white rounded-md border border-neutral-700"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--modra)] hover:bg-[var(--modra-hover)] text-white p-3 rounded-md transition-colors duration-200"
            >
              Odeslat
            </button>

            {status && <p className="text-sm pt-2 text-gray-400">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
