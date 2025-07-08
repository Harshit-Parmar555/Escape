import React from "react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="flex w-full flex-col items-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MarketingLayout;
