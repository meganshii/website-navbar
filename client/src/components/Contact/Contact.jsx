import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ContactForm = ({ isVisible, onClose }) => {
    const formRef = useRef(null);

    useEffect(() => {
        if (isVisible) {
            gsap.fromTo(
                formRef.current,
                { y: '-100%', opacity: 0 },
                { y: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
            );
        } else {
            gsap.to(formRef.current, { y: '-100%', opacity: 0, duration: 0.5, ease: 'power3.in' });
        }
    }, [isVisible]);

    return (
        <div
            className={`fixed inset-0 bg-opacity-50 flex justify-end items-start pt-20 pr-0 transition-transform transform ${isVisible ? 'block' : 'hidden'
                }`}
            style={{ transitionDuration: '0.5s' }}
        >
            <div
                ref={formRef}
                className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md"
            >
                <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-6">Share a few details and we'll get right back to you.</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="phone"
                        placeholder="Company"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <textarea
                        placeholder="Project Info"
                        className="w-full p-2 border border-gray-300 rounded h-32"
                    ></textarea>
                    <button className="w-full bg-black text-white py-2 rounded">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
