import { ExcelComponent } from '../../core/ExcelComponent'
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
    static className = 'excel__table'
    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown']
        })
    }
    toHTML() {
        return createTable(50)
    }
    onMousedown(event) {
        if (event.target.dataset.resize === 'col') {
            console.log('Start resizing: ', event.target.dataset.resize)
        }
    }
}