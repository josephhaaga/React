// JSX renders 'className' into class

// class StoryBox extends React.Component{
// 	render(){

// 		const now = new Date();

// 		return (<div>
// 			<h3>Stories App</h3>
// 			<p className="lead">
// 				Current Time: {now.toTimeString()}
// 			</p>
// 		</div>);
// 	}
// }

class StoryBox extends React.Component{
	render(){

		const now = new Date();
		const topicsList = ['HTML','Javascript','React'];

		return (<div>
			<h3>Stories App</h3>
			<p className="lead">
				Current Time: {now.toTimeString()}
			</p>
			<ul>
				{topicsList.map(topic => <li>{topic}</li>)}
			</ul>
		</div>);
	}
}


ReactDOM.render(<StoryBox />, document.getElementById('story-app'));