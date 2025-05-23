<template>
  <p-container tile border :title="'Verification'">
    <template v-slot:header>
      <v-chip
        label
        small
        :color="verified ? 'success' : 'accent'"
        class="text-uppercase"
      >
        <v-icon small left>
          {{ verified ? "mdi-account-check" : "mdi-account-clock" }}
        </v-icon>

        {{ verified ? "Verified" : "Not Verified" }}
      </v-chip>
    </template>
    <v-expansion-panels flat>
      <!-- /////////////////// Identity Verification ///////////////// -->
      <v-expansion-panel v-if="verification && verification.identity">
        <v-expansion-panel-header disable-icon-rotate>
          Indentity Verification -
          <strong>
            {{
              verification &&
                verification.identity &&
                verification.identity.type
            }}</strong>
          <template v-slot:actions>
            <v-icon
              :color="
                getColor(
                  verification &&
                    verification.identity &&
                    verification.identity.status
                )
              "
            >
              {{
                getIcon(
                  verification &&
                    verification.identity &&
                    verification.identity.status
                )
              }}
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row
            v-if="
              verification &&
                verification.identity &&
                verification.identity.status !== null
            "
            justify="center"
            class="ma-0"
          >
            <v-col cols="12" md="6" class="px-0 px-md-6">
              <v-card outlined class="mx-auto">
                <v-card-text>
                  <v-img
                    contain
                    max-height="300"
                    width="100%"
                    :src="
                      verification &&
                        verification.identity &&
                        verification.identity.front
                    "
                    :alt="verification.identity && verification.identity.type"
                    @load="identity.front = true"
                  />
                  <v-progress-linear
                    v-if="!identity.front"
                    indeterminate
                    color="secondary"
                  />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" class="px-0 px-md-6">
              <v-card outlined class="mx-auto">
                <v-card-text>
                  <v-img
                    contain
                    max-height="300"
                    width="100%"
                    :src="
                      verification &&
                        verification.identity &&
                        verification.identity.back
                    "
                    :alt="verification.identity && verification.identity.type"
                    @load="identity.back = true"
                  />
                  <v-progress-linear
                    v-if="!identity.back"
                    indeterminate
                    color="secondary"
                  />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="10" class="text-center">
              <v-btn
                depressed
                color="success"
                class="px-6 text-subtitle-1 font-weight-light text-capitalize"
                @click="
                  toggle(true, 'Identity Verification', 'identity', 'approve')
                "
              >
                Approve
              </v-btn>
              <v-btn
                depressed
                color="error"
                class="px-6 text-subtitle-1 font-weight-light text-capitalize"
                @click="
                  toggle(true, 'Identity Verification', 'identity', 'decline')
                "
              >
                Decline
              </v-btn>
            </v-col>
          </v-row>
          <v-row v-else class="ma-0">
            <v-col cols="12" class="text-center pa-6">
              No document
            </v-col>
          </v-row>
        </v-expansion-panel-content>
        <v-divider />
      </v-expansion-panel>
      <!-- /////////////////// Address Verification ///////////////// -->
      <v-expansion-panel v-if="verification && verification.address">
        <v-expansion-panel-header disable-icon-rotate>
          Address Verification -
          <strong>{{
            verification && verification.address && verification.address.type
          }}</strong>
          <template v-slot:actions>
            <v-icon
              :color="
                getColor(
                  verification &&
                    verification.address &&
                    verification.address.status
                )
              "
            >
              {{
                getIcon(
                  verification &&
                    verification.address &&
                    verification.address.status
                )
              }}
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row
            v-if="
              verification &&
                verification &&
                verification.address.status !== null
            "
            justify="center"
            class="ma-0"
          >
            <v-col cols="12" md="10" class="px-0 px-md-6">
              <v-card outlined class="mx-auto">
                <v-card-text>
                  <v-img
                    contain
                    width="100%"
                    :src="
                      verification.address &&
                        verification.address &&
                        verification.address.document
                    "
                    :alt="verification.address && verification.address.type"
                    @load="address = true"
                  />
                  <v-progress-linear
                    v-if="!address"
                    indeterminate
                    color="secondary"
                  />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="10" class="text-center">
              <v-btn
                depressed
                color="success"
                class="px-6 text-subtitle-1 font-weight-light text-capitalize"
                @click="
                  toggle(true, 'Address Verification', 'address', 'approve')
                "
              >
                Approve
              </v-btn>
              <v-btn
                depressed
                color="error"
                class="px-6 text-subtitle-1 font-weight-light text-capitalize"
                @click="
                  toggle(true, 'Address Verification', 'address', 'decline')
                "
              >
                Decline
              </v-btn>
            </v-col>
          </v-row>
          <v-row v-else class="ma-0">
            <v-col cols="12" class="text-center pa-6">
              No document
            </v-col>
          </v-row>
        </v-expansion-panel-content>
        <v-divider />
      </v-expansion-panel>
      <!-- /////////////////// Facial Verification ///////////////// -->
      <v-expansion-panel v-if="verification && verification.face">
        <v-expansion-panel-header disable-icon-rotate>
          Facial Verification -
          <strong>{{
            verification && verification.face && verification.face.type
          }}</strong>
          <template v-slot:actions>
            <v-icon
              :color="
                getColor(
                  verification && verification.face && verification.face.status
                )
              "
            >
              {{
                getIcon(
                  verification && verification.face && verification.face.status
                )
              }}
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row
            v-if="
              verification &&
                verification.face &&
                verification.face.status !== null
            "
            justify="center"
            class="ma-0"
          >
            <v-col cols="12" md="10" class="px-0 px-md-6">
              <v-card outlined class="mx-auto">
                <v-card-text>
                  <v-img
                    class="rounded-mg mx-auto"
                    max-height="300"
                    contain
                    width="100%"
                    :src="
                      verification &&
                        verification.face &&
                        verification.face.photo
                    "
                    @load="face = true"
                  />
                  <v-progress-linear
                    v-if="!face"
                    indeterminate
                    color="secondary"
                  />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="10" class="text-center">
              <v-btn
                depressed
                color="success"
                class="px-6 text-subtitle-1 font-weight-light text-capitalize"
                @click="toggle(true, 'Facial Recognition', 'face', 'approve')"
              >
                Approve
              </v-btn>
              <v-btn
                depressed
                color="error"
                class="px-6 text-subtitle-1 font-weight-light text-capitalize"
                @click="toggle(true, 'Facial Recognition', 'face', 'decline')"
              >
                Decline
              </v-btn>
            </v-col>
          </v-row>
          <v-row v-else class="ma-0">
            <v-col cols="12" class="text-center pa-6">
              No document
            </v-col>
          </v-row>
        </v-expansion-panel-content>
        <v-divider />
      </v-expansion-panel>
    </v-expansion-panels>
    <verify-action
      :id="user.userID"
      :toggle="toggle"
      :modal="modal"
      :action="action"
      :title="title"
      :type="type"
    />
  </p-container>
