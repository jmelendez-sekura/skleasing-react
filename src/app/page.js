import NavBar from "./components/navbar";
import Contact from "./components/contact";
import Header from "./components/header";
import Clients from "./components/clients";

export default function Page() {
    return (
        <>
            <NavBar />
            <Header/>
            <Clients/>
            <Contact/>
        </>
    );
}