
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

export const orderPostIds = (posts) => {
  const orderedIds = [];
  for (let i = posts.length - 1; i > -1; i--) {
    orderedIds.push(posts[i].id)
  }

  return orderedIds;
}
