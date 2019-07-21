import Link from 'next/link';

const Index = () => (
    <div>
        <Link href="/about" title="About Page">
            <button>Go to About page</button>
        </Link>
        <p>Hello Next.js</p>
    </div>
)

export default Index;