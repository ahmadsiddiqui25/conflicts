export type Step = {
  number: number;
  label: string;
  href: string;
};

export const STEPS: Step[] = [
  { number: 1, label: "Create Room", href: "/create" },
  { number: 2, label: "Define ASKs", href: "/create/asks" },
  { number: 3, label: "Invite", href: "/create/invite" },
  { number: 4, label: "Private Chat", href: "/conversation" },
  { number: 5, label: "Translation", href: "/conversation/translation" },
  { number: 6, label: "Shared Room", href: "/room" },
  { number: 7, label: "Agreement", href: "/room/agreement" },
  { number: 8, label: "Close Room", href: "/room/closed" },
];

export function stepForPath(pathname: string): Step | undefined {
  return [...STEPS].reverse().find((step) => pathname.startsWith(step.href));
}
