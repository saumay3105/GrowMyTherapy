"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatBringsYou: "",
    preferredTime: "",
    agreeToContact: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.whatBringsYou.trim()) {
      newErrors.whatBringsYou = "Please tell us what brings you here";
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime =
        "Please specify your preferred time to be contacted";
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = "You must agree to be contacted to proceed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          whatBringsYou: "",
          preferredTime: "",
          agreeToContact: false,
        });
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Clear error when user starts typing/checking
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const resetForm = () => {
    setSubmitSuccess(false);
    setErrors({});
  };

  return (
    <section className="py-8 md:py-16 bg-gray-100 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Office Information */}
          <div className="space-y-8 lg:space-y-12 xl:pr-8">
            {/* Our Office Section */}
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-700 mb-6 lg:mb-8">
                Our Office
              </h2>
              <div className="space-y-1 text-slate-600 text-base lg:text-lg leading-relaxed">
                <p className="text-lg lg:text-xl font-medium">
                  1287 Maplewood Drive
                </p>
                <p>Los Angeles</p>
                <p> CA 90026</p>
                <button className="mt-4 lg:mt-6 bg-slate-600 hover:bg-slate-700 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-md font-medium transition text-sm lg:text-base">
                  Google Maps
                </button>
              </div>
            </div>

            {/* Hours Section */}
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-700 mb-6 lg:mb-8">
                Hours
              </h2>
              <div className="space-y-2 lg:space-y-3 text-slate-600 text-base lg:text-lg leading-relaxed">
                <p>In-person: Tue & Thu, 10:00 AM–6:00 PM</p>
                <p>Virtual via Zoom: Mon, Wed & Fri, 1:00 PM–5:00 PM</p>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-700 mb-6 lg:mb-8">
                Contact
              </h2>
              <div className="flex items-center text-slate-600 text-base lg:text-lg mb-2">
                <span className="mr-2 lg:mr-3">📞</span>
                <span>(323) 555-0192</span>
              </div>
              <div className="flex items-center text-slate-600 text-base lg:text-lg">
                <span className="mr-2 lg:mr-3">✉️</span>
                <span>serena@blakepsychology.com</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-6 lg:p-8 xl:p-10 max-w-md lg:max-w-lg xl:max-w-xl mx-auto xl:mx-0">
              {submitSuccess ? (
                <div className="text-center py-8 lg:py-12">
                  <div className="text-green-600 text-4xl lg:text-6xl mb-4 lg:mb-6">
                    ✓
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 text-gray-800">
                    Form Submitted Successfully!
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg mb-6">
                    Thank you for reaching out. We will contact you within 24
                    business hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-md font-medium transition text-sm lg:text-base"
                  >
                    Submit Another Form
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-6 lg:mb-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3 lg:mb-4">
                      Get In Touch
                    </h2>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                      Please fill out all the required fields below and we will
                      be in touch with you soon, usually within one business
                      day.
                    </p>
                  </div>

                  <div className="space-y-4 lg:space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`w-full p-3 lg:p-4 border rounded-lg text-gray-700 placeholder-gray-400 text-sm lg:text-base ${
                          errors.name
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300"
                        } focus:border-teal-500 focus:outline-none transition`}
                      />
                      {errors.name && (
                        <p className="text-red-500 mt-1 lg:mt-2 text-xs lg:text-sm flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 234-5678"
                        className={`w-full p-3 lg:p-4 border rounded-lg text-gray-700 placeholder-gray-400 text-sm lg:text-base ${
                          errors.phone
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300"
                        } focus:border-teal-500 focus:outline-none transition`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 mt-1 lg:mt-2 text-xs lg:text-sm flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full p-3 lg:p-4 border rounded-lg text-gray-700 placeholder-gray-400 text-sm lg:text-base ${
                          errors.email
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300"
                        } focus:border-teal-500 focus:outline-none transition`}
                      />
                      {errors.email && (
                        <p className="text-red-500 mt-1 lg:mt-2 text-xs lg:text-sm flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* What Brings You Here Field */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                        What brings you here?{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="whatBringsYou"
                        value={formData.whatBringsYou}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Please tell us what brings you here and how we can help you..."
                        className={`w-full p-3 lg:p-4 border rounded-lg text-gray-700 placeholder-gray-400 resize-none text-sm lg:text-base ${
                          errors.whatBringsYou
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300"
                        } focus:border-teal-500 focus:outline-none transition`}
                      ></textarea>
                      {errors.whatBringsYou && (
                        <p className="text-red-500 mt-1 lg:mt-2 text-xs lg:text-sm flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.whatBringsYou}
                        </p>
                      )}
                    </div>

                    {/* Preferred Time Field */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">
                        Preferred time to reach you{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        placeholder="e.g., Weekday mornings, Tuesday 2-4 PM, etc."
                        className={`w-full p-3 lg:p-4 border rounded-lg text-gray-700 placeholder-gray-400 text-sm lg:text-base ${
                          errors.preferredTime
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300"
                        } focus:border-teal-500 focus:outline-none transition`}
                      />
                      {errors.preferredTime && (
                        <p className="text-red-500 mt-1 lg:mt-2 text-xs lg:text-sm flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.preferredTime}
                        </p>
                      )}
                    </div>

                    {/* Agreement Checkbox */}
                    <div
                      className={`border-2 rounded-lg p-3 lg:p-4 ${
                        errors.agreeToContact
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          name="agreeToContact"
                          className="w-4 h-4 lg:w-5 lg:h-5 mt-0.5 flex-shrink-0"
                          checked={formData.agreeToContact}
                          onChange={handleChange}
                        />
                        <label className="text-gray-700 text-sm lg:text-base leading-relaxed">
                          <span className="text-red-500">*</span> I agree to be
                          contacted by phone, email, or text message regarding
                          my inquiry. I understand that this communication may
                          include appointment scheduling and follow-up
                          information.
                        </label>
                      </div>
                      {errors.agreeToContact && (
                        <p className="text-red-500 mt-2 text-xs lg:text-sm flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.agreeToContact}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-slate-600 hover:bg-slate-700 text-white py-3 lg:py-4 rounded-lg text-base lg:text-lg font-semibold transition disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Form"}
                    </button>

                    <div className="text-center text-xs lg:text-sm text-gray-500 mt-3 lg:mt-4">
                      <p>
                        <span className="text-red-500">*</span> Required fields
                      </p>
                      <p className="mt-2">
                        By submitting this form, you confirm you are 18+ and
                        agree to our{" "}
                        <span className="text-teal-600 underline cursor-pointer">
                          Privacy Policy & Terms of Service
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
