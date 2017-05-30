import {default as CanvasTextEditor} from './CanvasTextEditor';
import {default as Document} from './Document';


export class Keyboard {


    init(window, elementId) {

        window.addEventListener('keyup', this.handleKeyUp);
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keypress', this.handleKeyPress);

        let canvas = document.querySelector(elementId);
        let doc = new Document('');
        this.editor = new CanvasTextEditor(doc, {
            canvas,
            backgroundColor: '#fff',
            textColor: '#000',
            selectionColor: 'yellow',
            focusColor: 'green',
            fontFamily: 'Verdana',
            fontSize: 18,
            width: 512,
            height: 128
        });


        window['editor'] = this.editor;

        return window['editor'];
    }

    setText(content) {
        this.editor.getDocument().deleteRange(0, 0, 999, 999);
        this.editor.getDocument().insertText(content, 0, 0);
        this.editor.render();
    }

    getText() {
        return this.editor.getDocument().storage[0];
    }


    handleKeyUp(event) {
        let key = document.querySelector(`[data-key="${event.key.toUpperCase()}"]`);
        if (key) {
            //key.setAttribute('position', 'y', key['baseYPosition']);
        }
        window['editor'].dispatchEvent('keyup', event);
    }

    handleKeyDown(event) {
        let key = document.querySelector(`[data-key="${event.key.toUpperCase()}"]`);
        if (key) {
            //key.setAttribute('position', 'y', key['baseYPosition'] - 1);
        }
        window['editor'].dispatchEvent('keydown', event)
    }

    handleKeyPress(event) {
        window['editor'].dispatchEvent('keypress', event)
    }
}

export default Keyboard;