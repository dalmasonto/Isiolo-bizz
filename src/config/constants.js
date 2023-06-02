

export const BASE_API_URL = "https://api.esiolo.biz/api"

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
    // MEDIA
    MEDIA: `${BASE_API_URL}/media`
}

export const CATEOGORIES = [
    {
        id: 1,
        name: 'Honey'
    },
    {
        id: 2,
        name: 'Camel Meat'
    },
    {
        id: 3,
        name: 'Camel Milk'
    },
    {
        id: 4,
        name: 'Eggs'
    },
    {
        id: 5,
        name: 'Poultry'
    },
    {
        id: 6,
        name: 'Fruit & Vegetables'
    },
    {
        id: 7,
        name: 'Animal Feeds'
    },
]

export const ADMIN_BASE_URL = "management"
export const CURRENCY = "KES"

export const SHOPS = [
    {
        id: 1,
        name: 'Bidii Farmers Self Help Group',
        logo: '/logos/Bidii-farmers-self--help-group-Reviewed-Logo.jpg',
    },
    {
        id: 2,
        name: 'Galesa Women Group Cooperative',
        logo: '/logos/Galesa-women-group-cooperative-reviewed-logo.jpg',
    },
    {
        id: 3,
        name: 'Juakali Nyiri Nyiri',
        logo: '/logos/JUAKALI-NYIRI-NYIRI-LOGO.jpg',
    },
    {
        id: 4,
        name: 'Kambi ya Juu',
        logo: '/logos/Kambi-ya-juu--Reviewed-logo.jpg',
    },
    {
        id: 5,
        name: 'Kitos Women Group',
        logo: '/logos/Kitos-Women-Group-Ammended-Logo.jpg',
    },
    {
        id: 6,
        name: 'Korbesa Fodder',
        logo: '/logos/Korbesa-Fodder-Reviewed-Logo.jpg',
    },
    {
        id: 7,
        name: 'Merti Livestock co-operative',
        logo: '/logos/Merti-Livestock-co-operative-Reviewed-Logo.jpg',
    },
    {
        id: 8,
        name: 'Kitos Women Group',
        logo: '/logos/Nassole-sacco-Reviewed-logo.jpg',
    },
    {
        id: 9,
        name: 'Oldonyiro Livestock co-operative',
        logo: '/logos/Oldonyiro-Livestock-co-operative-Logo-sample-[Recovered].jpg',
    },
    {
        id: 10,
        name: 'Rural Women Access Recourses Organization',
        logo: '/logos/Rural-Women-Access-Recourses-Organization-Logo.jpg',
    },
    {
        id: 11,
        name: 'Tawakal Women Group',
        logo: '/logos/Tawakal-Women-Group-Reviewed-Logo.jpg',
    },
    {
        id: 12,
        name: 'Wiyukiririe Self Help Group',
        logo: '/logos/Wiyukiririe-Self-Help-Group-Rewviewed-Logo.jpg',
    },
]