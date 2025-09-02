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

export enum EmbedType {
	RICH = 'rich',
	IMAGE = 'image',
	VIDEO = 'video',
	GIFV = 'gifv',
	ARTICLE = 'article',
	LINK = 'link',
}

/**
 * @type EmbedThumbnailStructure
 * @description The structure of the thumbnail of an embed
 */
export type EmbedThumbnailStructure = {
	url: string
	proxy_url?: string
	height?: number
	width?: number
};

/**
 * @type EmbedVideoStructure
 * @description The structure of the video of an embed
 */
export type EmbedVideoStructure = {
	url?: string
	proxy_url?: string
	height?: string
	width?: string
};

/**
 * @type EmbedImageStructure
 * @description The structure of the image of an embed
 */
export type EmbedImageStructure = {
	url: string
	proxy_url?: string
	height?: string
	width?: string
};

/**
 * @type EmbedProviderStructure
 * @description The structure of the provider of an embed
 */
export type EmbedProviderStructure = {
	name?: string
	url?: string
};

/**
 * @type EmbedAuthorStructure
 * @description The structure of the author of an embed
 */
export type EmbedAuthorStructure = {
	name: string
	url?: string
	icon_url?: string
	proxy_icon_url?: string
};

/**
 * @type EmbedFooterStructure
 * @description The structure of the footer of an embed
 */
export type EmbedFooterStructure = {
	text: string
	icon_url?: string
	proxy_icon_url?: string
};

/**
 * @type EmbedFieldStructure
 * @description The structure of the field of an embed
 */
export type EmbedFieldStructure = {
	name: string
	value: string
	inline?: boolean
};

/**
 * @type EmbedStructure
 * @description The structure of an embed
 */
export type EmbedStructure = {
	title?: string
	type?: EmbedType
	description?: string
	url?: string
	timestamp?: string
	color?: number
	footer?: EmbedFooterStructure
	image?: EmbedImageStructure
	thumbnail?: EmbedThumbnailStructure
	video?: EmbedVideoStructure
	provider?: EmbedProviderStructure
	author?: EmbedAuthorStructure
	fields?: Array<EmbedFieldStructure>
};