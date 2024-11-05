import { addTranslations, setLocale, setRoute } from "$lib/translations/index";
import { addIcon } from "iconify-icon";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ data }) => {
	const { i18n, translations } = data;
	const { locale, route } = i18n;

	addTranslations(translations);

	await setRoute(route);
	await setLocale(locale);

	return i18n;
};

addIcon("coinos:logo", {
	body: ' <svg width="224" height="72" viewBox="0 0 224 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M69.8823 36C69.8823 54.7127 54.7127 69.8823 36 69.8823C17.2873 69.8823 2.11764 54.7127 2.11764 36C2.11764 17.2873 17.2873 2.11761 36 2.11761C54.7127 2.11761 69.8823 17.2873 69.8823 36Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M36 4.23529C18.4568 4.23529 4.23529 18.4568 4.23529 36C4.23529 53.5432 18.4568 67.7647 36 67.7647C53.5432 67.7647 67.7647 53.5432 67.7647 36C67.7647 18.4568 53.5432 4.23529 36 4.23529ZM0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 58.5882C48.4751 58.5882 58.5882 48.4751 58.5882 36C58.5882 23.5248 48.4751 13.4117 36 13.4117C23.5249 13.4117 13.4118 23.5248 13.4118 36C13.4118 48.4751 23.5249 58.5882 36 58.5882ZM36 54C45.9411 54 54 45.9411 54 36C54 26.0589 45.9411 18 36 18C26.0589 18 18 26.0589 18 36C18 45.9411 26.0589 54 36 54Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36.0001 22.8988C36.0001 22.8988 36 22.8988 36 22.8988C28.7644 22.8988 22.8988 28.7644 22.8988 36C22.8988 43.2356 28.7644 49.1012 36 49.1012C36 49.1012 36.0001 49.1012 36.0001 49.1012V22.8988Z" fill="currentColor"/><path d="M97.608 27.704C99.544 27.704 101.248 28.088 102.72 28.856C104.192 29.624 105.368 30.688 106.248 32.048C107.144 33.408 107.68 34.952 107.856 36.68H102.864C102.752 35.928 102.48 35.216 102.048 34.544C101.616 33.856 101.032 33.304 100.296 32.888C99.56 32.456 98.672 32.24 97.632 32.24C95.776 32.24 94.264 32.928 93.096 34.304C91.944 35.68 91.368 37.792 91.368 40.64C91.368 43.264 91.92 45.352 93.024 46.904C94.128 48.456 95.704 49.232 97.752 49.232C98.776 49.232 99.648 49.008 100.368 48.56C101.104 48.096 101.68 47.528 102.096 46.856C102.528 46.168 102.808 45.48 102.936 44.792H107.784C107.64 46.472 107.112 47.968 106.2 49.28C105.304 50.592 104.12 51.624 102.648 52.376C101.192 53.112 99.512 53.48 97.608 53.48C95.336 53.48 93.312 52.984 91.536 51.992C89.776 50.984 88.392 49.528 87.384 47.624C86.376 45.704 85.872 43.392 85.872 40.688C85.872 38.112 86.344 35.856 87.288 33.92C88.232 31.968 89.584 30.448 91.344 29.36C93.104 28.256 95.192 27.704 97.608 27.704ZM122.09 53.48C119.722 53.48 117.658 52.976 115.898 51.968C114.138 50.944 112.77 49.48 111.794 47.576C110.834 45.672 110.354 43.384 110.354 40.712C110.354 38.12 110.818 35.848 111.746 33.896C112.69 31.944 114.042 30.424 115.802 29.336C117.562 28.248 119.666 27.704 122.114 27.704C124.482 27.704 126.538 28.224 128.282 29.264C130.026 30.304 131.37 31.792 132.314 33.728C133.274 35.664 133.754 37.992 133.754 40.712C133.754 43.224 133.298 45.44 132.386 47.36C131.49 49.264 130.17 50.76 128.426 51.848C126.698 52.936 124.586 53.48 122.09 53.48ZM122.114 49.04C123.458 49.04 124.562 48.672 125.426 47.936C126.306 47.2 126.954 46.192 127.37 44.912C127.802 43.632 128.018 42.176 128.018 40.544C128.018 39.024 127.826 37.624 127.442 36.344C127.074 35.064 126.45 34.04 125.57 33.272C124.706 32.488 123.554 32.096 122.114 32.096C120.754 32.096 119.626 32.456 118.73 33.176C117.85 33.88 117.186 34.872 116.738 36.152C116.306 37.416 116.09 38.88 116.09 40.544C116.09 42.048 116.282 43.448 116.666 44.744C117.066 46.024 117.706 47.064 118.586 47.864C119.466 48.648 120.642 49.04 122.114 49.04ZM143.518 28.184V53H137.902V28.184H143.518ZM143.59 18.32V23.84H137.806V18.32H143.59ZM149.367 53V28.184H155.079V31.736C155.463 31.096 155.983 30.48 156.639 29.888C157.311 29.296 158.135 28.816 159.111 28.448C160.087 28.08 161.231 27.896 162.543 27.896C164.079 27.896 165.503 28.2 166.815 28.808C168.143 29.416 169.207 30.368 170.007 31.664C170.823 32.96 171.231 34.632 171.231 36.68V53H165.375V37.376C165.375 35.744 164.927 34.536 164.031 33.752C163.135 32.952 162.007 32.552 160.647 32.552C159.719 32.552 158.839 32.712 158.007 33.032C157.175 33.336 156.495 33.808 155.967 34.448C155.455 35.072 155.199 35.856 155.199 36.8V53H149.367ZM186.348 53.48C183.98 53.48 181.916 52.976 180.156 51.968C178.396 50.944 177.028 49.48 176.052 47.576C175.092 45.672 174.612 43.384 174.612 40.712C174.612 38.12 175.076 35.848 176.004 33.896C176.948 31.944 178.3 30.424 180.06 29.336C181.82 28.248 183.924 27.704 186.372 27.704C188.74 27.704 190.796 28.224 192.54 29.264C194.284 30.304 195.628 31.792 196.572 33.728C197.532 35.664 198.012 37.992 198.012 40.712C198.012 43.224 197.556 45.44 196.644 47.36C195.748 49.264 194.428 50.76 192.684 51.848C190.956 52.936 188.844 53.48 186.348 53.48ZM186.372 49.04C187.716 49.04 188.82 48.672 189.684 47.936C190.564 47.2 191.212 46.192 191.628 44.912C192.06 43.632 192.276 42.176 192.276 40.544C192.276 39.024 192.084 37.624 191.7 36.344C191.332 35.064 190.708 34.04 189.828 33.272C188.964 32.488 187.812 32.096 186.372 32.096C185.012 32.096 183.884 32.456 182.988 33.176C182.108 33.88 181.444 34.872 180.996 36.152C180.564 37.416 180.348 38.88 180.348 40.544C180.348 42.048 180.54 43.448 180.924 44.744C181.324 46.024 181.964 47.064 182.844 47.864C183.724 48.648 184.9 49.04 186.372 49.04ZM210.995 53.48C209.267 53.48 207.627 53.208 206.075 52.664C204.539 52.104 203.243 51.232 202.187 50.048C201.147 48.864 200.491 47.336 200.219 45.464H205.355C205.579 46.376 205.971 47.12 206.531 47.696C207.107 48.272 207.787 48.696 208.571 48.968C209.355 49.224 210.155 49.352 210.971 49.352C212.459 49.352 213.659 49.096 214.571 48.584C215.499 48.072 215.963 47.28 215.963 46.208C215.963 45.424 215.707 44.8 215.195 44.336C214.683 43.872 213.867 43.52 212.747 43.28L208.019 42.2C205.923 41.736 204.235 40.968 202.955 39.896C201.691 38.824 201.051 37.312 201.035 35.36C201.019 33.888 201.387 32.576 202.139 31.424C202.891 30.272 204.011 29.368 205.499 28.712C206.987 28.04 208.827 27.704 211.019 27.704C213.915 27.704 216.235 28.352 217.979 29.648C219.723 30.928 220.619 32.76 220.667 35.144H215.699C215.523 34.072 215.019 33.24 214.187 32.648C213.355 32.04 212.275 31.736 210.947 31.736C209.571 31.736 208.443 32 207.563 32.528C206.683 33.056 206.243 33.864 206.243 34.952C206.243 35.704 206.579 36.296 207.251 36.728C207.923 37.16 208.931 37.528 210.275 37.832L214.739 38.912C216.019 39.232 217.067 39.664 217.883 40.208C218.699 40.752 219.339 41.352 219.803 42.008C220.267 42.648 220.587 43.312 220.763 44C220.955 44.672 221.051 45.296 221.051 45.872C221.051 47.472 220.635 48.84 219.803 49.976C218.987 51.096 217.827 51.96 216.323 52.568C214.819 53.176 213.043 53.48 210.995 53.48Z" fill="currentColor"/></svg>',
	width: 224,
	height: 72,
});

