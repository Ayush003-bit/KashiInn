
  import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: '',
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const inquiryTypes = [
    { value: 'reservation', label: 'Room Reservation' },
    { value: 'event', label: 'Event & Wedding Planning' },
    { value: 'corporate', label: 'Corporate Booking' },
    { value: 'concierge', label: 'Concierge Services' },
    { value: 'special', label: 'Special Requests' },
    { value: 'general', label: 'General Inquiry' }
  ];

  const guestOptions = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3-4', label: '3-4 Guests' },
    { value: '5+', label: '5+ Guests' }
  ];

  const handleChange = (e) => {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData?.lastName?.trim()) newErrors.lastName = 'Last name is required';

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData?.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';

    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        message: '',
        newsletter: false
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section className="py-14 md:py-20 lg:py-24 bg-gradient-to-br from-background via-background to-amber-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div className="text-center space-y-4 md:space-y-5 mb-10 md:mb-14">
            <h2 className="font-headline text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Send Us a Message
            </h2>
            <p className="font-poppins text-sm md:text-base lg:text-lg text-muted-foreground">
              Fill out the form below and our team will respond you shortly
            </p>
          </div>

          {/* Success Alert */}
          {submitSuccess && (
            <div className="mb-8 p-5 md:p-6 bg-green-50 border border-green-200 rounded-xl flex items-start space-x-3 shadow-md animate-fadeIn">
              <Icon name="CheckCircle2" size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-green-700">Message Sent Successfully!</p>
                <p className="text-sm text-green-600">We'll get back to you shortly.</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-10 space-y-6 font-poppins md:space-y-8 border border-border shadow-2xl transition-all duration-300 hover:shadow-amber-200"
          >

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <Input {...{ label: "First Name", name: "firstName", value: formData.firstName, onChange: handleChange, error: errors.firstName }} />
              <Input {...{ label: "Last Name", name: "lastName", value: formData.lastName, onChange: handleChange, error: errors.lastName }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <Input {...{ label: "Email Address", type: "email", name: "email", value: formData.email, onChange: handleChange, error: errors.email }} />
              <Input {...{ label: "Phone Number", name: "phone", value: formData.phone, onChange: handleChange, error: errors.phone }} />
            </div>

            <Select
              label="Inquiry Type"
              options={inquiryTypes}
              value={formData.inquiryType}
              onChange={(value) => handleSelectChange('inquiryType', value)}
              error={errors.inquiryType}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              <Input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} />
              <Input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} />
              <Select options={guestOptions} value={formData.guests} onChange={(v) => handleSelectChange('guests', v)} />
            </div>

            {/* Textarea */}
            <div>
              <label className="block text-sm font-medium mb-2">Your Message *</label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } bg-white/70 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300 resize-none`}
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <Checkbox
              label="Subscribe to our newsletter for exclusive offers and updates"
              checked={formData.newsletter}
              onChange={handleChange}
              name="newsletter"
            />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                size="lg"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                className="bg-gradient-to-r from-amber-600 to-amber-700 cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 text-white"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                iconName="Phone"
                className="hover:bg-amber-50 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Call Instead
              </Button>
            </div>

            <p className="text-xs md:text-sm text-muted-foreground text-center">
              By submitting this form, you agree to our Privacy Policy and Terms of Service
            </p>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;