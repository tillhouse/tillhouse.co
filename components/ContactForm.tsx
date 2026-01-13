"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      // Web3Forms integration
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...formData,
          subject: `New message from ${formData.name} via tillhouse.co`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thanks for reaching out! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or email me directly.",
      });
    }
  };

  if (status.type === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
        <h3 className="text-lg font-semibold text-green-900">Message Sent!</h3>
        <p className="mt-2 text-green-700">{status.message}</p>
        <button
          onClick={() => setStatus({ type: "idle" })}
          className="mt-4 text-green-600 hover:text-green-800 underline text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status.type === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{status.message}</p>
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Company <span className="text-gray-400">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
          placeholder="Your company"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
          placeholder="Tell me about your project or how I can help..."
        />
      </div>

      <Button
        type="submit"
        disabled={status.type === "loading"}
        className="w-full"
      >
        {status.type === "loading" ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={18} className="ml-2" />
          </>
        )}
      </Button>
    </form>
  );
}

