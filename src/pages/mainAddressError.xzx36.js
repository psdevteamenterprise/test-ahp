// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { deleteConfirmOnReady } from 'abmp-npm/pages';

$w.onReady(function () {
    deleteConfirmOnReady({ $w });
});