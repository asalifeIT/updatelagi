export const config = {
  apiUrl: 'http://asabeta.com/users/my',
  roles: {
      CUS:['CUS', 'ROLE_USER', 'ROLE_CUSTOMER', 'ROLE_CUS'],  // customer user
      MT:['MT', 'ROLE_USER', 'ROLE_WORKER', 'ROLE_MT'], //work user
      HK:['HK', 'ROLE_USER', 'ROLE_WORKER', 'ROLE_HK'], //work user
      SPV:['SPV', 'ROLE_ADMIN', 'ROLE_SUPERUSER', 'ROLE_SPV'], //editor
      GS:['GS', 'ROLE_ADMIN', 'ROLE_SUPERUSER', 'ROLE_GS'], //editor
      PROG:['PROG', 'ROLE_ADMIN', 'ROLE_MEGAUUSER', 'ROLE_PROG'], //full access
      HCGS:['HCGS', 'ROLE_ADMIN','ROLE_MEGAUUSER', 'ROLE_HGCS']    //full access
  }
}