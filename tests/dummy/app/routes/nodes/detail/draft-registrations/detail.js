import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        let draft = this.store.peekRecord('draft-registration', params.draft_registration_id);
        return draft;
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('node', this.modelFor('nodes.detail'));
    }
});
