import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Menu({ toggleMenu, setToggleMenu, setToggleOverlay }) {
  const menuRef = useRef();

  useEffect(() => {
    if (!toggleMenu) return;
    function handleCLick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setToggleMenu(false);
        setToggleOverlay(false);
      }
    }
    window.addEventListener('click', handleCLick);
    return () => window.removeEventListener('click', handleCLick);
  }, [toggleMenu]);

  return (
    <>
      <Link href="/">
        <a ref={menuRef}>Home</a>
      </Link>
      <Link href="/about">
        <a ref={menuRef}>Our Team</a>
      </Link>
      <Link href="/brands">
        <a ref={menuRef}>Our Brands</a>
      </Link>
      <Link href="/contact">
        <a ref={menuRef}>Contact Us</a>
      </Link>
    </>
  );
}
