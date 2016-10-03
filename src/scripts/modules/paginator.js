import { paginator, total_count } from '../globals';
/**
 * Fired on AJAX response to construct paginated results.
 *
 */
    export function buildPaginator()
    {
        // console.log('Count: ' + total_count);
        paginator.innerHTML = total_count.value;
    }