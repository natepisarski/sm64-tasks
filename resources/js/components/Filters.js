/** Displays a bar that shows currently applied filters. The one argument this takes is just "tuples", which is an array of:
 * [
 *   [NAME, VALUE, ONREMOVE]
 * ]
 *
 * If value is null, we don't show that pill at all.
 * */
export const Filters = ({tuples}) => {
    let filters = [];

    for (const [name, value, onRemove] of tuples) {
        if (!!value) {
            filters.push(
                <RemovableBadge key={name} name={name} onRemove={onRemove} />
            );
        }
    }

    return <div className="bg-gray-100">
        <div className="max-w-7xl py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Filters
                <span className="sr-only">, active</span>
            </h3>

            <div aria-hidden="true" className="hidden w-px h-5 bg-gray-300 sm:block sm:ml-4"/>

            <div className="mt-2 sm:mt-0 sm:ml-4">
                <div className="-m-1 flex flex-wrap items-center">
                    {filters}
                </div>
            </div>
        </div>
    </div>
};

/** Displays 1 badge, which is 1 currently filtered item. */
export const RemovableBadge = ({name, onRemove}) => {
    return <span
        className="m-1 inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900">
              <span>{name}</span>
              <button type="button"
                      className="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500">
                <span className="sr-only">Remove filter for {name}</span>
                <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8" onClick={onRemove}>
                  <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7"/>
                </svg>
              </button>
            </span>
}
