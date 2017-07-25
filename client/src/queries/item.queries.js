import gql from 'graphql-tag'

export default {
  getItemList: gql`query ItemListQuery {
    items {
      id
      name,
      owner {
        username
      }
    }
  }`,
  addItem: gql`mutation addNewItem ($name: String!, $desc: String, $ownerId: ID!) {
    addItem(name: $name, desc: $desc, ownerId: $ownerId) {
      id
    }
  }`
}
