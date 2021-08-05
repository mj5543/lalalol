import { rest } from 'msw';

// export const handlers = [
//   rest.get(
//     'https://api.github.com/users/mj5543',
//     (req, res, ctx) => {
//       return res(
//         ctx.status(200),
//         ctx.json({
//           userId: 1234,
//           id: 101,
//           title: 'Hello MSW!',
//           body: 'This is mocked response by handlers.ts',
//         }),
//       );
//     },
//   ),
// ];
export const handlers = [
  rest.get(
    'https://api.github.com/users/mj5543',
// 'https://jsonplaceholder.typicode.com/posts/100',
    async (req, res, ctx) => {
      const data = await ctx.fetch(req);
      return res(
        ctx.json({
          ...data,
          title: 'Title has been mocked',
        }),
      );
    },
  ),
];
// const userWorker = setupWorker(
//   rest.get('https://api.github.com/users/mj5543', async (req, res, ctx) => {
//     // Perform an original request to the intercepted request URL
//     const originalResponse = await ctx.fetch(req)
//     const originalResponseData = await originalResponse.json()
//     return res(
//       ctx.json({
//         location: originalResponseData.location,
//         firstName: 'Not the real first name',
//       }),
//     )
//   }),
// )
// userWorker.start()