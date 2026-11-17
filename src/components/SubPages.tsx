import React, { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, Mail, MapPin, Search } from 'lucide-react';
import {
  CAREER_OPENINGS,
  CareerOpening,
  EVENTS_GALLERY,
  MEDIA_ITEMS,
} from '../data/way2newsData';

interface BackBarProps {
  title: string;
  onBackHome: () => void;
}

const SubPageHeader: React.FC<BackBarProps> = ({ title, onBackHome }) => (
  <div className="border-b border-[#393939] bg-[#1F2020] pb-12 pt-[110px] text-white">
    <div className="mx-auto max-w-[1300px] px-4">
      <button
        type="button"
        onClick={onBackHome}
        className="font-roboto-condensed mb-4 inline-flex cursor-pointer items-center gap-2 text-sm uppercase tracking-wide text-[#ffb327] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back To Home
      </button>
      <h1 className="font-roboto-condensed text-3xl font-bold uppercase tracking-tight md:text-4xl">
        {title}
      </h1>
    </div>
  </div>
);

export const CareersPage: React.FC<{ onBackHome: () => void }> = ({ onBackHome }) => {
  const [query, setQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<CareerOpening | null>(null);
  const [appliedRoles, setAppliedRoles] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CAREER_OPENINGS;
    return CAREER_OPENINGS.filter(
      (job) =>
        job.title.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-[#f8f8f8]">
      <SubPageHeader title="Together at Way2News — Careers" onBackHome={onBackHome} />

      <div className="mx-auto max-w-[1300px] px-4 py-12">
        <div className="mb-10 rounded border border-neutral-200 bg-white p-8">
          <p className="max-w-4xl text-base leading-relaxed text-[#333]">
            Welcoming you to be a part of India&apos;s leading Short News App, Way2News and work with
            the most talented people from across all spheres. We are changing the face of the media
            industry with our short news initiative. Work with professionals and experienced people
            in taking the company to dizzying heights.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-roboto-condensed text-2xl font-bold uppercase text-[#191919]">
              Job Openings ({filtered.length})
            </h2>
            <div className="relative w-full sm:w-80">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search roles or locations..."
                className="w-full rounded border border-neutral-300 bg-white py-2 pl-9 pr-3 text-sm text-[#191919] focus:border-[#ffb327] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded border border-neutral-200 bg-white p-10 text-center text-neutral-600">
            No openings match &ldquo;{query}&rdquo;. Try clearing your search filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filtered.map((job) => {
              const isApplied = appliedRoles.includes(job.id);
              return (
                <div
                  key={job.id}
                  className="flex flex-col justify-between rounded border border-neutral-200 bg-white p-6"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-roboto-condensed text-xl font-bold text-[#191919]">
                        {job.title}
                      </h3>
                      {job.posted && (
                        <span className="shrink-0 text-xs text-neutral-500">{job.posted}</span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-neutral-600">
                      Experience: {job.experience} · Openings: {job.openings} · Location:{' '}
                      {job.location} · {job.employmentType}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-[#333]">{job.description}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
                    <a
                      href={`mailto:hr@way2news.com?subject=${encodeURIComponent(
                        `Application for ${job.title}`
                      )}`}
                      className="text-sm font-medium text-[#191919] underline hover:text-[#ffb327]"
                    >
                      hr@way2news.com
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedRole(job)}
                      className="font-roboto-condensed cursor-pointer rounded bg-[#191919] px-4 py-2 text-xs font-bold uppercase text-white transition-colors hover:bg-[#ffb327] hover:text-black"
                    >
                      {isApplied ? 'Application Sent' : 'Read More & Apply'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {selectedRole && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedRole(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-lg rounded bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-roboto-condensed text-2xl font-bold text-[#191919]">
              {selectedRole.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              {selectedRole.location} · {selectedRole.experience} · {selectedRole.employmentType}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#333]">{selectedRole.description}</p>
            <p className="mt-4 text-sm text-[#333]">
              Send your resume to{' '}
              <a
                href={`mailto:hr@way2news.com?subject=${encodeURIComponent(
                  `Application: ${selectedRole.title}`
                )}`}
                className="font-semibold text-[#191919] underline"
              >
                hr@way2news.com
              </a>{' '}
              or confirm your interest below.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className="cursor-pointer rounded border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setAppliedRoles((prev) =>
                    prev.includes(selectedRole.id) ? prev : [...prev, selectedRole.id]
                  );
                  setSelectedRole(null);
                }}
                className="font-roboto-condensed cursor-pointer rounded bg-[#ffb327] px-5 py-2 text-sm font-bold uppercase text-black hover:bg-[#e59e1c]"
              >
                Confirm Interest
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export const EventsPage: React.FC<{ onBackHome: () => void }> = ({ onBackHome }) => {
  return (
    <main className="min-h-screen bg-[#f8f8f8]">
      <SubPageHeader title="Culture & Events" onBackHome={onBackHome} />

      <div className="mx-auto max-w-[1300px] px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {EVENTS_GALLERY.map((ev) => (
            <div key={ev.year} className="overflow-hidden rounded border border-neutral-200 bg-white">
              <div className="border-b border-neutral-200 bg-[#191919] px-5 py-3">
                <h2 className="font-roboto-condensed text-2xl font-bold text-[#ffb327]">
                  {ev.year}
                </h2>
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={ev.image}
                  alt={ev.caption}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="p-5 text-sm text-[#333]">{ev.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export const MediaArchivePage: React.FC<{ onBackHome: () => void }> = ({ onBackHome }) => {
  return (
    <main className="min-h-screen bg-[#191919] text-white">
      <SubPageHeader title="As Featured In — All Media Coverage" onBackHome={onBackHome} />

      <div className="mx-auto max-w-[1300px] px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {MEDIA_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded border border-[#333] bg-[#202020] p-6 no-underline transition-colors hover:border-[#ffb327] sm:flex-row sm:items-start"
            >
              <img
                src={item.logo}
                alt={item.author}
                className="shrink-0 border border-white bg-white/5"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-roboto-condensed text-xl font-normal text-white group-hover:text-[#ffb327]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-[#b0b0b0]">
                  {item.author} · {item.date}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">{item.summary}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export const ContactPage: React.FC<{ onBackHome: () => void }> = ({ onBackHome }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill out your name, email address, and message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f8f8f8]">
      <SubPageHeader title="Contact Us & Grievance Redressal" onBackHome={onBackHome} />

      <div className="mx-auto max-w-[1300px] px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded border border-neutral-200 bg-white p-6">
              <h2 className="font-roboto-condensed text-2xl font-bold uppercase text-[#191919]">
                Reach Way2News
              </h2>

              <div className="mt-5 space-y-5 text-sm">
                <div>
                  <p className="font-roboto-condensed text-xs font-bold uppercase text-neutral-500">
                    For Any Support / Any Other Queries Write To
                  </p>
                  <a
                    href="mailto:reach@way2news.com"
                    className="mt-1 inline-flex items-center gap-2 font-medium text-[#191919] hover:text-[#ffb327]"
                  >
                    <Mail className="h-4 w-4" />
                    reach@way2news.com
                  </a>
                </div>

                <div>
                  <p className="font-roboto-condensed text-xs font-bold uppercase text-neutral-500">
                    For Career Opportunities, Please Email Us
                  </p>
                  <a
                    href="mailto:hr@way2news.com"
                    className="mt-1 inline-flex items-center gap-2 font-medium text-[#191919] hover:text-[#ffb327]"
                  >
                    <Mail className="h-4 w-4" />
                    hr@way2news.com
                  </a>
                </div>

                <div>
                  <p className="font-roboto-condensed text-xs font-bold uppercase text-neutral-500">
                    Contact Our Founder &amp; CEO
                  </p>
                  <a
                    href="mailto:raju@way2news.com"
                    className="mt-1 inline-flex items-center gap-2 font-medium text-[#191919] hover:text-[#ffb327]"
                  >
                    <Mail className="h-4 w-4" />
                    raju@way2news.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded border border-neutral-200 bg-white p-6">
              <h3 className="font-roboto-condensed text-xl font-bold uppercase text-[#191919]">
                Address
              </h3>
              <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-[#333]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ffb327]" />
                <span>
                  WAY2NEWS PRIVATE LIMITED
                  <br />
                  796/b, SV Square, 2nd Floor, Rd Number 36, Jubilee Hills, Hyderabad, Telangana
                </span>
              </p>
              <div className="mt-4 overflow-hidden rounded border border-neutral-200">
                <img
                  src="/images/location-map.png"
                  alt="Way2News Hyderabad Office Location"
                  className="h-auto w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="rounded border border-neutral-200 bg-white p-6">
              <h3 className="font-roboto-condensed text-xl font-bold uppercase text-[#191919]">
                Readers&apos; Grievances
              </h3>
              <p className="mt-2 text-sm text-[#333]">
                Please fill out all the details of the grievance redressal form or write directly to
                our Grievance Officer:
              </p>
              <p className="mt-3 text-sm font-semibold text-[#191919]">Mr. C P N Karthik</p>
              <a
                href="mailto:grievance@way2news.com"
                className="text-sm font-medium text-[#37a3ff] hover:underline"
              >
                grievance@way2news.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded border border-neutral-200 bg-white p-8">
              <h2 className="font-roboto-condensed text-2xl font-bold uppercase text-[#191919]">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="mt-6 rounded border border-emerald-200 bg-emerald-50 p-6 text-[#191919]">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                    <h3 className="font-roboto-condensed text-xl font-bold">
                      Thank You for reaching us
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-neutral-700">
                    Your form submitted successfully! Your information has been recorded and our team
                    will contact you soon for further assistance.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="font-roboto-condensed mt-4 cursor-pointer rounded bg-[#191919] px-4 py-2 text-xs font-bold uppercase text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  {error && (
                    <div
                      role="alert"
                      className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                    >
                      {error}
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-[#333]">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="mt-1.5 w-full rounded border border-neutral-300 px-3.5 py-2.5 text-sm text-[#191919] focus:border-[#ffb327] focus:outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-[#333]">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1.5 w-full rounded border border-neutral-300 px-3.5 py-2.5 text-sm text-[#191919] focus:border-[#ffb327] focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-[#333]"
                    >
                      Subject / Inquiry Type
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="mt-1.5 w-full rounded border border-neutral-300 px-3.5 py-2.5 text-sm text-[#191919] focus:border-[#ffb327] focus:outline-none"
                      placeholder="Support, Advertising, Press, or Grievance"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[#333]"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="mt-1.5 w-full rounded border border-neutral-300 px-3.5 py-2.5 text-sm text-[#191919] focus:border-[#ffb327] focus:outline-none"
                      placeholder="Write your query or grievance details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="font-roboto-condensed cursor-pointer rounded bg-[#191919] px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-[#ffb327] hover:text-black"
                  >
                    Submit Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
