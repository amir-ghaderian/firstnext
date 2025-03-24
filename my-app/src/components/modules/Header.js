import Link from "next/link";



function Header() {

    return (
        <div class="container flex reletive">
            <div class="abselute right-0 text-5xl black">
                <Link href="/">صفحه اصلی</Link>
                <Link href="/advertising">آگهی ها</Link>
            </div>
            <div >
               
            </div>
        </div>
    );
}

export default Header;