import { IoMdHeart } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="h-14 h-full flex items-center justify-center bg-gray-900 py-10">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        Feito por
        <IoMdHeart size={13} className="text-blue-500" />
        <strong className="font-medium">Thiago Marim</strong>
      </span>
    </footer>
  );
};
