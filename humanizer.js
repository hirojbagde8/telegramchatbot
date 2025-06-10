// Simple text humanizer
// Replaces formal words with simpler alternatives and adds occasional fillers

const synonyms = {
  utilize: 'use',
  obtain: 'get',
  numerous: 'many',
  individual: 'person',
  assist: 'help',
  facilitate: 'help',
  commence: 'start',
  terminate: 'end',
};

function humanizeText(text) {
  let result = text;
  for (const [aiWord, humanWord] of Object.entries(synonyms)) {
    const regex = new RegExp(`\\b${aiWord}\\b`, 'gi');
    result = result.replace(regex, humanWord);
  }

  const fillers = ['like', 'you know', 'actually', 'basically'];
  result = result
    .split(/([.!?])/)
    .map((segment, idx) => {
      if (idx % 2 === 0 && segment.trim()) {
        if (Math.random() < 0.3) {
          const filler = fillers[Math.floor(Math.random() * fillers.length)];
          return segment.trim() + ', ' + filler;
        }
      }
      return segment;
    })
    .join('');

  return result;
}

module.exports = { humanizeText };
