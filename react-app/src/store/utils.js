
export const normalizePosts = (posts) => {
  return posts.reduce((acc, post) => {
    acc[post.id] = post;
    return acc;
  }, {});
};
