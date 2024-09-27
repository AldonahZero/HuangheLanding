import {Button} from "./ui/button";
import {buttonVariants} from "./ui/button";
import {HeroCards} from "./HeroCards";
import {GitHubLogoIcon} from "@radix-ui/react-icons";

export const Hero = () => {
    return (
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
            <div className="text-center lg:text-start space-y-6">
                <main className="text-5xl md:text-6xl font-bold">
                    <h1 className="inline">
                        <span
                            className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                          HuangHe
                        </span>{" "}
                        黄河
                    </h1>{" "}
                    为{" "}
                    <h2 className="inline">
                        <span
                            className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">CS</span>{" "}与
                        <span
                            className="inline bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D97706] text-transparent bg-clip-text">BN</span>{" "}
                        开发软件及脚本
                    </h2>

                </main>

                <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    轻松管理您的虚拟资产，包含所需的各个部分。
                </p>

                <div className="space-y-4 md:space-y-0 md:space-x-4">
                    <Button className="w-full md:w-1/3">开始使用</Button>

                    <a
                        rel="noreferrer noopener"
                        href="https://github.com/AldonahZero"
                        target="_blank"
                        className={`w-full md:w-1/3 ${buttonVariants({
                            variant: "outline",
                        })}`}
                    >
                        GitHub 仓库
                        <GitHubLogoIcon className="ml-2 w-5 h-5"/>
                    </a>
                </div>
            </div>

            {/* Hero cards sections */}
            <div className="z-10">
                <HeroCards/>
            </div>

            {/* Shadow effect */}
            <div className="shadow"></div>
        </section>
    );
};
