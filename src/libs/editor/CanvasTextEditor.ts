import FontMetrics from './FontMetrics';
import Document from './Document';
import Selection from './Selection';
import FormEvent = React.FormEvent;

/**
 * Simple plain-text text editor using html5 canvas.
 * @constructor
 *
 *  TODO Convert to ES6 class
 */
export class CanvasTextEditor {

    public document: Document;
    public metrics: FontMetrics;
    public selection: Selection;
    public options: any;
    public wrapper: any;
    public canvas: HTMLCanvasElement | any;
    public context: CanvasRenderingContext2D;
    public inputEl: HTMLTextAreaElement;
    public needsClearing: boolean;


    constructor(doc: Document, options: any) {
        this.document = doc || (new Document());

        this.options = {
            textColor: 'WindowText',
            backgroundColor: 'Window',
            selectionColor: 'Highlight',
            focusColor: '#09f',
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: 14,
            padding: 5,
            width: 640,
            height: 480,
            canvas: undefined
        };

        if (typeof options === 'object') {
            for (let key in options) {
                this.options[key] = options[key];
            }
        }

        this.metrics = new FontMetrics(this.options.fontFamily, this.options.fontSize);
        this._createWrapper();
        this.selection = new Selection(this, this.options.textColor);
        this.selection.onchange = this.selectionChange.bind(this);
        this._createCanvas();
        this._createInput();

        // Global objects
        document.addEventListener('keydown', this.addKeyModifier.bind(this), true);
        document.addEventListener('keyup', this.removeKeyModfier.bind(this), true);
        window.addEventListener('focus', this.clearKeyModifiers.bind(this), true);
        window.addEventListener('focus', this.render.bind(this), true);

    };

    dispatchEvent(type: string, event: KeyboardEvent) {
        switch (type) {
            case 'keydown':
                this.addKeyModifier.call(this, event);
                this.keydown(event);
                break;
            case 'keyup':
                this.removeKeyModfier.call(this, event);
                break;
            case 'focus':
                this.clearKeyModifiers.call(this, event);
                this.render.call(this);
                break;
            case 'keypress':
                let e = {
                    target: this.inputEl,
                    originalEvent: event
                };
                this.inputEl.value = event.key + '#';
                this.handleInput.call(this, e);
                this.setInputText.call(this, '', e);
                break;
            case 'blur':
                this.blur.call(this, event);
                break;
        }
    };

    /**
     * Top offset in lines
     * @type {Number}
     */
    _scrollTop = 0;

    /**
     * Left offset in characters
     * @type {Number}
     */
    _scrollLeft = 0;

    /**
     * Determines if current browser is Opera
     * @type {Boolean}
     */
    isOpera = false;

    /**
     * CSS class that is assigned to the wrapper.
     * @type {String}
     */
    className = 'canvas-text-editor';

    /**
     * Determines if user holds shift key at the moment
     * @type {Boolean}
     */
    shiftPressed = false;

    /**
     * Marks important for us key modfiers as pressed
     * @param {Event} e
     */
    addKeyModifier(e: KeyboardEvent) {
        if (e.keyCode === 16) {
            this.shiftPressed = true;
        }
    };

    /**
     * Unmarks important for us key modfiers as pressed
     * @param {Event} e
     */
    removeKeyModfier(e:KeyboardEvent) {
        if (e.keyCode === 16) {
            this.shiftPressed = false;
        }
    };

    /**
     * Clears all key modifiers
     */
    clearKeyModifiers() {
        this.shiftPressed = false;
    };

    /**
     * Returns selection for this editor
     * @return {Selection}
     */
    getSelection() {
        return this.selection;
    };

    /**
     * Returns current top offset
     * @return {number}
     */
    scrollTop() {
        return this._scrollTop;
    };

    /**
     * Returns current left offset
     * @return {number}
     */
    scrollLeft() {
        return this._scrollLeft;
    };

    /**
     * Handles selection change
     */
    selectionChange() {
        // Assume that selection is empty
        let selectedText = '';

        // if it's not we put together selected text from document
        if (!this.selection.isEmpty()) {
            let ranges = this.selection.lineRanges();
            for (let key in ranges) {
                selectedText += this.document.getLine(parseInt(key)).slice(
                    ranges[key][0], ranges[key][1] === true ? undefined : ranges[key][1]
                );
            }
        }

        this._checkScroll();
        this.setInputText(selectedText, true);

        // Updating canvas to show selection
        this.render();
    };

