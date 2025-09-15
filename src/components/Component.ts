import StaticComponent, { ComponentState } from './StaticComponent';
import InteractiveComponent from './InteractiveComponent';

import {
	ActionRowComponent,
	ButtonComponent,
	ContainerComponent,
	EmbedStructure,
	MediaComponent,
	SectionComponent,
	TextDisplayComponent,
} from "../types";

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

export type StateListener<T> = (newState: T) => void;
export type StateSetter<T> = (newState: Partial<T> | ((prevState: T) => T)) => void;

export default class Component {
	private static componentRegistry = new Map<symbol, StaticComponent<SupportedComponents> | InteractiveComponent<SupportedComponents>>();
	private static stateRegistry = new Map<symbol, ComponentState<SupportedComponents>>();

	public static registerComponent<T extends SupportedComponents>(id: symbol, component: StaticComponent<T> | InteractiveComponent<T>) {
		Component.componentRegistry.set(id, component);
	}

	public static initializeState<T extends SupportedComponents>(id: symbol, data: T) {
		Component.stateRegistry.set(id, { data, listeners: new Set<StateListener<SupportedComponents>>() });
	}

	public static getCurrentData<T extends SupportedComponents>(id: symbol): T {
		const state = Component.stateRegistry.get(id);
		if (!state) throw new Error('Component state not found');

		return state.data as T;
	}

	public static useState<T extends SupportedComponents>(component: InteractiveComponent<T>): [T, StateListener<T>] {
		const state = Component.stateRegistry.get(component.id);

		if (!state) throw new Error('Component state not found. Make sure the component was created properly.');

		const setter: StateSetter<T> = (newStateOrUpdater) => {
			const currentState = Component.stateRegistry.get(component.id)!;

			const newData = typeof newStateOrUpdater === 'function'
				? newStateOrUpdater(currentState.data as T)
				: { ...currentState.data as T, ...newStateOrUpdater } as T;

			currentState.data = newData as SupportedComponents;
			currentState.listeners.forEach(listener => listener(newData as SupportedComponents));
		};

		return [state.data as T, setter];
	}

	public static createStaticComponent<T extends SupportedComponents>(data: T): StaticComponent<T> {
		return new StaticComponent<T>(data);
	}

	public static createInteractiveComponent<T extends SupportedComponents>(data: T): InteractiveComponent<T> {
		return new InteractiveComponent<T>(data);
	}

}