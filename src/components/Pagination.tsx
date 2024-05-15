'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
 
export const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const createPageURL = (page:string|number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    return `${pathname}?${params.toString()}`
  }

  return (
    <div className='flex justify-center items-center my-4'>
      <div className="inline-flex">
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />
        <div className='flex -space-x-px items-center'>
          <p>{currentPage} of {totalPages}</p>
        </div>
        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </div>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {

  const className = `flex items-center justify-center rounded-md p-2 ${
    isDisabled ? 'pointer-events-none text-gray-600 bg-gray-700' : 'bg-yellow-300 text-black'
  }${!isDisabled ? ' hover:bg-yellow-400 ' : ''
  }${direction === 'left' ? 'mr-2 md:mr-4 ' : ''
  }${direction === 'right' ? 'ml-2 md:ml-4 ' : ''
  }`;

  const icon =
    direction === 'left' ? (
      <span className='font-semibold'>prev</span>
    ) : (
      <span className='font-semibold'>next</span>

    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
