// import { newSpecPage } from '@stencil/core/testing';
// import { Image } from './image';

// describe('pf-image', () => {
//   it('renders', async () => {
//     const { root } = await newSpecPage({
//       components: [Image],
//       html: '<pf-image></pf-image>',
//     });
//     expect(root).toEqualHtml(`
//       <pf-image>
//         <mock:shadow-root>
//           <div>
//             Hello, World! I'm
//           </div>
//         </mock:shadow-root>
//       </pf-image>
//     `);
//   });

//   it('renders with values', async () => {
//     const { root } = await newSpecPage({
//       components: [Image],
//       html: `<pf-image first="Stencil" last="'Don't call me a framework' JS"></pf-image>`,
//     });
//     expect(root).toEqualHtml(`
//       <pf-image first="Stencil" last="'Don't call me a framework' JS">
//         <mock:shadow-root>
//           <div>
//             Hello, World! I'm Stencil 'Don't call me a framework' JS
//           </div>
//         </mock:shadow-root>
//       </pf-image>
//     `);
//   });
// });
