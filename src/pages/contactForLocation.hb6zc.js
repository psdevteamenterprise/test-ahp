// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { contactForLocationOnReady } from 'abmp-npm/pages';

$w.onReady(function () {
    contactForLocationOnReady({ $w });
});
