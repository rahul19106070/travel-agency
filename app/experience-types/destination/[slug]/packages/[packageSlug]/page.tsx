import PackageClient from "./PackageClient";
import { PACKAGES, type Package } from "@/app/data/packageData";

async function getPackage(
  slug: string,
  packageSlug: string
): Promise<Package | undefined> {
  await new Promise((res) => setTimeout(res, 2000));

  return PACKAGES.find(
    (p) => p.slug === slug && p.packageSlug === packageSlug
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; packageSlug: string }>;
}) {
  const { slug, packageSlug } = await params;

  const pkg = await getPackage(slug, packageSlug);

  if (!pkg) {
    return <div>Package not found</div>;
  }

return <PackageClient pkg={pkg as Package} />;
}