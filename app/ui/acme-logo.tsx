import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function AcmeLogo() {
  return (
    <Link
      href={'/'}
      className={`flex cursor-pointer flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </Link>
  );
}
