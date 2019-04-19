<template>
    <div class="m-credit">
      <div class="modal">
        <div class="modal-data">
          <div class="title">
            <div class="mark">填写信用卡信息</div>
            <div class="close">
              <a href="javascript:;" class="icon" @click="closeCredit"></a>
            </div>
          </div>
          <form action="/finishorder" method="post" id="payment-form">
            <div class="form-row">
              <div id="card-element">
                <!-- A Stripe Element will be inserted here. -->
              </div>

              <!-- Used to display form errors. -->
              <div id="card-errors" role="alert"></div>
            </div>

            <button class="btn">支付订单</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      submitCount: 0
    }
  },
  methods: {
    closeCredit () {
      this.$emit('closeCredit')
    }
  },
  mounted () {
    let self = this
    var stripe = Stripe('pk_test_NDW0TXm3xyIuxfYcXM9mp7E100VsUy8PNn')
    var elements = stripe.elements()
    var style = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
    var card = elements.create('card', { style: style })
    card.mount('#card-element')
    card.addEventListener('change', function(event) {
      var displayError = document.getElementById('card-errors')
      if (event.error) {
        displayError.textContent = event.error.message
      } else {
        displayError.textContent = ''
      }
    })

    var form = document.getElementById('payment-form')
    form.addEventListener('submit', function (event) {
      event.preventDefault()
      if (this.submitCount === 1) return
      this.submitCount = 1
      stripe.createToken(card).then(function (result) {
        if (result.error) {
          // Inform the user if there was an error.
          var errorElement = document.getElementById('card-errors')
          errorElement.textContent = result.error.message
        } else {
          // Send the token to your server.
          stripeTokenHandler(result.token)
        }
      })
    })
    function stripeTokenHandler (token) {
      // Insert the token ID into the form so it gets submitted to the server
      var form = document.getElementById('payment-form')
      var hiddenInput = document.createElement('input')
      hiddenInput.setAttribute('type', 'hidden')
      hiddenInput.setAttribute('name', 'stripeToken')
      hiddenInput.setAttribute('value', token.id)
      form.appendChild(hiddenInput)
      self.$emit('creditPay', token.id)
      this.submitCount = 0
    }
    card.addEventListener('ready', function () {
      self.$emit('closeLoading')
    })
  }
}
</script>

<style scoped lang="sass">
@import "../../assets/scss/cart/credit.scss"
</style>
