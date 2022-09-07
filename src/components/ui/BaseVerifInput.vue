<template>
  <div>
    <input name="code" class="code-input" required autocomplete="off" />
    <input name="code" class="code-input" required autocomplete="off" />
    <input name="code" class="code-input" required autocomplete="off" />
    <input name="code" class="code-input" required autocomplete="off" />
    <input name="code" class="code-input" required autocomplete="off" />
  </div>
</template>

<script>
export default {
  methods: {
    // mini example on how to pull the data on submit of the form
  },
  mounted() {
    const inputElements = [...document.querySelectorAll("input.code-input")];

    inputElements.forEach((ele, index) => {
      ele.value = "-";
      ele.addEventListener("focus", (e) => {
        if (e.target.value == "-") e.target.value = "";
      });
      ele.addEventListener("blur", (e) => {
        if (e.target.value == "") e.target.value = "-";
      });
      ele.addEventListener("keydown", (e) => {
        // if the keycode is backspace & the current field is empty
        // focus the input before the current. Then the event happens
        // which will clear the "before" input box.
        if (e.keyCode === 8 && e.target.value === "") {
          e.target.value = "-";
          inputElements[Math.max(0, index - 1)].focus();
        }
      });
      ele.addEventListener("input", (e) => {
        // take the first character of the input
        // this actually breaks if you input an emoji like 👨‍👩‍👧‍👦....
        // but I'm willing to overlook insane security code practices.
        const [first, ...rest] = e.target.value;
        e.target.value = first ?? ""; // first will be undefined when backspace was entered, so set the input to ""
        const lastInputBox = index === inputElements.length - 1;
        const didInsertContent = first !== undefined;
        if (didInsertContent && !lastInputBox) {
          // continue to input the rest of the string
          inputElements[index + 1].focus();
          inputElements[index + 1].value = rest.join("");
          inputElements[index + 1].dispatchEvent(new Event("input"));
        }
      });
    });

    // mini example on how to pull the data on submit of the form
  },
};
</script>
<style lang="scss" scoped>
.code-input {
  background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));
  padding: 0.8rem;

  width: 70px;
  margin: 0.5rem;
  border-radius: 15px;
  border: 1px solid gray;
  text-align: center;

  @media screen and (max-width: 800px) {
    margin: 0.5rem;
    width: 55px;
    padding: 0.7rem;
  }
  @media screen and (max-width: 550px) {
    margin: 0.5rem;
    width: 45px;
    padding: 0.5rem;
  }
  @media screen and (max-width: 500px) {
    margin: 0.2rem;
    width: 30px;
    padding: 0.3rem;
  }
}
</style>
