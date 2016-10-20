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


class Comment extends React.Component{
	render() {
		return (
			<div className="comment">
				<p className="comment-header">{this.props.author}</p>
				<p className="comment-body">
					{this.props.body}
				</p>
				<div className="comment-footer">
					<a href="#" className="comment-footer-delete">
						Delete Comment
					</a>
				</div>
			</div>
		)
	}
}

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


class CommentBox extends React.Component{

	render(){
		const comments = this._getComments();
		return (
			<div className="comment-box">
				<h3>Comments</h3>
				<h4 className="comment-count">{comments.length} comments</h4>
				<div className="comment-list">
					{comments}
				</div>
			</div>
		);

	}


	// use underscore to distinguish custom methods from React methods
	_getComments() { // returns array of dynamically-generated JSX elements
		const commentList = [
			{ id:1, author: 'Morgan McCircuit', body: 'Great picture!'},
			{ id:2, author: 'Lorem Ipsum', body: 'Really great picture!'},
			{ id:3, author: 'Bending Bender', body: 'Excellent stuff!'}
		];

		return commentList.map((comment)=>{
			return (<Comment author={comment.author} body={comment.body} key={comment.id} />);
				// pass comment's id as unique key; helps performance
		});

	}


}

ReactDOM.render(<CommentBox />,document.getElementById('story-app'));




