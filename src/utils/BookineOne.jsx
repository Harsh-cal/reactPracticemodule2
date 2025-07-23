import React,{useState} from 'react';
import Header from '../utils/Header.jsx';
import { Phone, Shield, Users, Zap, Check } from 'lucide-react';

import heroImageL from '../assets/images/heroImageL.jpg'
const BookingOne = () => {

  function HandleClick(e){
    e.preventDefault();
    console.log(`there is something herr here `);
    
  }

    const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const formatPhoneNumber = (value) => {
    // Remove all non-digits
    const numbers = value.replace(/\D/g, '');
    
    // Format as (XXX) XXX-XXXX
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    } else {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
    
    // Basic validation - check if we have 10 digits
    const digitsOnly = formatted.replace(/\D/g, '');
    setIsValid(digitsOnly.length === 10);
  };


  return (
   <div>
    <div className="relative w-full h-screen">
          {/* Hero Image */}
          <img 
            src={heroImageL} 
            alt="The building image with a font" 
            className='w-[100vw] h-[100vh] object-cover brightness-50 rounded-bl-2xl ' 
          />
          
          {/* Optional: Add overlay content here */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-[59px] font-bold mb-4 italic font-kaushan" style={{fontFamily:"Kaushan", fontSize:"5rem"}}>
                Book Your's Ticket Now 
              </h1>
              <p className="text-xl md:text-2xl mb-8" style={{fontFamily:"Montserrat"}}>
                Book, explore, and honor India's military heritage — digitally.
              </p>
              <button style={{padding:"0px 25px 0px 25px"}}   className="bg-white text-gray-800  rounded-full text-lg font-bold hover:bg-gray-100 transition-colors ">
            Click here to witness the Magic
              </button>
            </div>
          </div>
        </div>

<section id='CardBookingForm '> 

   <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl mb-6 transform hover:scale-105 transition-transform duration-200">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Enter Your Phone Number
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We'll send you a verification code to ensure the security of your account
            </p>
          </div>

          {/* Phone Input Card */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 p-12 transform hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating particles effect */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-8 right-12 w-1 h-1 bg-indigo-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
            
            <div className="space-y-8 relative z-10">
              {/* Heritage Logo Section */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-lg mb-4 transform group-hover:rotate-3 transition-transform duration-300">
                  <div className="text-white font-bold text-xl">H</div>
                </div>
                <div className="text-sm font-medium text-slate-600 tracking-wide">HERITAGE</div>
              </div>
              
              {/* Main Title with Animation */}
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                  Start Your Journey
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Enter your mobile number to unlock the heritage experience
                </p>
              </div>

              <div className="relative">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <Phone className={`w-5 h-5 transition-colors duration-200 ${
                      isFocused ? 'text-emerald-600' : 'text-slate-400'
                    }`} />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Enter your phone number"
                    className={`w-[90%] relative left-[7%] text-xl font-medium bg-white/70 border-3 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-0 placeholder:text-slate-400 ${
                      isFocused
                        ? 'border-emerald-500 bg-white shadow-2xl transform scale-[1.02]'
                        : isValid
                        ? 'border-emerald-400 bg-emerald-50/80 shadow-lg'
                        : phoneNumber.length > 0
                        ? 'border-amber-400 bg-amber-50/80'
                        : 'border-slate-200 hover:border-emerald-300 hover:shadow-lg'
                    }`}
                    maxLength={17}
                  />
                  {isValid && (
                    <div className="absolute inset-y-0 right-0 pr-6 flex items-center">
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                {phoneNumber.length > 0 && (
                  <div className="mt-4 text-base">
                    {isValid ? (
                      <p className="text-emerald-600 flex items-center justify-center space-x-2 font-medium">
                        <Check className="w-5 h-5" />
                        <span>Perfect! Your number looks great</span>
                      </p>
                    ) : (
                      <p className="text-amber-600 text-center font-medium">
                        Please enter a complete phone number
                      </p>
                    )}
                  </div>
                )}
              </div>

              <button
              onClick={HandleClick}
                type="button"
                disabled={!isValid}
                className={`w-full py-6 px-8 rounded-2xl font-bold text-white text-xl transition-all duration-300 transform relative overflow-hidden ${
                  isValid
                    ? 'bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 hover:from-orange-600 hover:via-yellow-600 hover:to-green-600 hover:scale-[1.05] shadow-2xl hover:shadow-3xl active:scale-[0.98] cursor-pointer'
                    : 'bg-slate-300 cursor-not-allowed opacity-60'
                }`}
              >
                {isValid && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                )}
                <div className="flex items-center justify-center space-x-3 relative z-10">
                  <span>Continue →</span>
                  <Zap className={`w-6 h-6 transition-transform duration-300 ${isValid ? 'group-hover:rotate-12' : ''}`} />
                </div>
              </button>
              
              {/* Progress indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${phoneNumber.length > 0 ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isValid ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex items-center justify-center space-x-8 text-slate-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">256-bit SSL</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">10000+ Users</span>
            </div>
          </div>
        </div>
      </main>


  
</section>

   </div>
  );
};

export default BookingOne;
