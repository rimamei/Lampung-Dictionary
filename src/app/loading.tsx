import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <AiOutlineLoading3Quarters
        size={30}
        className="animate-spin text-red-500"
      />
    </div>
  );
};

export default Loading;
