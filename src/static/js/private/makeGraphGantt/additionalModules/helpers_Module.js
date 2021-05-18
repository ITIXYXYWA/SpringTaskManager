import {makeGraph} from '../parsingData/making.js';
import {makePercent} from '../parsingData/percentForTasks.js';
import {parsTask} from '../parsingData/parsFields.js';

function multiFetch (url) {
    fetch( url )
    .then(response => response.json())
    .then(result => {
        switch ( url ) {
            case '/schemas/master/files':
                makeFileList(result)
            break
            
            case '/admin/users':
                makeUserList(result)
            break
            
            case 'http://10.3.0.87:2000/schemas/master/Предмет_1':
                makeGraph(result)
            break

        }
    })
}

async function getSummary ({url, tasks}) {
   const response = await fetch(url);
    const result_1 = await response.json();
    return makePercent({
        data: parsTask(tasks),
        summary: result_1
    });
}

export {multiFetch, getSummary}
