import { Footer } from "../Footer/footer"
import { Header } from "../Header/header"

export const Layout = ({children}) =>{
    
    return(
        <div className="vh-100 d-flex flex-column">

            <Header/>

            <main className="flex-grow-1">
                {children}
            </main>

            <Footer/>

        </div>
    )

}