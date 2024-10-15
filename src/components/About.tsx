import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  关于{" "}
                </span>
                我们的软件
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                我们的软件是一款专为Steam账户管理和BN平台交易优化而设计的工具，具有以下主要功能：
                <br/><br/>
                1. <strong>Steam账户管理</strong>：
                <ul className="list-disc ml-5">
                  <li><strong>组建存取</strong>：轻松管理多个Steam账户，实现快速登录和切换，提升操作效率。</li>
                  <li><strong>库存转移</strong>：一键转移Steam库存，简化物品管理流程。</li>
                  <li><strong>库存监控</strong>：实时监控库存变化，确保您及时掌握库存动态。</li>
                  <li><strong>多交易平台扫货</strong>：自动搜索和筛选多平台上的目标商品，帮助您发现最具价值的交易机会。
                  </li>
                  <li><strong>自动求购</strong>：一键修改求购物品，节省时间和精力。</li>
                </ul>
                <br/>
                2. <strong>BN平台自动更单系统</strong>：
                <ul className="list-disc ml-5">
                  <li><strong>复制顶级交易员</strong>：自动复制顶级交易员的交易操作。
                  </li>
                  <li><strong>自动跟踪预警</strong>：自动预警链上交易,帮助您迅速抓住盈利机会，降低交易风险。
                  </li>
                </ul>
                <br/>
                该软件旨在为用户提供全方位的Steam账户和BN交易管理服务，提升交易效率，最大化您的收益。
              </p>

            </div>

            <Statistics/>
          </div>
        </div>
      </div>
    </section>
  );
};
