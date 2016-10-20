// JSX renders 'className' into class

 // 8888o. 888888 .o8888 88 8888o.    88     888888 88  88 888888 88        .o88o. 8888o. 888888 
 // 88  88 88     88     88 88  88    88     88     88  88 88     88        88  88 88  88 88     
 // 8888Y' 8888   88  88 88 88  88    88     8888   88  88 8888   88        88  88 88  88 8888   
 // 88  88 88     88  88 88 88  88    88     88     88 .8' 88     88        88  88 88  88 88     
 // 8888Y' 888888 'Y8888 88 88  88    888888 888888 888'   888888 888888    'Y88Y' 88  88 888888 


// class StoryBox extends React.Component{
// 	render(){

// 		const now = new Date();
// 		const topicsList = ['HTML','Javascript','React'];

// 		return (<div>
// 			<h3>Stories App</h3>
// 			<p className="lead">
// 				Current Time: {now.toTimeString()}
// 			</p>
// 			<ul>
// 				{topicsList.map(topic => <li>{topic}</li>)}
// 			</ul>
// 		</div>);
// 	}
// }


// ReactDOM.render(<StoryBox />, document.getElementById('story-app'));

//  // 888888 8888o. 8888o.    88     888888 88  88 888888 88        .o88o. 8888o. 888888 
//  // 88     88  88 88  88    88     88     88  88 88     88        88  88 88  88 88     
//  // 8888   88  88 88  88    88     8888   88  88 8888   88        88  88 88  88 8888   
//  // 88     88  88 88  88    88     88     88 .8' 88     88        88  88 88  88 88     
//  // 888888 88  88 8888Y'    888888 888888 888'   888888 888888    'Y88Y' 88  88 888888 

 

//  // 8888o. 888888 .o8888 88 8888o.    88     888888 88  88 888888 88        888888 88 88 88 .o88o. 
//  // 88  88 88     88     88 88  88    88     88     88  88 88     88          88   88 88 88 88  88 
//  // 8888Y' 8888   88  88 88 88  88    88     8888   88  88 8888   88          88   88 88 88 88  88 
//  // 88  88 88     88  88 88 88  88    88     88     88 .8' 88     88          88   88 88 88 88  88 
//  // 8888Y' 888888 'Y8888 88 88  88    888888 888888 888'   888888 888888      88   888888Y' 'Y88Y' 


// class Comment extends React.Component{
// 	render() {
// 		return (
// 			<div className="comment">
// 				<p className="comment-header">{this.props.author}</p>
// 				<p className="comment-body">
// 					{this.props.body}
// 				</p>
// 				<div className="comment-footer">
// 					<a href="#" className="comment-footer-delete">
// 						Delete Comment
// 					</a>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// class CommentBox extends React.Component{
// 	render(){
// 		return (
// 			<div className="comment-box">
// 				<h3>Comments</h3>
// 				<h4 className="comment-count">2 comments</h4>
// 				<div className="comment-list">
// 					<Comment author="Morgan McCircuit" body="Great picture!"/>
// 					<Comment author="Bending Bender" body="Excellent stuff!"/>
// 				</div>
// 			</div>

// 		)
// 	}
// }

// ReactDOM.render(<CommentBox />,document.getElementById('story-app'));



// Dynamic Props


// class CommentBox extends React.Component{

// 	render(){
// 		const comments = this._getComments();
// 		return (
// 			<div className="comment-box">
// 				<h3>Comments</h3>
// 				<h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
// 				<div className="comment-list">
// 					{comments}
// 				</div>
// 			</div>
// 		);

// 	}

// 	_getCommentsTitle(commentCount) {
// 		if(commentCount === 0){
// 			return 'No comments yet';
// 		}else if(commentCount === 1){
// 			return '1 comment';
// 		}else{
// 			return `${commentCount} comments`;
// 		}

// 	}


// 	// use underscore to distinguish custom methods from React methods
// 	_getComments() { // returns array of dynamically-generated JSX elements
		
