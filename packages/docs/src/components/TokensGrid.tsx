import '../styles/tokens-grid.css'


interface TokensGridProps {
    tokens: Record<string, string>
    hasremValue?: boolean
}



export function TokensGrid({tokens, hasremValue = false}:TokensGridProps){

    return(
        <table className='tokens-grid'>
            <thead>
                <th>Name</th>
                <th>Value</th>
                {hasremValue && <th>Pixels</th>}
            </thead>
            <tbody>
                {
                  Object.entries(tokens).map(([key, value]) =>{
                    return(
                        <tr key={key}>
                           <td>{key}</td> 
                           <td>{value}</td> 
                          {hasremValue && (
                          <td>{Number(value.replace('rem', '')) * 16}px</td>
                          ) }
                        </tr>
                    )
                  })  
                }
            </tbody>
        </table>
    )
}