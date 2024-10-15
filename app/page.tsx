import type { Metadata } from 'next'

import { QrCode } from "@/app/components/QrCode";

export const metadata: Metadata = {
  title: 'QR code component',
  description: 'QR code component by Thomas Loyan',
}

export default function Home() {
  return (
    <div className="flex min-h-full items-center justify-center bg-slate-300">
      <QrCode />
    </div>
  );
}
