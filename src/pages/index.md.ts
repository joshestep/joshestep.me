import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Josh Estep (@joshcestep)

Infrastructure automation and exploring how AI agents can assist operational engineering workflows.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- Twitter: [@joshcestep](https://twitter.com/joshcestep)
- GitHub: [@joshestep](https://github.com/joshestep)
- Email: joshestep22@gmail.com

---

*This is the markdown-only version of joshestep.me. Visit [joshestep.me](https://joshestep.me) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
