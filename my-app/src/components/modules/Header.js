import Link from "next/link";



function Header() {

    return (
        <div className="container flex reletive">
            <div className="abselute right-0 text-5xl black">
                <Link href="/">صفحه اصلی</Link>
                <Link href="/advertising">آگهی ها</Link>
            </div>
            <div >
               
            </div>
        </div>
    );
}

export default Header;