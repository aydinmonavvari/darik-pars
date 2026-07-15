import Link from "next/link";
import Container from "./Container";
import { Button } from "@/components/ui/button";

const navigation = [
    {
        title: "خانه",
        href: "/",
    },
    {
        title: "درباره ما",
        href: "/about",
    },
    {
        title: "خدمات",
        href: "/services",
    },
    {
        title: "صندوق‌ها",
        href: "/funds",
    },
    {
        title: "تحلیل‌ها",
        href: "/analysis",
    },
    {
        title: "تماس",
        href: "/contact",
    },
];

export default function Header() {
    return (
        <header className="border-b bg-background">
            <Container>
                <div className="flex h-20 items-center justify-between">

                    <Link
                        href="/"
                        className="text-xl font-bold"
                    >
                        داریک پارس
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm text-muted-foreground hover:text-foreground"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>

                    <Button>
                        شروع سرمایه‌گذاری
                    </Button>

                </div>
            </Container>
        </header>
    );
}
