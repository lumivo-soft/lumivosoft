import Image from "next/image";

export default function Logo({ white }: { white?: boolean }) {
  return (
    <div className="text-3xl font-bold flex items-center ">
      {white ? (
        <Image
          src="/logo-white.png"
          alt="LumivoSoft Logo"
          className="w-10 mr-3"
          width={100}
          height={100}
        />
      ) : (
        <Image
          src="/logo.png"
          alt="LumivoSoft Logo"
          className="w-16"
          width={100}
          height={100}
        />
      )}
      <span className={white ? "text-white" : "text-black"}>LumivoSoft</span>
    </div>
  );
}
