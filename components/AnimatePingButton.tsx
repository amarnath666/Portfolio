import { IconButtonProps } from "@/app/lib/types";

const PingButton = ({ name, onClick, icon }: IconButtonProps) => {
  return (
    <button
      className="bg-[#18181b] border border-[#27272a] hover:border-gray-500 text-white py-2 px-4 rounded-lg leading-none  cursor-pointer flex items-center gap-2  text-sm "
      onClick={onClick}
    >
      {/* Ping indicator */}
      <span className="relative flex size-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex size-3 rounded-full bg-green-400"></span>
      </span>

      {/* Button text */}
      {name}
        {icon && <span className="flex items-center text-gray-400">{icon}</span>}
    </button>
  );
};
export default PingButton;
