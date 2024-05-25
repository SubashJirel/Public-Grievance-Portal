/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BpDeN50RI8e
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from '@/components/ui/label';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <section className="w-full max-w-2xl mx-auto py-12 md:py-16">
      <div className="px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Citizen Voice Portal
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-[650px] mx-auto">
            Submit your complaints and concerns, and we'll make sure they're
            addressed.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <form className="grid gap-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="Complaint-type">Complaint Type</Label>
                <Select id="Complaint-type">
                  <SelectTrigger>
                    <SelectValue placeholder="Select Complaint type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="infrastructure">
                      Infrastructure
                    </SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                    <SelectItem value="sanitation">Sanitation</SelectItem>
                    <SelectItem value="Bribery">Bribery</SelectItem>
                    <SelectItem value="Murder/violence">
                      Murder/violence
                    </SelectItem>
                    <SelectItem value="Natural Disaster">
                      Natural Disaster
                    </SelectItem>
                    <SelectItem value="Drug-abuse">Drug-abuse</SelectItem>
                    <SelectItem value="public-services">
                      Public Services
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
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
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="district">District</Label>
                <Select id="district">
                  <SelectTrigger>
                    <SelectValue placeholder="Select district" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="district-1">Kathmandu </SelectItem>
                    <SelectItem value="district-2">Bhaktapur </SelectItem>
                    <SelectItem value="district-3">Lalitpur </SelectItem>
                    <SelectItem value="district-4">Dolakha </SelectItem>
                    <SelectItem value="district-4">Kavre </SelectItem>
                    <SelectItem value="district-4">Sunsari </SelectItem>
                    <SelectItem value="district-4">Jhapa </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">Municiplaity</Label>
                <Select id="district">
                  <SelectTrigger>
                    <SelectValue placeholder="Select district" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="district-1">Municiplaity 1</SelectItem>
                    <SelectItem value="district-2">Municiplaity 2</SelectItem>
                    <SelectItem value="district-3">Municiplaity 3</SelectItem>
                    <SelectItem value="district-4">Municiplaity 4</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ward">Ward Number</Label>
                <Input
                  id="ward"
                  placeholder="Enter ward number"
                  type="number"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="details">Details</Label>
              <Textarea
                className="min-h-[150px]"
                id="details"
                placeholder="Provide details about your Complaint"
              />
            </div>

            <Button className="justify-center" type="submit">
              Submit Complaint
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
