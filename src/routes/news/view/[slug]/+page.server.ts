export const load = async ({ params }) => {
  try {
    const post = await import(`../../posts/${params.slug}.svx`);
    const metadata = post.metadata;

    return {
      meta: {
        title: metadata.title,
        description: metadata.description,
        path: `/news/view/${params.slug}`,
        image: metadata.image,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      meta: {
        title: '投稿が見つかりません',
      },
    };
  }
};
