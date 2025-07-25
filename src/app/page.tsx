export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center ">
        Welcome to LumivoSoft!
      </h1>
      <p className="mt-4">Under Development</p>
      <img
        src="./under-development.svg"
        alt="development"
        className="w-[700px] h-[700px]"
      />
    </div>
  );
}
