import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  orderHeader: belongsTo('order-header'),
  vendorAccount: belongsTo('vendor-account'),
});
