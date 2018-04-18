const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

module.exports = botBuilder(message => {
  if (message.type === 'facebook') {
    return new fbTemplate.Button('How are you?')
      .addButton('Awesome', 'AWESOME')
      .addButton('Great', 'GREAT')
      .addButton('??????', 'https://youtu.be/m5TwT69i1lU')
      .get();
  }
});