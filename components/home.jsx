import Link from 'next/link';
// import {
//   CollapsibleTrigger,
//   CollapsibleContent,
//   Collapsible,
// } from '@/components/ui/collapsible';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from './ui/collapsible';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  File Your Public Complaint
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Have your voice heard and get your concerns addressed by the
                  government. Our user-friendly portal makes it easy to submit
                  your Complaint.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/form"
                >
                  File a complaint
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/hero3.png"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                How the Citizen Voice Process Works
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our straightforward complaint process ensures your concerns are
                addressed efficiently. Follow these simple steps to get started.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Submit Your Complaint</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Use our online portal to file your Complaint with all the
                      necessary details.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Review and Acknowledgment
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Your Complaint will be reviewed, and you'll receive an
                      acknowledgment within 3 business days.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Resolution and Feedback
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We'll work to resolve your Complaint within 30 days and
                      provide you with regular updates.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/process3.png"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Find answers to common questions about the public Complaint
                process.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                What types of Complaints can I file?
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="text-gray-500 dark:text-gray-400">
                  You can file Complaints related to government services,
                  policies, or actions that directly affect you or your
                  community. This includes issues with public infrastructure,
                  social welfare programs, and more.
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                How long does the Complaint process take?
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="text-gray-500 dark:text-gray-400">
                  We aim to resolve Complaints within 30 days of submission.
                  However, the timeline may vary depending on the complexity of
                  the issue. You'll receive regular updates on the status of
                  your Complaint.
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                Can I track the status of my Complaint?
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="text-gray-500 dark:text-gray-400">
                  Yes, you can track the status of your Complaint through our
                  online portal. You'll receive updates at each stage of the
                  process, and you can also reach out to our support team for
                  additional information.
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                Is there a fee to file a Complaint?
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="text-gray-500 dark:text-gray-400">
                  No, there is no fee to file a public Complaint through our
                  portal. Our services are provided free of charge to ensure
                  accessibility for all citizens.
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>
    </main>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