    /**
     * Creates wrapper element for all parts of the editor
     * @private
     */
    _createWrapper() {
        this.wrapper = document.createElement('div');
        this.wrapper.className = this.className;
        this.wrapper.style.display = 'inline-block';
        this.wrapper.style.position = 'relative';
        this.wrapper.style.backgroundColor = this.options.backgroundColor;
        this.wrapper.style.border = this.options.padding + 'px solid ' + this.options.backgroundColor;
        this.wrapper.style.overflow = 'hidden';
        this.wrapper.tabIndex = 0; // tabindex is necessary to get focus
        this.wrapper.addEventListener('focus', this.focus.bind(this), false);
    };

    /**
     * Creates canvas for drawing
     * @private
     */
    _createCanvas() {
        this.canvas = this.options.canvas || document.createElement('canvas');
        this.canvas.style.display = 'block';
        this.context = this.canvas.getContext('2d');
        this.resize(this.options.width, this.options.height);
        this.render();
        this.wrapper.appendChild(this.canvas);
    };

    /**
     * Makes sure that cursor is visible
     * @return {[type]} [description]
     */
    _checkScroll() {
        let maxHeight = Math.ceil(this.canvas.height / this.metrics.getHeight()) - 1,
            maxWidth = Math.ceil(this.canvas.width / this.metrics.getWidth()) - 1,
            cursorPosition = this.selection.getPosition();
        if (cursorPosition[0] > this._scrollLeft + maxWidth) {
            this._scrollLeft = cursorPosition[0] - maxWidth;
        } else if (cursorPosition[0] < this._scrollLeft) {
            this._scrollLeft = cursorPosition[0];
        }
        if (cursorPosition[1] > this._scrollTop + maxHeight) {
            this._scrollTop = cursorPosition[1] - maxHeight;
        } else if (cursorPosition[1] < this._scrollTop) {
            this._scrollTop = cursorPosition[1];
        }
        this.selection.updateCursorStyle();
    };

    /**
     * Renders document onto the canvas
     * @return {[type]} [description]
     */
    render() {
        let baselineOffset = this.metrics.getBaseline(),
            lineHeight = this.metrics.getHeight(),
            characterWidth = this.metrics.getWidth(),
            maxHeight = Math.ceil(this.canvas.height / lineHeight) + this._scrollTop,
            lineCount = this.document.getLineCount(),
            selectionRanges = this.selection.lineRanges(),
            selectionWidth = 0;

        // Making sure we don't render something that we won't see
        if (lineCount < maxHeight) {
            maxHeight = lineCount;
        }

        // Clearing previous iteration
        this.context.fillStyle = this.options.backgroundColor;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = this.options.textColor;

        // Looping over document lines
        for (let i = this._scrollTop; i < maxHeight; ++i) {
            let topOffset = lineHeight * (i - this._scrollTop);

            // Rendering selection for this line if one is present
            if (selectionRanges[i]) {
                this.context.fillStyle = this.options.selectionColor;

                // Check whether we should select to the end of the line or not
                if (selectionRanges[i][1] === true) {
                    selectionWidth = this.canvas.width;
                } else {
                    selectionWidth = (selectionRanges[i][1] - selectionRanges[i][0]) * characterWidth;
                }

                // Drawing selection
                this.context.fillRect(
                    (selectionRanges[i][0] - this._scrollLeft) * characterWidth,
                    topOffset,
                    selectionWidth,
                    lineHeight
                );

                // Restoring fill color for the text
                this.context.fillStyle = this.options.textColor;
            }

            // Drawing text
            this.context.fillText(
                this.document.getLine(i).slice(this._scrollLeft), 0, topOffset + baselineOffset
            );
        }
    };

    /**
     * Creates textarea that will handle user input and copy-paste actions
     * @private
     */
    _createInput() {
        this.inputEl = document.createElement('textarea');
        this.inputEl.style.position = 'absolute';
        this.inputEl.style.top = '-25px';
        this.inputEl.style.left = '-25px';
        this.inputEl.style.height = '10px';
        this.inputEl.style.width = '10px';
        this.inputEl.tabIndex = -1; // we don't want input to get focus by tabbing
        this.wrapper.appendChild(this.inputEl);
        this.setInputText('', true);
    };

