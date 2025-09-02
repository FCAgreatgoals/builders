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

import { InteractibleComponent } from "./InteractibleComponent";
import { ChannelType, MessageComponentType, Snowflake } from "./types";
import { SelectMenuOption } from "./SelectMenuOption";

/**
 * @type SelectMenuComponent
 * @description This type represents a select menu component
 */
export type SelectMenuComponent = InteractibleComponent & {
	type: MessageComponentType.STRING_SELECT_MENU | MessageComponentType.USER_SELECT_MENU | MessageComponentType.ROLE_SELECT_MENU | MessageComponentType.MENTIONABLE_SELECT_MENU | MessageComponentType.CHANNEL_SELECT_MENU,
	placeholder?: string
	min_values?: number
	max_values?: number
	disabled?: boolean
};

type baseV = 'role' | 'channel' | 'user';

export type AutocompletableSelectMenuComponent = SelectMenuComponent & {
	type: MessageComponentType.USER_SELECT_MENU | MessageComponentType.ROLE_SELECT_MENU | MessageComponentType.MENTIONABLE_SELECT_MENU | MessageComponentType.CHANNEL_SELECT_MENU,
	default_values?: Array<SelectMenuDefaultValues<baseV>>
};

/**
 * @type SelectMenuDefaultValues
 * @description This type represents the default values of a select menu
 */
type SelectMenuDefaultValues<V> = {
	id: Snowflake
	type: V
};

export type MentionableSelectMenuComponent = AutocompletableSelectMenuComponent & {
	type: MessageComponentType.MENTIONABLE_SELECT_MENU
};

export type RoleSelectMenuComponent = AutocompletableSelectMenuComponent & {
	type: MessageComponentType.ROLE_SELECT_MENU
};

export type StringSelectMenuComponent = SelectMenuComponent & {
	type: MessageComponentType.STRING_SELECT_MENU,
	options?: Array<SelectMenuOption>
};

export type UserSelectMenuComponent = AutocompletableSelectMenuComponent & {
	type: MessageComponentType.USER_SELECT_MENU
};

export type ChannelSelectMenuComponent = AutocompletableSelectMenuComponent & {
	type: MessageComponentType.CHANNEL_SELECT_MENU,
	channel_types?: Array<ChannelType>
};