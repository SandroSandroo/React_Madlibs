import React from "react";
import './Story.css'

function Story({ setShowStory, setStory, story }) {

	const restart = () => {
		setShowStory(false);
		setStory([]);
	};

	return (
		<div className='Story'>
			<h3>
				There was a {story.color} {story.noun} who loved a {story.adjective} {story.noun2}.
			</h3>
			<button className="button1" onClick={restart}>Restart</button>
		</div>
	);
}

export default Story;
