

export const BASE_API_URL = "https://api.esiolo.biz/api"

export const ITEMS_PER_PAGE = 30

export const URLS = {
    // Auth
    LOGIN: `${BASE_API_URL}/auth/sign-in`,
    SIGNUP: `${BASE_API_URL}/auth/sign-up`,
    EMAIL_VERIFICATION: `${BASE_API_URL}/auth/email-verification`,
    LOGOUT: `${BASE_API_URL}/auth/sign-out`,
    FORGOT_PASSWORD: `${BASE_API_URL}/auth/forgot-password`,
    RESET_PASSWORD: `${BASE_API_URL}/auth/reset-password`,
    // Account
    ACCOUNT: `${BASE_API_URL}/user/account`,
    // Merchant
    MERCHANTS: `${BASE_API_URL}/merchant`,
    // CLient
    CLIENTS: `${BASE_API_URL}/client`,
    // COUPONS
    COUPONS: `${BASE_API_URL}/coupon`,
    // ORDERS
    ORDERS: `${BASE_API_URL}/order`,
    // PRODUCT CATEGORIES
    CATEGORIES: `${BASE_API_URL}/product/category`,
    // PRODUCTS
    PRODUCTS: `${BASE_API_URL}/product/catalog`,
    // PRODUCT GALLERY
    PRODUCT_GALLERY: `${BASE_API_URL}/product/gallery`,
    // PAYOUT
    PAYOUT: `${BASE_API_URL}/payout`,
    // PURCHASE
    PURCHASE: `${BASE_API_URL}/purchase`,
    // STATEMENT
    STATEMENT: `${BASE_API_URL}/statement`,
    // TRANSACTION
    TRANSACTION: `${BASE_API_URL}/transaction`,
    INITIATE_STK_PUSH: `${BASE_API_URL}/ipn/daraja/lnmo/transact`,
    // MEDIA
    MEDIA: `${BASE_API_URL}/media`,
    // CONTACT
    CONTACT: `${BASE_API_URL}/contact`
}


export const ADMIN_BASE_URL = "management"
export const CURRENCY = ""

export const ORDER_STATUS = {
    // status
    "0": 'PENDING',
    "1": 'PROCESSING',
    "2": 'PROCESSED',
    "3": 'REJECTED', // after transaction is processed.
    "4": 'ACCEPTED', // after transaction is processed.
}