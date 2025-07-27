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
        "flex items-start justify-start rounded-full border border-neutral-700 p-1 text-xs bg-zinc-900 text-white"
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
        className="overflow-hidden whitespace-nowrap text-white "
      >
        {technology}
      </motion.span>
    </motion.div>
  );
};

export default StackItem;
