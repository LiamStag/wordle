import React from 'react';
import Symbol from '../components/Symbol';
import Word from '../components/New_word';

const wordLenght = Word.length;

const DesktopLineOutput = (numberLine, wordUser, className) => {
	const result = [];
	for (let i = 0; i < wordLenght; i++) {
		result.push(
			<Symbol
				key={`${className}-${numberLine}-${i}`}
				className={className[numberLine][i]}
			>{wordUser[numberLine][i]}</Symbol>
		);
	}
	return result;
};

const DesktopOutput = (wordUser, className) => {
	const result = [];
	for (let i = 0; i < 6; i++) {
		result.push(
			<div className='desktop__line' key={`className-${i}`}>
				{DesktopLineOutput(i, wordUser, className)}
			</div>
		);
	}
	return result;
}

const Desktop = ({ wordUser, className }) => {
	return (
		<div className='desktop'>
			{DesktopOutput(wordUser, className)}
		</div>
	);
};

export default Desktop;
