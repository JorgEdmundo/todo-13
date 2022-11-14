import Link from 'next/Link';

export default function Header() {
  return (
    <div className="header">
      <div className="main-nav">
        <h2>TODO XIII</h2>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}