addIcon("coinos:rays", {
	body: '<svg width="158" height="60" viewBox="0 0 158 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.9439 8.95955C30.653 9.76766 32.7864 14.1314 36.4713 20.2731C49.1102 41.2516 47.4293 41.4455 49.7243 41.4455C52.181 41.4455 51.8254 40.5404 44.3262 26.641C36.2774 11.7394 32.0429 6.115 30.9439 8.95955Z" fill="currentColor"/><path d="M28.7782 44.8716C28.3579 45.2918 28.5842 45.6477 30.0711 47.2639C32.3015 49.6559 36.0188 50.6579 36.0188 48.8801C35.9865 47.4255 29.7156 43.9341 28.7782 44.8716Z" fill="currentColor"/><path d="M23.5093 55.2477C7.92899 50.0758 2.53086 48.7828 0.688371 49.8818C-0.830874 50.7546 0.0742067 51.4011 4.3087 52.4678C7.92902 53.3405 14.5232 55.3447 20.9881 57.5104C26.2892 59.2882 27.5175 59.4822 29.0044 58.9327C31.0409 58.1245 29.8449 57.3488 23.5093 55.2477Z" fill="currentColor"/><path d="M56.4801 1.16938C56.1892 1.94516 57.8378 9.31479 59.2924 13.8725C59.6479 14.9715 60.3591 17.8807 60.8763 20.3051C61.846 25.0244 62.0076 25.2833 63.8501 25.2833C65.5956 25.2833 65.5956 25.3477 63.4945 17.4605C59.8419 3.72268 57.5468 -1.61052 56.4801 1.16938Z" fill="currentColor"/><path d="M18.2728 35.0776C20.7618 37.3403 21.5376 39.3121 23.9295 39.3121C27.7761 39.3121 27.9377 39.0535 23.3477 34.4311C14.8464 25.8651 6.70073 19.9175 4.95522 21.0165C3.30668 22.1155 9.57757 26.0914 18.2728 35.0776Z" fill="currentColor"/><path d="M135.351 28.0309C137.808 25.9621 139.424 23.8287 139.424 22.665C139.424 21.0488 137.42 20.5636 135.707 21.8243C124.297 30.1316 112.757 42.2856 114.664 43.9341C116.539 45.5503 118.446 44.322 126.786 36.144C130.471 32.5559 134.317 28.9036 135.351 28.0309Z" fill="currentColor"/><path d="M90.2267 2.07445C89.2247 5.33921 88.1903 13.0324 84.1498 29.2915C83.3417 32.524 83.3417 32.5883 84.376 33.558C85.2165 34.3338 86.8327 34.6251 87.6408 34.1079C88.3196 33.6877 93.7178 11.0606 95.0107 3.27045C95.4633 0.231962 91.3581 -1.67517 90.2267 2.07445Z" fill="currentColor"/><path d="M149.93 41.4455C140.103 44.1931 122.196 51.4011 121.193 53.0496C120.482 54.181 123.359 55.28 125.299 54.6012L132.507 52.0152C143.594 48.0394 157.235 42.221 157.235 41.4775C157.203 39.9583 155.231 39.9586 149.93 41.4455Z" fill="currentColor"/><path d="M114.502 8.24841C113.953 9.18582 112.304 11.7394 107.326 18.6245C105.064 21.7277 101.314 28.1925 101.314 28.9683C101.314 30.5199 105.71 25.154 113.209 14.4224C114.826 12.095 116.442 9.92928 116.83 9.60603C118.575 8.02214 115.537 6.5029 114.502 8.24841Z" fill="currentColor"/></svg>',
	width: 158,
	height: 60,
});

