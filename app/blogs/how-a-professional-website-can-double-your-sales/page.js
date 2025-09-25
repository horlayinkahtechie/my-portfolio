import WebsiteBoostSales from "@/app/_components/blogs-page/how-a-professional-can-double-your-sales";

export const metadata = {
  title: "How a Professional Website Can Double Your Sales in 2025",
  description: "Discover how investing in a professional website can increase your sales by 200%+. Learn why design, speed, and trust matter for business growth in 2025.",
  keywords: [
    "professional website",
    "boost sales online",
    "website design Nigeria",
    "double business sales",
    "web development 2025",
  ],
  icons: {
    icon: "/how-a-professional-can-boost-your-sales-by-200.png",      
    shortcut: "/how-a-professional-can-boost-your-sales-by-200.png",   
    apple: "/how-a-professional-can-boost-your-sales-by-200.png",   
  },
  openGraph: {
    title: "How a Professional Website Can Double Your Sales in 2025",
    description: "Learn how a well-designed, fast, and optimized website can increase conversions and boost your business revenue.",
    url: "/blogs/how-a-professional-website-can-double-your-sales",
    siteName: "Alao Abdul-salam Olayinka",
    images: [
      {
        url: "/how-a-professional-can-boost-your-sales-by-200.png",
        width: 1200,
        height: 630,
        alt: "Professional website boosting sales by 200%",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How a Professional Website Can Double Your Sales in 2025",
    description: "Your website is your online salesperson. Learn how a professional design can boost trust and revenue.",
    images: ["/how-a-professional-can-boost-your-sales-by-200.png"],
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How a Professional Website Can Boost Your Sales by 200%+",
  "description": "Discover how investing in a professional website directly impacts your revenue, customer trust, and business growth",
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
    "@id": "https://abdulsalamalao.com/blogs/how-a-professional-website-can-double-your-sales" 
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://abdulsalamalao.com/how-a-professional-can-boost-your-sales-by-200.png", 
    "width": 1200,
    "height": 630
  },
  "articleSection": "Digital Marketing",
  "keywords": "website design, sales growth, conversion optimization, business revenue, web development, website development",
  "wordCount": "1500",
  "timeRequired": "PT5M"
};

export default function Page() {
  return (
    <>
     
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <WebsiteBoostSales />
    </>
  );
}