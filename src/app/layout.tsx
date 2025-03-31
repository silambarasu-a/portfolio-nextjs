import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Full-Stack MERN Developer | DevOps Engineer | Silambarasu",
  description: "Full-Stack MERN (MongoDB, Express.js, React, Node.js) Developer with DevOps expertise. I build scalable web apps, automate deployments with Docker/Kubernetes, and optimize cloud infrastructure (AWS). Let’s collaborate!",
  openGraph:{
    title: "Full-Stack MERN Developer | DevOps Engineer | Silambarasu",
    description: "Full-Stack MERN (MongoDB, Express.js, React, Node.js) Developer with DevOps expertise. I build scalable web apps, automate deployments with Docker/Kubernetes, and optimize cloud infrastructure (AWS). Let’s collaborate!",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
