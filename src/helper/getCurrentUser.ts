//Get current user from next-auth
import { useSession } from "next-auth/react";

export default function GetUser() {
  const { data: session } = useSession();
  if (session) {
    return session.user?.email;
  }
  return null;
}
