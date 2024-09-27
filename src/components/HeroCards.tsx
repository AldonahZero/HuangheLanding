import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Huanghe from "../assets/huanghe.png";
import Tutu from "../assets/tutu.png";
import DouyinQRCode from '../assets/douyin_qr.png';
import WeChatQRCode from '../assets/wechat_qr.png';
import * as Popover from "@radix-ui/react-popover";

export const HeroCards = () => {
    return (
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
            {/* 用户评价 */}
            <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar>
                        <AvatarImage alt="" src={Tutu} />
                        <AvatarFallback>SH</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                        <CardTitle className="text-lg">兔兔</CardTitle>
                        <CardDescription>@tutu</CardDescription>
                    </div>
                </CardHeader>

                <CardContent>这个软件非常棒！</CardContent>
            </Card>

            {/* 团队 */}
            <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                    <img
                        src={Huanghe}
                        alt="user avatar"
                        className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                    />
                    <CardTitle className="text-center">黄河</CardTitle>
                    <CardDescription className="font-normal text-primary">
                        白云山工作室
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                    <p>Stay hungry. Stay Foolish.</p>
                </CardContent>

                <CardFooter>
                    <div className="flex space-x-2">
                        {/* GitHub 图标 */}
                        <a
                            rel="noreferrer noopener"
                            href="https://github.com/AldonahZero"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">GitHub 图标</span>
                            <GitHubLogoIcon className="w-5 h-5" />
                        </a>

                        {/* 抖音悬浮卡片 */}
                        <Popover.Root>
                            <Popover.Trigger
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                })}
                                style={{ zIndex: 99 }} // 提高层级
                                onMouseEnter={(e) => e.currentTarget.click()} // 模拟点击以显示 Popover
                                onMouseLeave={(e) => e.currentTarget.click()} // 模拟再次点击以隐藏 Popover
                            >
                                <span className="sr-only">抖音 图标</span>
                                <svg
                                    role="img"
                                    viewBox="0 0 256 290"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-foreground w-5 h-5"
                                >
                                    {/* Insert the Douyin SVG path details here */}
                                    <title>抖音</title>
                                    {/* SVG paths */}
                                    <path fill="#FF004F"
                                          d="M189.72022 104.42148c18.67797 13.3448 41.55932 21.19661 66.27233 21.19661V78.08728c-4.67694.001-9.34196-.48645-13.91764-1.4554v37.41351c-24.71102 0-47.5894-7.85181-66.27232-21.19563v96.99656c0 48.5226-39.35537 87.85513-87.8998 87.85513-18.11308 0-34.94847-5.47314-48.93361-14.85978 15.96175 16.3122 38.22162 26.4315 62.84826 26.4315 48.54742 0 87.90477-39.33253 87.90477-87.85712v-96.99457h-.00199Zm17.16896-47.95275c-9.54548-10.4231-15.81283-23.89299-17.16896-38.78453v-6.11347h-13.18894c3.31982 18.92715 14.64335 35.09738 30.3579 44.898ZM69.67355 225.60685c-5.33316-6.9891-8.21517-15.53882-8.20226-24.3298 0-22.19236 18.0009-40.18631 40.20915-40.18631 4.13885-.001 8.2529.6324 12.19716 1.88328v-48.59308c-4.60943-.6314-9.26154-.89945-13.91167-.80117v37.82253c-3.94726-1.25089-8.06328-1.88626-12.20313-1.88229-22.20825 0-40.20815 17.99196-40.20815 40.1873 0 15.6937 8.99747 29.28075 22.1189 35.89954Z"/>
                                    <path
                                        d="M175.80259 92.84876c18.68293 13.34382 41.5613 21.19563 66.27232 21.19563V76.63088c-13.79353-2.93661-26.0046-10.14114-35.18573-20.16215-15.71554-9.80162-27.03808-25.97185-30.3579-44.898H141.8876v189.84333c-.07843 22.1318-18.04855 40.05229-40.20915 40.05229-13.05889 0-24.66039-6.22169-32.00788-15.8595-13.12044-6.61879-22.1179-20.20683-22.1179-35.89854 0-22.19336 17.9999-40.1873 40.20815-40.1873 4.255 0 8.35614.66217 12.20312 1.88229v-37.82254c-47.69165.98483-86.0473 39.93316-86.0473 87.83429 0 23.91184 9.55144 45.58896 25.05353 61.4276 13.98514 9.38565 30.82053 14.85978 48.9336 14.85978 48.54544 0 87.89981-39.33452 87.89981-87.85612V92.84876h-.00099Z"/>
                                    <path fill="#00F2EA"
                                          d="M242.07491 76.63088V66.51456c-12.4384.01886-24.6326-3.46278-35.18573-10.04683 9.34196 10.22255 21.64336 17.27121 35.18573 20.16315Zm-65.54363-65.06015a67.7881 67.7881 0 0 1-.72869-5.45726V0h-47.83362v189.84531c-.07644 22.12883-18.04557 40.04931-40.20815 40.04931-6.50661 0-12.64987-1.54375-18.09025-4.28677 7.34749 9.63681 18.949 15.8575 32.00788 15.8575 22.15862 0 40.13171-17.9185 40.20915-40.0503V11.57073h34.64368ZM99.96593 113.58077V102.8112c-3.9969-.54602-8.02655-.82003-12.06116-.81805C39.35537 101.99315 0 141.32669 0 189.84531c0 30.41846 15.46735 57.22621 38.97116 72.99536-15.5021-15.83765-25.05353-37.51576-25.05353-61.42661 0-47.90014 38.35466-86.84847 86.0483-87.8333Z"/>
                                </svg>
                            </Popover.Trigger>
                            <Popover.Content
                                className="p-4 bg-white rounded-md shadow-md border border-gray-300 w-72 h-96 z-50"
                                sideOffset={5}
                            >
                                <img
                                    src={DouyinQRCode}
                                    alt="抖音二维码"
                                    className="w-full h-full object-contain"
                                />
                                <Popover.Arrow className="fill-white"/>
                            </Popover.Content>
                        </Popover.Root>

                        {/* 微信悬浮卡片 */}
                        <Popover.Root>
                            <Popover.Trigger
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                })}
                                style={{ zIndex: 50 }} // 提高层级
                                onMouseEnter={(e) => e.currentTarget.click()} // 模拟点击以显示 Popover
                                onMouseLeave={(e) => e.currentTarget.click()} // 模拟再次点击以隐藏 Popover
                            >
                                <span className="sr-only">微信 图标</span>
                                <svg
                                    role="img"
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-foreground w-6 h-6"
                                >
                                    {/* Insert the WeChat SVG path details here */}
                                    <title>微信</title>
                                    {/* SVG paths */}
                                    <path
                                        d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"
                                        fill="#28C445"/>
                                    <path
                                        d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"
                                        fill="#28C445"/>
                                </svg>
                            </Popover.Trigger>
                            <Popover.Content
                                className="p-4 bg-white rounded-md shadow-md border border-gray-300 w-72 h-96 z-50"
                                sideOffset={5}
                            >
                                <img
                                    src={WeChatQRCode}
                                    alt="微信二维码"
                                    className="w-full h-full object-contain"
                                />
                                <Popover.Arrow className="fill-white"/>
                            </Popover.Content>
                        </Popover.Root>
                    </div>
                </CardFooter>
            </Card>
            {/* 价格 */}
            <Card
                className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader>
                    <CardTitle className="flex item-center justify-between">
                        免费
                        <Badge
                            variant="secondary"
                            className="text-sm text-primary"
                        >
                            最受欢迎
                        </Badge>
                    </CardTitle>
                    <div>
                        <span className="text-3xl font-bold">¥0</span>
                        <span className="text-muted-foreground"> /月</span>
                    </div>

                    <CardDescription>
                        免费试用我们的软件.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Button className="w-full">开始免费试用</Button>
                </CardContent>

                <hr className="w-4/5 m-auto mb-4" />

                <CardFooter className="flex">
                    <div className="space-y-4">
                        {["4 位团队成员", "无免费代理流量 ", "最多 6 个账户"].map(
                            (benefit: string) => (
                                <span
                                    key={benefit}
                                    className="flex"
                                >
                                    <Check className="text-green-500" />{" "}
                                    <h3 className="ml-2">{benefit}</h3>
                                </span>
                            )
                        )}
                    </div>
                </CardFooter>
            </Card>

            {/* 服务 */}
            <Card
                className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                style={{ zIndex: -1 }} // 设置 z-index 为 -1
            >
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                        <LightBulbIcon />
                    </div>
                    <div>
                        <CardTitle>AI模式</CardTitle>
                        <CardDescription className="text-md mt-2">
                            这是一段描述内容，展示服务的亮点和优势。
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
};
