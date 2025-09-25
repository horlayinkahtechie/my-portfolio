import WhyBusinessNeedsWebsite from "@/app/_components/blogs-page/why-every-business-needs-website-in-2025";

export const metadata = {
  title: "Why Every Business Needs a Professional Website in 2025",
  description: "In 2025, a professional website is no longer optional. Discover why every business needs a website to build trust, attract customers, and boost sales.",
  keywords: [
    "why every business needs a website",
    "professional website 2025",
    "business growth online",
    "boost sales with website",
    "website design for businesses",
  ],
   icons: {
    icon: "/why-every-business-needs-a-professional-website-in-2025.png",      
    shortcut: "/why-every-business-needs-a-professional-website-in-2025.png",   
    apple: "/why-every-business-needs-a-professional-website-in-2025.png",   
  },
  openGraph: {
    title: "Why Every Business Needs a Professional Website in 2025",
    description: "A professional website builds credibility, attracts more customers, and helps businesses thrive in 2025's digital-first world.",
    url: "/blogs/why-every-business-needs-website-in-2025", 
    siteName: "Alao Abdul-salam Olayinka", 
    images: [
      {
        url: "/why-every-business-needs-a-professional-website-in-2025.png",
        width: 1200,
        height: 630,
        alt: "Every business needs a professional website in 2025",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Every Business Needs a Professional Website in 2025",
    description: "Learn why having a professional website in 2025 is essential for building trust, boosting sales, and staying ahead of competitors.",
    images: ["/why-every-business-needs-a-professional-website-in-2025.png"],
  },
};


const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why Every Business Needs a Professional Website in 2025",
  "description": "In 2025, a professional website is no longer optional. Discover why every business needs a website to build trust, attract customers, and boost sales.",
  "author": {
    "@type": "Person", 
    "name": "Alao Abdul-salam Olayinka",
    "url": "https://abdulsalamalao.com" 
  },
  "publisher": {
    "@type": "Person",
    "name": "Alao Abdul-salam Olayinka",
    "logo": {
      "@type": "ImageObject",
      "url": "https://abdulsalamalao.com/Alao-Abdulsalam.jpg"     
    }
  },
  "datePublished": "2025-09-22", 
  "dateModified": "2025-09-22", 
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://abdulsalamalao.com/blogs/why-every-business-needs-website-in-2025" 
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://abdulsalamalao.com/why-every-business-needs-a-professional-website-in-2025.png", 
    "width": 1200,
    "height": 630
  },
  "articleSection": "Business Strategy",
  "keywords": "business website, professional website, digital presence, online marketing, business growth",
  "wordCount": "1800",
  "timeRequired": "PT7M", 
  "articleBody": "In 2025, a professional website is essential for business success. This article explores the key reasons why every business needs a website...", // Optional: first paragraph
};

export default function Page() {
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <WhyBusinessNeedsWebsite />
    </>
  );
}