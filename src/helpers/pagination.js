const paginated = ({ list, total: { count } }, { query, baseUrl }) => {
  return {
    pagination: {
      offset: Number(query.offset),
      limit: Number(query.limit),
      total: Number(count),
    },
    data: list,
    navigation: {
      next: `${baseUrl}/?offset=${Number(query.offset) + 1}&limit=${
        query.limit
      }`,
      prev: `${baseUrl}/?offset=${
        Number(query.offset) > 0 ? Number(query.offset) - 1 : 0
      }&limit=${query.limit}`,
    },
  };
};

module.exports = { paginated };
