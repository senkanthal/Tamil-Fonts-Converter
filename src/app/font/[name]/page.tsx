import FontPage from '@/ui/fontPage/FontPage';

export default async function FontDetailPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return <FontPage fontName={name} />;
}
