/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */

import React, { Fragment, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { v4 as uuidv4 } from 'uuid';
import projectDetails from '../global/projectDetails';
// import { useAuthContext } from '../contexts/AuthContext';
// import { AuthContextType } from '../@types/authContextType';
// import findEmailByUserId from '../utils/findEmailByUserId';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const { PROJECT_NAME, PROJECT_LOGO } = projectDetails;

// const navigation = [
//   { name: 'About Sikrit', href: '/' },
// ];

export default function Header() {
  // const {
  //   currentUserId, setCurrentUserId, setIsAuthorizedAccess, userEmail, setUserEmail,
  // } = useAuthContext() as AuthContextType;

  // // Logic to log user out
  // const handleLogOut = () => {
  //   if (typeof window !== 'undefined') {
  //     // remove sikritUserId from localstorage
  //     localStorage.removeItem('sikritUserId');
  //     // set currentUserId as '' to update other components in app
  //     setCurrentUserId('');
  //     // set isAuthorizedAccess === false so that user can no longer edit notes are logging out
  //     setIsAuthorizedAccess(false);
  //   }
  // };

  // useEffect(() => {
  //   const fetchEmail = async (userId:string) => {
  //     try {
  //       const email = await findEmailByUserId(userId);
  //       setUserEmail(email);
  //     } catch (error) {
  //       console.error('error occurred when finding email by userId');
  //     }
  //   };
  //   if (currentUserId) {
  //     fetchEmail(currentUserId);
  //   }
  // }, [currentUserId]);

  return (
    <header>
      <Popover className="relative bg-white">
        <nav className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 bg-white" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b border-gray-300 py-1 sm:py-2">
            <div className="flex items-center">
              <a href="/">
                <span className="sr-only">{PROJECT_NAME}</span>
                <img className="h-12 sm:h-16 w-auto" src={PROJECT_LOGO} alt="" />
              </a>
              <div className="ml-10 hidden space-x-8 lg:block">
                {/* {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-black hover:text-gray-500">
                    {link.name}
                  </a>
                ))} */}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <Popover.Group as="nav" className="space-x-10 flex">
                <Popover className="relative">
                  {({ open }) => (
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900',
                      )}
                    >
                      <img className="w-10 h-10 rounded-full" src={`https://source.boringavatars.com/beam/120/${uuidv4()}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`} alt="display" />
                    </Popover.Button>
                  )}
                </Popover>
              </Popover.Group>
            </div>
          </div>
        </nav>
      </Popover>
    </header>
  );
}
