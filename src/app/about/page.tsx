// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto justify-center py-8">
      <h1 className="text-2xl text-center font-bold mb-4 justify-center">
        About Me
      </h1>
      <div className="flex items-center mb-6 justify-center">
        <Image
          src="https://github.com/raihanmaulana.png"
          alt="Icon"
          width={70}
          height={70}
          className="mr-4"
        />
        <p className="text-lg justify-center">
          Saya adalah Seorang Backend Developer dengan basic PHP dan framework
          Laravel. Goals saya adalah untuk belajar lebih banyak mengenai
          programming.
        </p>
      </div>
      <div className="mt-8 text-center ">
        <Link href="/">
          <div className="inline-block bg-blue-500 text-white py-2 px-4 rounded shadow text-center hover:bg-blue-600">
            Back to Home
          </div>
        </Link>
      </div>
    </div>
  );
}
