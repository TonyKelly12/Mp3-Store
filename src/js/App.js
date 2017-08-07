/**
 * Created by toned_000 on 3/5/2017.
 */

import React from 'react';

export class App extends React.Component {
    //constructor and super should alwasy pass props
    constructor(props) {
        super(props);
        //list of items
        this.state = {
            buyItems: ['milk', 'bread', 'fruit']
        }
    }
    //Method to add item
    addItem(e) {
        //keeps page from refreshing
        e.preventDefault();
        //gets current list of items
        const {buyItems} = this.state;
        //sets the value of new item to whats being input in the list
        const newItem = this.newItem.value;
        //Validates if item is on list
        const isOnList = buyItems.includes(newItem);

        //valadation statement to make sure form not emapty
        if (isOnList) {
            this.setState({message: 'This item is already on the list.'})
        } else {
            newItem !== '' && this.setState({
                //the ... spreads out the already existing items
                buyItems: [
                    ...this.state.buyItems,
                    newItem
                ],
                //adds a message to the state
                message: ""
            })
        }
        this
            .addForm
            .reset();
    }

    removeItem(item) {
        // this.state.buyItems gets old state .filter loops through each item as buyItem
        // and compares with return statement
        const newBuyItems = this
            .state
            .buyItems
            .filter(buyItem => {
                // the return statement only returns the item if it does not match the (item)
                // clicked
                return buyItem !== item;
            })
        //this sets the state of buyItems to newBuyItems. **varaible is still buyItems**
        this.setState({
            buyItems: [...newBuyItems]
        })

        // this if statement checks to see if there are no items on list if so it
        // displays empty list message
        if (newBuyItems.length === 0) {
            this.setState({message: "No Items left in the list. Add Some!"})

        }

    }

    clearAll() {
        this.setState({buyItems: [], message: "No Items Left you cleared them all out"})
    }
    render() {
        const {buyItems, message} = this.state
        return (
            <div>
                <header>
                    <h1>Shopping List</h1>

                    <form
                        ref={input => this.addForm = input}
                        className="form-inline"
                        onSubmit={(e) => {
                        this.addItem(e)
                    }}>
                        <div className="form-group">
                            <label htmlFor="newItemInput" className="sr-only">Add New Item</label>
                            <input
                                ref={input => this.newItem = input}
                                type="text"
                                placeholder='Bread'
                                className="form-control"
                                id='newItemInput'/>
                        </div>
                        <button type='submit' className="btn btn-primary">Add</button>
                    </form>
                </header>

                <div className="content">
                    {(message !== '' || buyItems === 0) && <p className='message text-danger'>{message}</p>}

                    {buyItems.length > 0 && <table className="table">
                        <caption>Optional tabel Caption</caption>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {buyItems.map(item => {
                                // each item needs a key that is unique if repeated item is added this return
                                // statement wouldnt work
                                return (
                                    <tr key={item}>
                                        <th scope='row'>1</th>
                                        <td>{item}</td>
                                        <td>
                                            <button
                                                onClick={(e) => this.removeItem(item)}
                                                type='button'
                                                className="btn btn-default btn-sm">
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan='2'>&nbsp;</td>
                                <td className="text-right">
                                    <button onClick={(e) => this.clearAll()} className="btn btn-default btn-sm">Clear List</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
}
                </div>
            </div>
        )
    }
}

//Validation