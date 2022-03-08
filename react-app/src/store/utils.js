
export const normalizePosts = (posts) => {
  return posts.reduce((acc, post) => {
    post.comments = post.comments.reduce((acc, comment) => {
      acc[comment.id] = comment;
      return acc;
    }, {})

    acc[post.id] = post;
    return acc;
  }, {});
};

export const orderPostIds = (posts) => posts.map(post => post.id);

