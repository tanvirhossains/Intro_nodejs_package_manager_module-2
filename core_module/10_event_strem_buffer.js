// klklkll

const events = require("events")
const eventEmitter = new events.EventsEmitter()


const chitkarDibo = () => {
    console.log("koi tui tara tari ay!!!!!!");
}

eventEmitter.on("scream", chitkarDibo).chitkarDibo;


eventEmitter.emit('scream')