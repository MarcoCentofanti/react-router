import { useContext } from "react";
import { createContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);
  const [budgetLimit, setBudgetLimit] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  return (
    <BudgetContext.Provider
      value={{
        budgetMode,
        setBudgetMode,
        budgetLimit,
        setBudgetLimit,
        maxPrice,
        setMaxPrice,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

function useBudget() {
  const context = useContext(BudgetContext);
  return context;
}

export { BudgetProvider, useBudget };
