import './Table.less';
import { defineComponent, VNodeChild, ref, onMounted } from 'vue';

export default defineComponent({
  props: {},
  setup() {
    type ColumnItem = {
      title: string;
      key: string;
      render?: (rowData: object, rowIndex: number) => VNodeChild;
    };
    type TableDataItem = object;
    type TableBodyData = { data: object[] };
    type TableRowData = { row: object; rowIndex: number };

    const tableClasses = ['table', 'table-fixed', 'relative'];
    const tableContainerRef = ref<HTMLElement | null>(null);

    const columns: ColumnItem[] = [
      {
        title: 'ID',
        key: 'id',
        render: (row: any) => `id-${row.id}`,
      },
      {
        title: 'Name',
        key: 'name',
      },
      {
        title: 'Age',
        key: 'age',
      },
      {
        title: 'Address',
        key: 'addr',
      },
    ];

    const tableData: TableDataItem[] = Array(5)
      .fill(0)
      .map((_, i) => ({
        id: i,
        name: `name-${i}`,
        age: 18 + i,
        addr: `addr-${i}`,
      }));

    const fixedColumnClasses = ref(['']);

    const TableRow = ({ row, rowIndex }: TableRowData) => {
      const tableRowCols = columns.map((col: ColumnItem, colIndex: number) => (
        <td
          class={
            !colIndex
              ? ['sticky', 'left-0', 'bg-white'].concat(
                  fixedColumnClasses.value
                )
              : ['bg-white']
          }
        >
          {col?.render?.(row, rowIndex) || row[col.key as keyof object]}
        </td>
      ));
      return <tr>{tableRowCols}</tr>;
    };

    const TableBody = ({ data }: TableBodyData) => {
      const tableRows = data.map((row: object, index: number) => (
        <TableRow key={index} row={row} rowIndex={index} />
      ));
      return <tbody>{tableRows}</tbody>;
    };

    const tableContainerClasses = [
      'table-container',
      'overflow-auto',
      'scroll-smooth',
    ];

    onMounted(() => {
      console.log(tableContainerRef.value);
      tableContainerRef.value?.addEventListener('scroll', (e: any) => {
        fixedColumnClasses.value =
          e.target.scrollLeft > 0 ? ['shadow-right', 'shadow-gray'] : [''];
      });
    });

    return () => (
      <div class={tableContainerClasses} ref={tableContainerRef}>
        <table class={tableClasses} style={'width: 400px'}>
          <thead>
            {columns.map((col, colIndex) => (
              <th
                class={
                  !colIndex
                    ? [
                        'w-sm',
                        'text-left',
                        'sticky',
                        'left-0',
                        'bg-white',
                      ].concat(fixedColumnClasses.value)
                    : ['w-sm', 'text-left', 'bg-white']
                }
              >
                {col.title}
              </th>
            ))}
          </thead>
          <TableBody data={tableData} />
        </table>
      </div>
    );
  },
});
