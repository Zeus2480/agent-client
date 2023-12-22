import api from "../api";

const url = import.meta.env.VITE_APP_API_PREFIX + "agent/boot";

const app_boot = import.meta.env.VITE_APP_API_PREFIX + "agent/appBoot";

export default {
  appBoot(payload) {
    return api
      .get(app_boot, {
        params: { ...payload },
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
};
