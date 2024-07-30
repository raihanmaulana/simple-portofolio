import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showButton && (
      <a href="#top" className="fixed bottom-6 right-6">
        <button className="relative inline-flex items-center justify-center w-10 h-10 text-white bg-gray-800 rounded-full shadow-lg ring-1 ring-gray-700 hover:bg-gray-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="square"
              strokeWidth="2"
              d="M19 9l-7-7-7 7M12 4v16"
            />
          </svg>
        </button>
      </a>
    )
  );
};

export default BackToTopButton;
