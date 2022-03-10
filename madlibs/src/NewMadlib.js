
import React, { useState } from 'react'
import MadlibForm from './MadlibForm';
import Story from './Story';


function NewMadlib() {

	const INITIAL_STATE = {};
	const [story, setStory] = useState(INITIAL_STATE);
	const [showStory, setShowStory] = useState(false);

	const createStory = (newStory) => {
                setStory({ ...newStory });
              };
	return (

    <div className='NewMadlib'>
			<h1>MADLIBS </h1>
		<div>	{ 
                showStory ?  
                (<Story setShowStory={setShowStory} setStory={setStory} story={story}/>) 
                : (<MadlibForm setShowStory={setShowStory} createStory={createStory} />)
            }
            </div>
            <h2> Assessment: React Madlibs </h2>
		</div>
    )
}

export default NewMadlib
