
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import MadlibForm from './MadlibForm';
import Story from './Story';


function NewMadlib() {

	const INITIAL_STATE = [];
	const [story, setStory] = useState(INITIAL_STATE);
	const [showStory, setShowStory] = useState(false);

	const createStory = (newStory) => {
		setStory((madlibs) => [...madlibs, { ...newStory, id: uuid() }]);
	};
	return (

    <div className='NewMadlib'>
			<h1>MADLIBS </h1>
		<div>	{ 
                showStory ?  
                (<Story setShowStory={setShowStory} setStory={setStory} story={story[0]}/>) 
                : (<MadlibForm setShowStory={setShowStory} createStory={createStory} />)
            }
            </div>
            <h2> Assessment: React Madlibs </h2>
		</div>
    )
}

export default NewMadlib
