import React from 'react'

class Book extends React.Component{

    state = {
        selectedValue: ""
    }

    onSelectFormChange = (e) => {
        if(e.target.value != 'true') {
            console.log("id shelf", this.props.id, e.target.value);
            this.props.onSelectChange(this.props.id, e.target.value);
        }
    }
    render() {

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style = {this.props.style}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(e)=>this.onSelectFormChange(e)}>
                                    <option value="move" disabled selected value>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.author}</div>
                </div>
            </li>
        )
    }
}

export default Book
