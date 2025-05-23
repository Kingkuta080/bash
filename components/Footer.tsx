import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-800 mt-auto">
      <div className="flex justify-center w-full">
        <div className="text-gray-400 text-sm text-center">
          &copy; {new Date().getFullYear()} Bash uiux. All rights reserved.
        </div>
      </div>
    </footer>
  );
}