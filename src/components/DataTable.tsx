import React from 'react';

interface Column {
  key: string;
  label: string;
  format?: (value: any) => string;
}

interface DataTableProps {
  title: string;
  columns: Column[];
  data: any[];
}

export default function DataTable({ title, columns, data }: DataTableProps) {
  return (
    <div className="p-4 lg:p-6">
      <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">{title}</h2>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="px-3 py-2 lg:px-6 lg:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-3 py-2 lg:px-6 lg:py-4 whitespace-nowrap text-xs lg:text-sm text-gray-900"
                      >
                        {column.format
                          ? column.format(row[column.key])
                          : row[column.key] ?? 'N/A'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}