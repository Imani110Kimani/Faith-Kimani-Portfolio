import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export async function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug: filename.replace(/\.mdx$/, ''),
      meta: data,
      content,
    };
  });
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content, { scope: data });
  return {
    slug,
    meta: data,
    source: mdxSource,
  };
}
