const {chat} = require('./chatgpt')

class LogAPI {
    /**
     * Method to handle the received event
     * @param {Object} request - Object containing the event data.
     * @returns {Object|null} Event result or null if the event was not found.
     */
    OnEvent(request) {
        // If the event is not empty
        if (request && request.Event) {
            // Check if the method exists in this class
            if (typeof this[request.Event] === 'function') {
                // Process parameters as an array
                const parameters = Object.values(request);

                // Call the corresponding method and return the result
                return this[request.Event](...parameters);
            }
        }

        // Return null if the event was not found or the method does not exist
        return null;
    }

    /**
     * Method to handle the ServerActivate event
     * @param {string} Event - Event name.
     * @param {Object} Server - Server information.
     * @param {string} EdictCount - Entity count in the server.
     * @param {string} ClientMax - Maximum number of clients allowed in the server.
     * @returns {Object|null} LogAPI commands for the server or null.
     */
    ServerActivate(Event, Server, EdictCount, ClientMax) {
        return null;
    }

    /**
     * Method to handle the ServerDeactivate event
     * @param {string} Event - Event name.
     * @param {Object} Server - Server information.
     * @returns {Object|null} LogAPI commands for the server or null.
     */
    ServerDeactivate(Event, Server) {
        return null;
    }

    /**
     * Method to handle the ServerAlertMessage event
     * @param {string} Event - Event name.
     * @param {Object} Server - Server information.
     * @param {string} Type - Alert message type.
     * @param {string} Message - Log message string.
     * @returns {Object|null} LogAPI commands for the server or null.
     */
    ServerAlertMessage(Event, Server, Type, Message) {
        return null;
    }

    /**
     * Method to handle the ServerInfo event
     * @param {string} Event - Event name.
     * @param {Object} Server - Server information.
     * @returns {Object|null} LogAPI commands for the server or null.
     */
    ServerInfo(Event, Server) {
        return null;
    }

    /**
     * Method to handle the ClientConnect event
     * @param {string} Event - Event name.
     * @param {Object} Server - Server information.
     * @param {Object} Player - Player information.
     * @returns {Object|null} LogAPI commands for the server or null.
     */
    ClientConnect(Event, Server, Player) {
        return null;
    }

    /**
     * Method to handle the ClientPutInServer event
     * @param {string} Event - Event name.
     * @param {Object} Server - Server information.
     * @param {Object} Player - Player information.
     * @returns {Object|null} Result containing commands or null.
     */

    
    ClientPutInServer(Event, Server, Player) {
       
        return null;
    }
    
    /* 
    ClientPutInServer(Event, Server, Player) {
        // Prepare the response
        const result = {};

        // Print Chat
        result["PrintChat"] = {
            // Entity index (0) sends message to all players
            EntityId: 0,

            // The message string
            Message: `${Player.Name} entered in server. With SteamID ${Player.Auth}. Game will restart in ^35^1 seconds...`
        };

        // Return server command to HLDS
        result['ServerCommand'] = "sv_restart 5";

        // Return result to the API
        return result;
    }
    */
    /**
     * Method to handle the ClientDisconnect event
     * @param {string} Event - Event name.
     * @param {Object} Server - Server information.
     * @param {Object} Player - Player information.
     * @returns {Object|null} LogAPI commands for the server or null.
     */
    ClientDisconnect(Event, Server, Player) {
        return null;
    }

    /**
     * Method to handle the ClientKill event
     * @param {string} Event - Event name.
     * @param {Object} Server - Server information.
     * @param {Object} Player - Player information.
     * @returns {Object|null} LogAPI commands for the server or null.
     */
    ClientKill(Event, Server, Player) {
        return null;
    }

    /**
     * Method to handle the ClientUserInfoChanged event
     * @param {string} Event - Event name.
     * @param {Object} Server - Server information.
     * @param {Object} Player - Player information.
     * @param {string} InfoBuffer - KeyInfoBuffer.
     * @returns {Object|null} LogAPI commands for the server or null.
     */
    ClientUserInfoChanged(Event, Server, Player, InfoBuffer) {
        return null;
    }

    /**
     * Method to handle the ClientCommand event
     * @param {string} Event - Event name.
     * @param {Object} Server - Server information.
     * @param {Object} Player - Player information.
     * @param {string} Command - Command.
     * @param {string} Args - Command arguments.
     * @returns {Object|null} LogAPI commands for the server or null.
     */
    ClientCommand(Event, Server, Player, Command, Args) {
        return null;
    }

    /**
     * Method to handle the ClientSay event
     * @param {string} Event - Event name.
     * @param {Object} Server - Server information.
     * @param {Object} Player - Player information.
     * @param {string} Type - Type (say or say_team).
     * @param {string} Message - Message sent.
     * @returns {Object|null} LogAPI commands for the server or null.
     */
    async ClientSay(Event, Server, Player, Type, Message) {
        // Prepare the result

        const result = {};

        //Here you can add any condition like startwith split etc.. 
        switch (Message.split(' ')[0]) {
            case "/":

                 let msg = Message.substring(Message.indexOf(' ') + 1)
                 let gptAnswer = await chat(msg, Server);

                    result["PrintChat"] = {
                    EntityId: 0,
                    Message: `^4${process.env.CHATPREFIX || '*'}^1: ${gptAnswer}`
                };
                break;
            default:
                return null;
        }

        return result;

    }

 /**
     * Method to handle the ClientMenuHandle event
     * @param {string} Event - Event name (menu callback name).
     * @param {Object} Server - Server information.
     * @param {Object} Player - Player information.
     * @param {Object} Item - Item object containing menu item details.
     * @param {string} Item.Info - Info string passed to the menu item.
     * @param {string} Item.Text - Text of the option string passed to the menu item.
     * @param {boolean} Item.Disabled - Whether this option is disabled or not.
     * @param {string} Item.Extra - Extra info string passed to the menu item.
     * @returns {Object|null} LogAPI commands for the server or null.
     */

    ClientMenuHandle(Event, Server, Player, Item) {

    return null;

}
}

module.exports = LogAPI;