    /**
     * Handles regular text input into our proxy field
     * @param  {Event} e
     */
    handleInput(e:any) {
        let value: string = e.target["value"];
        if (this.isOpera) {
            // Opera doesn't need a placeholder
            value = value.substring(0, value.length);
        } else {
            // Compensate for placeholder
            value = value.substring(0, value.length - 1);
        }
        this.insertTextAtCurrentPosition(value);
        this.needsClearing = true;
    };

    /**
     * Makes input contain only placeholder character and places cursor at start
     */
    setInputText(text: string, force: boolean) {
        if (this.needsClearing || force === true) {
            if (this.isOpera) {
                this.inputEl.value = text;
                this.inputEl.select();
            } else {
                this.inputEl.value = text + '#';
                this.inputEl.selectionStart = 0;
                this.inputEl.selectionEnd = text.length;
            }
        }
        this.needsClearing = false;
    };

    /**
     * Inserts text at the current cursor position
     * @param  {string} text
     */
    insertTextAtCurrentPosition(text: string) {
        // If selection is not empty we need to "replace" selected text with inserted
        // one which means deleting old selected text before inserting new one
        if (!this.selection.isEmpty()) {
            this.deleteCharAtCurrentPosition();
        }

        let pos = this.selection.getPosition();

        // Inserting new text and changing position of cursor to a new one
        this.selection.setPosition.apply(
            this.selection,
            this.document.insertText(text, pos[0], pos[1])
        );
        this.render();
    };

    /**
     * Deletes text at the current cursor position
     * @param  {string} text
     */
    deleteCharAtCurrentPosition(forward?: any) {
        // If there is a selection we just remove it no matter what direction is
        if (!this.selection.isEmpty()) {
            this.selection.setPosition.apply(
                this.selection,
                this.document.deleteRange(
                    this.selection.start.character, this.selection.start.line,
                    this.selection.end.character, this.selection.end.line
                )
            );
        } else {
            let pos = this.selection.getPosition();
            // Deleting text and changing position of cursor to a new one
            this.selection.setPosition.apply(
                this.selection,
                this.document.deleteChar(forward, pos[0], pos[1])
            );
        }
        this.render();
    };

    /**
     * Real handler code for editor gaining focus.
     * @private
     */
    _inputFocus() {
        this.wrapper.style.outline = '1px solid ' + this.options.focusColor;
        this.selection.setVisible(true);
    };

    /**
     * Returns main editor node so it can be inserted into document.
     * @return {HTMLElement}
     */
    getEl() {
        return this.wrapper;
    };

    /**
     * Returns font metrics used in this editor.
     * @return {FontMetrics}
     */
    getFontMetrics() {
        return this.metrics;
    };

    /**
     * Returns current document.
     * @return {Document}
     */
    getDocument() {
        return this.document;
    };

    /**
     * Resizes editor to provided dimensions.
     * @param  {Number} width
     * @param  {Number} height
     */
    resize(width: number, height: number) {
        this.canvas.width = width;
        this.canvas.height = height;
        // We need to update context settings every time we resize
        this.context.font = this.metrics.getSize() + 'px ' + this.metrics.getFamily();
    };

    /**
     * Main keydown handler
     * @param  {Event} e
     */
    keydown(e: KeyboardEvent) {
        let handled = true;
        switch (e.keyCode) {
            case 8: // Backspace
                this.deleteCharAtCurrentPosition(false);
                break;
            case 46: // Delete
                this.deleteCharAtCurrentPosition(true);
                break;
            case 13: // Enter
                this.insertTextAtCurrentPosition('\n');
                break;
            case 37: // Left arrow
                this.selection.moveLeft(1, this.shiftPressed);
                break;
            case 38: // Up arrow
                this.selection.moveUp(1, this.shiftPressed);
                break;
            case 39: // Right arrow
                this.selection.moveRight(1, this.shiftPressed);
                break;
            case 40: // Down arrow
                this.selection.moveDown(1, this.shiftPressed);
                break;
            default:
                //   this.inputEl.textContent += e.key;
                handled = false;
        }
        if (handled) {
            e.preventDefault();
        }
    };

    /**
     * Blur handler.
     */
    blur() {
        this.wrapper.style.outline = 'none';
        this.selection.setVisible(false);
    };

    /**
     * Focus handler. Acts as a proxy to input focus.
     */
    focus() {
        this.inputEl.focus();
    };

}
export default CanvasTextEditor
