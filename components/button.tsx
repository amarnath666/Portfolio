import { IconButtonProps } from "@/app/lib/types";



const Button = ({ name, icon, onClick }: IconButtonProps) => {
  return (
    <button
      className="bg-[#18181b] border border-[#27272a] hover:border-gray-500 text-white py-2 px-4 rounded-lg leading-none  cursor-pointer flex items-center gap-2 text-sm "
      onClick={onClick}
    >
      {icon && <span className="flex items-center text-gray-400">{icon}</span>}
      {name}
    </button>
  );
};

export default Button;