// 		const commentList = [
// 			{ id:1, author: 'Morgan McCircuit', body: 'Great picture!'},
// 			{ id:2, author: 'Lorem Ipsum', body: 'Really great picture!'},
// 			{ id:3, author: 'Bending Bender', body: 'Excellent stuff!'}
// 		];

// 		return commentList.map((comment)=>{
// 			return (<Comment author={comment.author} body={comment.body} key={comment.id} />);
// 				// pass comment's id as unique key; helps performance
// 		});

// 	}


// }

// ReactDOM.render(<CommentBox />,document.getElementById('story-app'));


 // 888888 8888o. 8888o.    88     888888 88  88 888888 88        888888 88 88 88 .o88o. 
 // 88     88  88 88  88    88     88     88  88 88     88          88   88 88 88 88  88 
 // 8888   88  88 88  88    88     8888   88  88 8888   88          88   88 88 88 88  88 
 // 88     88  88 88  88    88     88     88 .8' 88     88          88   88 88 88 88  88 
 // 888888 88  88 8888Y'    888888 888888 888'   888888 888888      88   888888Y' 'Y88Y' 


 // 8888o. 888888 .o8888 88 8888o.    88     888888 88  88 888888 88        888888 88  88 8888o. 888888 888888 
 // 88  88 88     88     88 88  88    88     88     88  88 88     88          88   88  88 88  88 88     88     
 // 8888Y' 8888   88  88 88 88  88    88     8888   88  88 8888   88          88   888888 8888Y' 8888   8888   
 // 88  88 88     88  88 88 88  88    88     88     88 .8' 88     88          88   88  88 88  88 88     88     
 // 8888Y' 888888 'Y8888 88 88  88    888888 888888 888'   888888 888888      88   88  88 88  88 888888 888888 


class Comment extends React.Component{
	constructor() {
		super();
		this.state = {isAbusive: false};
	}
	render() {
		let commentBody;
		if(!this.state.isAbusive){
	      commentBody = this.props.body;
	    }else{
	    	commentBody = <em>Content marked as abuse</em>;
	    }
		return (
			<div className="comment">
				<p className="comment-header">{this.props.author}</p>
				<p className="comment-body">
					{commentBody}
				</p>
				<div className="comment-footer">
					<a href="#" className="comment-footer-delete">
						Delete Comment
					</a>
					<a href="#" onClick={this._toggleAbuse.bind(this)}>Report as Abuse</a>
				</div>
			</div>
		)
	}
	_toggleAbuse(event){
		event.preventDefault();
	    this.setState({isAbusive: !this.state.isAbusive});
	}

}


// class CommentBox extends React.Component{
// 	constructor() {
// 		super();
// 		this.state = {
// 			showComments: false
// 		};
// 	}

// 	// this.setState({showComments:true});

// 	render(){
// 		const comments = this._getComments();
// 		let commentNodes;
// 		let buttonText = "Show comments";

// 		if (this.state.showComments){
// 			commentNodes = <div className="comment-list">{comments}</div>;
// 			buttonText="Hide comments";
// 		}
// 		return (
// 			<div className="comment-box">
// 				<button onClick={this._handleClick.bind(this)}>{buttonText}</button>
// 				<h3>Comments</h3>
// 				<h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
// 				{commentNodes}
// 			</div>
// 		);
// 	}
// 	_getCommentsTitle(commentCount) {
// 		if(commentCount === 0){
// 			return 'No comments yet';
// 		}else if(commentCount === 1){
// 			return '1 comment';
// 		}else{
// 			return `${commentCount} comments`;
// 		}
// 	}
// 	// use underscore to distinguish custom methods from React methods
// 	_getComments() { // returns array of dynamically-generated JSX elements
// 		const commentList = [
// 			{ id:1, author: 'Morgan McCircuit', body: 'Great picture!'},
// 			{ id:2, author: 'Lorem Ipsum', body: 'Really great picture!'},
// 			{ id:3, author: 'Bending Bender', body: 'Excellent stuff!'}
// 		];
// 		return commentList.map((comment)=>{
// 			return (<Comment author={comment.author} body={comment.body} key={comment.id} />);
// 				// pass comment's id as unique key; helps performance
// 		});
// 	}
// 	_handleClick(){
// 		this.setState({showComments:!this.state.showComments});
// 	}

