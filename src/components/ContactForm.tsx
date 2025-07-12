import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch('https://formspree.io/f/mayrjzqg', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (res.ok) setStatus('success');
    else setStatus('error');
    form.reset();
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input name="name" required placeholder="Name" className="p-2 rounded border" />
      <input name="email" type="email" required placeholder="Email" className="p-2 rounded border" />
      <textarea name="message" required placeholder="Message" className="p-2 rounded border min-h-[100px]" />
      <button type="submit" className="bg-mainblue text-white py-2 rounded hover:bg-mainblue/90">Send</button>
      {status === 'success' && <div className="text-green-600">Message sent! Thank you.</div>}
      {status === 'error' && <div className="text-red-600">Something went wrong. Try again.</div>}
    </form>
  );
}
