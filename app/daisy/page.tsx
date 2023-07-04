export default function page() {
  console.log('get');
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='tooltip' data-tip='hello'>
        <button className='btn'>Hover me</button>
      </div>
    </div>
  );
}
