import { useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Header({ children }: Props) {
  const [sticky, setSticky] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setSticky(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`max-w-sm sm:max-w-md mx-auto bg-white fixed left-0 right-0 p-2 flex flex-col justify-between gap-3 md:flex-row shadow-md rounded-lg duration-300 ${
        sticky ? "top-16" : "-top-96"
      }`}
    >
      {children}
    </header>
  );
}
