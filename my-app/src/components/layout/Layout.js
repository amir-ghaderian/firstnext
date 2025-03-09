import Header from "@/components/modules/Header"


function Layout({ children }) {
    return ( <>
       <Header></Header>
        <div>{children}</div>
        <div>footer</div>
    </>
    )
}
export default Layout;