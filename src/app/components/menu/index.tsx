import Link from 'next/link';
 
export default function Menu() {
  return (
    <ul className='flex gap-10'>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="../pages/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
    </ul>
  );
}