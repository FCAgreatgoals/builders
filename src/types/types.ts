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

export enum MessageComponentType {
	ACTION_ROW = 1,
	BUTTON = 2,
	STRING_SELECT_MENU = 3,
	TEXT_INPUT = 4,
	USER_SELECT_MENU = 5,
	ROLE_SELECT_MENU = 6,
	MENTIONABLE_SELECT_MENU = 7,
	CHANNEL_SELECT_MENU = 8,
	SECTION = 9,
	TEXT_DISPLAY = 10,
	THUMBNAIL = 11,
	MEDIA_GALERY = 12,
	FILE = 13,
	SEPARATOR = 14,
	CONTAINER = 17,
	LABEL = 18
}

/**
 * @enum ChannelType
 * @description This is the enum that represents the channel types
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export enum ChannelType {
	GUILD_TEXT = 0,
	DM = 1,
	GUILD_VOICE = 2,
	GROUP_DM = 3,
	GUILD_CATEGORY = 4,
	GUILD_ANNOUNCEMENT = 5,
	ANNOUNCEMENT_THREAD = 10,
	PUBLIC_THREAD = 11,
	PRIVATE_THREAD = 12,
	GUILD_STAGE_VOICE = 13,
	GUILD_DIRECTORY = 14,
	GUILD_FORUM = 15,
	GUILD_MEDIA = 16,
}

export enum SeparatorSpacing {
	SMALL = 1,
	LARGE = 2
}

export type UnfurledMediaItemStructure = {
	url: string
	proxy_url?: string
	height?: number
	width?: number
	content_type?: string
};

export type MediaGalleryStructure = {
	type: MessageComponentType.MEDIA_GALERY
	id?: number
	items: Array<MediaGalleryItemStructure> // min 1 max 10
};

export type MediaGalleryItemStructure = {
	media: UnfurledMediaItemStructure
	description?: string
	spoiler?: boolean // Default to false
};

export type Snowflake = string;