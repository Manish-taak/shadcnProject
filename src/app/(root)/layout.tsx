import Footer from "../common/footer";
import Header from "../common/header";


export default function secondRoot({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
