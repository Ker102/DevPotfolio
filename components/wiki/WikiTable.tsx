interface WikiTableProps {
    headers: string[];
    rows: string[][];
    brandColumnIndex?: number;
    caption?: string;
}

export default function WikiTable({ headers, rows, caption }: WikiTableProps) {
    return (
        <div className="my-8 overflow-x-auto">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="border-b border-white/20">
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                scope="col"
                                className="px-4 py-3 text-left text-sm font-semibold text-white uppercase tracking-wide"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={`px-4 py-4 text-sm align-top ${cellIndex === 0
                                            ? "font-medium text-white"
                                            : "text-gray-400"
                                        }`}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {caption && (
                <p className="mt-4 text-xs text-gray-500 text-center">
                    {caption}
                </p>
            )}
        </div>
    );
}
