const btnShowMoreText = $('#btnShowMoreText');
const pLoading = $('#pLoading');
const pMoreText = $('#pMoreText');

btnShowMoreText.click(() => {
    pLoading.hide();
    pLoading.show();

    setTimeout(() => {
        pLoading.hide();
        pMoreText.show();
        btnShowMoreText.prop('disabled', true);
    }, 1500);
});