import { createContext, useContext } from "react";

export type MyFunctionType = (use : boolean) => void
interface MyContextType {
  myFunction: MyFunctionType;
  updateMyFunction: (newFunction: MyFunctionType) => void;
}

export const MyContext = createContext<MyContextType | undefined>(undefined)

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

