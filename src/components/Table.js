import React, { useMemo, useState } from 'react';
import { useTable, useGlobalFilter, useAsyncDebounce } from 'react-table'

// UI for filtering
function GlobalFilter({ globalFilter, setGlobalFilter }) {
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
            <input
                value={value || ""}
                onChange={e => { setValue(e.target.value); onChange(e.target.value); }}
                placeholder={'Search for a country..'}
            />
    )
}

export default function Table(props) {
    const { countryData } = props;

    const columns = useMemo(
        () => [
            {
                Header: 'Country',
                accessor: 'country',
            },
            {
                Header: 'Active Cases',
                accessor: 'active',
            },
        ],
        []
    )

    const data = useMemo(() => {
        return countryData.map((elem) => { return { country: elem.country, active: elem.cases - elem.recovered - elem.deaths } });
    }, [countryData])

    const { getTableProps, getTableBodyProps, rows, prepareRow, visibleColumns, state, setGlobalFilter } = useTable({ columns, data, }, useGlobalFilter)

    return (
        <div className="stats-table">
            <h2 className="stats-table--header">
                Live Cases by Country
            </h2>
            <table {...getTableProps()} className="table">
                <thead>
                    <tr>
                        <th
                            colSpan={visibleColumns.length}
                        >
                            <GlobalFilter
                                globalFilter={state.globalFilter}
                                setGlobalFilter={setGlobalFilter}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
} 