// }





// 888888 8888o. 8888o.    88     888888 88  88 888888 88        888888 88  88 8888o. 888888 888888 
// 88     88  88 88  88    88     88     88  88 88     88          88   88  88 88  88 88     88     
// 8888   88  88 88  88    88     8888   88  88 8888   88          88   888888 8888Y' 8888   8888   
// 88     88  88 88  88    88     88     88 .8' 88     88          88   88  88 88  88 88     88     
// 888888 88  88 8888Y'    888888 888888 888'   888888 888888      88   88  88 88  88 888888 888888 


// 8888o. 888888 .o8888 88 8888o.    88     888888 88  88 888888 88        888888 .o88o. 88  88 8888o. 
// 88  88 88     88     88 88  88    88     88     88  88 88     88        88     88  88 88  88 88  88 
// 8888Y' 8888   88  88 88 88  88    88     8888   88  88 8888   88        8888   88  88 88  88 8888Y' 
// 88  88 88     88  88 88 88  88    88     88     88 .8' 88     88        88     88  88 88  88 88  88 
// 8888Y' 888888 'Y8888 88 88  88    888888 888888 888'   888888 888888    88     'Y88Y' 'Y88Y' 88  88 


class CommentBox extends React.Component{
	constructor() {
		super();
		this.state = {
			showComments: false,
			comments: [
				{ id:1, author: 'Morgan McCircuit', body: 'Great picture!'},
				{ id:2, author: 'Lorem Ipsum', body: 'Really great picture!'},
				{ id:3, author: 'Bending Bender', body: 'Excellent stuff!'}
			]
		};
	}

	// this.setState({showComments:true});

	render(){
		const comments = this._getComments();
		let commentNodes;
		let buttonText = "Show comments";

		if (this.state.showComments){
			commentNodes = <div className="comment-list">{comments}</div>;
			buttonText="Hide comments";
		}
		return (
			<div className="comment-box">
				<CommentForm addComment={this._addComment.bind(this)}/>
				<button onClick={this._handleClick.bind(this)}>{buttonText}</button>
				<h3>Comments</h3>
				<h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
				{commentNodes}
			</div>
		);
	}
	_getCommentsTitle(commentCount) {
		if(commentCount === 0){
			return 'No comments yet';
		}else if(commentCount === 1){
			return '1 comment';
		}else{
			return `${commentCount} comments`;
		}
	}
	// use underscore to distinguish custom methods from React methods
	_getComments() { // returns array of dynamically-generated JSX elements
		// const commentList = [
		// 	{ id:1, author: 'Morgan McCircuit', body: 'Great picture!'},
		// 	{ id:2, author: 'Lorem Ipsum', body: 'Really great picture!'},
		// 	{ id:3, author: 'Bending Bender', body: 'Excellent stuff!'}
		// ];
		return this.state.comments.map((comment)=>{
			return (<Comment author={comment.author} body={comment.body} key={comment.id} />);
				// pass comment's id as unique key; helps performance
		});
	}
	_handleClick(){
		this.setState({showComments:!this.state.showComments});
	}
	_addComment(author, body){
		const comment = {
			id: this.state.comments.length + 1,
			author,
			body
		};
		this.setState({ comments: this.state.comments.concat([comment]) });
	}
}


class CommentForm extends React.Component{
	render() {
		return(
			<form className="comment-name" onSubmit={this._handleSubmit.bind(this)}>
				<label>Join the discussion</label>
				<div className="comment-form-fields">
					<input placeholder="Name:" ref={(input) => this._author = input} />
					<textarea placeholder="Comment:" ref={(textarea) => this._body = textarea}></textarea>
				</div>
				<div className="comment-form-actions">
					<button type="submit">Post Comment</button>
				</div>
			</form>
		);
	}
	_handleSubmit(event){
		event.preventDefault();
		let author = this._author;
		let body = this._body;
		this.props.addComment(author.value, body.value);
		// pass functions from parent component to child component
	}

}

ReactDOM.render(<CommentBox />,document.getElementById('story-app'));


