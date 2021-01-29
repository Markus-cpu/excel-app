import { ExcelComponent } from '../../core/ExcelComponent'
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';

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
        if (event.target.dataset.resize) {
            const $resizer = $(event.target)
            // parent is Dom element
            const $parent = $resizer.closest('[data-type = "resize"]')
            const coords = $parent.getCoords()

            document.onmousemove = e => {
                console.log(e)
                const deltaX = e.pageX - coords.right
                const value = coords.width + deltaX
                $parent.$el.style.width = value + 'px'
                console.log(deltaX)
            }

            document.onmouseup = () => {
                document.onmousemove = null
            }
        }
    }
}