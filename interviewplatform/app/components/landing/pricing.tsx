"use client";

import React from 'react'

const Pricing = () => {
  const pricingTiers = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      description: 'Perfect for getting started',
      features: [
        'Limited to 5 mock interviews per month',
        'Basic AI feedback',
        'Standard question library',
        'Text-based feedback only',
        'Community support'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      id: 'monthly',
      name: 'Monthly',
      price: 10,
      period: '/month',
      description: 'Best for regular practice',
      features: [
        'Unlimited mock interviews',
        'Advanced AI feedback with insights',
        'Access to 500+ interview questions',
        'Video analysis & body language tips',
        'Interview recordings & playback',
        'Performance analytics & tracking',
        'Email support',
        'Customizable interview scenarios'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      id: 'lifetime',
      name: 'Lifetime',
      price: 99,
      period: 'one-time',
      description: 'Best value for long-term success',
      features: [
        'Everything in Monthly plan',
        'Lifetime access to all features',
        'All future feature updates included',
        'Priority support',
        'Advanced interview analytics',
        'Exclusive interview strategies',
        'Resume review assistance',
        'Unlimited video storage'
      ],
      cta: 'Upgrade to Lifetime',
      highlighted: false
    }
  ]

  return (
    <section className="relative w-full bg-[#0a0a0a] py-20 px-6">
      <style>{`
        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(20px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .pricing-card {
          animation: fadeInUp 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .pricing-card:nth-child(1) {
          animation-delay: 0.1s;
        }

        .pricing-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .pricing-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .feature-check {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(249, 115, 22, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .feature-check::before {
          content: '✓';
          color: #f97316;
          font-weight: bold;
          font-size: 12px;
        }

        .pricing-badge {
          display: inline-block;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 16px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            <span className="text-white">Simple, Transparent</span>
            <br />
            <span className="bg-linear-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your interview preparation journey. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`pricing-card relative rounded-2xl p-8 transition-all duration-300 ${
                tier.highlighted
                  ? 'md:scale-105 bg-linear-to-br from-gray-900 via-gray-850 to-gray-900 border border-orange-500/50 shadow-2xl shadow-orange-500/20'
                  : 'bg-linear-to-br from-gray-900 to-gray-900 border border-gray-800 hover:border-gray-700'
              }`}
            >
              {/* Popular Badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="pricing-badge">Most Popular</div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{tier.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">
                    {tier.price === 0 ? 'Free' : `$${tier.price}`}
                  </span>
                  {tier.period && (
                    <span className="text-gray-400 text-sm">{tier.period}</span>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                  tier.highlighted
                    ? 'bg-linear-to-r from-orange-400 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/50 transform hover:scale-105'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700 hover:border-orange-500/50'
                }`}
              >
                {tier.cta}
              </button>

              {/* Divider */}
              <div className="w-full h-px bg-linear-to-r from-transparent via-gray-700 to-transparent mb-8" />

              {/* Features List */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-6">
                  What's included
                </p>
                {tier.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-check" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Pricing

