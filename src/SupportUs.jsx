import React, { useState, useEffect } from 'react';
import './SupportUs.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import foodWasteImage from '../assets/food-waste.jpg'; // Add this image to your assets folder
// import communityImage from '../assets/community.jpg'; // Add this image to your assets folder

const SupportUs = () => {
  const [donationAmount, setDonationAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorMessage, setDonorMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [donationType, setDonationType] = useState('oneTime');

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount(parseInt(e.target.value) || 0);
  };

  const handleDonate = async () => {
    if (donationAmount < 1) {
      alert('Please enter a valid donation amount');
      return;
    }

    setIsPaymentProcessing(true);

    // Simulating a backend call
    setTimeout(() => {
      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // Replace with actual key in production
        amount: donationAmount * 100, // Amount in paise
        currency: 'INR',
        name: 'FoodShare Connect',
        description: 'Donation to reduce food waste',
        image: 'https://example.com/your_logo.png',
        handler: function(response) {
          // Handle successful payment
          setIsPaymentProcessing(false);
          setPaymentSuccess(true);
          console.log(response);
        },
        prefill: {
          name: donorName,
          email: donorEmail
        },
        theme: {
          color: '#2a9d8f'
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      setIsPaymentProcessing(false);
    }, 1000);
  };

  if (paymentSuccess) {
    return (
      <div className="support-us-container">
        <div className="thank-you-container">
          <div className="success-icon">✓</div>
          <h2>Thank You for Your Support!</h2>
          <p>Your generous contribution of ₹{donationAmount} will help us connect surplus food to those who need it most.</p>
          <p>We've sent a confirmation receipt to your email.</p>
          <div className="impact-statement">
            <p>Your donation will help save approximately:</p>
            <div className="impact-metrics">
              <div className="impact-metric">
                <span className="impact-number">{Math.round(donationAmount / 10)}</span>
                <span className="impact-label">Meals</span>
              </div>
              <div className="impact-metric">
                <span className="impact-number">{Math.round(donationAmount / 50)}</span>
                <span className="impact-label">kg CO₂ emissions</span>
              </div>
              <div className="impact-metric">
                <span className="impact-number">{Math.round(donationAmount / 25)}</span>
                <span className="impact-label">liters of water</span>
              </div>
            </div>
          </div>
          <button 
            className="donate-again-btn"
            onClick={() => setPaymentSuccess(false)}
          >
            Donate Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
        <Header />
    <div className="support-us-container">
      <div className="support-us-header">
        <h1>Support FoodHub</h1>
        <p className="support-tagline">Help us reduce food waste and feed communities in need</p>
      </div>

      <div className="support-us-content">
        <div className="donation-impact-container">
          <div className="mission-section">
            <h2>Our Mission</h2>
            <p>
              FoodShare Connect is a platform that bridges the gap between surplus food and hunger. 
              We connect restaurants, grocery stores, and individuals with excess food to local food banks 
              and people in need, reducing food waste while addressing food insecurity in our communities.
            </p>
            <div className="mission-images">
              {/* <img src={foodWasteImage} alt="Food waste reduction" className="mission-image" />
              <img src={communityImage} alt="Community support" className="mission-image" /> */}
            </div>
          </div>

          <div className="impact-section">
            <h2>Your Donation's Impact</h2>
            <div className="impact-cards">
              <div className="impact-card">
                <div className="impact-icon">🍲</div>
                <h3>Feed Families</h3>
                <p>Every ₹100 helps provide up to 10 meals to individuals and families facing food insecurity</p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">🌎</div>
                <h3>Save the Planet</h3>
                <p>Reducing food waste helps decrease greenhouse gas emissions and conserves water resources</p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">🚚</div>
                <h3>Power Our Platform</h3>
                <p>Funds our technology that connects food donors with recipients in real-time</p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">👥</div>
                <h3>Build Community</h3>
                <p>Creates a network of caring individuals and businesses working together</p>
              </div>
            </div>
          </div>

          <div className="food-waste-facts">
            <h2>Food Waste Facts</h2>
            <ul className="facts-list">
              <li>
                <span className="fact-highlight">1/3 of all food produced</span> globally is wasted, amounting to about 1.3 billion tons per year.
              </li>
              <li>
                <span className="fact-highlight">Food waste generates 8% of global greenhouse gas emissions</span>, contributing significantly to climate change.
              </li>
              <li>
                <span className="fact-highlight">In India, approximately 40% of food</span> is wasted before it even reaches consumers.
              </li>
              <li>
                <span className="fact-highlight">The water used to produce wasted food</span> could satisfy the household water needs of 9 billion people.
              </li>
            </ul>
          </div>
          
          <div className="testimonials-section">
            <h2>From Our Community</h2>
            <div className="testimonial">
              <p>"As a restaurant owner, I used to throw away perfectly good food at the end of each day. Now with FoodShare Connect, we're able to donate it to those who need it most."</p>
              <div className="testimonial-author">- Priya Sharma, Local Restaurant Owner</div>
            </div>
            <div className="testimonial">
              <p>"The platform has made it so easy for our food bank to connect with local businesses. We've increased our food supply by 40% since joining."</p>
              <div className="testimonial-author">- Rahul Patel, Food Bank Coordinator</div>
            </div>
          </div>
        </div>

        <div className="donation-form-container">
          <div className="donation-form">
            <h2>Support Our Mission</h2>
            <p className="donation-subtitle">Your contribution helps us connect surplus food with those who need it most</p>
            
            <div className="donation-type-selector">
              <button 
                className={donationType === 'oneTime' ? 'type-btn selected' : 'type-btn'} 
                onClick={() => setDonationType('oneTime')}
              >
                One-time
              </button>
              <button 
                className={donationType === 'monthly' ? 'type-btn selected' : 'type-btn'} 
                onClick={() => setDonationType('monthly')}
              >
                Monthly
              </button>
            </div>
            
            <div className="donation-amounts">
              <button 
                className={donationAmount === 100 && !customAmount ? 'amount-btn selected' : 'amount-btn'} 
                onClick={() => handleAmountSelect(100)}
              >
                ₹100
              </button>
              <button 
                className={donationAmount === 500 && !customAmount ? 'amount-btn selected' : 'amount-btn'} 
                onClick={() => handleAmountSelect(500)}
              >
                ₹500
              </button>
              <button 
                className={donationAmount === 1000 && !customAmount ? 'amount-btn selected' : 'amount-btn'} 
                onClick={() => handleAmountSelect(1000)}
              >
                ₹1000
              </button>
              <button 
                className={donationAmount === 5000 && !customAmount ? 'amount-btn selected' : 'amount-btn'} 
                onClick={() => handleAmountSelect(5000)}
              >
                ₹5000
              </button>
            </div>
            
            <div className="custom-amount">
              <label htmlFor="customAmount">Custom Amount (₹)</label>
              <input
                type="number"
                id="customAmount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Enter amount"
                min="1"
              />
            </div>

            <div className="donation-impact-preview">
              <p>Your donation of <span className="highlight">₹{donationAmount}</span> can help:</p>
              <div className="impact-preview-items">
                <div className="impact-preview-item">
                  <span className="impact-preview-icon">🍽️</span>
                  <span className="impact-preview-text">Provide {Math.round(donationAmount / 10)} meals</span>
                </div>
                <div className="impact-preview-item">
                  <span className="impact-preview-icon">🚚</span>
                  <span className="impact-preview-text">Fund {Math.round(donationAmount / 200)} food pickups</span>
                </div>
              </div>
            </div>

            <div className="donor-info">
              <div className="form-group">
                <label htmlFor="donorName">Name</label>
                <input
                  type="text"
                  id="donorName"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Your Name"
                  disabled={isAnonymous}
                />
              </div>

              <div className="form-group">
                <label htmlFor="donorEmail">Email</label>
                <input
                  type="email"
                  id="donorEmail"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="donorMessage">Message (Optional)</label>
                <textarea
                  id="donorMessage"
                  value={donorMessage}
                  onChange={(e) => setDonorMessage(e.target.value)}
                  placeholder="Share why you're supporting our cause"
                  rows="3"
                />
              </div>

              <div className="form-group checkbox-group">
                <input
                  type="checkbox"
                  id="anonymousDonation"
                  checked={isAnonymous}
                  onChange={() => setIsAnonymous(!isAnonymous)}
                />
                <label htmlFor="anonymousDonation">Make this an anonymous donation</label>
              </div>
            </div>

            <div className="donation-summary">
              <h3>Donation Summary</h3>
              <div className="summary-row">
                <span>Donation Amount:</span>
                <span>₹{donationAmount}</span>
              </div>
              <div className="summary-row">
                <span>Frequency:</span>
                <span>{donationType === 'oneTime' ? 'One-time' : 'Monthly'}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>₹{donationAmount}</span>
              </div>
            </div>

            <button 
              className="donate-btn" 
              onClick={handleDonate}
              disabled={isPaymentProcessing || donationAmount < 1}
            >
              {isPaymentProcessing ? 'Processing...' : `Donate ₹${donationAmount} ${donationType === 'monthly' ? 'Monthly' : 'Now'}`}
            </button>

            <div className="secure-payment">
              <span className="secure-icon">🔒</span> Secure payment powered by Razorpay
            </div>
            
            <div className="tax-benefit-note">
              All donations are eligible for tax benefits under Section 80G
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default SupportUs;
