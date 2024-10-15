import { Person, CreativeWork, WithContext, WebPage } from "schema-dts"

const person: Person = {
  "@type": "Person",
  "name": "Thomas Loyan",
  "url": "https://thomasloyan.com",
  "jobTitle": "Frontend Developer",
  "sameAs": [
    "https://github.com/tloyan",
  ]
}

const creativeWork: CreativeWork = {
  "@type": "CreativeWork",
  "name": "QR Code Component",
  "description": "QR code component built as part of a Frontend Mentor Challenge, using Typescript, Next.js, and Tailwind CSS.",
  "datePublished": new Date().toISOString().split('T')[0],
  "image": "https://qr-code-component.tloyan.com/preview.jpg",
  "inLanguage": "en",
  "author": {
    "@type": "Person",
    "name": "Thomas Loyan",
    "url": "https://thomasloyan.com"
  }
}

export const jsonLd: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "QR Code Component | Frontend Mentor Challenge | Thomas Loyan",
    "description": "Frontend Mentor Challenge: QR code component built with Typescript, Next.js, Tailwind CSS.",
    "url": "https://qr-code-component.tloyan.com/",
    "creator": person,
    "publisher": person,
    "mainEntity": creativeWork,
    "keywords": [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "Responsive web design",
      "Frontend developer",
      "Fullstack developer",
      "Thomas Loyan",
      "Thomas Loyan developer",
      "QR Code component",
      "Frontend Mentor solution",
      "Freelance"
    ]
  }