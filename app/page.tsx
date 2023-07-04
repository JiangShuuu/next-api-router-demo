import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex h-screen items-center'>
      <div className='tooltip' data-tip='hello'>
        <button className='btn'>Hover me</button>
      </div>
    </main>
  );
}
