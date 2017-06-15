'use strict';

module.exports = function (page) {

  page = page ? page : this.$refs.page.value;

  if (!this.opts.pagination.dropdown)  {
    if (this.$refs && this.$refs.pagination && this.$refs.pagination.page) {
        this.$refs.pagination.page = page;
    }
    else {
        this.$refs.pagination = {
            page: page
        };
    }
}

  this.page = page;

  if (this.source == 'server') this.getData();
};
