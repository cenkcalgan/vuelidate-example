<template>
  <div>
    <div class="container mt-5">
      <h1>Vuelidate Example</h1>
      <p>
        This example validates the following checks using the required, numeric,
        minLength, maxLength, $each properties of the
        <a href="https://vuelidate.js.org/" target="_blank">Vuelidate.</a>
      </p>
      <form class="form m-auto" @submit.prevent="onSubmit">
        <ul class="text-left">
          <li :class="{ bzzz: isAdded, 'text-success': isAdded }">
            Adding input field,
          </li>
          <li :class="{ bzzz: isDeleted, 'text-success': isDeleted }">
            Deleting input field,
          </li>
          <li>Numeric field control,</li>
          <li>Require field control,</li>
          <li>Max and min character length control,</li>
          <li>Unique field value checks</li>
        </ul>
        <div class="row" v-for="(inputItem, index) in myInputs" :key="index">
          <div class="col">
            <div class="form-group">
              <div class="d-flex align-items-center">
                <input
                  type="number"
                  class="form-control"
                  :class="{ invalid: $v.myInputs.$each[index].$error }"
                  placeholder="Enter the serial number."
                  :id="inputItem.id"
                  v-model.number="inputItem.value"
                  @blur="$v.myInputs.$each[index].value.$touch()"
                />
                <i
                  class="ml-2 material-icons form-icon"
                  @click="removeInput(index)"
                  v-show="index || (!index && myInputs.length > 1)"
                >
                  remove_circle
                </i>
                <i
                  class="ml-2 material-icons form-icon"
                  @click="addInput"
                  v-show="index == myInputs.length - 1"
                >
                  add_circle
                </i>
              </div>

              <div
                class="text-danger text-left mt-1"
                :class="{
                  bzzz: !$v.myInputs.$each[index].value.minLen
                }"
                v-if="!$v.myInputs.$each[index].value.minLen"
              >
                This field must be min
                {{ $v.myInputs.$each[index].value.$params.minLen.min }}
                characters in length.
              </div>
              <div
                class="text-danger text-left mt-1"
                :class="{
                  bzzz: !$v.myInputs.$each[index].value.maxLen
                }"
                v-if="!$v.myInputs.$each[index].value.maxLen"
              >
                This field must be max
                {{ $v.myInputs.$each[index].value.$params.maxLen.max }}
                characters in length.
              </div>
              <div
                class="text-danger text-left mt-1"
                :class="{
                  bzzz:
                    !$v.myInputs.$each[index].value.required &&
                    $v.myInputs.$each[index].value.$dirty
                }"
                v-if="
                  !$v.myInputs.$each[index].value.required &&
                    $v.myInputs.$each[index].value.$dirty
                "
              >
                The field cannot be empty.
              </div>
              <div
                class="text-danger text-left mt-1"
                :class="{ bzzz: !$v.myInputs.$each[index].isUnique }"
                v-if="!$v.myInputs.$each[index].isUnique"
              >
                The field value is not repeated.
              </div>
            </div>
          </div>
        </div>
        <div class="text-left">
          <button
            type="submit"
            class="btn btn-success mr-2"
            :disabled="$v.$invalid"
          >
            Submit
          </button>
          <button type="button" class="btn btn-secondary" @click="resetForm">
            Reset
          </button>
        </div>
        <div class="mt-4" v-if="isSubmited">
          <p class="text-success">Form is Submited!</p>
          <div class="text-left">
            <h6>Form Values:</h6>
            <ul>
              <li v-for="(input, index) in myInputs" :key="index">
                {{ input.value }}
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  numeric,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  name: "ValidationForm",
  data() {
    return {
      myInputs: [{ value: "" }],
      isSubmited: false,
      isAdded: false,
      isDeleted: false
    };
  },
  validations: {
    myInputs: {
      required,
      minLen: minLength(1),
      $each: {
        value: {
          required,
          numeric,
          minLen: minLength(3),
          maxLen: maxLength(6)
        },
        isUnique(value) {
          if (value.value === "") return true;
          return new Promise(resolve => {
            var items = this.myInputs.filter(x => x.value == value.value);
            resolve(items.length == 1);
          });
        }
      }
    }
  },
  methods: {
    addInput() {
      this.myInputs.push({ value: "" });
      this.isSubmited = false;
      this.isAdded = true;
    },
    removeInput(index) {
      this.myInputs.splice(index, 1);
      this.isSubmited = false;
      this.isDeleted = true;
    },
    resetForm() {
      for (let index = 0; index < this.myInputs.length; index++) {
        this.myInputs[index].value = "";
      }
      this.isSubmited = false;
    },
    onSubmit() {
      this.isSubmited = true;
      // eslint-disable-next-line no-console
      console.log("Submited");
    }
  },
  watch: {
    isAdded() {
      var vm = this;
      setTimeout(() => {
        vm.isAdded = false;
      }, 300);
    },
    isDeleted() {
      var vm = this;
      setTimeout(() => {
        vm.isDeleted = false;
      }, 300);
    }
  }
};
</script>

<style scoped>
.form {
  width: 400px;
}
.invalid {
  border-color: red;
}
.form-icon {
  cursor: pointer;
}

/*
Bzzz Effect Begin
Source : https://codepen.io/anon/pen/yXeXwG
*/
.bzzz {
  -webkit-animation: vibrate 2s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  animation: vibrate 2s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 300px;
  perspective: 300px;
}

@keyframes vibrate {
  0%,
  2%,
  4%,
  6%,
  8%,
  10%,
  12%,
  14%,
  16%,
  18% {
    -webkit-transform: translate3d(-1px, 0, 0);
    transform: translate3d(-1px, 0, 0);
  }
  1%,
  3%,
  5%,
  7%,
  9%,
  11%,
  13%,
  15%,
  17%,
  19% {
    -webkit-transform: translate3d(1px, 0, 0);
    transform: translate3d(1px, 0, 0);
  }
  20%,
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
/* 
Bzzz Effect End
*/
</style>
