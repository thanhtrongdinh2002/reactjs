import Header from "../components/header";
function DefautLayout({children}) {
    return (
        <div>
            <Header/>
            <div className="content">{children}</div>
        </div>
    );
        
}

export default DefautLayout;