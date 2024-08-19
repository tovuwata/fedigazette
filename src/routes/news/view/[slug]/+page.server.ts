export const load = async ({ params }) => {
  try {
    const post = await import(`../../posts/${params.slug}.svx`);
    const metadata = post.metadata;

    return {
      meta: {
        title: metadata.title,
        description: metadata.description,
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
