import { getAllPosts } from '@/lib/mdx';
import BlogList from '@/components/BlogList';

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <BlogList posts={posts} />
    </section>
  );
}
