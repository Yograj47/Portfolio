import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
    name: z.string().min(3, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().max(1000, "Message cannot exceed 1000 characters"),
});

function Contact() {
    const [statusMessage, setStatusMessage] = useState("");

    const { register, handleSubmit, reset } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = async (data) => {
        try {
            const res = await fetch(
                "http://localhost:5000/api/v1/contact/create"
                , {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
            );

            if (res.ok) {
                setStatusMessage("✅ Message sent successfully!");
                reset();
            } else {
                setStatusMessage("❌ Failed to send message. Please try again.");
            }
        } catch (error) {
            setStatusMessage("⚠️ Network error. Please try again later.");
        }

        setTimeout(() => setStatusMessage(""), 3000); // clear after 3s
    };

    return (
        <section
            id="contact"
            className="py-20 px-[10%] bg-gradient-to-r from-[var(--header-bg)] to-[var(--text)] text-white"
        >
            <div className="flex flex-wrap justify-between items-center gap-12">
                {/* Contact Info */}
                <div className="flex-1 max-w-[400px] text-left">
                    <h2 className="text-3xl mb-5 text-[var(--primary)]">Get in Touch</h2>
                    <p className="text-lg mb-2 flex items-center">
                        <Mail className="mr-3 text-[var(--primary)]" size={20} />
                        yograjrijal926@email.com
                    </p>
                    <p className="text-lg mb-2 flex items-center">
                        <Phone className="mr-3 text-[var(--primary)]" size={20} />
                        +977-9860256338
                    </p>
                    <p className="text-lg mb-5 flex items-center">
                        <MapPin className="mr-3 text-[var(--primary)]" size={20} />
                        Kathmandu, Nepal
                    </p>

                    {/* Social Links */}
                    <div className="mt-4 flex items-center space-x-4">
                        <a
                            href="https://github.com/Yograj47"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white text-2xl hover:text-[#ffcc33] transition"
                        >
                            <Github size={28} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yograj-rijal-b84893374/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white text-2xl hover:text-[#ffcc33] transition"
                        >
                            <Linkedin size={28} />
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex-1 max-w-[500px] bg-[#121212] p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <input
                            {...register("name")}
                            placeholder="Your Name"
                            required
                            className="w-full p-3 bg-[#222] border-none rounded-md text-white placeholder-gray-400 outline-1 outline-[#444] focus:outline-[var(--primary)]"
                        />
                        <input
                            {...register("email")}
                            placeholder="Your Email"
                            required
                            className="w-full p-3 bg-[#222] border-none rounded-md text-white placeholder-gray-400 outline-1 outline-[#444] focus:outline-[var(--primary)]"
                        />
                        <input
                            {...register("subject")}
                            placeholder="Subject"
                            required
                            className="w-full p-3 bg-[#222] border-none rounded-md text-white placeholder-gray-400  outline-1 outline-[#444] focus:outline-[var(--primary)]"
                        />
                        <textarea
                            {...register("message")}
                            placeholder="Message"
                            rows={5}
                            required
                            className="w-full p-3 bg-[#222] border-none rounded-md text-white placeholder-gray-400 outline-1 outline-[#444] focus:outline-[var(--primary)]"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-[var(--primary)] cursor-pointer text-white text-lg p-3 rounded-md transition hover:bg-[var(--primary-hover)]"
                        >
                            Send Message
                        </button>
                    </form>

                    {statusMessage && (
                        <p className="mt-4 text-center text-sm text-[var(--primary)]">
                            {statusMessage}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Contact;