addIcon("coinos:shield", {
	body: '<svg width="96" height="122" viewBox="0 0 96 122" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.9721 93.8449C34.3435 92.6292 33.6075 92.6292 33.187 93.7392C32.6087 95.272 38.2338 99.1835 41.1252 99.1835C44.0167 99.1835 41.4932 95.9063 36.9721 93.8449Z" fill="currentColor"/><path d="M20.5703 79.9963C19.3086 80.472 19.8869 81.6348 22.6732 84.172C27.2469 88.3477 29.8755 88.7177 27.8777 84.912C26.248 81.8991 22.3577 79.2563 20.5703 79.9963Z" fill="currentColor"/><path d="M15.523 67.6268C14.6818 70.7454 15.8384 73.8116 17.8361 73.8116C19.6761 73.8116 20.2544 69.054 18.7298 67.0983C17.8361 65.9354 15.8384 66.3054 15.523 67.6268Z" fill="currentColor"/><path d="M16.4172 25.3949C17.9943 21.272 15.6286 14.3478 13.4206 16.5678C12.7898 17.2021 13.0526 24.3377 13.7886 25.342C14.6298 26.452 15.9966 26.5049 16.4172 25.3949Z" fill="currentColor"/><path d="M17.5732 58.2712C18.7298 57.8484 18.5726 52.5627 17.3634 51.4527C15.3657 49.6027 14.6292 50.2898 14.6292 53.9898C14.6292 57.5312 15.6281 58.9584 17.5732 58.2712Z" fill="currentColor"/><path d="M16.8898 41.1987C17.5207 37.8158 16.2589 33.6406 14.6292 33.6406C13.7355 33.6406 13.6304 34.0101 13.6304 36.9701C13.5778 41.6215 16.1538 44.9515 16.8898 41.1987Z" fill="currentColor"/><path d="M77.5572 35.5959C76.8738 36.2831 77.1892 40.9874 78.0304 41.7802C82.4989 46.1674 80.7641 32.3188 77.5572 35.5959Z" fill="currentColor"/><path d="M81.395 67.2044C81.395 65.3016 78.9241 64.1387 77.8201 65.513C76.979 66.5173 77.347 69.6887 76.243 71.8559C75.4544 73.4416 75.7173 74.023 77.5047 74.5516C78.8716 74.9216 81.395 73.5473 81.395 67.2044Z" fill="currentColor"/><path d="M79.555 26.7684C81.3424 26.7684 81.6052 26.1341 81.1847 22.2227C80.659 17.0958 77.8201 15.2455 76.7161 19.2627C75.4544 23.7027 76.611 26.7684 79.555 26.7684Z" fill="currentColor"/><path d="M94.2229 8.84999C93.8023 2.08427 87.3355 0.12898 80.659 0.0232653C62.9949 -0.293878 67.6218 2.71898 5.90264 3.72327C2.59064 3.77612 1.43386 3.51173 0.960713 7.05316C0.802999 8.32173 2.22232 55.417 2.69546 69.107C3.01089 78.6213 3.79941 77.0356 8.11027 82.427C12.6841 88.1356 22.0944 100.028 38.6018 117.048C49.2738 128.043 58.2635 118.212 93.0658 77.459C93.9595 76.4018 94.4852 75.1333 94.5378 73.759C95.3264 59.4876 95.5898 30.3627 94.2229 8.84999ZM90.3321 73.019C90.2795 73.0718 52.376 116.943 49.0115 116.943C47.8023 116.943 33.6601 104.68 25.4064 95.219C18.9401 87.819 13.8407 82.7447 9.8978 78.7804C8.89895 77.7761 8.32092 76.4542 8.26835 75.027C7.90035 63.9799 6.27027 15.0343 6.27027 14.9286C5.42913 8.47999 5.11365 8.5858 27.0361 8.69152C58.8418 8.90295 66.5698 5.67877 89.5961 5.8902C89.5435 49.709 91.9618 72.0676 90.3321 73.019Z" fill="currentColor"/><path d="M70.1447 80.2073C68.7252 81.3702 66.1492 85.0174 66.1492 85.9159C66.1492 87.8188 70.9858 85.3345 72.7207 82.5859C74.8235 79.1502 73.2464 77.6702 70.1447 80.2073Z" fill="currentColor"/><path d="M54.6361 96.0114C51.7446 99.5 51.64 99.7114 52.5863 100.663C54.1109 102.196 61.2601 96.4877 60.7869 94.1091C60.3664 91.6777 57.5275 92.5228 54.6361 96.0114Z" fill="currentColor"/><path d="M78.8715 59.1699C80.6064 59.8042 81.6058 55.1004 80.2915 52.6161C79.5029 51.189 77.347 51.2941 76.979 52.827C76.1904 55.9984 76.9264 58.4299 78.8715 59.1699Z" fill="currentColor"/></svg>',
	width: 96,
	height: 122,
});

