import React from 'react'

// Book component

class Book extends React.Component{

    state = {
        selectedValue: ""
    }

    onSelectFormChange = (e) => {
        if(e.target.value !== 'true') {
            this.props.onSelectChange(this.props.id, e.target.value);
            console.log(this.props.shelf)
        }
        e.preventDefault();
    }

    onClickFormChange = (e) => {
        console.log("this.props.status", this.props.shelf);
        this.setState( {
            selectedValue: this.props.shelf
        })
        e.preventDefault();

    }
    componentDidMount() {
        this.setState( {
            selectedValue: this.props.shelf
        })
    }

    render() {

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style = {this.props.style}></div>
                        <div className="book-shelf-changer">
                            <select id="bookStatusList"
                                    value={this.state.selectedValue}
                                    onClick= {(e) => this.onClickFormChange(e)}
                                    onChange={(e) => this.onSelectFormChange(e)}
                                    >
                                <option id = "move" value="move" disabled>Move to...</option>
                                <option id = "currentlyReading" value="currentlyReading">Currently Reading</option>
                                <option id = "wantToRead" value="wantToRead">Want to Read</option>
                                <option id = "read" value="read">Read</option>
                                <option id = "none" value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    {console.log("auth", this.props)}
                    <div className="book-authors">{this.props.author?this.props.author.join():""}</div>
                </div>
            </li>
        )
    }
}

export default Book
