import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';
import { ServiceId, BookingFormData } from '../types';
import { Phone, MapPin, Check, Copy, CheckCheck, AlertCircle } from 'lucide-react';

interface BookingSectionProps {
  selectedServiceId: ServiceId | '';
  onServiceSelect: (serviceId: ServiceId | '') => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedServiceId,
  onServiceSelect,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    service: selectedServiceId || 'mobile-car-wash',
    locationOrZip: '',
    vehicleDetails: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync when prop changes
  useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, service: selectedServiceId }));
    }
  }, [selectedServiceId]);

  const validate = () => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.locationOrZip.trim()) {
      newErrors.locationOrZip = 'Please enter your service address or ZIP in Los Angeles';
    }

    if (!formData.vehicleDetails.trim()) {
      newErrors.vehicleDetails = 'Please provide vehicle make, model, or type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setShowSummaryModal(true);
    }
  };

  const getServiceName = (id: string) => {
    const found = SERVICES.find((s) => s.id === id);
    return found ? found.name : id;
  };

  const formattedBookingSummary = `TONY'S CAR CARE - BOOKING REQUEST
----------------------------------------
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'None provided'}
Service: ${getServiceName(formData.service)}
Location / ZIP: ${formData.locationOrZip} (Los Angeles, CA)
Vehicle: ${formData.vehicleDetails}
Notes: ${formData.notes || 'None'}
----------------------------------------
Call or Text to 747-306-0837`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedBookingSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-label="Booking and Contact"
      className="py-20 lg:py-28 bg-[#0A0A0A] border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-white/10">
          <h2
            id="booking-heading"
            className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            BOOK YOUR WASH
          </h2>
          <p className="text-base sm:text-lg text-[#D9D9D9]">
            Professional car care, brought directly to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Phone Priority */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#181818] border border-white/15 rounded-sm">
              <span className="text-[11px] font-mono tracking-widest text-[#AFAFAF] uppercase block mb-2">
                Fastest Response
              </span>
              <h3
                className="text-xl sm:text-2xl font-bold text-white uppercase tracking-normal mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                CALL OR TEXT DIRECTLY
              </h3>
              <p className="text-sm text-[#D9D9D9] mb-6 leading-relaxed">
                For immediate scheduling or same-day mobile car wash availability across Los Angeles, reach out directly by phone.
              </p>

              <a
                id="booking-direct-phone-cta"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-3 w-full bg-white text-black py-4 px-6 text-sm font-black uppercase tracking-widest rounded-sm hover:bg-[#D9D9D9] transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              {/* Official Facebook Link */}
              <a
                id="booking-direct-facebook-cta"
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-3 w-full bg-[#0A0A0A] hover:bg-[#262626] text-white border border-white/25 hover:border-white py-3.5 px-6 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Connect On Facebook</span>
              </a>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-4 text-xs text-[#AFAFAF]">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Serving {BUSINESS_INFO.location} & surrounding neighborhoods</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Direct to your driveway, residence, or workplace</span>
                </div>
              </div>
            </div>

            {/* Honest Operational Notice */}
            <div className="p-5 bg-[#181818]/60 border border-white/10 rounded-sm flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-[#AFAFAF] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#AFAFAF] leading-relaxed">
                <strong className="text-white">Direct Booking Flow:</strong> Submitting this estimate form organizes your appointment details. You can copy or call Tony’s Car Care at {BUSINESS_INFO.phone} to confirm dispatch.
              </p>
            </div>
          </div>

          {/* Right Column: Booking / Estimate Form */}
          <div className="lg:col-span-7 bg-[#181818] border border-white/20 rounded-sm p-6 sm:p-10">
            <form id="booking-request-form" onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#D9D9D9] mb-2"
                  >
                    Your Name <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    id="booking-name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="First & Last Name"
                    className={`w-full bg-[#0A0A0A] border ${
                      errors.name ? 'border-red-500' : 'border-white/20'
                    } focus:border-white rounded-sm px-4 py-3 text-sm text-white placeholder-[#737373] focus:outline-none transition-colors`}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'booking-name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="booking-name-error" className="text-xs text-[#D9D9D9] mt-1 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-xs font-bold uppercase tracking-wider text-[#D9D9D9] mb-2"
                  >
                    Phone Number <span className="text-white">*</span>
                  </label>
                  <input
                    type="tel"
                    id="booking-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="(747) 000-0000"
                    className={`w-full bg-[#0A0A0A] border ${
                      errors.phone ? 'border-red-500' : 'border-white/20'
                    } focus:border-white rounded-sm px-4 py-3 text-sm text-white placeholder-[#737373] focus:outline-none transition-colors`}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="booking-phone-error" className="text-xs text-[#D9D9D9] mt-1 font-medium">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row: Email (Optional) and Service Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="booking-email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#D9D9D9] mb-2"
                  >
                    Email Address <span className="text-[#737373] font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="email"
                    id="booking-email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="email@example.com"
                    className={`w-full bg-[#0A0A0A] border ${
                      errors.email ? 'border-red-500' : 'border-white/20'
                    } focus:border-white rounded-sm px-4 py-3 text-sm text-white placeholder-[#737373] focus:outline-none transition-colors`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'booking-email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="booking-email-error" className="text-xs text-[#D9D9D9] mt-1 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-service"
                    className="block text-xs font-bold uppercase tracking-wider text-[#D9D9D9] mb-2"
                  >
                    Service Needed <span className="text-white">*</span>
                  </label>
                  <select
                    id="booking-service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => {
                      const val = e.target.value as ServiceId;
                      setFormData({ ...formData, service: val });
                      onServiceSelect(val);
                      if (errors.service) setErrors({ ...errors, service: undefined });
                    }}
                    className={`w-full bg-[#0A0A0A] border ${
                      errors.service ? 'border-red-500' : 'border-white/20'
                    } focus:border-white rounded-sm px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
                    aria-required="true"
                    aria-invalid={!!errors.service}
                  >
                    <option value="" disabled>Select a Car Care Service</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id} className="bg-[#181818] text-white">
                        {s.name}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-[#D9D9D9] mt-1 font-medium">{errors.service}</p>
                  )}
                </div>
              </div>

              {/* Row: Location / ZIP and Vehicle Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="booking-location"
                    className="block text-xs font-bold uppercase tracking-wider text-[#D9D9D9] mb-2"
                  >
                    Preferred Location / ZIP Code <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    id="booking-location"
                    name="locationOrZip"
                    value={formData.locationOrZip}
                    onChange={(e) => {
                      setFormData({ ...formData, locationOrZip: e.target.value });
                      if (errors.locationOrZip) setErrors({ ...errors, locationOrZip: undefined });
                    }}
                    placeholder="e.g. 90001, Driveway address, or City area"
                    className={`w-full bg-[#0A0A0A] border ${
                      errors.locationOrZip ? 'border-red-500' : 'border-white/20'
                    } focus:border-white rounded-sm px-4 py-3 text-sm text-white placeholder-[#737373] focus:outline-none transition-colors`}
                    aria-required="true"
                    aria-invalid={!!errors.locationOrZip}
                  />
                  {errors.locationOrZip && (
                    <p className="text-xs text-[#D9D9D9] mt-1 font-medium">{errors.locationOrZip}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-vehicle"
                    className="block text-xs font-bold uppercase tracking-wider text-[#D9D9D9] mb-2"
                  >
                    Vehicle Details <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    id="booking-vehicle"
                    name="vehicleDetails"
                    value={formData.vehicleDetails}
                    onChange={(e) => {
                      setFormData({ ...formData, vehicleDetails: e.target.value });
                      if (errors.vehicleDetails) setErrors({ ...errors, vehicleDetails: undefined });
                    }}
                    placeholder="e.g. 2023 Tesla Model Y / Black Sedan"
                    className={`w-full bg-[#0A0A0A] border ${
                      errors.vehicleDetails ? 'border-red-500' : 'border-white/20'
                    } focus:border-white rounded-sm px-4 py-3 text-sm text-white placeholder-[#737373] focus:outline-none transition-colors`}
                    aria-required="true"
                    aria-invalid={!!errors.vehicleDetails}
                  />
                  {errors.vehicleDetails && (
                    <p className="text-xs text-[#D9D9D9] mt-1 font-medium">{errors.vehicleDetails}</p>
                  )}
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <label
                  htmlFor="booking-notes"
                  className="block text-xs font-bold uppercase tracking-wider text-[#D9D9D9] mb-2"
                >
                  Additional Details <span className="text-[#737373] font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  id="booking-notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Gate code, parking specifics, preferred morning/afternoon time, or focus areas..."
                  className="w-full bg-[#0A0A0A] border border-white/20 focus:border-white rounded-sm px-4 py-3 text-sm text-white placeholder-[#737373] focus:outline-none transition-colors"
                />
              </div>

              {/* Primary Form CTA */}
              <div>
                <button
                  type="submit"
                  id="booking-submit-btn"
                  className="w-full bg-white text-black py-4 px-8 text-sm font-black uppercase tracking-widest rounded-sm hover:bg-[#D9D9D9] active:bg-[#AFAFAF] transition-all duration-200 shadow-md cursor-pointer text-center"
                >
                  BOOK YOUR WASH
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Booking Summary Confirmation Modal */}
      {showSummaryModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-booking-title"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-[#181818] border border-white/25 rounded-sm max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#AFAFAF] uppercase block mb-1">
                Booking Details Prepared
              </span>
              <h3
                id="modal-booking-title"
                className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                CONFIRM YOUR MOBILE WASH
              </h3>
              <p className="text-xs text-[#D9D9D9] mt-2">
                Your request details are organized below. To confirm dispatch time with Tony’s Car Care, call or send these details directly.
              </p>
            </div>

            {/* Summary Details Box */}
            <div className="p-4 bg-[#0A0A0A] border border-white/15 rounded-sm space-y-2 text-xs font-mono text-[#D9D9D9]">
              <div><strong className="text-white">Customer:</strong> {formData.name}</div>
              <div><strong className="text-white">Phone:</strong> {formData.phone}</div>
              {formData.email && <div><strong className="text-white">Email:</strong> {formData.email}</div>}
              <div><strong className="text-white">Service:</strong> {getServiceName(formData.service)}</div>
              <div><strong className="text-white">Location:</strong> {formData.locationOrZip}</div>
              <div><strong className="text-white">Vehicle:</strong> {formData.vehicleDetails}</div>
              {formData.notes && <div><strong className="text-white">Notes:</strong> {formData.notes}</div>}
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <a
                id="modal-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full bg-white text-black py-3 px-4 text-xs font-black uppercase tracking-widest rounded-sm hover:bg-[#D9D9D9] transition-colors text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone} to Confirm Now</span>
              </a>

              <button
                id="modal-copy-btn"
                type="button"
                onClick={copyToClipboard}
                className="flex items-center justify-center gap-2 w-full bg-[#0A0A0A] text-white border border-white/20 hover:border-white py-3 px-4 text-xs font-bold uppercase tracking-widest rounded-sm transition-colors cursor-pointer"
              >
                {copied ? <CheckCheck className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Details Copied to Clipboard!' : 'Copy Details to Text/SMS'}</span>
              </button>

              <button
                id="modal-close-btn"
                type="button"
                onClick={() => setShowSummaryModal(false)}
                className="w-full text-center text-xs text-[#AFAFAF] hover:text-white py-2 transition-colors cursor-pointer"
              >
                Close & Return to Form
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
