// Next Componets
import Image from 'next/image';
// Components
import Avatar from './avatar';
import HeaderOptions from './headerOptions';
// Next Hooks
import { useRouter } from 'next/router';
// Hookes
import { useRef } from 'react';
// Icons
import { MicrophoneIcon, XIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';

export default function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const seacrh = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center w-full p-6">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google logo"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => {
            router.push('/');
          }}
        />

        <form className="flex flex-grow items-center px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl  h-11">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className="mr-3 h-6 text-blue-500 cursor-pointer hidden sm:inline-flex border-l-2 pl-2" />
          <SearchIcon className="h-6 text-blue-500 cursor-pointer hidden sm:inline-flex " />
          <button hidden type="submit" onClick={seacrh}></button>
        </form>
        <Avatar className="ml-auto" url="/PngItem_1468281.png" />
      </div>

      <HeaderOptions />
    </header>
  );
}
