import {Card, CardContent, CardHeader, CardTitle} from "./ui/card";
import {MedalIcon, MapIcon, PlaneIcon, GiftIcon} from "../components/Icons";
interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const features: FeatureProps[] = [
    {
        icon: <MedalIcon/>,
        title: "速度最快",
        description:
            "我们的软件采用高效的架构和算法，确保Steam账户管理和BN平台交易操作的响应速度，快速完成交易和库存管理。",
    },
    {
        icon: <MapIcon/>,
        title: "功能最齐全",
        description:
            "集成Steam账户管理、库存转移、库存监控、多交易平台扫货、顶求购以及BN平台自动更单等多种功能，满足您对交易管理的所有需求。",
    },
    {
        icon: <PlaneIcon/>,
        title: "快速研发更新",
        description:
            "我们拥有专业的研发团队，持续改进和优化软件，定期推出更新版本，确保您始终获得最新最稳定的功能体验。",
    },
    {
        icon: <GiftIcon/>,
        title: "游戏化",
        description:
            "将游戏化设计理念融入软件操作流程，使用户在使用过程中更加轻松愉快，提高软件使用体验。",
    },
];

export const HowItWorks = () => {
    return (
        <section
            id="howItWorks"
            className="container text-center py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold ">
                我们的
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          软件
        </span>
                优点
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                白云山系列软件优势
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(({icon, title, description}: FeatureProps) => (
                    <Card
                        key={title}
                        className="bg-muted/50"
                    >
                        <CardHeader>
                            <CardTitle className="grid gap-4 place-items-center">
                                {icon}
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
