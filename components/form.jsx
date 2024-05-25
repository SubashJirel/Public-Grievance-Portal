import Link from 'next/link';
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from './ui/collapsible';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-gray-100 dark:bg-gray-800">
        <Link className="mr-6 flex items-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Citizen Voice Portal</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4">
          <Link
            className="inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            File a Complaint
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                File Your Public Complaint
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Fill out the form below to submit your Complaint.
              </p>
            </div>
            <form className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="address"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="Complaint">Complaint Details</Label>
                <Textarea
                  className="min-h-[200px]"
                  id="Complaint"
                  placeholder="Describe your Complaint in detail"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="supporting-docs">Supporting Documents</Label>
                <Input id="supporting-docs" type="file" />
              </div>
              <Button className="w-full" type="submit">
                Submit Complaint
              </Button>
            </form>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            © 2024 Public Complaint Portal. All rights reserved.
          </div>
          <nav className="flex items-center space-x-4">
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 text-sm"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 text-sm"
              href="#"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
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

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
