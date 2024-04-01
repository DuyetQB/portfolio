import React from "react";

export default function WorkItem() {
  return (
    <div className="space-y-10 lg:pl-16 xl:pl-24">
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-24">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-6 w-6 flex-none"
          >
            <path
              d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
              className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
              d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
              className="stroke-zinc-400 dark:stroke-zinc-500"
            />
          </svg>
          <span className="ml-3">Work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          <li className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
              >
                <g clip-path="url(#a)">
                  <rect width="32" height="32" rx="16" fill="url(#b)" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.755 30.136c.051-4.308.484-8.167 1.147-10.985.355-1.509.766-2.677 1.196-3.45.466-.838.801-.951.902-.951.1 0 .436.113.902.95.43.774.841 1.942 1.196 3.451.663 2.818 1.096 6.677 1.147 10.985.508-.117 1.007-.26 1.494-.428-.074-4.224-.508-8.042-1.18-10.9-.327-1.389-.718-2.584-1.169-3.497 1.498.715 2.887 2.097 4.035 4.048 1.257 2.138 2.179 4.894 2.589 8 .47-.374.916-.775 1.335-1.203-.488-2.878-1.402-5.467-2.631-7.557-.652-1.107-1.402-2.09-2.236-2.901a16.296 16.296 0 0 1 7.851 6.01c.236-.55.439-1.117.606-1.699C26.688 15.892 21.653 13.25 16 13.25c-5.653 0-10.688 2.642-13.939 6.759.167.582.37 1.15.606 1.7a16.295 16.295 0 0 1 7.85-6.011c-.833.811-1.583 1.794-2.235 2.9-1.23 2.091-2.143 4.68-2.631 7.558.42.428.866.83 1.335 1.203.41-3.106 1.332-5.862 2.59-8 1.147-1.95 2.536-3.333 4.034-4.048-.451.913-.842 2.108-1.168 3.496-.673 2.86-1.107 6.677-1.18 10.901.486.168.984.311 1.493.428Zm-.002 1.534a15.857 15.857 0 0 1-1.502-.387c.017 4.623.465 8.825 1.19 11.91.327 1.388.718 2.583 1.169 3.496-1.498-.715-2.887-2.097-4.035-4.048C7.845 39.698 6.75 35.584 6.75 31c0-.643.022-1.276.063-1.899a16.074 16.074 0 0 1-1.41-1.113c-.1.98-.153 1.986-.153 3.012 0 4.804 1.144 9.19 3.032 12.401.652 1.107 1.402 2.09 2.236 2.901C4.24 44.052-.25 38.051-.25 31c0-2.814.715-5.46 1.974-7.768a15.914 15.914 0 0 1-.741-1.699A17.667 17.667 0 0 0-1.75 31c0 9.803 7.947 17.75 17.75 17.75S33.75 40.803 33.75 31c0-3.48-1.002-6.727-2.733-9.467-.214.583-.462 1.15-.74 1.699A16.178 16.178 0 0 1 32.25 31c0 7.05-4.49 13.053-10.768 15.302.834-.811 1.584-1.794 2.236-2.9C25.605 40.19 26.75 35.803 26.75 31c0-1.026-.052-2.032-.152-3.012-.45.396-.92.768-1.411 1.113.041.623.063 1.256.063 1.899 0 4.584-1.095 8.698-2.825 11.64-1.148 1.952-2.537 3.334-4.035 4.049.451-.913.842-2.108 1.168-3.496.726-3.085 1.174-7.287 1.192-11.91-.492.153-.993.282-1.503.387-.04 4.386-.476 8.319-1.149 11.179-.355 1.509-.766 2.677-1.196 3.45-.466.838-.801.951-.902.951-.1 0-.436-.113-.902-.95-.43-.774-.841-1.942-1.196-3.451-.673-2.86-1.108-6.793-1.149-11.179Z"
                    fill="url(#c)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.894 5.553a1 1 0 0 1-.447 1.342l-9.341 3.552c-.494.247.246.494 0 0-.247-.494-.494.247 0 0l8.447-5.341a1 1 0 0 1 1.341.447Z"
                    fill="url(#d)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="b"
                    x1="16"
                    y1="0"
                    x2="16"
                    y2="33"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00172C" />
                    <stop offset=".803" stop-color="#5900EB" />
                  </linearGradient>
                  <linearGradient
                    id="d"
                    x1="19"
                    y1="6"
                    x2="11.5"
                    y2="10"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9969E8" />
                    <stop offset="1" stop-color="#FFA0D2" stop-opacity=".32" />
                  </linearGradient>
                  <radialGradient
                    id="c"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0 35.75 -57.5 0 16 13)"
                  >
                    <stop offset=".14" stop-color="#fff" />
                    <stop offset=".514" stop-color="#fff" stop-opacity="0" />
                  </radialGradient>
                  <clipPath id="a">
                    <rect width="32" height="32" rx="16" fill="#fff" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Ezy House Ltd
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                Core team
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label="2019 until Present"
              >
                <time dateTime={"2019"}>2023</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={"2024"}>Present</time>
              </dd>
            </dl>
          </li>
          <li className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="134"
                height="42"
                viewBox="0 0 134 42"
                fill="none"
              >
                <g clip-path="url(#clip0_6106_106056)">
                  <path
                    d="M64.6642 33.0242C64.6642 32.5275 64.8129 32.042 65.0914 31.629C65.3699 31.2161 65.7658 30.8944 66.2289 30.7045C66.692 30.5147 67.2015 30.4653 67.6929 30.5625C68.1843 30.6598 68.6356 30.8994 68.9896 31.251C69.3436 31.6026 69.5844 32.0504 69.6815 32.5377C69.7786 33.025 69.7277 33.5299 69.5352 33.9885C69.3427 34.4471 69.0173 34.8388 68.6001 35.114C68.1829 35.3893 67.6928 35.5356 67.1916 35.5346C66.5217 35.5318 65.8802 35.2661 65.4075 34.7957C64.9348 34.3252 64.6694 33.6882 64.6694 33.0242M69.1108 33.0242C69.1004 32.5329 68.8949 32.0654 68.5388 31.7234C68.1827 31.3813 67.7049 31.1923 67.2091 31.1975C66.7132 31.2026 66.2395 31.4014 65.8907 31.7508C65.5419 32.1001 65.3463 32.5717 65.3463 33.0632C65.3463 33.5547 65.5419 34.0263 65.8907 34.3757C66.2395 34.725 66.7132 34.9238 67.2091 34.929C67.7049 34.9341 68.1827 34.7451 68.5388 34.4031C68.8949 34.0611 69.1004 33.5936 69.1108 33.1022C69.1078 33.0763 69.1078 33.0501 69.1108 33.0242ZM66.2268 31.6002H67.2755C67.9624 31.6002 68.3242 31.834 68.3242 32.4369C68.3372 32.6264 68.2738 32.8133 68.148 32.9565C68.0222 33.0997 67.8442 33.1876 67.6531 33.201H67.5692L68.34 34.4379H67.7789L67.0396 33.2165H66.7145V34.4379H66.1901L66.2268 31.6002ZM66.7512 32.8163H67.2231C67.5325 32.8163 67.7894 32.7696 67.7894 32.3902C67.7894 32.0108 67.4853 32.0004 67.2231 32.0004H66.7459L66.7512 32.8163Z"
                    fill="#1169A1"
                  />
                  <path
                    d="M56.5104 6.46558C54.6989 6.49134 52.9387 7.06586 51.4661 8.11197C49.9936 9.15809 48.8792 10.6257 48.2727 12.3178C48.2098 12.4893 47.979 13.2118 47.979 13.2118L42.7774 35.5605H54.7276C56.7249 35.5245 58.6527 34.8269 60.2036 33.5789C61.7545 32.3308 62.8393 30.6041 63.2851 28.674L68.4501 6.49156L56.5104 6.46558Z"
                    fill="#16A24B"
                  />
                  <path
                    d="M36.6214 0C34.7104 0.00543864 32.8532 0.627766 31.3309 1.77279C29.8086 2.91782 28.704 4.52321 28.1844 6.346C28.1058 6.62666 28.0481 6.90731 27.9904 7.18797L19.8943 42.0104H31.8287C33.7851 42.0022 35.6827 41.3469 37.2206 40.1483C38.7585 38.9498 39.8486 37.2766 40.3181 35.3941L48.5611 0H36.6214Z"
                    fill="#E37227"
                  />
                  <path
                    d="M13.733 6.46558C11.849 6.49289 10.0222 7.1112 8.51491 8.23174C7.00757 9.35228 5.89721 10.9174 5.34324 12.7024C5.32907 12.7872 5.30258 12.8695 5.26458 12.9467L5.06533 13.7263L0 35.5345H12.2333C14.0048 35.5069 15.7245 34.938 17.1576 33.9055C18.5907 32.8729 19.6673 31.4271 20.2403 29.7654L20.728 27.6865L25.6937 6.46558H13.733Z"
                    fill="#1169A1"
                  />
                  <path
                    d="M11.4992 13.7106H11.3105C10.4287 13.7153 9.57801 14.0344 8.91414 14.6097C8.2954 15.077 7.83013 15.7154 7.57702 16.4444L4.83461 28.2684H4.98667C5.87467 28.2582 6.7306 27.938 7.40398 27.3641C8.11163 26.8173 8.60934 26.047 8.81451 25.1812L9.4385 22.6189H14.8604C15.7574 22.6148 16.6237 22.2942 17.3039 21.7146C18.0121 21.1758 18.5089 20.4095 18.7092 19.5472L18.7512 19.3913H10.1726L10.7337 16.9538H18.1376C19.0158 16.948 19.8633 16.633 20.5287 16.065C21.2328 15.5057 21.726 14.7275 21.9288 13.8561L21.9655 13.7002L11.4992 13.7106Z"
                    fill="white"
                  />
                  <path
                    d="M41.7234 14.4123C41.4828 14.1792 41.1971 13.9969 40.8835 13.8763C40.5698 13.7558 40.2348 13.6994 39.8986 13.7106H29.4481L26.0712 28.2633H26.218C27.1042 28.2514 27.9579 27.9313 28.6301 27.3589C29.3417 26.8134 29.8402 26.0401 30.0406 25.1708L30.6489 22.5722H37.8851C38.725 22.6375 39.5596 22.3932 40.229 21.8861C40.9543 21.2635 41.4642 20.4309 41.6867 19.5057L42.3212 16.8135C42.371 16.5969 42.3974 16.3756 42.3998 16.1534C42.4153 15.8308 42.3621 15.5087 42.2438 15.2078C42.1254 14.907 41.9446 14.6341 41.7129 14.4071L41.7234 14.4123ZM38.4619 19.3602H31.4145L31.986 16.9278H39.0282L38.4619 19.3602Z"
                    fill="white"
                  />
                  <path
                    d="M62.9758 14.4124C62.7376 14.1775 62.4531 13.9939 62.1399 13.8732C61.8268 13.7525 61.4919 13.6971 61.1562 13.7108H50.1446V13.8095C50.0953 14.0192 50.0689 14.2335 50.066 14.4488C50.0485 14.7761 50.0996 15.1035 50.216 15.4103C50.3324 15.7171 50.5117 15.9967 50.7424 16.2315C50.9823 16.4655 51.2679 16.6485 51.5817 16.7691C51.8955 16.8898 52.2308 16.9456 52.5672 16.9331H54.8744L52.2526 28.2426H52.4046C53.2917 28.2325 54.1471 27.9143 54.8219 27.3435C55.529 26.7939 56.0264 26.0223 56.2325 25.1554L58.1569 16.9331H63.5998V16.8292C63.6429 16.6116 63.6674 16.3908 63.6732 16.1691C63.6869 15.8452 63.6329 15.522 63.5147 15.2197C63.3965 14.9174 63.2166 14.6426 62.9862 14.4124H62.9758Z"
                    fill="white"
                  />
                  <path
                    d="M80.9089 27.4889C80.1153 28.1202 79.1143 28.4385 78.0983 28.3829C77.1268 28.4216 76.1608 28.2197 75.2878 27.7956L75.896 26.2779C76.5509 26.6426 77.2895 26.8341 78.0407 26.8341C78.581 26.8623 79.1146 26.7044 79.5508 26.3871C79.736 26.2439 79.8836 26.0586 79.9812 25.8469C80.0789 25.6352 80.1237 25.4034 80.1119 25.1709C80.1119 24.4641 79.5036 23.8508 78.3028 23.3258C77.5931 23.0386 76.9345 22.6402 76.3522 22.146C76.0467 21.8807 75.8031 21.5527 75.6384 21.1847C75.4736 20.8167 75.3915 20.4176 75.3979 20.0151C75.3796 19.5826 75.458 19.1514 75.6276 18.7525C75.7971 18.3536 76.0535 17.9967 76.3784 17.7075C77.1123 17.1052 78.049 16.8006 79.0002 16.8551C79.886 16.8189 80.765 17.0219 81.5434 17.4424L80.9928 18.8717C80.4093 18.532 79.7451 18.3526 79.0684 18.3519C78.5814 18.3292 78.1021 18.4784 77.7156 18.7729C77.5485 18.9066 77.4145 19.0762 77.3236 19.2689C77.2327 19.4617 77.1875 19.6725 77.1912 19.8852C77.1912 20.566 77.8309 21.1949 79.0999 21.777C79.7879 22.0492 80.4299 22.4243 81.0033 22.8893C81.3052 23.1585 81.5449 23.4893 81.706 23.8588C81.8671 24.2284 81.9458 24.6281 81.9367 25.0306C81.9644 25.4873 81.8884 25.9443 81.7141 26.368C81.5399 26.7917 81.2719 27.1712 80.9299 27.4785L80.9089 27.4889Z"
                    fill="#1268A2"
                  />
                  <path
                    d="M89.2777 27.1303C88.9689 27.4886 88.5919 27.7829 88.1681 27.9965C87.7444 28.21 87.2823 28.3386 86.8083 28.3748C86.3344 28.411 85.8578 28.3542 85.4061 28.2075C84.9543 28.0608 84.5362 27.8272 84.1757 27.5201C84.0368 27.3981 83.9055 27.2679 83.7824 27.1303C83.1596 26.2162 82.8267 25.1383 82.8267 24.0353C82.8267 22.9322 83.1596 21.8543 83.7824 20.9402C84.4208 20.2229 85.3185 19.7836 86.2812 19.7175C87.244 19.6513 88.1943 19.9636 88.9264 20.5868C89.0525 20.6954 89.17 20.8136 89.2777 20.9402C89.9006 21.8543 90.2334 22.9322 90.2334 24.0353C90.2334 25.1383 89.9006 26.2162 89.2777 27.1303ZM88.014 21.855C87.8895 21.6623 87.7277 21.496 87.5381 21.3655C87.3485 21.2351 87.1348 21.143 86.9091 21.0947C86.6835 21.0464 86.4505 21.0428 86.2234 21.0841C85.9964 21.1254 85.7799 21.2107 85.5862 21.3352C85.3746 21.4677 85.1955 21.6452 85.0618 21.855C84.7307 22.5303 84.5586 23.2714 84.5586 24.0223C84.5586 24.7732 84.7307 25.5142 85.0618 26.1896C85.2187 26.4388 85.437 26.6443 85.6962 26.7868C85.9554 26.9292 86.2468 27.004 86.5432 27.004C86.8395 27.004 87.131 26.9292 87.3901 26.7868C87.6493 26.6443 87.8676 26.4388 88.0245 26.1896C88.3517 25.5128 88.5208 24.7716 88.5189 24.0211C88.5171 23.2706 88.3445 22.5302 88.014 21.855Z"
                    fill="#1268A2"
                  />
                  <path
                    d="M95.3341 17.3957C94.2067 17.3957 93.6456 17.8791 93.6456 18.8354V19.8749H95.397V21.1378H93.6456V28.2115H91.9624V21.1378H90.8351V19.8749H91.9624V18.8354C91.9375 18.4394 92.0034 18.0429 92.155 17.6756C92.3067 17.3084 92.5402 16.98 92.8381 16.7149C93.4541 16.2338 94.2259 15.9918 95.009 16.034C95.1842 16.0344 95.3593 16.0448 95.5333 16.0652V17.3957H95.3341Z"
                    fill="#1268A2"
                  />
                  <path
                    d="M100.347 28.1334C100.016 28.2737 99.6576 28.3377 99.2982 28.3205C97.7566 28.3205 96.9858 27.5097 96.9858 25.8778V21.1378H95.8532V19.8748H96.9753V17.9414L98.6638 17.4216V19.8696H100.347V21.1326H98.6638V25.779C98.6638 26.4859 99.0413 26.8185 99.7859 26.8185C99.978 26.8207 100.169 26.7854 100.347 26.7145V28.1334Z"
                    fill="#1268A2"
                  />
                  <path
                    d="M110.368 28.2114H108.611L107.106 22.9205C106.998 22.5242 106.915 22.1214 106.86 21.7147C106.792 22.121 106.703 22.5235 106.592 22.9205L105.092 28.2114H103.299L100.803 19.854H102.492L103.944 25.358C104.054 25.7902 104.133 26.2296 104.18 26.673C104.264 26.1896 104.358 25.753 104.463 25.358L105.989 19.854H107.599L109.135 25.358C109.235 25.753 109.329 26.1896 109.413 26.673C109.46 26.2296 109.539 25.7902 109.649 25.358L111.102 19.854H112.79L110.368 28.2114Z"
                    fill="#1268A2"
                  />
                  <path
                    d="M120.079 27.7903C119.132 28.2276 118.091 28.4292 117.048 28.3776C114.625 28.3776 113.409 27.5044 113.409 25.7789C113.396 25.2856 113.542 24.801 113.824 24.3948C114.107 23.9886 114.512 23.6816 114.982 23.518C116.086 23.1149 117.25 22.8954 118.427 22.8683V22.3486C118.427 21.3958 117.834 20.9211 116.649 20.9245C115.844 20.9237 115.049 21.1013 114.321 21.4443L113.881 20.2697C114.806 19.8683 115.807 19.6681 116.817 19.6824C118.972 19.6824 120.052 20.6283 120.052 22.5097L120.079 27.7903ZM118.453 24.017C117.657 24.0248 116.865 24.1384 116.099 24.3548C115.788 24.429 115.512 24.6057 115.315 24.856C115.119 25.1062 115.014 25.4152 115.019 25.7321C115.019 26.678 115.679 27.151 117.001 27.151C117.494 27.1818 117.989 27.111 118.453 26.9431V24.017Z"
                    fill="#1268A2"
                  />
                  <path
                    d="M125.422 21.1741C125.141 21.1048 124.852 21.0716 124.562 21.0754C124.105 21.065 123.651 21.1445 123.225 21.3092V28.2113H121.547V20.2698C122.581 19.8659 123.687 19.6732 124.798 19.7032C125.115 19.6988 125.433 19.7179 125.747 19.7604L125.422 21.1741Z"
                    fill="#1268A2"
                  />
                  <path
                    d="M133.539 24.0015L127.944 24.7759C128.122 26.2831 128.993 27.0368 130.519 27.0368C131.326 27.0591 132.127 26.8804 132.847 26.517L133.371 27.7852C132.454 28.2124 131.447 28.4139 130.435 28.3725C129.871 28.411 129.305 28.3278 128.776 28.1286C128.247 27.9294 127.768 27.619 127.373 27.2187C126.623 26.3357 126.247 25.1996 126.324 24.0483C126.268 22.9214 126.627 21.8129 127.336 20.9298C127.674 20.5301 128.101 20.2129 128.583 20.0029C129.065 19.7929 129.589 19.6957 130.115 19.7189C130.587 19.6965 131.058 19.7739 131.497 19.9459C131.937 20.118 132.334 20.3808 132.663 20.7168C133.297 21.46 133.616 22.4171 133.555 23.3882C133.555 23.6533 133.549 23.8612 133.539 24.0015ZM131.913 23.1075C131.913 21.6627 131.29 20.9402 130.042 20.9402C129.741 20.9282 129.443 20.9864 129.169 21.1101C128.896 21.2338 128.656 21.4195 128.468 21.6523C128.028 22.2292 127.807 22.9414 127.844 23.6637L131.913 23.1075Z"
                    fill="#1268A2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6106_106056">
                    <rect width="133.56" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                FPT Software
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                Software Engineer
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label="2014 until 2019"
              >
                <time dateTime={"2014"}>2022</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={"2019"}>2023</time>
              </dd>
            </dl>
          </li>
        </ol>
        <a
          className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
          href="https://drive-data-export.usercontent.google.com/download/1d1j80rep5nbaj1lnivdnov64tsoqfv8/e70tuthujckb22091bojad7pdi0dm43r/1711782000000/0ba889b2-8447-46a1-bbdb-1967e86f5e85/100558809647941821710/ADt3v-ObtvM9Z0sRtfvmzHDIIbdj6mBcPLDgcj6-1x2CshmQyT-Mp8i-H699blsouTBQMM9Dpx6zku1RWWwGsLlSCyk5xBxQzmI4CG6ObsGsZYJt3CFwj-BWBSVp_2QaTBclMvl9QdWogdTPEeOAFxOZt1j5bOpNxBbX-TrfOAQCPPg8NhFSaIHFyss_WrEBG8x81nx0l-xf0ZiCwb6PwY-M8zfBS3j832NKFfpvGQ-EF2fyIwB3OE6cn4lCdv0sG1ZN5peosPRr-PqjwVwWLsr6yfA5I5V2FTytFp9X3zxB3VeKrSp1U3PC0ty7M9tMaTUEWDZ11scjoruJaPgIu0BUvgOuiVbOSw==?j=0ba889b2-8447-46a1-bbdb-1967e86f5e85&user=17661111318&i=0"
          download
        >
          Download CV
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
          >
            <path
              d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
