import fs from 'fs';

const matches = fs
	.readFileSync('football.csv', {
		encoding: 'utf-8',
	})
	.split('\n')
	.map((row: string): string[] => row.split(','));

let arsenalWins = 0;

for (const match of matches) {
	if (match[1] === 'Arsenal' && match[5] === 'H') {
		arsenalWins++;
	} else if (match[2] === 'Arsenal' && match[5] === 'A') {
		arsenalWins++;
	}
}

console.log(`Arsenal won ${arsenalWins} games`);
