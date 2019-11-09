var graphql = require ('graphql');

// Here is some dummy data to make this piece of code simpler.
// It will be changeable after introducing mutation.
var TODOs = [
  {
    "id": 1,
    "desc": "Read emails",
    "status": false
  },
  {
    "id": 2,
    "desc": "Buy orange",
    "status": true
  }
];

var TodoType = new graphql.GraphQLObjectType({
  name: 'todo',
  fields: function () {
    return {
      id: {
        type: graphql.GraphQLInt
      },
      desc: {
        type: graphql.GraphQLString
      },
      status: {
        type: graphql.GraphQLBoolean
      }
    }
  }
});

var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      todos: {
        type: new graphql.GraphQLList(TodoType),
        resolve: function () {
          return TODOs;
        }
      }
    }
  }
});

var MutationAdd = {
  type: new graphql.GraphQLList(TodoType),
  description: 'Add a Todo',
  args: {
    desc: {
      name: 'Todo title',
      type: new graphql.GraphQLNonNull(graphql.GraphQLString)
    }
  },
  resolve: (root, {desc}) => {
    TODOs.push({
      id: Math.floor(Math.random() * Math.floor(10000)),
      desc: desc,
      status: false
    });
    return TODOs;
  }
};

var MutationUpdate = {
  type: new graphql.GraphQLList(TodoType),
  description: 'Change a Todo',
  args: {
    id: {
      name: 'Todo id',
      type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
    }
  },
  resolve: (root, {id}) => {
    for (let i = 0; i < TODOs.length; i++) {
      if (TODOs[i].id == id) {
        TODOs[i].status = true;
      }
    }

    return TODOs;
  }
};

var MutationRemove = {
  type: new graphql.GraphQLList(TodoType),
  description: 'Remove a Todo',
  args: {
    id: {
      name: 'Todo id',
      type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
    }
  },
  resolve: (root, {id}) => {
    let counter = 0;
    for (let i = 0; i < TODOs.length; i++) {
      if (TODOs[i].id == id) {
        counter = i;
      }
    }

    TODOs.splice(counter, 1);

    return TODOs;
  }
};

var MutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    add: MutationAdd,
    update: MutationUpdate,
    remove: MutationRemove
  }
});

module.exports = new graphql.GraphQLSchema({
  query: queryType,
  mutation: MutationType
});
