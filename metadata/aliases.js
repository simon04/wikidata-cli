module.exports = {
  args: '<entity>',
  description: "display the entity's aliases",
  options: require('./common_options').entityAttributeCommands,
  examples: [
    { args: 'Q123', comment: 'fetch the aliases for the entity Q123' },
    { args: 'Q123 --lang ja', comment: 'fetch the aliases for the entity Q123 in Japanese' }
  ]
}
