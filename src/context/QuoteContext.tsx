"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface QuoteContextType {
  isOpen: boolean;
  prefilledItem: string;
  openQuoteModal: (item?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledItem, setPrefilledItem] = useState("");

  const openQuoteModal = (item?: string) => {
    setPrefilledItem(item || "");
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteContext.Provider
      value={{
        isOpen,
        prefilledItem,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
};
