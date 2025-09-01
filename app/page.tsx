import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login"); // redireciona no servidor, sem página em branco
}
