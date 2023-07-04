'use client';
import { useSelectedLayoutSegments } from 'next/navigation';

interface Props {
  id: number;
  children: React.ReactNode;
}

export default function Items({ id, children }: Props) {
  const segment = useSelectedLayoutSegments();
  console.log('renderLayout', id, segment);
  return (
    <div>
      <div>id:{id}</div>
      <div>{children}</div>
    </div>
  );
}
