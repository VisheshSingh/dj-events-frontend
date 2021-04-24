import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import SearchFilter from './SearchFilter';
import { FaSignInAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>DJ Events</a>
        </Link>
      </div>

      <SearchFilter />

      <nav>
        <ul>
          <li>
            <Link href='/events'>Events</Link>
          </li>
          <li>
            <Link href='/events/add'>Add Event</Link>
          </li>
          <li>
            <Link href='/account/login'>
              <a className='btn-secondary'>
                <FaSignInAlt /> Login
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
