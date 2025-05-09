import Image from "next/image";
import bg from "@/img/mianbaoren.png"
export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2   gap-16   font-[family-name:var(--font-geist-sans)]">

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div>mianbao.ren 一车面包人</div>
                <Image width={200} src={bg} alt={"一车面包人"}></Image>

                <a className="link" href={"https://soulstation.club"}>SoulStation 荣格八维测试</a>
                <a className="link" href={"https://www.jungus.cn/"}>荣格斯 荣格八维测试</a>
                <a className="link" href={"https://www.apesk.com/jungtest/"}>才储 荣格八维测试</a>
                <a className="link" href={"https://totypes.com/xinggeceshi.php"}>totypes 荣格八维测试</a>
                <a className="link" href={"https://www.16personalities.com/"}>16personalities(16P小人) NERIS测试</a>
            </main>


        </div>
    );
}
