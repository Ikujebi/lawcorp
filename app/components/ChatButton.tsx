import Image from "next/image";
import Link from "next/link";
import chat from "../../public/icons8-whatsapp-color/icons8-whatsapp-144.svg";

export default function ChatButton() {
  return (
    <Link
      href="https://wa.me/2348137977542"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed bottom-6 right-6
        z-50
        w-14 h-14
       
        flex items-center justify-center
        transition
        hover:scale-105
      "
    >
      <div className="relative w-full h-full">
        <Image
          src={chat}
          alt="WhatsApp chat"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
