import { ajax } from "discourse/lib/ajax";
import ModalFunctionality from "discourse/mixins/modal-functionality";

export default Ember.Controller.extend(ModalFunctionality, {
  loading: null,
  reviewableExplanation: null,

  onShow() {
    this.set("loading", true);
    this.set("reviewableExplanation", null);

    this.store
      .find("reviewable-explanation", this.model.id)
      .then(result => {
        this.set("reviewableExplanation", result);
      })
      .finally(() => this.set("loading", false));
  }
});
