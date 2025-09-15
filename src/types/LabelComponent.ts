import { BaseComponent } from './Component';
import { MessageComponentType } from './types';
import { TextInputComponent } from "./TextInputField";

import {
	ChannelSelectMenuComponent,
	MentionableSelectMenuComponent,
	RoleSelectMenuComponent,
	UserSelectMenuComponent,
} from "./SelectMenu";

/**
 * @type LabelComponent
 * @description Label component container for select menus in modals
 * @see https://discord.com/developers/docs/components/using-modal-components
 *
 **/
export type LabelComponent = BaseComponent & {
	type: MessageComponentType.LABEL
	components: Array<TextInputComponent | UserSelectMenuComponent | RoleSelectMenuComponent | MentionableSelectMenuComponent | ChannelSelectMenuComponent>
};