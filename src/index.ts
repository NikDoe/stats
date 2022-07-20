import fs from 'fs';

const matches = fs
	.readFileSync('football.csv', {
		encoding: 'utf-8',
	})
	.split('\n')
	.map((row: string): string[] => row.split(','));

let arsenalWins = 0;

enum MatchResults {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D',
}

for (const match of matches) {
	if (match[1] === 'Arsenal' && match[5] === MatchResults.HomeWin) {
		arsenalWins++;
	} else if (match[2] === 'Arsenal' && match[5] === MatchResults.AwayWin) {
		arsenalWins++;
	}
}

console.log(`Arsenal won ${arsenalWins} games`);
