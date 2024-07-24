import React, { useState } from "react";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("empty"); // "empty", "filling", "success", "error"

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (newOtp.join("").length === 4) {
      if (newOtp.join("") === generatedOtp) {
        setStatus("success");
        setMessage("OTP Verified Successfully!");
      } else {
        setStatus("error");
        setMessage("Invalid OTP. Please try again.");
      }
    } else if (newOtp.join("").length === 0) {
      setStatus("empty");
    } else {
      setStatus("filling");
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.join("") === generatedOtp) {
      setStatus("success");
      setMessage("OTP Verified Successfully!");
    } else {
      setStatus("error");
      setMessage("Invalid OTP. Please try again.");
    }
  };

  const sendOtp = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    alert(`Your OTP is ${newOtp}`); // Simulate sending OTP via alert
    setMessage("OTP has been sent to your mobile number.");
  };

  return (
    <div className="bg-blue-400 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl text-white mb-8">Chai aur Code</h1>
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Mobile Phone Verification</h2>
        <p className="mb-4 text-gray-600">
          Enter the 4-digit verification code that was sent to your phone
          number.
        </p>

        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex justify-between mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                className={`w-12 h-12 text-center border border-gray-300 rounded bg-gray-800 text-white ${
                  status === "error" ? "border-red-500" : ""
                }`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
              />
            ))}
          </div>
          <button
            onClick={sendOtp}
            className="mb-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Send OTP
          </button>
          <button
            className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
            type="submit"
          >
            Verify Account
          </button>
          {message && (
            <div
              className={`mt-4 text-center ${
                status === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </div>
          )}
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Didn't receive code?{" "}
            <a href="#" className="text-blue-500" onClick={sendOtp}>
              Resend
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Otp;
