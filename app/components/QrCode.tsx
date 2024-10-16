import Image from "next/image";

export function QrCode() {
  return (
    <div className="max-w-xs rounded-[20px] bg-white p-4 pb-10">
      <div className="overflow-hidden rounded-[10px]">
        <Image
          src="/image-qr-code.png"
          alt="frontendmentor qr code"
          width="576"
          height="576"
        />
      </div>
      <p className="mt-6 px-4 text-center font-sans text-xl text-slate-900">
        Improve your front-end skills by building projects
      </p>
      <p className="mt-4 px-4 text-center font-sans text-base text-slate-500">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}
