import { createContext, PropsWithChildren, useContext, useState } from "react";
import User from './../shared/models/user';


interface StoreContextValue{
    user:User|null;
    setUser:(user:User)=>void;
    generateOtp:()=>number;
    // removeItem:(productId:number,quantity:number)=>void;
}

export const StoreContext=createContext<StoreContextValue | undefined>(undefined);

export function useStoreContext(){
    const context=useContext(StoreContext);

    if(context===undefined){
        throw Error('Oops- we donot seem to be inside provider');
    }

    return context;
}

// export function StoreProvider({children}:PropsWithChildren<any>){
//     const [user,setUser]=useState<User | null >(null);

//     return (<StoreContext.Provider value={{user,setUser}}>{children}</StoreContext.Provider>);
// }