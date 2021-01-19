export class DomListener {
    constructor($root) {
        if (!$root) {
            throw new Error('No root added to DomListener!')
        }
        this.$root = $root
    }
}