</template>

<script>
import { mapGetters } from 'vuex'
import VerifyAction from './verifyAction.vue'
import pContainer from '~/components/other/pContainer.vue'
export default {
  components: { pContainer, VerifyAction },
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },

  data: () => ({
    modal: false,
    title: '',
    type: '',
    action: '',

    identity: {
      front: false,
      back: false
    },
    face: false,
    address: false
  }),
  computed: {
    ...mapGetters({ state: 'admin/getState' }),
    verification () {
      const data = this.state('verification')
      console.log('this data', data)
      return data && data
    },
    verified () {
      let verified = false

      const address = this.verification && this.verification.address.status
      const identity = this.verification && this.verification.identity.status
      const face = this.verification && this.verification.face.status
      const arr = [address, identity, face]
      console.log(arr)
      verified = arr.every(el => el === true)
      return verified
    }
  },
  async created () {
    console.log(this.user)
    await this.$store.dispatch(
      'admin/initializeVerification',
      this.user?.userID
    )
  },
  methods: {
    getColor (status) {
      if (status === true) {
        return 'success'
      } else if (status === 'Progress') {
        return 'accent'
      } else if (status === false) {
        return 'error'
      } else if (status === null) {
        return 'grey'
      }
    },
    getIcon (status) {
      if (status === true) {
        return 'mdi-check-circle'
      } else if (status === 'Progress') {
        return 'mdi-circle-slice-1'
      } else if (status === false) {
        return 'mdi-close-circle'
      } else if (status === null) {
        return 'mdi-chart-donut'
      }
    },

    toggle (state, title, type, action) {
      this.title = title
      this.modal = state
      this.type = type
      this.action = action
    }
  }
}
</script>

<style></style>
