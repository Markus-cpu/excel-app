import {capitalize} from '../utils/utils';

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('No root added to DomListener!')
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDomListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
              throw new Error(
                  `Method ${method} is not implemented in ${this.name}`
              )
            }
            this[method] = this[method].bind(this)
            // Тоже что и addEventListener
            this.$root.on(listener, this[method])
        })
    }
    removeDomListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}

// input -> onInput
function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}
