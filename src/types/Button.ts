/**
 * This file is part of Builders (https://github.com/FCAgreatgoals/builders).
 *
 * Copyright (C) 2025 SAS French Community Agency
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import { PartialInteractibleComponent } from './InteractibleComponent';
import { MessageComponentType } from './types';

/**
 * @enum ButtonStyle
 * @description Describes all the possible styles for a button
 * @see https://discord.com/developers/docs/interactions/message-components#button-object-button-styles
 */
export enum ButtonStyle {
	PRIMARY = 1,
	SECONDARY = 2,
	SUCCESS = 3,
	DANGER = 4,
	LINK = 5,
}

/**
 * @type ButtonComponent
 * @description Describes the structure of a button component as defined by Discord
 * @see https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
 */
export type ButtonComponent = PartialInteractibleComponent & {
	type: MessageComponentType.BUTTON
	style: ButtonStyle
	label?: string
	emoji?: ComponentEmojiParams
	url?: string
	disabled?: boolean
};

/**
 * @type ComponentEmojiParams
 * @description Describes the structure of the emoji object for a button component
 */
export type ComponentEmojiParams = {
	name: string
	id?: string
	animated?: boolean
}