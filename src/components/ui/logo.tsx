import Image from "next/image";

export default function Logo() {
  return (
    <div className="text-3xl font-bold flex items-center ">
      <Image
        src="/logo.png"
        alt="LumivoSoft Logo"
        className="rounded-full w-16"
        width={100}
        height={100}
      />
      <span>LumivoSoft</span>
    </div>
  );
}
