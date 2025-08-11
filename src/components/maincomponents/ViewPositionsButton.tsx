"use client";

import { useState } from "react";
import Button from "@/components/maincomponents/PrimaryButton";

interface ViewPositionsButtonProps {
  jobs?: any[]; // Pass your jobs array here
}

export default function ViewPositionsButton({
  jobs = [],
}: ViewPositionsButtonProps) {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    if (jobs.length === 0) {
      setShowMessage(true);
    } else {
      document
        .getElementById("open-positions")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Button onClick={handleClick}>View Open Positions</Button>

      {showMessage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs"
          onClick={() => setShowMessage(false)}
        >
          <div
            className="w-full max-w-sm p-6 text-center bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-3 text-lg font-semibold text-gray-800">
              No Positions Available
            </h2>
            <p className="text-sm text-gray-600">
              There are no open positions at the moment. Please check back
              later.
            </p>
            <div className="mt-5">
              <Button onClick={() => setShowMessage(false)}>Okay</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
