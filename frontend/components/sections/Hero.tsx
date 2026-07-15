import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-36">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    <div className="space-y-8">

                        <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
                            مدیریت حرفه‌ای سرمایه
                        </span>

                        <h1 className="text-5xl font-extrabold leading-tight lg:text-6xl">
                            آینده مالی خود را
                            <span className="block text-blue-600">
                                هوشمندانه مدیریت کنید
                            </span>
                        </h1>

                        <p className="max-w-xl text-lg text-muted-foreground leading-8">
                            داریک پارس با ارائه خدمات مدیریت دارایی، صندوق‌های سرمایه‌گذاری،
                            سبدگردانی اختصاصی و تحلیل بازارهای مالی، مسیر رشد سرمایه شما را
                            هموار می‌کند.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    شروع سرمایه‌گذاری
                                </Link>
                            </Button>

                            <Button variant="outline" size="lg" asChild>
                                <Link href="/services">
                                    مشاهده خدمات
                                </Link>
                            </Button>
                        </div>

                    </div>

                    <div className="flex items-center justify-center">

                        <div className="flex h-[420px] w-full max-w-md items-center justify-center rounded-3xl border bg-muted text-center">
                            <span className="text-muted-foreground">
                                تصویر اصلی Hero
                            </span>
                        </div>

                    </div>

                </div>
            </Container>
        </section>
    );
}