addIcon("coinos:hand", {
	body: '<svg width="106" height="100" viewBox="0 0 106 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M79.11 1.52264C73.8346 3.89945 70.9939 8.53715 70.5881 15.3777C70.0664 24.5371 67.9794 27.6676 65.6026 22.914C56.9649 5.87048 27.2838 1.05889 24.2693 16.2473C23.9215 17.8705 23.8634 17.8705 20.0953 17.8705C3.5156 17.7545 -6.04939 50.3922 5.83467 66.5661C6.64626 67.6676 5.48684 71.5516 2.06655 79.1459C0.153509 83.3777 0.385336 84.0734 3.74766 85.5806C6.82012 86.9719 7.80568 85.5227 13.9506 70.4502C14.8781 68.1893 14.8781 65.6386 13.9506 63.3777C12.5593 60.0154 10.8781 56.3053 9.54476 53.8125C5.13896 45.1748 8.03757 33.0009 16.2695 25.6966C23.8057 19.0299 31.5158 24.5371 24.9071 31.8995C15.8056 41.9864 24.4432 54.2183 37.8345 50.2183C49.8345 46.6821 50.2983 29.9284 38.4722 26.74C32.2114 25.0589 29.5446 16.2473 34.2982 13.0589C46.1243 5.05889 60.849 21.4647 59.2838 40.9429C58.4722 51.0879 68.6752 46.4502 68.6752 39.4937C68.6752 37.6966 69.139 36.711 70.994 34.5661C74.9361 29.9864 76.7911 25.1748 77.6607 16.885C78.4723 9.23279 88.4433 2.85597 91.2839 8.18931C93.081 11.5516 90.2402 29.5226 87.0518 34.6821C84.5011 38.856 75.4576 49.1168 72.5591 51.0879C68.791 53.6386 69.197 55.8415 73.6608 56.5951C75.8637 56.9429 76.2115 56.827 80.3274 53.4067C90.5883 44.885 93.8347 40.7111 96.2695 32.7111C98.0086 27.0299 100.559 28.3053 100.617 34.2183C100.675 46.3343 87.9794 60.4792 75.8055 65.4647C72.907 66.6821 72.7331 68.0154 75.2258 69.8705C78.936 72.5951 85.5446 69.7546 93.1388 62.1603C97.8924 57.4067 98.1244 57.2908 97.6027 59.2038C94.7621 70.2183 85.6028 79.3198 73.9506 82.7401C66.2405 85.0009 59.0521 86.6241 53.6608 87.3197C52.9071 87.5516 48.3273 87.3777 44.5012 91.4357C38.878 97.4067 47.5158 102.16 50.4724 97.4067C52.6753 93.8125 53.3708 93.4647 57.6607 93.4067C61.8926 93.4067 62.1244 93.3488 74.1244 89.9864C84.3273 87.1459 90.3563 84.1893 94.7041 79.9575C103.864 70.9719 107.69 57.9864 102.936 51.7256C101.893 50.3343 101.892 50.2763 103.574 46.6241C106.994 39.3198 106.182 29.6966 101.661 24.2473C100.037 22.2763 99.9216 21.7545 99.7477 17.0009C99.5158 5.75453 88.3274 -2.65127 79.11 1.52264ZM37.5446 30.2763C42.3562 32.7111 39.5158 45.2908 33.8926 46.6821C31.9216 47.2038 23.1678 42.6821 30.0084 33.2328C33.1388 28.885 34.0664 28.4792 37.5446 30.2763Z" fill="currentColor"/></svg>',
	width: 106,
	height: 100,
});

