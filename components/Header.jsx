import { useState } from 'react';

export default function Header() {
  return (
    <header>
      <div className="container max-w-6x px-4 md:px-8">
        <nav className="flex items-center justify-between relative py-8">
          <a href="/" className="inline-block p-5">
            <img className="w-32" src="logo.svg" alt="Manage Official Logo" />
          </a>
          <TopNavigation />
        </nav>
        <section className="relative flex flex-wrap items-center hero-height pb-8 md:py-8 xl:py-24">
          <img className="w-full md:w-1/2 md:order-2" src="illustration-intro.svg" alt="" />
          <div className="w-full md:w-1/2 text-center md:text-left md:pr-4 md:order-1">
            <h1 className="mb-2 md:mb-4 text-4xl xl:text-5xl">
              <strong>Bring everyone together to build better products.</strong>
            </h1>
            <p className="lightGray px-8 md:pl-0 xl:pr-44">
              Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
            </p>
            <div>
              <a href="#" className="red-btn red-btn-shadow my-10">Get Started</a>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

function TopNavigation() {
  const [open, setOpen] = useState(false);

  function toggle() {
    document.body.style.overflow = document.body.style.overflow == 'hidden' ? 'auto' : 'hidden';
    setOpen(prev => !prev);
  }

  return (
    <div className="md:flex-grow md:flex items-center justify-between">
      <div className="p-3 m-2 hover:bg-gray-100 rounded md:hidden" onClick={toggle}>
        { 
          !open && (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18">
              <g fill="#242D52" fillRule="evenodd">
                <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z"/>
              </g>
            </svg>
          )
         }
      </div>
      <nav
        className={ "p-6 nav-mobile-bg overflow-auto md:block" + (open ? " left-0" : "") }
        onClick={toggle}
        >
        <div className="flex justify-end py-5 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22">
            <path fill="#242D52" fillRule="evenodd" d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"/>
          </svg>
        </div>
        <ul className="rounded py-5 text-xs" onClick={(e) => e.stopPropagation()}>
          <li>
            <a href="">
              Pricing
            </a>
          </li>
          <li>
            <a href="">
              Product
            </a>
          </li>
          <li>
            <a href="">
              About Us
            </a>
          </li>
          <li>
            <a href="">
              Careers
            </a>
          </li>
          <li>
            <a href="">
              Community
            </a>
          </li>
        </ul>
      </nav>
      <a href="#" className="w-44 text-xs red-btn red-btn-shadow hidden md:block">
        Get Started
      </a>
    </div>
  );
}