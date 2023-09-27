module.exports = {
  postsReport: async () => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany("admin::api-token", {
        fields: ["id"],
      });

      console.log(entries);

      // reduce the data to the format we want to return
      // let entriesReduced;
      // if (entries && Array.isArray(entries)) {
      //   entriesReduced = entries.reduce((acc, item) => {
      //     acc = acc || [];
      //     acc.push({
      //       id: item.id,
      //       title: item.title || "",
      //       category: item.category.name || "",
      //       publishedDate: new Date(item.createdAt).toDateString() || "",
      //       authorName: item.author?.name || "",
      //       authorEmail: item.author?.email || "",
      //     });
      //     return acc;
      //   }, []);
      // }

      // return the reduced data
      return entries;
    } catch (err) {
      return err;
    }
  },
};
