"use client";

import { type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SITE } from "@/lib/data";

const ENGAGEMENT_OPTIONS = [
  "Full-time",
  "Contract",
  "Freelance / project-based",
  "Not sure yet",
];

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const company = String(formData.get("company") ?? "");
    const role = String(formData.get("role") ?? "");
    const engagement = String(formData.get("engagement") ?? "");
    const link = String(formData.get("link") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = `Portfolio inquiry from ${name} at ${company}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Role hiring for: ${role}`,
      `Engagement type: ${engagement}`,
      link ? `Link: ${link}` : null,
      "",
      "Message:",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2"
    >
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">Your name</Label>
        <Input id="name" name="name" required autoComplete="name" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Work email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" required autoComplete="organization" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="role">Role you&rsquo;re hiring for</Label>
        <Input id="role" name="role" required placeholder="Senior Product Designer" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="engagement">Engagement type</Label>
        <Select name="engagement" defaultValue={ENGAGEMENT_OPTIONS[0]}>
          <SelectTrigger id="engagement" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {ENGAGEMENT_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="link">LinkedIn or job posting (optional)</Label>
        <Input id="link" name="link" type="url" placeholder="https://" />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <Label htmlFor="message">What are you looking for?</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell me a bit about the role, team, and problem you're solving."
        />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full gap-1.5 sm:w-auto">
          Send message
          <ArrowUpRight className="size-4" />
        </Button>
        <p className="mt-2 text-xs text-muted-foreground">
          Opens your email app with this pre-filled. Nothing sends until you
          hit send there.
        </p>
      </div>
    </form>
  );
}
