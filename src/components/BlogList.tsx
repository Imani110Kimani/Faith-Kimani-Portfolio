import Link from 'next/link';

export default function BlogList({ posts }: { posts: any[] }) {
  return (
    <div className="flex flex-col gap-6">
      {posts.map(post => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="block p-4 rounded border bg-white dark:bg-stone-900 hover:shadow">
          <h2 className="text-xl font-bold mb-1">{post.meta.title}</h2>
          <div className="text-xs text-stone-400 mb-2">{post.meta.date}</div>
          <p className="text-stone-600 dark:text-stone-300">{post.meta.description}</p>
        </Link>
      ))}
    </div>
  );
}
