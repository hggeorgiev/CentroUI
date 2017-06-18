// Type definitions for AFRAME v0.3.1
// Project: https://aframe.io/
// Definitions by: Paul Shannon <https://github.com/devpaul/aframe-typings>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace AFrame {
    export interface AframeFramework {
        AEntity: Entity;
        ANode: ANode;
        AScene: Scene;
        components: { [ key: string ]: ComponentDescriptor };
        geometries: { [ key: string ]: GeometryDescriptor };
        primitives: { [ key: string ]: Entity };
        registerComponent(name: string, component: ComponentDefinition): ComponentConstructor;
        registerElement(name: string, element: ANode): void;
        registerGeometry(name: string, geometery: THREE.Geometry): Geometry;
        registerPrimitive(name: string, primitive: PrimitiveDefinition): void;
        registerShader(name: string, shader: ShaderDefinition): void;
        registerSystem(name: string, definition: SystemDefinition): void;
        schema: SchemaUtils;
        shaders: { [ key: string ]: ShaderDescriptor };
        systems: { [key: string]: System };
        THREE: any; // TODO THREE
        TWEEN: any; // TODO TWEEN
        utils: Utils;
        version: string;
    }

    export interface Animation {
        attribute: string;
        begin: string | number;
        delay: number;
        direction: 'alternate' | 'alternateReverse' | 'normal' | 'reverse';
        dur: number;
        easing(): void;
        end: string;
        fill: 'backwards' | 'both' | 'forwards' | 'none';
        from: any; // TODO type
        repeat: number | 'indefinite';
        to: number;
    }

    export interface ANode extends HTMLElement {
        // Only public APIs added. Many methods intentionally left out.
        // createdCallback
        // attachedCallback
        // attributeChangedCallback
        closestScene(): Scene;
        closest(selector: string): ANode;
        // detachedCallback
        load(cb?: () => void, childFilter?: (el: Element) => boolean): void;
        // updateMixins
        registerMixin(id: string): void;
        setAttribute(type: string, newValue: any): void;
        unregisterMixin(id: string): void;
        removeMixinListener(id: string): void;
        attachMixinListener(mixin: HTMLElement): void;
        emit(name: string, detail?: any, bubbles?: boolean): void;
        emitter(name: string, detail?: any, bubbles?: boolean): () => void;
    }

    interface Behavior {
        tick(): void;
    }

    export interface Component {
        attrName?: string;
        data?: any;
        dependencies?: string[];
        el: Entity;
        id: string;
        multiple?: boolean;
        name: string;
        schema: Schema;

        init(): void;
        update(oldData: any): void;
        remove(): void;
        tick?(time: number, timeDelta: number): void;
        play(): void;
        pause(): void;
        updateSchema?(): void;
        remove(): void;

        flushToDOM(): void;
        extendSchema(update: Schema): void;
    }

    export interface ComponentConstructor {
        new (el: Entity, name: string, id: string): Component;
    }

    export interface ComponentDefinition {
        dependencies?: string[];
        el?: Entity;
        id?: string;
        multiple?: boolean;
        schema?: Schema;

        init?(): void;
        update?(oldData: any): void;
        remove?(): void;
        tick?(time: number, timeDelta: number): void;
        play?(): void;
        pause?(): void;
        updateSchema?(): void;
        remove?(): void;

        [ key: string ]: any;
    }

    export interface ComponentDescriptor {
        Component: Component;
        dependencies: string[] | null;
        multiple: boolean | null;

        // internal APIs2
        // parse
        // parseAttrValueForCache
        // schema
        // stringify
        // type
        [ key: string ]: any;
    }

    export type Coordinate = { x: number, y: number, z: number };

    interface DetailEventHandler<D> {
        (event: Event & { detail: D }): void;
    }

    export interface Entity extends ANode {
        components: any;
        isPlaying: boolean;
        object3D: THREE.Object3D;
        object3DMap: { [key: string]: any };
        sceneEl?: Scene;

        addState(name: string): void;
        flushToDOM(): void;
        getAttribute(attr: string): any;
        getComputedAttribute(attr: string): any;
        getObject3D(type: string): THREE.Object3D;
        getOrCreateObject3D(type: string, construct: any): THREE.Object3D;
        is(stateName: string): boolean;
        pause(): void;
        play(): void;
        setAttribute(attr: string, value: any, componentAttrValue?: any): void;
        setObject3D(type: string, obj: THREE.Object3D | null): void;
        removeAttribute(attr: string): void;
        removeObject3D(type: string): void;
        removeState(stateName: string): void;

        getAttribute(type: string): string | any;
        getAttribute(type: 'position'): Coordinate | null;
        getAttribute(type: 'rotation'): Coordinate | null;
        getAttribute(type: 'scale'): Coordinate | null;

        getComputedAttribute(type: string): any;
        getComputedAttribute(type: 'position'): Coordinate;
        getComputedAttribute(type: 'rotation'): Coordinate;
        getComputedAttribute(type: 'scale'): Coordinate;

        setAttribute(type: string, value: any): void;
        setAttribute(type: 'position', value: Coordinate): void;
        setAttribute(type: 'rotation', value: Coordinate): void;
        setAttribute(type: 'scale', value: Coordinate): void;

        addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
        addEventListener(type: 'child-attached', listener: DetailEventHandler<{ el: Element | Entity }>, useCapture?: boolean): void;
        addEventListener(type: 'componentchanged', listener: DetailEventHandler<{ name: string }>, useCapture?: boolean): void;
        addEventListener(type: 'componentremoved', listener: DetailEventHandler<{
            name: string,
            id: string,
            newData: any,
            oldData: any
        }>, useCapture?: boolean): void;
        addEventListener(name: 'loaded', handler: EventListener, useCapture?: boolean): void;
        addEventListener(name: 'pause', handler: EventListener, useCapture?: boolean): void;
        addEventListener(name: 'play', handler: EventListener, useCapture?: boolean): void;
        addEventListener(name: 'stateadded', handler: DetailEventHandler<{ state: string }>, useCapture?: boolean): void;
        addEventListener(name: 'stateremoved', handler: DetailEventHandler<{ state: string }>, useCapture?: boolean): void;
        addEventListener(name: 'schemachanged', handler: DetailEventHandler<{ componentName: string }>, useCapture?: boolean): void;
    }

    export interface Geometry {
        name: string;
        geometry: THREE.Geometry;
        schema: Schema;
        update(data: Object): void;
        [ key: string ]: any;
    }

    export interface GeometryDefinition {
        // TODO implement
    }

    export interface GeometryDescriptor {
        Geometry: Geometry;
        schema: Schema;
    }

    export interface MultiPropertySchema {
        [ key: string ]: SinglePropertySchema<any>
    }

    export interface PrimitiveDefinition {
        defaultComponents?: any; // TODO cleanup type
        deprecated?: boolean;
        mappings?: any; // TODO cleanup type
        transforms?: any; // TODO cleanup type
    }

    export type PropertyTypes = 'array' | 'boolean' | 'color' | 'int' | 'number' | 'selector' |
        'selectorAll' | 'src' | 'string' | 'vec2' | 'vec3' | 'vec4';

    export interface Scene extends Entity {
        behaviors: Behavior[];
        camera: THREE.Camera;
        canvas: HTMLCanvasElement;
        effect: THREE.VREffect;
        isMobile: boolean;
        object3D: THREE.Scene;
        renderer: THREE.WebGLRenderer;
        renderStarted: boolean;
        systems: System[];
        time: number;

        enterVR(): Promise<void> | void;
        exitVR(): Promise<void> | void;
        reload(): void;

        addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
        addEventListener(type: 'enter-vr', listener: EventListener, useCapture?: boolean): void;
        addEventListener(type: 'exit-vr', listener: EventListener, useCapture?: boolean): void;
        addEventListener(type: 'loaded', listener: EventListener, useCapture?: boolean): void;
        addEventListener(type: 'renderstart', listener: EventListener, useCapture?: boolean): void;
    }

    export type Schema = SinglePropertySchema<any> | MultiPropertySchema;

    interface SchemaUtils {
        isSingleProperty(schema: Schema): boolean;
        process(schema: Schema): boolean
    }

    export interface Shader {
        name: string;
        schema: Schema;
    }

    export interface ShaderDefinition {
        // TODO implement
    }

    export interface ShaderDescriptor {
        Shader: Shader;
        schema: Schema;
    }

    export interface SinglePropertySchema<T> {
        type?: PropertyTypes;
        'default'?: T;
        parse?(value: string): T;
        stringify?(value: T): string;
        [ key: string ]: any
    }

    export interface System {
        data: any;
        schema: Schema;
        init(): void;
        pause(): void;
        play(): void;
        tick?(): void;
    }

    export interface SystemDefinition {
        schema?: Schema
        init?(): void;
        pause?(): void;
        play?(): void;
        tick?(): void;
        [ key: string ]: any;
    }

    interface Utils {
        coordinates: {
            isCoordinate(value: string): boolean;
            parse(value: string): Coordinate;
            stringify(coord: Coordinate): string;
        };
        entity: {
            getComponentProperty(entity: Entity, componentName: string, delimiter?: string): any;
            setComponentProperty(entity: Entity, componentName: string, value: any, delimiter?: string): void;
        };
        styleParser: {
            parse(value: string): Object;
            stringify(data: Object): string;
        };
        deepEqual(a: Object, b: Object): boolean;
        diff(a: Object, b: Object): Object;
        extend(target: Object, ... source: Object[]): Object;
        extendDeep(target: Object, ... source: Object[]): Object;
    }
}

declare const AFRAME: AFrame.AframeFramework;
declare const hasNativeWebVRImplementation: boolean;