addIcon("coinos:bolt", {
	body: '<svg width="96" height="121" viewBox="0 0 96 121" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.3513 0.537301C35.0349 1.04923 34.3767 1.7805 34.523 2.58495C34.7424 3.8282 7.90261 40.1019 1.02817 62.1147C-1.09267 68.9891 2.3447 69.9398 17.995 66.9414C27.5022 65.1131 27.1365 63.2117 20.8471 80.9098C16.1666 93.9273 12.7296 104.824 11.1206 111.479C8.92668 120.255 13.5339 124.862 24.9426 112.942C29.8425 107.822 40.9586 96.3407 66.9937 66.649C89.0797 41.4914 89.0064 42.1496 71.6009 41.4914L60.8506 41.0526C65.8968 35.714 84.7646 15.3831 90.5421 10.6295C96.3195 5.80278 98.1481 3.82826 90.396 2.73127C81.4008 1.41489 50.9776 0.902981 42.0555 0.0985249C40.0078 -0.120872 37.4483 0.098507 36.3513 0.537301ZM79.7186 7.92365L75.9156 11.0684C66.6278 18.6741 48.2717 40.5406 48.2717 43.9047C48.2717 47.5613 54.4149 47.1957 70.2846 47.1957C46.8823 74.3278 28.5991 95.463 28.1603 95.463C28.0141 95.463 29.6963 90.6364 31.9634 84.6395C40.4467 61.8953 40.8855 57.6536 34.8887 58.385C24.5039 59.6282 14.3385 61.0177 12.949 61.4565C11.7057 61.8222 12.51 59.8476 17.1905 51.0717C25.5276 35.1289 28.8917 30.5215 43.5181 6.16846C71.3816 7.41171 71.089 7.41172 79.7186 7.92365Z" fill="currentColor"/></svg>',
	width: 96,
	height: 121,
});

