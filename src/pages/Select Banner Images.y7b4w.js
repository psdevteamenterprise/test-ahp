import { selectBannerImagesOnReady } from 'abmp-npm/pages';


$w.onReady(function () {
    selectBannerImagesOnReady({ $w });
});