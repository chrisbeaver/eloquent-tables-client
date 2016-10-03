/**
 * Fired on AJAX response to construct paginated results.
 *
 */
export function buildPaginator(paginator)
{
    console.log("Count: " + total_count);
    paginator.innerHTML = total_count;
}