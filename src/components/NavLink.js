import { useRouter } from 'next/router';

export const NavLink = ({ children, href }) => {
  const { pathname, push } = useRouter();

  const active = pathname === href ? 'active' : '';

  const handleClick = (e) => {
    e.preventDefault();
    push(href);
  };

  return (
    <a href={href} className={active} onClick={handleClick}>
      {children}
    </a>
  );
};
