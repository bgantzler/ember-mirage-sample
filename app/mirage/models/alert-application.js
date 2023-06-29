import { Model, belongsTo } from 'miragejs';

export default Model.extend({
  alertDefinition: belongsTo(),
  alertDefaultSeverity: belongsTo('alert-severity'),
});
