import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"; // 确保导入 Avatar 相关组件
import Dashan from "../assets/dashan.png";
import Xiaotu from "../assets/xiaotu.png";
import Pun from '../assets/pun.png';
import Huigui from '../assets/huigui.png';

interface SponsorProps {
  imageSrc: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    imageSrc: Dashan,
    name: "大山",
  },
  {
    imageSrc: Xiaotu,
    name: "小兔",
  },
  {
    imageSrc: Pun,
    name: "Punctual",
  },
  {
    imageSrc: Huigui,
    name: "回归",
  }
];

export const Sponsors = () => {
  return (
      <section id="sponsors" className="container pt-24 sm:py-32">
        <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
          Investors and founders
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {sponsors.map(({ imageSrc, name }: SponsorProps) => (
              <div key={name} className="flex items-center gap-2 text-muted-foreground/60">
                <Avatar>
                  <AvatarImage alt={name} src={imageSrc} />
                  <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
          ))}
        </div>
      </section>
  );
};
