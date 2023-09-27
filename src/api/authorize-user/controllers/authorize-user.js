"use strict";

module.exports = {
  async authorizeUser(ctx, next) {
    try {
      console.log(ctx.body);
      // const data = await strapi
      //   // .service("api::authorize-user.authorize-user")
      //   // .authorizeUser();
      // console.log(data, "data");
      return "OK";
      // ctx.body = data;
    } catch (err) {
      console.log(err);
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
