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
              Offer Duty Advancement Without the Risk
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Importers are feeling the crunch from rising tariffs. With DutyEase, they can defer duties while you grow revenue—all without tying up your own capital.
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
              <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">Attract New Clients</h3>
              <p className="text-gray-600">Make your brokerage more competitive by offering a seamless deferred-duty solution.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#1a2b4b]/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-[#1a2b4b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">Alleviate Tariff Pressure</h3>
              <p className="text-gray-600">Help importers navigate the financial strain of rising duties with flexible payment terms.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#1a2b4b]/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-[#1a2b4b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">Free Up Your Balance Sheet</h3>
              <p className="text-gray-600">Eliminate the burden of fronting duty payments and reduce your risk exposure.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#1a2b4b]/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-[#1a2b4b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">Enhance Profitability</h3>
              <p className="text-gray-600">Turn a cost center into a revenue stream without extra overhead.</p>
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
              <p className="text-lg text-gray-600 mb-6">"We used to offer advancement as a favor. Now it's a sustainable revenue stream."</p>
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
              <p className="text-lg text-gray-600 mb-6">"Clients stay longer and import more when they don't have to pay duties upfront."</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Brokerage?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing network of brokers who are revolutionizing duty advancement.
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