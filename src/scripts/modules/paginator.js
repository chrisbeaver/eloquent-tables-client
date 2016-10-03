import { paginator, total_count, config } from '../globals';
/**
 * Fired on AJAX response to construct paginated results.
 *
 */
export function buildPaginator()
{
    // console.log('Count: ' + total_count);
    paginator.innerHTML = total_count.value;
    let totalPages = total_count.value / config.tableRows;
    alert(totalPages);
}