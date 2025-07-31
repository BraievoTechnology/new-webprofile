
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  variant:  'blue' | 'gray';
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, variant, className }) => {
  const baseClasses = 'rounded-2xl p-6 text-white text-center flex flex-col justify-center items-center min-h-[180px] sm:min-h-[200px] transform transition-transform duration-300 ease-in-out hover:scale-105 shadow-xl hover:shadow-2xl';
  
  const variantClasses = {
    gray: 'bg-[#022F8C] hover:bg-blue-900',
    blue: 'bg-[#9DA2A6] hover:bg-slate-600',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}>
      <span className="text-5xl sm:text-6xl font-bold tracking-tight">{value}</span>
      <span className="mt-3 font-semibold text-base px-2 max-w-[20ch]">{label}</span>
    </div>
  );
};

export default StatCard;
