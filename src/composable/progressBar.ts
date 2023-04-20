import { ref } from "vue";

let showProgressBar = ref(false);
const progressBar = () => {
     showProgressBar.value = true;
     setTimeout(() => {
          showProgressBar.value = false;
     }, 1000);
};

export default { progressBar, showProgressBar };
