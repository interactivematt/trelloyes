import React from 'react'

export default class AddItemForm extends React.Component {
  onSubmitForm = (e) => {
    e.preventDefault()
    this.props.onAddItem(e.target.itemToAdd.value)
  }
  render() {
    /* TODO: need to wire up the form to add items in App state... */
    return (
      <form onSubmit={this.onSubmitForm}>
        <input
          name='itemToAdd'
          type='text'
          placeholder='carrots'
          aria-label='Shopping list item'
        />
        <button type='submit'>Add Item</button>
      </form>
    )
  }
}