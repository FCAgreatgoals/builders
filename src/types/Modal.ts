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

import { BaseComponent } from './Component';
import { ActionRowComponent } from './ActionRow';
import { MessageComponentType } from './types';
import { TextInputComponent } from './TextInputField';

export type ModalComponent = BaseComponent & {
	type: MessageComponentType.MODAL
	custom_id: string
	title: string
	components: Array<ActionRowComponent>
};


export type LabelComponent = BaseComponent & {
	type: MessageComponentType.LABEL
	content: string
};


export type RawModal = {
	custom_id: string
	title: string
	components: Array<{
		type: 1
		components: Array<TextInputComponent>
	}>
};