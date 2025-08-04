import { useRef } from 'react';
import { FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';

const RotatingButton = () => {
  const buttonRef = useRef(null);

  const onMouseMove = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI);

    buttonRef.current.style.transform = `rotate(${angle + 45}deg)`;
  };

  const onMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'rotate(45deg)';
    }
  };

  return (
    <div
      className="relative w-64 h-64 rounded-full flex items-center justify-center cursor-pointer"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Rotating Arrow Button */}
      <div
        ref={buttonRef}
        className="absolute w-28 h-28 bg-[#273B84] rounded-full flex items-center justify-center rotate-45 transition-transform duration-200 ease-in-out border-6 border-white"
      >
        <svg
          data-name="1-Arrow Up"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
        >
          <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
        </svg>

      </div>

      <div className="absolute flex space-x-4 -mt-45 -ml-15">
        <a
          href="#"
          className="bg-white text-[#273B84] hover:text-gray-300 rounded-[18px] p-2"
        >
          <FiInstagram size={24} />
        </a>
      </div>

      <div className="absolute flex space-x-4 -mt-45 ml-19">
        <a
          href="#"
          className="bg-white text-[#273B84] hover:text-gray-300 rounded-[18px] p-2"
        >
          <FiLinkedin size={24} />
        </a>
              </div>

      <div className="absolute flex space-x-4 -mt-25 ml-40">
        <a
          href="#"
          className="bg-white text-[#273B84] hover:text-gray-300 rounded-[18px] p-2"
        >
          <FiFacebook size={24} />
        </a>
      </div>
    </div>
  );
};

export default RotatingButton;
