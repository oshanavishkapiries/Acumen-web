import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";

const ContactUs = () => {
  return (
    <>
      <section className="w-full py-12 flex flex-col items-center justify-center">
        <div className="grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in touch
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or need help? Reach out to our team through
              WhatsApp or give us a call.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#"
                target="_blank"
                className="inline-flex items-center justify-center rounded-md bg-green-500 px-6 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                WhatsApp
              </Link>
              <Link
                href="#"
                className="inline-flex bg-DarkBlue  hover:bg-DarkBlue/70 items-center justify-center rounded-md px-6 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call us
              </Link>
            </div>
          </div>
          <Card className="w-full border-none shadow-none">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[150px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-DarkBlue hover:bg-DarkBlue/70"
                >
                  Send message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
