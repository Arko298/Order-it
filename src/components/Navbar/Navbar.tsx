/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
export default function Navbar(){
    return (
        <header
      x-data="
        {
          navbarOpen: false
        }
      "
      className="flex w-full items-center bg-white dark:bg-dark"
    >
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/" className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                alt="logo"
                className="dark:hidden"
              />
              
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden dark:block"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                
                
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
              
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"
                ></span>
              </button>
              <div
                
                className="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none dark:bg-dark-2 lg:dark:bg-transparent"
              >
                <ul className="block lg:flex">
                  <li>
                    <Link
                      href="/"
                      className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-dark-6 dark:hover:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/payment"
                      className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-dark-6 dark:hover:text-white"
                    >
                      Payment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features"
                      className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex dark:text-dark-6 dark:hover:text-white"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/sign-in"
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Login
              </a>
              <a
                href="/sign-up"
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    )
}