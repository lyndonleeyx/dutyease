import React from 'react';
import { ArrowRight, Box, DollarSign, Users, TrendingUp, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Box className="h-8 w-8 text-[#1a2b4b]" />
              <span className="ml-2 text-2xl font-bold text-[#1a2b4b]">DutyEase</span>
            </div>
            <button className="bg-[#ff6b2b] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#e55a1a] transition-colors">
              Book a Discovery Call
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Enhanced Background Design */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-[#1a2b4b]/5 overflow-hidden">
        {/* Background Design Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large geometric shapes */}
          <div className="absolute transform -rotate-12 -left-1/4 -top-1/4">
            <div className="w-[600px] h-[600px] bg-[#1a2b4b]/[0.03] rounded-3xl border border-[#1a2b4b]/10"></div>
          </div>
          <div className="absolute transform rotate-12 -right-1/4 top-1/4">
            <div className="w-[500px] h-[500px] bg-[#ff6b2b]/[0.03] rounded-3xl border border-[#ff6b2b]/10"></div>
          </div>

          {/* Shipping Container Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-24 h-16 bg-[#1a2b4b]/[0.05] rounded-lg border border-[#1a2b4b]/10 transform -rotate-6"></div>
            <div className="absolute bottom-32 right-16 w-32 h-20 bg-[#ff6b2b]/[0.05] rounded-lg border border-[#ff6b2b]/10 transform rotate-12"></div>
            <div className="absolute top-1/2 left-1/3 w-28 h-16 bg-[#1a2b4b]/[0.04] rounded-lg border border-[#1a2b4b]/10 transform -rotate-3"></div>
            <div className="absolute top-1/4 right-1/4 w-20 h-12 bg-[#ff6b2b]/[0.04] rounded-lg border border-[#ff6b2b]/10 transform rotate-6"></div>
          </div>

          {/* Enhanced Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #1a2b4b08 1px, transparent 1px),
              linear-gradient(to bottom, #1a2b4b08 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>

          {/* Dotted Overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #1a2b4b10 2px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#1a2b4b] mb-6">
             Differentiate Your Customs Brokerage with Risk‑Free Duty Advances
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Tariffs keep climbing — and your clients need breathing room. With DutyEase, you front duties on their behalf, unlock immediate cash flow, and earn a new revenue stream — without touching your working capital. 
            </p>
            <button className="bg-[#ff6b2b] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e55a1a] transition-colors inline-flex items-center">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="bg-[#1a2b4b]/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#1a2b4b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">Win More Shipper Accounts</h3>
              <p className="text-gray-600">Stand out in RFPs by bundling duty advances—so importers pick you over the competition.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#1a2b4b]/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-[#1a2b4b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">Reduce Tariff Pressure</h3>
              <p className="text-gray-600">Turn volatile duties into predictable payments, so your clients can plan cash flow with confidence.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#1a2b4b]/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-[#1a2b4b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">Preserve Your Working Capital</h3>
              <p className="text-gray-600">We cover duty payments; you keep your balance sheet lean and your credit lines intact.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#1a2b4b]/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-[#1a2b4b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">Unlock a Recurring Revenue Stream</h3>
              <p className="text-gray-600">Earn fees on every shipment you advance—no additional staff or systems required.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#1a2b4b] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-gray-600 mb-6">"DutyEase transformed duty advancement from a courtesy we reluctantly offered to a profit center—adding 15% more margin per load."</p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80"
                  alt="Customer"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold text-[#1a2b4b]">Michael Chen</p>
                  <p className="text-gray-500">CEO, Global Trade Solutions</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-gray-600 mb-6">"Since integrating DutyEase, our client retention jumped 20%. Our customers appreciate more predictable cash flow."</p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96&q=80"
                  alt="Customer"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold text-[#1a2b4b]">Sarah Martinez</p>
                  <p className="text-gray-500">Operations Director, FastFreight</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#1a2b4b] to-[#2a3b5b] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Grow Your Brokerage Revenue?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          <div className="flex justify-center">
          Schedule a 15‑minute call and see how DutyEase can:
          <ul className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto list-disc list-inside">
            <li>Advance duties on day one</li>
            <li>Protect your working capital</li>
            <li>Deliver a new fee stream on every shipment</li>
          </ul>
          </div>
          </p>
          <button className="bg-[#ff6b2b] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e55a1a] transition-colors inline-flex items-center">
            Book a Discovery Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Box className="h-6 w-6 text-[#1a2b4b]" />
              <span className="ml-2 text-xl font-bold text-[#1a2b4b]">DutyEase</span>
            </div>
            <p className="text-gray-500">© 2025 DutyEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;