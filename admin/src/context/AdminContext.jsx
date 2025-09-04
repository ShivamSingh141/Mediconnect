import { createContext } from "react";

export const AdminContext=createContext()

const Admincontextprovider=(props)=>{

    const value={

    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}
export default Admincontextprovider