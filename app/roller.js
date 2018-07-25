const MATCH_REGEX = /(\d*)d(\d*)/

const roll = size => Math.floor(Math.random() * Math.floor(size) + 1)

const Roller = desc => {
  const [_, count, size] = MATCH_REGEX.exec(desc)
  const results = [...new Array(parseInt(count))].map(() =>
    roll(parseInt(size))
  )
  return {
    max: results.sort((a, b) => b - a)[0],
    min: results.sort((a, b) => a - b)[0],
    results,
    count,
    size,
  }
}

module.exports = Roller
