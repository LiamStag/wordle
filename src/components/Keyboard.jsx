import Button from '../components/Button';

const keyboardOutput = (numStart, numEnd, className, onClick) => {
	const keyboard = ['⌫', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ё', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'Ввод ↵'];
	let result = [];

	for (let i = numStart; i < numEnd + 1; i++) {
		result.push(<Button
			key={`keyboard-${i}`}
			text={keyboard[i]}
			className={className[i]}
			onClick={onClick}
			number={i}
		/>);
	}

	return result;
}

const Keyboard = ({ className, onClick }) => {
	return (
		<div className='keyboard'>
			<div className='buttons'>
				{keyboardOutput(1, 12, className, onClick)}
				{keyboardOutput(13, 24, className, onClick)}
				{keyboardOutput(25, 33, className, onClick)}

				<Button text={'Ввод ↵'} className='button-enter' onClick={onClick} number={34} />
				<Button text={'⌫'} className='button-backspace' onClick={onClick} number={0} />
			</div>
		</div>
	);
};

export default Keyboard;
