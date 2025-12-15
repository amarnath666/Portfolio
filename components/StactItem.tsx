import { motion } from "framer-motion";
import { cn } from "@/app/lib/utilis";
import { getLogoForTechnology } from "@/app/lib/utilis/logo-mapper";

const StackItem = ({ technology }: { technology: string }) => {
  return (
    <motion.div
      layout
      whileHover="animate"
      whileTap="animate"
      initial="initial"
      className={cn(
        "flex items-center justify-start rounded-full border border-neutral-800 p-1 text-xs leading-none bg-neutral-950 text-white"
      )}
    >
      <motion.span
        variants={{
          animate: { paddingRight: 2 },
        }}
        transition={{
          type: "spring",
        }}

      >
        {getLogoForTechnology(technology)}
      </motion.span>
      <motion.span
        variants={{
          initial: { width: 0 },
          animate: { width: "auto" },
        }}
        exit={{ width: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.5,
        }}
        className="overflow-hidden whitespace-nowrap text-white tracking-wide"
      >
        {technology}
      </motion.span>
    </motion.div>
  );
};

export default StackItem;
