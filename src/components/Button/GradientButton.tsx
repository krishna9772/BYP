import Link from 'next/link';

interface GradientButtonProps {
  href: string;
  label: string;
  download: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({ href, label, download }) => {
  return (
    <Link href={href}>
      <button className="bg-gradient-to-r from-[#42229D] to-[#470038] text-white px-6 py-2 rounded-[8px] shadow-lg hover:opacity-90 transition-opacity flex items-center">
        <span>{label}</span>


        {download ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M5 20h14" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        }


      </button>
    </Link>
  );
};

export default GradientButton;
