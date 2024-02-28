<template>
  <div class="client-form">
    <form @submit.prevent="submitForm">
      <div class="form-group form-group-fio">
        <div class="form">
          <label for="surname" :class="{ 'error-label': $v.client.surname.$error }">Фамилия*</label>
          <input type="text" id="surname" v-model="client.surname" @blur="$v.client.surname.$touch()" />
        </div>
        <div class="form">
          <label for="name" :class="{ 'error-label': $v.client.name.$error }">Имя*</label>
          <input type="text" id="name" v-model="client.name" @blur="$v.client.name.$touch()" />
        </div>
        <div class="form">
          <label for="patronymic">Отчество</label>
          <input type="text" id="patronymic" v-model="client.patronymic" />
        </div>
      </div>

      <div class="form-group form-group-contact">
        <div class="form">
          <label for="birthDate" :class="{ 'error-label': $v.client.birthDate.$error }">Дата рождения*</label>
          <input type="date" id="birthDate" v-model="client.birthDate" @blur="$v.client.birthDate.$touch()" />
        </div>

        <div class="form">
          <label for="phone" :class="{ 'error-label': $v.client.phone.$error }">Номер телефона*</label>
          <input type="text" id="phone" v-model="client.phone" @blur="$v.client.phone.$touch()" />
        </div>

        <div class="form">
          <label for="gender">Пол</label>
          <select id="gender" v-model="client.gender">
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
        </div>
      </div>
      <div class="form-group form-group-address">
        <div class="form">
          <label for="postalCode">Индекс</label>
          <input type="text" id="postalCode" v-model="client.postalCode" />
        </div>
        <div class="form">
          <label for="country">Страна</label>
          <input type="text" id="country" v-model="client.country" />
        </div>
        <div class="form">
          <label for="region">Область</label>
          <input type="text" id="region" v-model="client.region" />
        </div>
        <div class="form">
          <label for="city" :class="{ 'error-label': $v.client.city.$error }">Город*</label>
          <input type="text" id="city" v-model="client.city" @blur="$v.client.city.$touch()" />
        </div>
        <div class="form">
          <label for="street">Улица</label>
          <input type="text" id="street" v-model="client.street" />
        </div>
        <div class="form">
          <label for="house">Дом</label>
          <input type="text" id="house" v-model="client.house" />
        </div>
      </div>

      <div class="form-group form-group-passport">
        <div class="form">
          <label for="documentType" :class="{ 'error-label': $v.client.documentType.$error }">Тип документа*</label>
          <select id="documentType" v-model="client.documentType" @blur="$v.client.documentType.$touch()">
            <option value="passport">Паспорт</option>
            <option value="birthCertificate">Свидетельство о рождении</option>
            <option value="driverLicense">Вод. удостоверение</option>
          </select>
        </div>
        <div class="form">
          <label for="series">Серия</label>
          <input type="text" id="series" v-model="client.series" />
        </div>
        <div class="form">
          <label for="number">Номер</label>
          <input type="text" id="number" v-model="client.number" />
        </div>
        <div class="form">
          <label for="issuedBy">Кем выдан</label>
          <input type="text" id="issuedBy" v-model="client.issuedBy" />
        </div>
        <div class="form">
          <label for="issueDate" :class="{ 'error-label': $v.client.issueDate.$error }">Дата выдачи*</label>
          <input type="date" id="issueDate" v-model="client.issueDate" @blur="$v.client.issueDate.$touch()" />
        </div>
      </div>

      <div class="form-group form-group-info">
        <div class="form">
          <label for="clientGroup" :class="{ 'error-label': $v.client.clientGroup.$error }">Группа клиентов*</label>
          <select id="clientGroup" v-model="client.clientGroup" multiple @blur="$v.client.clientGroup.$touch()">
            <option value="VIP">VIP</option>
            <option value="Проблемные">Проблемные</option>
            <option value="ОМС">ОМС</option>
          </select>
        </div>
        <div class="form">
          <label for="doctor">Лечащий врач</label>
          <select id="doctor" v-model="client.doctor">
            <option value="Иванов">Иванов</option>
            <option value="Захаров">Захаров</option>
            <option value="Чернышева">Чернышева</option>
          </select>
        </div>
      </div>

      <div class="checkbox">
        <input type="checkbox" id="noSms" v-model="client.noSms" />
        <label for="noSms">Не отправлять СМС</label>
      </div>

      <div class="button-container">
        <button type="submit">Создать клиента</button>
      </div>
    </form>
  </div>