addIcon("coinos:smile", {
	body: '<svg width="112" height="108" viewBox="0 0 112 108" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M108.05 39.1961L105.823 31.6789L108.329 28.4074C117.586 16.2267 100.394 -2.84494 86.7513 4.46352C85.2896 5.22917 83.5497 5.29877 81.0439 4.67233C76.45 3.48905 61.4154 0.983301 58.3528 0.635279C48.1905 -0.617602 50.9745 4.32429 55.3596 4.74192C65.2434 5.78598 65.0347 5.22916 62.3897 8.01334C58.283 12.3984 61.8329 29.5211 68.3757 36.9688C74.2921 43.7204 88.6307 47.3399 93.0853 43.1636C101.925 34.8111 99.489 73.5111 90.3708 85.3439C61.9722 122.304 2.11214 86.6664 12.9008 39.1961L14.1539 33.6278L19.3046 37.0384C28.2836 43.0244 31.9725 40.0314 25.0816 32.3749C13.8057 19.9157 17.6341 4.04587 29.4669 14.1385C33.4344 17.5491 38.3067 18.0364 40.3253 15.3218C46.3113 7.10848 49.8608 10.0319 49.7912 18.802C49.7912 23.5351 47.564 26.7369 38.4458 35.2287C30.4413 42.6763 30.0933 45.1821 37.0537 45.1821C41.7172 45.1821 56.8213 27.2938 58.1438 20.2637C60.0231 10.3799 46.6591 2.30578 38.7242 8.50058C36.9145 9.96227 35.801 10.2407 35.1049 9.54464C34.4089 8.8486 34.548 7.59569 36.7754 6.34281C39.0027 5.08993 42.4133 4.1155 41.6477 2.02737C40.6036 -0.756811 32.8775 2.8626 31.8334 3.48905C30.7893 4.04588 27.0307 6.48203 23.8289 6.48203C12.8314 6.48203 8.6551 9.82303 9.55996 17.8275C10.0472 22.2822 9.76891 23.5351 7.26315 27.9898C-12.2957 62.6529 14.1539 106.434 55.1509 107.269C96.844 108.244 119.744 78.6619 108.05 39.1961ZM93.9901 31.9573C86.4728 40.3098 85.3592 40.6578 79.1644 37.0384C74.2225 34.115 70.1854 26.5281 69.3501 18.5236C68.5149 10.1015 72.8304 7.87413 80.2085 12.8856L83.8281 15.3914L87.4473 13.0249C97.8184 6.13402 111.461 12.6072 93.9901 31.9573Z" fill="currentColor"/><path d="M21.6716 54.7179C22.1588 56.1796 23.2028 61.0519 24.038 65.5762C30.2328 99.3344 84.3853 98.7079 87.1694 64.8802C87.5175 60.7039 88.283 57.0149 88.8399 56.6668C93.7122 53.5346 80.6962 49.3584 71.5084 51.1681C68.6546 51.7249 57.7267 51.8641 44.7107 51.5161C20.6276 50.8201 20.4883 50.82 21.6716 54.7179ZM80.6964 57.0149V62.1656C80.6964 81.3068 46.5203 91.8171 35.1748 76.0865C31.2769 70.7269 31.3466 67.4555 30.7898 57.3629C62.8079 56.3188 63.5737 56.458 80.6964 57.0149Z" fill="currentColor"/></svg>',
	width: 112,
	height: 108,
});
