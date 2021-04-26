import React, { useContext } from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import SearchFilter from './SearchFilter';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from 'context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

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
          {user ? (
            <>
              <li>
                <Link href='/account/dashboard'>Dashboard</Link>
              </li>
              <li>
                <Link href='/events/add'>Add Event</Link>
              </li>
              <button
                className='btn-icon btn-secondary'
                onClick={() => logout()}
              >
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <li>
              <Link href='/account/login'>
                <a className='btn-secondary'>
                  <FaSignInAlt /> Login
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
