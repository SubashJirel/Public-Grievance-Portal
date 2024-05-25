/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jJlJpEfdixl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <div className="flex justify-center mt-5">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Check Grievance Status</CardTitle>
          <CardDescription>
            Enter your tracking number to view the status of your grievance.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="tracking-number">Tracking Number</Label>
              <Input
                id="tracking-number"
                placeholder="Enter your tracking number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select id="state">
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bagmati">Bagmati</SelectItem>
                  <SelectItem value="gandaki">Gandaki</SelectItem>
                  <SelectItem value="Lumbini">Lumbini</SelectItem>
                  <SelectItem value="Karnali">Karnali</SelectItem>
                  <SelectItem value="Sudurpaschim">Sudurpaschim</SelectItem>
                  <SelectItem value="Madhesh">Madhesh</SelectItem>
                  <SelectItem value="Province 1">Province 1</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Button type="submit">Check Status</Button>
          </div>
          <div className="grid gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full p-2">
                  <CalendarCheckIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Grievance Submitted</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Your grievance has been received and is currently being
                    processed.
                  </p>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  May 25, 2024
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full p-2">
                  <CheckIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Grievance Resolved</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Your grievance has been addressed and the issue has been
                    resolved.
                  </p>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  May 30, 2024
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full p-2">
                  <ClockIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Grievance in Progress</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Your grievance is currently being addressed and is in
                    progress.
                  </p>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  May 28, 2024
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function CalendarCheckIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
