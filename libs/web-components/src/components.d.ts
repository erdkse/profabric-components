/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MODE, SIZE, THEME } from "./utils/types";
import { BUTTON_TYPE } from "./components/button/index";
import { Option } from "./components/select/index";
export namespace Components {
    interface PfButton {
        "block": boolean;
        "class": string;
        "disabled": boolean;
        "loading": boolean;
        "mode": MODE;
        "size": SIZE;
        "theme": THEME | string;
        "type": BUTTON_TYPE;
    }
    interface PfCheckbox {
        "block": boolean;
        "checked": boolean;
        "disabled": boolean;
        "mode": MODE;
        "switchable": boolean;
        "value": string;
    }
    interface PfSelect {
        "block": boolean;
        "class": string;
        "disabled": boolean;
        "label": string;
        "mode": MODE;
        "options": Array<Option>;
        "size": SIZE;
        "theme": THEME;
        "type": string;
        "value": string;
    }
}
declare global {
    interface HTMLPfButtonElement extends Components.PfButton, HTMLStencilElement {
    }
    var HTMLPfButtonElement: {
        prototype: HTMLPfButtonElement;
        new (): HTMLPfButtonElement;
    };
    interface HTMLPfCheckboxElement extends Components.PfCheckbox, HTMLStencilElement {
    }
    var HTMLPfCheckboxElement: {
        prototype: HTMLPfCheckboxElement;
        new (): HTMLPfCheckboxElement;
    };
    interface HTMLPfSelectElement extends Components.PfSelect, HTMLStencilElement {
    }
    var HTMLPfSelectElement: {
        prototype: HTMLPfSelectElement;
        new (): HTMLPfSelectElement;
    };
    interface HTMLElementTagNameMap {
        "pf-button": HTMLPfButtonElement;
        "pf-checkbox": HTMLPfCheckboxElement;
        "pf-select": HTMLPfSelectElement;
    }
}
declare namespace LocalJSX {
    interface PfButton {
        "block"?: boolean;
        "class"?: string;
        "disabled"?: boolean;
        "loading"?: boolean;
        "mode"?: MODE;
        "size"?: SIZE;
        "theme"?: THEME | string;
        "type"?: BUTTON_TYPE;
    }
    interface PfCheckbox {
        "block"?: boolean;
        "checked"?: boolean;
        "disabled"?: boolean;
        "mode"?: MODE;
        "switchable"?: boolean;
        "value"?: string;
    }
    interface PfSelect {
        "block"?: boolean;
        "class"?: string;
        "disabled"?: boolean;
        "label"?: string;
        "mode"?: MODE;
        "options"?: Array<Option>;
        "size"?: SIZE;
        "theme"?: THEME;
        "type"?: string;
        "value"?: string;
    }
    interface IntrinsicElements {
        "pf-button": PfButton;
        "pf-checkbox": PfCheckbox;
        "pf-select": PfSelect;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pf-button": LocalJSX.PfButton & JSXBase.HTMLAttributes<HTMLPfButtonElement>;
            "pf-checkbox": LocalJSX.PfCheckbox & JSXBase.HTMLAttributes<HTMLPfCheckboxElement>;
            "pf-select": LocalJSX.PfSelect & JSXBase.HTMLAttributes<HTMLPfSelectElement>;
        }
    }
}
