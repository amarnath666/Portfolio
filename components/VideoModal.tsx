// import { useEffect, useRef } from "react";
// import { motion } from "motion/react";
// import Image from "next/image";

// interface VideoModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   videoSrc: string;
//   title: string;
//   link: string;
//   imageSrc?: string;
// }

// const VideoModal = ({ isOpen, onClose, imageSrc }: VideoModalProps) => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (isOpen && videoRef.current) {
//       videoRef.current.play();
//     } else if (!isOpen && videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("keydown", handleEscape);
//       document.body.style.overflow = "hidden";
//     }

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.95 }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//         className="relative mx-4 overflow-hidden rounded-md"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Video Container */}
//         <div className="relative">
//           {/* Background Image (Visible when video fades out) */}
//           {imageSrc && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <Image
//                 src={imageSrc}
//                 alt="Video thumbnail"
//                 fill
//                 className="object-contain rounded-md"
//               />
//             </div>
//           )}

//           {/* Video */}
//           {/* <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
//             <video
//               ref={videoRef}
//               controls
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="max-h-[70vh] w-auto h-auto object-contain rounded-md relative z-10"
//               src={videoSrc}
//             />
//           </motion.div> */}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default VideoModal;
