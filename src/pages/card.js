import Image from "next/image";
export default function Card({ title, short, image, link }) {
  return (
    <div className="flex-none w-full md:w-96 rounded-md bg-slate-300/70 dark:bg-slate-900/70 snap-center">
      <Image
        src={image}
        alt={title}
        width={300}
        height={500}
        className="rounded-t-md w-full h-60"
      />
      <div className="p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm font-medium text-slate-900 dark:text-slate-300">
          {short}
        </p>
      </div>
    </div>
  );
}
