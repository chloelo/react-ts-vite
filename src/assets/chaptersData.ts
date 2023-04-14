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
        challenges: [
          'Fix an event handler',
          'Wire up the events'
        ],
      },
      {
        id: 'sec02',
        name: '第二節',
        title: "State: A Component's Memory",
        challenges: [
          'Complete the gallery',
          'Fix stuck form inputs',
          'Fix a crash',
          'Remove unnecessary state'
        ],
      },
      {
        id: 'sec03',
        name: '第三節',
        title: 'Render and Commit',
        challenges: [

        ],
      },
      {
        id: 'sec04',
        name: '第四節',
        title: 'State as a Snapshot',
        challenges: [
          'Implement a traffic light'
        ],
      },
      {
        id: 'sec05',
        name: '第五節',
        title: 'Queueing a Series of State Updates',
        challenges: [
          'Fix a request counter',
          'Implement the state queue yourself'
        ],
      },
      {
        id: 'sec06',
        name: '第六節',
        title: 'Updating Objects in State',
        challenges: [
          'Fix incorrect state updates',
          'Find and fix the mutation',
          'Update an object with Immer',
        ],
      },
      {
        id: 'sec07',
        name: '第七節',
        title: 'Updating Arrays in State',
        challenges: [
          'Update an item in the shopping cart',
          'Remove an item from the shopping cart',
          'Fix the mutations using non-mutative methods',
          'Fix the mutations using Immer'
        ],
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
        challenges: [
          'Add and remove a CSS class',
          'Profile editor',
          'Refactor the imperative solution without React'
        ],
      },
      {
        id: 'sec02',
        name: '第二節',
        title: "Choosing the State Structure",
        challenges: [
          'Fix a component that’s not updating',
          'Fix a broken packing list',
          'Fix the disappearing selection',
          'Implement multiple selection',
        ],
      },
      {
        id: 'sec03',
        name: '第三節',
        title: 'Sharing State Between Components',
        challenges: [
          'Synced inputs',
          'Filtering a list'
        ],
      },
      {
        id: 'sec04',
        name: '第四節',
        title: 'Preserving and Resetting State',
        challenges: [
          'Fix disappearing input text',
          'Swap two form fields',
          'Reset a detail form',
          'Clear an image while it’s loading',
          'Fix misplaced state in the list',
        ],
      },
      {
        id: 'sec05',
        name: '第五節',
        title: 'Extracting State Logic into a Reducer',
        challenges: [
          'Dispatch actions from event handlers',
          'Clear the input on sending a message',
          'Restore input values when switching between tabs',
          'Implement useReducer from scratch',
        ],
      },
      {
        id: 'sec06',
        name: '第六節',
        title: 'Passing Data Deeply with Context',
        challenges: [
          'Replace prop drilling with context'
        ],
      },
      {
        id: 'sec07',
        name: '第七節',
        title: 'Scaling Up with Reducer and Context',
        challenges: [

        ],
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
        challenges: [
          'Fix a broken chat input',
          'Fix a component failing to re-render',
          'Fix debouncing',
          'Read the latest state',
        ],
      },
      {
        id: 'sec02',
        name: '第二節',
        title: "Manipulating the DOM with Refs",
        challenges: [
          'Play and pause the video',
          'Focus the search field',
          'Scrolling an image carousel',
          'Focus the search field with separate components',
        ],
      },
      {
        id: 'sec03',
        name: '第三節',
        title: 'Synchronizing with Effects',
        challenges: [
          'Focus a field on mount',
          'Focus a field conditionally',
          'Fix an interval that fires twice',
          'Fix fetching inside an Effect',
        ],
      },
      {
        id: 'sec04',
        name: '第四節',
        title: 'You Might Not Need an Effect',
        challenges: [
          'Transform data without Effects',
          'Cache a calculation without Effects',
          'Reset state without Effects',
          'Submit a form without Effects',
        ],
      },
      {
        id: 'sec05',
        name: '第五節',
        title: 'Lifecycle of Reactive Effects',
        challenges: [
          'Fix reconnecting on every keystroke',
          'Switch synchronization on and off',
          'Investigate a stale value bug',
          'Fix a connection switch',
          'Populate a chain of select boxes',
        ],
      },
      {
        id: 'sec06',
        name: '第六節',
        title: 'Separating Events from Effects',
        challenges: [
          'Fix a variable that doesn’t update',
          'Fix a freezing counter',
          'Fix a non-adjustable delay',
          'Fix a delayed notification',
        ],
      },
      {
        id: 'sec07',
        name: '第七節',
        title: 'Removing Effect Dependencies',
        challenges: [
          'Fix a resetting interval ',
          'Fix a retriggering animation',
          'Fix a reconnecting chat',
          'Fix a reconnecting chat, again',
        ],
      },
      {
        id: 'sec08',
        name: '第八節',
        title: 'Reusing Logic with Custom Hooks',
        challenges: [
          'Extract a <code>useCounter</code> Hook',
          'Make the counter delay configurable',
          'Extract <code>useInterval</code> out of <code>useCounter</code>',
          'Fix a resetting interval',
          'Implement a staggering movement',
        ],
      }
    ],
  },
];
