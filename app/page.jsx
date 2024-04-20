import { redirect } from "next/navigation";

export default function Home() {
  redirect("/signin");
  return <main>main</main>;
}
