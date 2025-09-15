import StaticComponent, { ComponentState } from "./StaticComponent";
import InteractiveComponent from './InteractiveComponent';

import {
	ActionRowComponent,
	ButtonComponent,
	ContainerComponent,
	EmbedStructure,
	MediaComponent,
	SectionComponent,
	TextDisplayComponent,
} from '../types';

export type SupportedComponents =
	| EmbedStructure
	| ButtonComponent
	| ActionRowComponent
	| TextDisplayComponent
	| SectionComponent
	| MediaComponent
	| ContainerComponent;

export enum ComponentType {
	Static = 'Static',
	Interactive = 'Interactive',
}

export default class Component {
	private static instance: Component;
	private componentRegistry = new Map<symbol, StaticComponent<SupportedComponents> | InteractiveComponent<SupportedComponents>>();
	private stateRegistry = new Map<symbol, ComponentState<SupportedComponents>>();

	public static getInstance(): Component {
		if (!Component.instance) {
			Component.instance = new Component();
		}
		return Component.instance;
	}



}