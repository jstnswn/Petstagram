
export const normalizePosts = (posts) => {
  return posts.reduce((acc, post) => {
    acc[post.id] = post;
    return acc;
  }, {});
};

export const orderPostIds = (posts) => posts.map(post => post.id);
