import Image from 'next/image';

export default function Avatar({ url, className }) {
  return (
    <div
      className={`cursor-pointer space-x-4 transition duration-150 transform hover:scale-150 flex items-center ${className}`}
    >
      <Image src={url} alt="Profile picture" width="24px" height="24px" />
    </div>
  );
}
