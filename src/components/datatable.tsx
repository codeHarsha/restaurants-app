/** importing required files and components  */

import React from 'react'
import Cards from './Cards'; 

/** datatable components to map all API data tp cards component */
function Datatable({ data, mode }: any) {
    const columns = data[0] && Object.keys(data[0]);
    
    return (
        <div>
            { data.map((row: any) => (<Cards name={row[columns[0]]} timing={row[columns[1]]} darkmode={mode} />))};
        </div>
    );
}

/** exporting component */

export default Datatable
