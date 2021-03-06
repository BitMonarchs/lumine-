/**
 * /*eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/*eslint-disable @typescript-eslint/no-unused-vars*/
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType } from "@adiwajshing/baileys";
export default class Command extends BaseCommand {
    
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: "help 1",
            description: 'Displays the Econamy menu',
            category: "general",
            aliases: ["h"],
            usage: `${client.config.prefix}help [1]`,
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
            if (!joined)
            return void (await M.reply(`that's not the way bruh.Use ${this.client.config.prefix}help 1`));
            const help: any = joined.trim();
            const buttons = [
              {
                buttonId: "help2",
                buttonText: { displayText: `${this.client.config.prefix}help2` },
                type: 1,
              },
              ];
              if ( help === 1) {
              const buttonMessage: any = {
              contentText: `\n\n_*πͺECONAMYπͺ*_\n\n 
              π${this.client.config.prefix}slot\n\nπ ${this.client.config.prefix}gamble\n\nπ ${this.client.config.prefix}give\n\nπ ${this.client.config.prefix}bank\n\nπ ${this.client.config.prefix}rob\n\nπ ${this.client.config.prefix}wallet\n\nπ ${this.client.config.prefix}deposit\n\nπ ${this.client.config.prefix}withdrawπ${this.client.config.prefix}daily`,
              footerText: "π Beyond π",
              buttons: buttons,
              headerType: 1,
              };
              await M.reply(buttonMessage, MessageType.buttonsMessage);
              ;
              
            
            };
          }
        }
