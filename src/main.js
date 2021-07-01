const render = require("./fromDelta");

const nestedLists = [
    {
        insert: "Item 1",
    },
    {
        insert: "\n",
        attributes: {
            list: "ordered",
        },
    },
    {
        insert: "Nested Item of 1",
    },
    {
        insert: "\n",
        attributes: {
            indent: 1,
            list: "ordered",
        },
    },
    {
        insert: "Nested Item of 1 (2)",
    },
    {
        insert: "\n",
        attributes: {
            indent: 1,
            list: "ordered",
        },
    },
    {
        insert: "Nested Nested Item",
    },
    {
        insert: "\n",
        attributes: {
            indent: 2,
            list: "ordered",
        },
    },
    {
        insert: "Nested Item of Item 1 (3)",
    },
    {
        insert: "\n",
        attributes: {
            indent: 1,
            list: "ordered",
        },
    },
    {
        insert: "Item 2",
    },
    {
        insert: "\n",
        attributes: {
            list: "ordered",
        },
    },
];

const strikethroughText = [
    {
        attributes: {
            strikethrough: true,
        },
        insert: "Glenn v. Brumby",
    },
    {
        insert: ", 663 F.3d 1312 (11th Cir. 2011)",
    },
    {
        attributes: {
            list: "ordered",
        },
        insert: "\n",
    },
    {
        attributes: {
            strikethrough: true,
        },
        insert: "Barnes v. City of Cincinnati",
    },
    {
        insert: ", 401 F.3d 729 (6th Cir. 2005)",
    },
    {
        attributes: {
            list: "ordered",
        },
        insert: "\n",
    },
];

console.log(render(strikethroughText));