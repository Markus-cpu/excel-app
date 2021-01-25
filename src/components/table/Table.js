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
            console.log($resizer)
            // parent is Dom element
            const $parent = $resizer.closest('[data-type = "resize"]')
            const coords = $parent.getCoords()

            document.onmousemove = e => {
                const deltaX = e.pageX - coords.right
                $parent.$el.style.width = (coords.width + deltaX) + 'px'
                console.log(deltaX)
            }

            document.onmouseup = () => {
                document.onmousemove = null
            }
        }
    }
}