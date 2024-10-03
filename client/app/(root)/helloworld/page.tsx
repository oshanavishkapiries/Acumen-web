import Link from "next/link";

import { ArrowLeftIcon } from "lucide-react";
import { Form } from "@/components/special/helloworldComponents/Form";

const page = () => {
  return (
    <main className="w-full min-h-screen p-5 bg-DarkBlue text-white">
      <section className="py-24 lg:py-32 xl:py-48 mx-auto container relative">
        <Link
          href="/"
          className="flex absolute top-5 left-5 items-center justify-center border rounded-full w-10 h-10"
          prefetch={false}
        >
          <ArrowLeftIcon className="h-4 w-4" />
        </Link>
        <div className="flex flex-col items-center justify-center px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-4xl max-md:text-center font-bold tracking-tighter sm:text-5xl">
              &lt; Hello World /&gt;
            </h2>
            <p className="md:text-xl/relaxed">
              Surge provides everything from expert advice to dedicated
              staffing,<br></br>
              taking your business from idea to implementation.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto relative grid grid-cols-1 md:grid-cols-2">
        <div className="bg-red-400 ">
          
        </div>
        <Form />
      </section>
    </main>
  );
};

export default page;
