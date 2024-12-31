import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Profile({
  profile = "https://github.com/shadcn.png",
}: {
  profile?: string;
}) {
  return (
    <Avatar>
      <AvatarImage src={profile} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
