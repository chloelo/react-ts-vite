import { Chapter } from '../Types';

export const chapters: Chapter[] = [
  {
    id: 'ch01',
    name: '第一章',
    title: 'Describing the UI',
    sections: [
      {
        id: 'sec01',
        name: '第一節',
        title: 'Your First Component',
        challenges: [
          'Export the component',
          'Fix the return statement',
          'Spot the mistake',
          'Your own component',
        ],
      },
      {
        id: 'sec02',
        name: '第二節',
        title: 'Importing and Exporting Components',
        challenges: ['Split the components further'],
      },
      {
        id: 'sec03',
        name: '第三節',
        title: 'Writing Markup with JSX',
        challenges: ['Convert some HTML to JSX'],
      },
      {
        id: 'sec04',
        name: '第四節',
        title: 'JavaScript in JSX with Curly Braces',
        challenges: [
          'Fix the mistake',
          'Extract information into an object',
          'Write an expression inside JSX curly braces'
        ],
      },
      {
        id: 'sec05',
        name: '第五節',
        title: 'Passing Props to a Component',
        challenges: [
          'Extract a component',
          'Adjust the image size based on a prop',
          'Passing JSX in a <code>children</code> prop'
        ],
      },
      {
        id: 'sec06',
        name: '第六節',
        title: 'Conditional Rendering',
        challenges: [
          'Show an icon for incomplete items with <code>? :</code>',
          'Show the item importance with <code>&&</code>',
          'Refactor a series of <code>? :</code> to <code>if</code> and variables'
        ],
      },
      {
        id: 'sec07',
        name: '第七節',
        title: 'Rendering Lists',
        challenges: [
          'Splitting a list in two',
          'Nested lists in one component',
          'Extracting a list item component',
          'List with a separator'
        ],
      },
      {
        id: 'sec08',
        name: '第八節',
        title: 'Keeping Components Pure',
        challenges: [
          'Fix a broken clock',
          'Fix a broken profile',
          'Fix a broken story tray',
        ],
      }
    ],
  },
  {
    id: 'ch02',
    name: '第二章',
    title: 'Adding Interactivity',
    sections: [
      {
        id: 'sec01',
        name: '第一節',
        title: 'Responding to Events',
      },
      {
        id: 'sec02',
        name: '第二節',
        title: "A Component's Memory",
      },
      {
        id: 'sec03',
        name: '第三節',
        title: 'Render and Commit',
      },
      {
        id: 'sec04',
        name: '第四節',
        title: 'State as a Snapshot',
      },
      {
        id: 'sec05',
        name: '第五節',
        title: 'Queueing a Series of State Updates',
      },
      {
        id: 'sec06',
        name: '第六節',
        title: 'Updating Objects in State',
      },
      {
        id: 'sec07',
        name: '第七節',
        title: 'Updating Arrays in State',
      }
    ],
  },
  {
    id: 'ch03',
    name: '第三章',
    title: 'Managing State',
    sections: [
      {
        id: 'sec01',
        name: '第一節',
        title: 'Reacting to Input with State',
      },
      {
        id: 'sec02',
        name: '第二節',
        title: "Choosing the State Structure",
      },
      {
        id: 'sec03',
        name: '第三節',
        title: 'Sharing State Between Components',
      },
      {
        id: 'sec04',
        name: '第四節',
        title: 'Preserving and Resetting State',
      },
      {
        id: 'sec05',
        name: '第五節',
        title: 'Extracting State Logic into a Reducer',
      },
      {
        id: 'sec06',
        name: '第六節',
        title: 'Passing Data Deeply with Context',
      },
      {
        id: 'sec07',
        name: '第七節',
        title: 'Scaling Up with Reducer and Context',
      }
    ],
  },
  {
    id: 'ch04',
    name: '第四章',
    title: 'Escape Hatches',
    sections: [
      {
        id: 'sec01',
        name: '第一節',
        title: 'Referencing Values with Refs',
      },
      {
        id: 'sec02',
        name: '第二節',
        title: "Manipulating the DOM with Refs",
      },
      {
        id: 'sec03',
        name: '第三節',
        title: 'Synchronizing with Effects',
      },
      {
        id: 'sec04',
        name: '第四節',
        title: 'You Might Not Need an Effect',
      },
      {
        id: 'sec05',
        name: '第五節',
        title: 'Lifecycle of Reactive Effects',
      },
      {
        id: 'sec06',
        name: '第六節',
        title: 'Separating Events from Effects',
      },
      {
        id: 'sec07',
        name: '第七節',
        title: 'Removing Effect Dependencies',
      },
      {
        id: 'sec08',
        name: '第八節',
        title: 'Reusing Logic with Custom Hooks',
      }
      // 'Referencing Values with Refs',
      // "Manipulating the DOM with Refs",
      // 'Synchronizing with Effects',
      // 'You Might Not Need an Effect',
      // 'Lifecycle of Reactive Effects',
      // 'Separating Events from Effects',
      // 'Removing Effect Dependencies',
      // 'Reusing Logic with Custom Hooks',
    ],
  },
];

// export const challengesData = [
//   {
//     ch: chapters[0].id,
//     title: chapters[0].sections[0],
//     sec: 'sec01',
//     challenges: [
//       'Export the component',
//       'Fix the return statement',
//       'Spot the mistake',
//       'Your own component',
//     ],
//   },
//   {
//     ch: chapters[0].id,
//     sec: 'sec02',
//     challenges: ['Split the components further'],
//   },
//   {
//     ch: chapters[0].id,
//     sec: 'sec03',
//     challenges: ['Convert some HTML to JSX'],
//   },
//   {
//     ch: chapters[0].id,
//     sec: 'sec04',
//     challenges: [
//       'Fix the mistake',
//       'Extract information into an object',
//       'Write an expression inside JSX curly braces'
//     ],
//   },
//   {
//     ch: chapters[0].id,
//     sec: 'sec05',
//     challenges: [
//       'Extract a component',
//       'Adjust the image size based on a prop',
//       'Passing JSX in a <code>children</code> prop'
//     ],
//   },
//   {
//     ch: chapters[0].id,
//     sec: 'sec06',
//     challenges: [
//       'Show an icon for incomplete items with <code>? :</code>',
//       'Show the item importance with <code>&&</code>',
//       'Refactor a series of <code>? :</code> to <code>if</code> and variables'
//     ],
//   },
//   {
//     ch: chapters[0].id,
//     sec: 'sec07',
//     challenges: [
//       'Splitting a list in two',
//       'Nested lists in one component',
//       'Extracting a list item component',
//       'List with a separator'
//     ],
//   },
//   {
//     ch: chapters[0].id,
//     sec: 'sec08',
//     challenges: [
//       'Fix a broken clock',
//       'Fix a broken profile',
//       'Fix a broken story tray',
//     ],
//   },
// ];