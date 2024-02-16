<template>
  <v-container fluid class="pa-0 overflow">
    <v-row justify="center" class="bg-crypto align-center px-md-16 px-4 py-16 primary ma-0">
      <v-col cols="12" class="text-center pl-md-10 my-6 mb-12">
        <div
          class=" text-h4 text-md-h3 text-lg-h2 text-capitalize white--text font-weight-bold"
        >
          Regulatory and Supervision
        </div>
        <div
          class="text-h6  white--text font-weight-light mt-5"
        >
          Regulated by the world leading financial regulatory bodies
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="white text2--text py-16 px-4  px-md-10 ">
      <v-col
        v-for="policy in policies"
        :key="policy.name"
        data-aos="fade-up"
        :data-aos-delay="policy.delay"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        cols="12"
        md="10"
        class="mb-6"
      >
        <div class="pb-2">
          <v-avatar :size="$vuetify.breakpoint.xsOnly ? 30 : 40">
            <img :src="policy.image" max-width="100" :alt="policy.name">
          </v-avatar>
        </div>
        <div class="text-h5 text-md-h3 font-weight-light mb-4">
          {{ policy.name }}
        </div>
        <div class="font-weight-light" v-html="policy.description" />
      </v-col>
      <v-col cols="12" md="10">
        <div class="pb-2">
          <v-icon large color="secondary">
            mdi-bank
          </v-icon>
        </div>
        <div class="text-h5 text-md-h3 font-weight-medium mb-4">
          Your funds are operated only in the most trusted financial institution
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RegulatoryAndSupervision',
  scrollToTop: true,
  data: () => ({
    policies: [
      {
        name: 'Cyprus Securities and Exchange Commission (CySEC)',
        delay: 500,
        image: '/cysec.jpg',
        description: `
        <p>The Cyprus Securities and Exchange Commission, better known as CySEC, is the financial regulatory agency of Cyprus. As an EU member state, CySEC's financial regulations and operations comply with the European MiFID financial harmonization law.</p>
        `
      },
      {
        name: 'Financial Services Authority (FSA)',
        delay: 500,
        image: '/fsa.png',
        description: `
        <p>The Seychelles Financial Services Authority (FSA)  is an established and reputable international financial services responsible for the regulation of non-bank financial services to protect civilian interests, offering international businesses and investors a range of sophisticated products that meet the increasingly demanding criteria of flexibility, adaptability and security.</p>
        `
      },
      {
        name: 'Professional Indemnity Insurance',
        delay: 500,
        image: '/aig.png',
        description: `
        <p>IQ Options Company always adheres to the "customer first" service concept and provides professional liability insurance (PI insurance) for customers while protecting the financial security of customers and meeting the common requirements of multiple regulations. The insurance company which is IQ Options partner provides IQ Options customers with up to U.S.D 2.5 million in single insurance coverage.</p>
        `
      }

    ]
  }),
  head () {
    return {
      title: 'Regulatory & Supervision',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'IQ Options Company is excited to announce the launch of our new cryptocurrency trading platform. '
        }
      ]
    }
  }
}
</script>

<style >

.bg-crypto {
background: linear-gradient(0deg, rgba(49, 1, 131, 0.9) 47%, rgba(156,19,223, 0.9) 87%),
  url("/bg/regulatory.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.overflow {
  width:100vw;
  overflow: hidden;
}
</style>
