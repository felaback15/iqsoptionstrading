<template>
  <v-card outlined>
    <v-card-text>
      <v-data-table
        :search="search"
        loading-text="Loading... Please wait"
        :loading="loading.investment"
        :headers="headers"
        :items="investments"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title
              class="text-subtitle-1 d-flex align-center text-uppercase"
            >
              Investments
            </v-toolbar-title>
            <v-divider class="mx-4" inset vertical />
            <v-chip class="ml-1" color="secondary" label outlined>
              {{ investments && investments.length }}
            </v-chip>

            <v-spacer />
            <v-text-field
              v-model="search"
              prepend-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            />
            <!-- <v-spacer></v-spacer>
                          <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Investment</v-btn> -->
          </v-toolbar>
        </template>
        <template v-slot:item.status="{ item }">
          <v-chip small :color="getColor(item.status)" class="text-uppercase">
            {{ item.status }}
          </v-chip>
        </template>
        <!-- <template v-slot:item.proof="{ item }">
            <v-btn
              color="secondary"
              outlined
              small
              @click="openProof( true, item.photoURL)"
            >
              View Proof
            </v-btn>
          </template> -->
        <template v-slot:item.actions="{ item }">
          <v-btn color="primary" depressed small @click="action(true, item)">
            Action
          </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
    <investment-action
      :investment="investment"
      :modal="modal.action"
      :toggle="action"
    />
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import InvestmentAction from './investmentAction.vue'
export default {
  components: { InvestmentAction },
  props: {
    user: Object
  },
  data: () => ({
    modal: {
      image: false,
      action: false
    },
    image: '',
    investment: {},
    search: '',
    headers: [
      {
        text: 'Amount',
        align: 'start',
        sortable: false,
        value: 'amount'
      },
      {
        text: 'Maturity Date',
        value: 'maturityDate'
      },
      {
        text: 'Status',
        value: 'status'
      },
      {
        text: 'Date',
        value: 'date'
      },
      {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }
    ]
  }),
  computed: {
    ...mapGetters({ loading: 'admin/getLoading', state: 'admin/getState' }),
    investments () {
      const arr = []
      this.state('investments').forEach((el) => {
        el.amount = el.amount.toLocaleString('en-US', {
          style: 'currency',
          code: 'US',
          currency: 'USD'
        })
        if (el.userID === this.user.userID) {
          arr.push(el)
        }
      })
      return arr
    }
  },
  methods: {
    openProof (state, image) {
      this.image = image
      this.modal.image = state
    },
    action (state, investment) {
      this.investment = investment
      this.modal.action = state
    },

    getColor (type) {
      if (type && type.toLowerCase() === 'fail') {
        return 'error'
      } else if (
        (type && type.toLowerCase() === 'success') ||
        (type && type.toLowerCase() === 'success')
      ) {
        return 'success'
      } else if (type && type.toLowerCase() === 'ongoing') {
        return 'warning'
      } else {
        return type
      }
    }
  }
}
</script>

<style></style>
