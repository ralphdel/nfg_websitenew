import { redirect } from "next/navigation";

export const metadata = {
  title: "RTQ | Nigerian Foundries Group"
};

export default async function RTQRedirectPage({ searchParams }) {
  const query = await searchParams;
  const params = new URLSearchParams();

  Object.entries(query || {}).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => params.append(key, item));
      return;
    }

    if (value !== undefined && value !== null) {
      params.set(key, value);
    }
  });

  redirect(`/rfq${params.toString() ? `?${params.toString()}` : ""}`);
}
