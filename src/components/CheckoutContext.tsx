"use client";

import React, { createContext, useContext, useState } from "react";

export type PlanType = "monthly" | "quarterly" | "semiannual";

interface CheckoutContextValue {
  isCheckoutOpen: boolean;
  selectedPlan: PlanType;
  openCheckout: (plan?: PlanType) => void;
  closeCheckout: () => void;
}

const CheckoutContext = createContext<CheckoutContextValue | undefined>(undefined);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("semiannual");

  const openCheckout = (plan?: PlanType) => {
    if (plan) setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <CheckoutContext.Provider
      value={{
        isCheckoutOpen,
        selectedPlan,
        openCheckout,
        closeCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
}
