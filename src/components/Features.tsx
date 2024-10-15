import { useTheme } from "@/components/theme-provider";
import { Badge } from "./ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import image2Light from "../assets/bn.png";
import image3Light from "../assets/buffl_light.png";
import image3Dark from "../assets/buff_dark.png";
import image4Light from "../assets/auto_light.png";
import image4Dark from "../assets/auto_dark.png";

const featureList: string[] = [
    "CS2多账户库存组件存取",
    "Steam市场自动捡漏/指定磨损模版",
    "Buff/UU多平台自动捡漏",
    "BN自动量化交易/多源性策略知识蒸馏学习",
];

interface FeatureProps {
    title: string;
    description: string;
    imageLight: string;
    imageDark: string;
}

const features: FeatureProps[] = [
    {
        title: "CS2/Steam多账户库存管理及自动扫货",
        description:
            "支持对CS2和Steam多个账户的库存进行组件化存取，便于快速切换和管理，实现更高效的库存操作。同时，自动监控Steam市场，帮助您快速捡漏心仪物品，并支持指定磨损模版，提升捡漏效率。",
        imageLight: image4Light,
        imageDark: image4Dark,
    },
    {
        title: "Buff/UU多平台自动捡漏及交易管理",
        description:
            "实现Buff、UU和ECO等多平台的自动上架、出售和扫货，全天候监控市场价格波动。支持一键批量上架和自动定价功能，确保物品以最佳价格出售，最大限度地提高盈利效率。同时，智能筛选高性价比商品，避免错过任何潜在的捡漏机会，助您在多平台交易中占据优势，确保利益最大化。",
        imageLight: image3Light,
        imageDark: image3Dark,
    },
    {
        title: "BN自动量化/多源性策略知识蒸馏学习交易",
        description:
            "通过BN平台的自动量化交易和多源性策略知识蒸馏学习，助您实现更智能、更高效的交易策略。",
        imageLight: image2Light,
        imageDark: image2Light,
    },
];

export const Features = () => {
    const { theme } = useTheme(); // 获取当前主题

    return (
        <section id="features" className="container py-24 sm:py-32 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
                多款{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          定制软件
        </span>
            </h2>

            <div className="flex flex-wrap md:justify-center gap-4">
                {featureList.map((feature: string) => (
                    <div key={feature}>
                        <Badge variant="secondary" className="text-sm">
                            {feature}
                        </Badge>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map(({ title, description, imageLight, imageDark }: FeatureProps) => (
                    <Card key={title}>
                        <CardHeader>
                            <CardTitle>{title}</CardTitle>
                        </CardHeader>

                        <CardContent>{description}</CardContent>

                        <CardFooter>
                            <img
                                src={theme === "dark" ? imageDark : imageLight}
                                alt="功能介绍"
                                className="w-[200px] lg:w-[300px] mx-auto"
                            />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};