</template>
  
<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { helpers } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

const isNumeric = helpers.regex('isNumeric', /^\d+$/);

export default {
  mixins: [validationMixin],
  data() {
    return {
      client: {
        surname: '',
        name: '',
        patronymic: '',
        birthDate: '',
        phone: '',
        gender: '',
        clientGroup: [],
        doctor: '',
        noSms: false,
        postalCode: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',
        documentType: '',
        series: '',
        number: '',
        issuedBy: '',
        issueDate: '',
      }
    };
  },
  validations: {
    client: {
      surname: { required },
      name: { required },
      birthDate: { required },
      phone: { required, minLength: minLength(11), maxLength: maxLength(11), isNumeric(value) { return /^\d+$/.test(value); } },
      clientGroup: { required, minLength: minLength(1) },
      city: { required },
      documentType: { required },
      issueDate: { required },
      postalCode: { minLength: minLength(5), maxLength: maxLength(6), isNumeric },
      series: { minLength: minLength(4), maxLength: maxLength(4), isNumeric },
      number: { minLength: minLength(6), maxLength: maxLength(6), isNumeric },
      street: {},
      house: {},
      region: {},
      country: {},
      issuedBy: {},
    }
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        alert('Новый клиент успешно создан');
      } else {
        alert('Форма содержит ошибки');
      }
    }
  }
}
</script>
  
<style scoped lang="scss">
$background-color: rgb(223, 238, 231);
$tablet-breakpoint: 768px;
$desktop-breakpoint: 1024px;
$label-width-mobile: 100%;
$label-width-tablet: 20%;
$label-width-desktop: 25%;
$input-width-mobile: 100%;
$input-width-tablet: 80%;
$input-width-desktop: 75%;

@mixin respond-to($breakpoint) {
  @if $breakpoint ==tablet {
    @media (min-width: $tablet-breakpoint) {
      @content;
    }
  }

  @else if $breakpoint ==desktop {
    @media (min-width: $desktop-breakpoint) {
      @content;
    }
  }
}

.client-form {
  background-color: $background-color;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: 100%;
  max-width: 100%; // Максимальная ширина для мобильной версии

  @include respond-to(tablet) {
    max-width: 768px; // Максимальная ширина для планшетной версии
    margin: 0 auto; // Центрирование формы
  }

  @include respond-to(desktop) {
    max-width: 1024px; // Максимальная ширина для компьютерной версии
    margin: 0 auto; // Центрирование формы
  }
  .error-label {
    color: red;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      margin-bottom: 5px;
      width: $label-width-mobile;
    }

    input,
    select,
    .multiselect {
      box-sizing: border-box;
      width: $input-width-mobile;
    }

    @include respond-to(tablet) {
      flex-direction: row;
      align-items: center;

      label {
        width: $label-width-tablet;
      }

      input,
      select,
      .multiselect {
        width: $input-width-tablet;
      }
    }

    @include respond-to(desktop) {
      label {
        width: $label-width-desktop;
      }

      input,
      select,
      .multiselect {
        width: $input-width-desktop;
      }
    }
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label,
    input,
    select {
      width: 100%;
    }

    input,
    select {
      margin-bottom: 10px; // Добавить отступ между элементами
    }
  }

  .button-container {
    display: flex;
    justify-content: center;

    button {
      width: auto;
      padding: 10px 20px;
      border: none;
      background-color: #006400;
      color: white;
      cursor: pointer;
      border-radius: 5px;
    }
  }

  .checkbox {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    gap: 5px;
  }
}
</style>
  
  