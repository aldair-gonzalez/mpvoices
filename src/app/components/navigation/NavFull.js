'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../../../lib/auth'

const routes = [
  {
    label: 'Espacio Voices',
    link: '/#EspacioVoices'
  },
  {
    label: 'María Peña',
    link: '/#MariaPeña'
  },
  {
    label: 'Clases',
    link: '/#Clases'
  },
  {
    label: 'Nuevos proyectos',
    link: '/#NuevosProyectos'
  },
  {
    label: 'Contacto',
    link: '/#Footer'
  }
]

const NavFull = () => {
  const user = useAuth()
  const [rol, setRol] = useState('')
  useEffect(() => {
    if (user) {
      setRol(user.displayName)
    }
  }, [user])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    })
  }
  return (
    <nav className="bg-black text-white hidden lg:flex fixed top-0 left-0 right-0 py-2 h-[6rem] border-b-1 border-b-[#FFFFFF]">
      <div className="my-auto flex w-[20%]">
        <Link onClick={() => scrollToTop()} className="ml-auto hover:scale-110 transition ease-in-out" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="73"
            viewBox="0 0 140 73"
            fill="none"
          >
            <path
              d="M24.7441 51.6826C21.9504 51.6826 19.0902 50.2971 18.7244 47.0085C18.2255 42.518 21.9837 37.7604 24.7275 34.2714L25.3095 33.5369L25.3427 33.5536L25.4591 33.4034L25.7086 33.6037L25.5922 33.7373C25.4093 33.971 25.2097 34.2214 25.0102 34.4718C22.2996 37.9106 18.5913 42.6014 19.0736 46.9417C19.4561 50.3638 22.7486 51.5658 25.6421 51.2319L25.6753 51.5824C25.376 51.6492 25.06 51.6659 24.7441 51.6826ZM27.6376 47.8264C26.7562 47.8264 25.9248 47.4592 25.3427 46.8081C24.6776 46.0736 24.2619 45.1388 24.1621 44.1539L24.5113 44.1205C24.6111 45.0387 24.9935 45.89 25.6088 46.5577C26.2075 47.2255 27.0888 47.5593 27.9868 47.4592C29.1342 47.3256 30.2317 46.6412 31.1297 45.4727C32.9755 43.0855 33.9067 38.8955 33.3912 35.273C33.2415 34.2047 32.9921 33.1363 32.7759 32.2015C32.593 31.517 32.46 30.8159 32.3602 30.1148C32.2105 28.7626 32.8092 27.2269 34.4887 27.0432C35.2204 26.9264 35.9687 27.1267 36.5674 27.5941C37.5984 28.4288 37.8977 29.8811 37.9808 30.6824L37.6316 30.7158C37.5485 29.9813 37.2824 28.6124 36.3512 27.8612C35.8357 27.4606 35.1871 27.2936 34.5386 27.3938C33.1085 27.5607 32.6096 28.8962 32.726 30.0647C32.8258 30.7492 32.9588 31.4336 33.1418 32.1013C33.3746 33.0528 33.624 34.1212 33.7737 35.2063C34.3058 38.979 33.3746 43.1857 31.4456 45.673C30.4811 46.925 29.3005 47.6595 28.0533 47.8097C27.887 47.8264 27.7706 47.8264 27.6376 47.8264ZM17.6767 36.1077C17.5271 36.1077 17.3774 36.0409 17.261 35.9575C16.812 35.5902 16.5626 34.622 16.5293 34.2381C16.3797 32.8692 16.7455 31.4837 17.4938 30.5321C18.0758 29.7809 18.9406 29.3135 19.8718 29.2134C21.3185 29.0464 22.2996 29.6808 23.1477 30.2317C23.8628 30.6991 24.478 31.083 25.2596 30.9996C26.1742 30.8994 26.3904 30.3151 26.5899 29.5639L26.6066 29.4971C26.8227 28.7626 27.0555 27.9947 28.0699 27.8779C28.785 27.7944 29.3337 28.2785 29.4169 29.0464L29.0677 29.0965C29.0178 28.6625 28.7351 28.1617 28.1198 28.2451C27.3382 28.3286 27.1719 28.8962 26.9558 29.614L26.9391 29.6808C26.7728 30.3318 26.54 31.25 25.3095 31.3835C24.3949 31.4837 23.6965 31.0329 22.9648 30.5488C22.1167 29.998 21.252 29.4471 19.9217 29.5806C19.0736 29.6641 18.3087 30.0981 17.7765 30.7658C17.0781 31.6506 16.7455 32.936 16.8786 34.2047C16.9118 34.5719 17.1446 35.4066 17.4938 35.6737C17.5437 35.7238 17.6269 35.7572 17.71 35.7405L17.7433 36.091C17.7266 36.091 17.6934 36.091 17.6767 36.1077Z"
              fill="#EC6327"
            />
            <path
              d="M81.8149 40.665C80.8671 40.6817 79.9525 40.281 79.3206 39.5632C78.672 38.8454 78.2397 37.8104 78.1066 36.6586L78.4559 36.6252C78.5723 37.7103 78.9714 38.6618 79.57 39.3295C80.2352 40.064 81.2329 40.4313 82.214 40.2977C85.174 39.9639 87.1362 37.126 88.2504 34.8223L88.3335 34.6554L89.7802 35.4901L89.5973 35.8072L88.4832 35.1562C86.8369 38.4949 84.6751 40.3979 82.2473 40.665C82.1143 40.665 81.9646 40.6817 81.8149 40.665ZM71.8375 36.2746C71.4384 32.5353 72.3696 28.7626 74.4483 25.6243C76.6599 22.3357 79.886 20.2991 83.5277 19.8818C85.0243 19.7148 86.6041 19.9319 87.818 20.5161C89.3313 21.2172 90.2126 22.3858 90.3789 23.8882C90.5784 25.6911 89.3978 27.3103 87.7515 27.4939C86.0221 27.6943 84.5753 26.6092 84.3758 24.9899L84.725 24.9399C84.8913 26.3922 86.1385 27.3103 87.7016 27.1434C89.3313 26.9598 90.1793 25.3405 90.0297 23.9383C89.8301 22.2021 88.6328 21.3007 87.6684 20.85C86.5043 20.3158 85.0077 20.0988 83.5776 20.249C80.0356 20.6497 76.8927 22.6362 74.7476 25.8246C72.7188 28.8962 71.8209 32.5687 72.2033 36.2413L71.8375 36.2746Z"
              fill="#EC6327"
            />
            <path
              d="M96.2823 45.6396C94.4531 45.6396 92.8567 45.1054 91.6262 44.0871C90.1628 42.8685 89.2648 40.9655 88.9988 38.5783L89.348 38.5449C89.8801 43.2358 92.8733 45.7231 97.3798 45.2223L97.4463 45.5895C97.0639 45.6229 96.6814 45.6396 96.2823 45.6396ZM99.0261 42.5346L98.9928 42.1841C101.803 41.8669 103.765 38.8621 105.195 36.6586L105.295 36.5083L106.825 37.4265L106.626 37.727L105.378 36.9924C103.932 39.2294 101.936 42.2008 99.0261 42.5346ZM95.1183 38.8788C95.0351 37.9273 95.0351 36.9591 95.085 36.0075L95.1016 35.7738L95.218 35.7238L95.9165 35.4567C98.178 34.622 101.271 33.4702 103.732 31.8342C106.626 29.9145 107.906 27.8278 107.657 25.4907L108.006 25.4573C108.288 27.928 106.908 30.1649 103.932 32.1514C101.437 33.804 98.3277 34.9726 96.0495 35.8072L95.4508 36.0242C95.3843 36.9591 95.401 37.9106 95.4675 38.8454L95.1183 38.8788ZM95.7335 34.2214L95.3843 34.1713C95.7335 31.5838 96.8311 23.7045 100.722 23.2705C101.969 23.137 102.901 23.9549 103.05 25.3238L102.701 25.3572C102.568 24.1887 101.803 23.5042 100.772 23.6211C97.1304 24.0384 96.0828 31.7007 95.7335 34.2214Z"
              fill="#EC6327"
            />
            <path
              d="M113.244 44.421C111.997 44.4377 110.749 44.1873 109.585 43.7199C107.856 42.9687 106.858 41.7 106.675 40.0473C106.576 39.3796 106.725 38.6952 107.108 38.1276C107.507 37.5767 108.139 37.2262 108.82 37.1761C110.284 37.0091 111.481 37.9273 111.631 39.3295L111.282 39.3629C111.149 38.161 110.134 37.3764 108.87 37.5266C108.288 37.56 107.756 37.8605 107.407 38.3279C107.091 38.812 106.958 39.413 107.041 39.9973C107.257 41.917 108.621 42.9019 109.735 43.386C111.016 43.9536 112.728 44.1873 114.308 44.0037C116.32 43.77 118.216 42.9186 119.713 41.5497C120.827 40.4981 122.107 38.7286 121.824 36.2079L122.19 36.1745C122.423 38.2445 121.625 40.2477 119.962 41.8168C118.116 43.5029 115.738 44.421 113.244 44.421ZM113.926 35.3398C113.709 35.1228 113.477 34.9225 113.227 34.6888C111.331 32.936 109.186 30.9495 108.904 28.3787C108.405 23.9049 112.362 21.0837 116.52 20.6163C119.446 20.2824 122.972 21.0169 123.321 24.1553C123.487 25.424 122.606 26.5758 121.342 26.7427C121.309 26.7427 121.276 26.7427 121.242 26.7594C119.563 26.9431 118.731 25.4907 118.548 24.1887L118.898 24.1386C119.081 25.3405 119.779 26.5758 121.209 26.4089C122.273 26.3087 123.055 25.3739 122.972 24.3055C122.972 24.2721 122.972 24.2387 122.955 24.222C122.639 21.3508 119.297 20.6997 116.553 21.0002C112.562 21.4509 108.771 24.1219 109.253 28.362C109.519 30.7992 111.614 32.7356 113.477 34.4551C113.709 34.6721 113.942 34.8891 114.175 35.1061L113.926 35.3398Z"
              fill="#EC6327"
            />
            <path
              d="M45.6469 53.0014C43.5516 53.0014 41.6891 52.3503 40.2092 51.0983C38.4964 49.6293 37.4321 47.4926 37.1494 44.8884L37.4986 44.855C37.7813 47.3757 38.7957 49.4457 40.442 50.8312C42.1215 52.2502 44.3165 52.8678 46.7943 52.584C54.2108 51.7494 58.5676 43.9202 57.8526 37.4098L58.2018 37.3764C58.5843 40.8319 57.6198 44.5212 55.5411 47.4926C53.3627 50.6309 50.2697 52.5674 46.8275 52.9513C46.4284 52.9847 46.0293 53.0014 45.6469 53.0014ZM43.2356 47.7931C42.9197 45.0387 43.535 41.0489 44.2001 38.2445C44.6159 36.1912 45.6136 31.3501 48.9062 30.9829C49.7542 30.8493 50.6023 31.1665 51.1677 31.8175C51.6499 32.3684 51.9659 33.1697 52.0823 34.0878L51.7331 34.1379C51.6333 33.2865 51.3506 32.552 50.9183 32.0679C50.436 31.5004 49.6877 31.2333 48.956 31.3501C46.2621 31.6506 45.1979 35.2397 44.566 38.3446C43.9008 41.1324 43.3022 45.072 43.6015 47.7764L43.2356 47.7931Z"
              fill="#EC6327"
            />
            <path
              d="M25.6587 22.0853L26.7063 21.9684L26.7728 22.5193H26.7895C27.0223 22.0686 27.4546 21.7681 27.9535 21.718C28.469 21.668 28.9346 21.8015 29.2173 22.2689C29.4335 21.8182 29.8658 21.5177 30.3647 21.4509C31.2294 21.3508 31.8946 21.6846 32.011 22.7363L32.3103 25.4573L31.1962 25.5742L30.9301 23.2705C30.8636 22.7196 30.7804 22.2856 30.1319 22.3524C29.4834 22.4192 29.4501 22.9533 29.5 23.4708L29.7494 25.7411L28.6353 25.8747L28.3859 23.5877C28.336 23.1203 28.3027 22.5694 27.6043 22.6529C27.3881 22.6696 26.8726 22.8866 26.9558 23.6712L27.2218 26.0249L26.1077 26.1418L25.6587 22.0853Z"
              fill="white"
            />
            <path
              d="M35.5362 23.5042C35.5695 23.7546 35.6028 24.4391 34.7381 24.5392C34.3722 24.5726 34.0396 24.5225 34.0064 24.0885C33.9731 23.6545 34.2558 23.5209 34.605 23.4208C34.9542 23.3206 35.3367 23.2705 35.503 23.0869L35.5362 23.5042ZM33.9399 22.4192C33.9232 21.9851 34.1893 21.7681 34.605 21.7347C35.0041 21.6847 35.3367 21.718 35.3866 22.2022C35.4365 22.6529 34.8046 22.703 34.1228 22.8866C33.441 23.0702 32.7758 23.354 32.8756 24.2721C32.9754 25.1068 33.6239 25.424 34.3888 25.3405C34.8711 25.2904 35.3866 25.0901 35.7025 24.6895C35.7192 24.823 35.7691 24.9566 35.8189 25.0734L36.9497 24.9399C36.8333 24.7896 36.7502 24.4224 36.7003 24.0551L36.4675 21.9351C36.3511 20.9668 35.37 20.8834 34.5551 20.9835C33.6572 21.0837 32.7426 21.501 32.8091 22.5527L33.9399 22.4192Z"
              fill="white"
            />
            <path
              d="M37.2324 20.7832L38.2801 20.6664L38.3632 21.4176H38.3798C38.5461 20.8667 39.0117 20.4827 39.5771 20.3993C39.6603 20.3993 39.7434 20.3993 39.8266 20.416L39.943 21.4509C39.8099 21.4342 39.6769 21.4342 39.5439 21.4509C38.729 21.5511 38.5129 22.1688 38.596 22.8866L38.7956 24.7228L37.6814 24.8397L37.2324 20.7832Z"
              fill="white"
            />
            <path
              d="M41.0074 19.8484L40.2258 19.9319L40.8577 18.7299L42.0883 18.5964L41.0074 19.8484ZM40.309 20.4327L41.4231 20.2991L41.8721 24.3723L40.758 24.4891L40.309 20.4327Z"
              fill="white"
            />
            <path
              d="M45.1147 22.4192C45.1479 22.6696 45.1812 23.354 44.3165 23.4542C43.9506 23.4875 43.6347 23.4375 43.5848 23.0034C43.5349 22.5694 43.8342 22.4526 44.1835 22.3357C44.5327 22.2188 44.9151 22.1855 45.0814 22.0018L45.1147 22.4192ZM43.5183 21.3508C43.5183 20.9001 43.7677 20.6997 44.1835 20.6497C44.5826 20.5996 44.9151 20.633 44.965 21.1171C45.0149 21.5678 44.383 21.6179 43.7012 21.8015C43.0194 21.9851 42.3543 22.2689 42.454 23.1871C42.5538 24.0217 43.2023 24.3389 43.9673 24.2554C44.4828 24.222 44.9484 23.9883 45.281 23.6044C45.2976 23.7379 45.3309 23.8715 45.3974 23.9883L46.5281 23.8548C46.4117 23.7046 46.3286 23.3373 46.2787 22.97L46.0459 20.85C45.9461 19.8818 44.9484 19.7983 44.1336 19.8985C43.219 19.9986 42.321 20.416 42.3875 21.4676L43.5183 21.3508Z"
              fill="white"
            />
            <path
              d="M50.5856 21.3508C50.6853 22.1855 50.386 23.137 49.4548 23.2371C48.4071 23.354 47.9415 22.5026 47.8418 21.668C47.742 20.7498 47.9748 19.8985 49.0723 19.7816C50.0035 19.6648 50.4858 20.5161 50.5856 21.3508ZM47.742 25.257L48.2409 25.2069L47.9914 22.9367H48.0081C48.2907 23.4875 48.906 23.7379 49.5047 23.6712C50.7352 23.5376 51.2175 22.4692 51.0844 21.3174C50.9514 20.1656 50.253 19.2307 49.0224 19.381C48.4071 19.431 47.875 19.8484 47.6755 20.4327H47.6588L47.5757 19.6648L47.1267 19.7148L47.742 25.257Z"
              fill="white"
            />
            <path
              d="M52.0988 20.9001C52.0988 20.1489 52.4647 19.3977 53.2629 19.2975C54.0611 19.1974 54.6098 19.8484 54.7096 20.5996L52.0988 20.9001ZM55.2583 20.9668C55.1752 19.815 54.5267 18.7466 53.2296 18.8802C51.9325 19.0137 51.5168 20.1656 51.6498 21.2339C51.7829 22.4025 52.4314 23.3206 53.7118 23.1871C54.7262 23.0702 55.2085 22.4692 55.3082 21.5344L54.8094 21.5845C54.7262 22.2188 54.377 22.6863 53.6453 22.7697C52.6975 22.8699 52.2319 22.0519 52.1321 21.3174L55.2583 20.9668Z"
              fill="white"
            />
            <path
              d="M58.3846 16.8937C58.368 17.2609 58.2017 17.6782 57.786 17.7283C57.5864 17.745 57.3702 17.6949 57.1873 17.6115C57.0377 17.5447 56.8547 17.4946 56.6884 17.4779C56.4723 17.4779 56.306 17.6616 56.306 17.8786C56.306 17.8953 56.306 17.912 56.306 17.9286L56.0067 17.962C56.0067 17.5781 56.2062 17.1774 56.6219 17.1274C56.8215 17.1107 57.0377 17.1441 57.2206 17.2442C57.3702 17.3277 57.5532 17.3611 57.7194 17.3611C57.9689 17.3277 58.052 17.1441 58.0853 16.927L58.3846 16.8937ZM55.6741 18.7299L56.1729 18.6799L56.2561 19.381H56.2727C56.4058 18.8802 56.9046 18.4795 57.47 18.4128C58.6008 18.2792 59.0165 18.8468 59.1329 19.815L59.4156 22.4192L58.9167 22.4692L58.634 19.9319C58.5509 19.2307 58.2682 18.7299 57.47 18.8134C56.6718 18.8969 56.2893 19.5479 56.3559 20.3492L56.6219 22.7196L56.1231 22.7697L55.6741 18.7299Z"
              fill="white"
            />
            <path
              d="M62.758 20.4494C62.8578 21.2506 62.2425 21.8015 61.4942 21.885C61.0286 21.9351 60.563 21.6847 60.4965 21.1839C60.4133 20.3826 61.4443 20.2824 62.2758 20.032C62.4088 19.9986 62.625 19.9319 62.6749 19.815H62.6915L62.758 20.4494ZM60.4799 19.4478C60.4133 18.78 60.8457 18.4462 61.461 18.3794C62.0762 18.3126 62.5419 18.4295 62.625 19.0972C62.6749 19.5479 62.4587 19.6314 62.043 19.7315C60.9954 19.9652 59.8978 20.1322 60.0142 21.284C60.0974 22.102 60.7625 22.4025 61.4942 22.319C62.2758 22.2355 62.5917 21.885 62.8744 21.3174H62.8911C62.941 21.7514 63.0407 22.0185 63.5562 21.9684C63.6726 21.9518 63.7724 21.9351 63.8722 21.9017L63.8223 21.4843C63.7724 21.5177 63.7225 21.5344 63.6726 21.5344C63.523 21.5678 63.3899 21.4843 63.34 21.3341C63.34 21.3174 63.3234 21.284 63.34 21.2673L63.0906 19.1139C62.9742 18.0288 62.176 17.8953 61.461 17.9787C60.5297 18.0789 59.9145 18.563 59.981 19.5312L60.4799 19.4478Z"
              fill="white"
            />
            <path
              d="M29.1176 48.778C26.8228 49.0284 24.345 48.0601 24.0457 45.4393C23.6466 41.9003 26.9225 38.0608 28.9513 35.4567L28.8681 35.3899C28.3859 35.6069 27.7207 35.9074 27.1886 35.9742C26.0745 36.1077 25.1432 35.7404 24.4947 35.8072C23.314 35.9408 23.63 37.1093 23.181 37.1594C22.732 37.2095 22.4493 36.2246 22.4161 35.874C22.2331 34.2547 23.048 32.4519 24.8106 32.2515C26.723 32.0345 27.4547 33.7372 28.8349 33.587C29.6497 33.4868 29.816 32.936 29.949 32.4185C30.1153 31.8509 30.2483 31.3334 30.9468 31.2499C31.4456 31.1999 31.7616 31.5504 31.8115 32.0178C31.9279 33.0862 28.3859 38.9122 28.8681 43.2858C29.0344 44.7215 30.0654 46.0736 31.6119 45.9067C34.6052 45.5728 36.3512 40.665 35.7858 36.6252C35.5863 35.1228 35.104 33.6538 35.0043 32.7857C34.9045 31.9177 35.2869 30.7658 36.4676 30.6323C38.0806 30.4487 38.779 31.8509 38.9287 33.2364C39.544 38.8788 35.4366 48.0768 29.1176 48.778Z"
              fill="white"
            />
            <path
              d="M51.4337 30.2984C52.8139 30.1482 53.529 31.2666 53.662 32.5019C53.9613 35.2396 53.0467 44.7715 49.5214 45.1722C48.058 45.3391 47.4427 43.9202 47.3097 42.735C47.0769 40.665 47.5591 37.6435 48.0414 35.6403C48.4072 33.7873 49.1722 30.5488 51.4337 30.2984ZM49.8539 46.4576C55.2251 45.8566 58.817 40.1475 58.235 34.9559C57.8193 31.1832 55.0422 28.579 51.1344 29.013C45.6135 29.6307 42.1547 35.1729 42.7533 40.5481C43.1857 44.3876 45.9461 46.8916 49.8539 46.4576Z"
              fill="white"
            />
            <path
              d="M89.0154 36.909C87.8181 39.8136 85.4069 42.4679 82.1808 42.8184C78.5058 43.2358 76.1777 40.882 75.7953 37.3764C75.18 31.8676 78.6721 25.9081 84.4257 25.257C86.4212 25.04 89.1318 25.7411 89.3978 28.1283C89.5309 29.3135 88.7826 30.5321 87.552 30.6824C86.3547 30.8159 85.3071 30.1148 85.1741 28.9129C85.0576 27.7944 85.7228 27.4939 85.6563 26.9598C85.6064 26.459 84.9745 26.3755 84.5421 26.4089C81.0999 26.7928 80.1687 34.9726 80.468 37.6602C80.6509 39.2461 81.6321 40.7318 83.428 40.5314C85.6563 40.281 87.1363 38.2445 88.0509 36.3414L89.0154 36.909Z"
              fill="white"
            />
            <path
              d="M97.0804 32.6188C97.3797 30.4487 98.2112 24.8898 100.955 24.5893C101.87 24.4891 102.452 25.1235 102.551 26.0082C102.884 29.0464 99.5582 31.5671 97.0804 32.6188ZM104.397 34.5218C103.3 36.2079 101.803 38.4782 99.6579 38.7119C98.0117 38.8955 97.0472 37.6101 96.8809 36.1077C96.8144 35.3732 96.8144 34.622 96.8642 33.8875C100.107 32.6689 106.725 30.432 106.243 26.0917C105.977 23.6712 103.2 23.1537 101.204 23.3874C95.2679 24.0551 91.6594 30.1482 92.3079 35.874C92.707 39.413 94.9852 41.3828 98.4773 40.9989C101.77 40.6316 103.965 37.9607 105.428 35.1562L104.397 34.5218Z"
              fill="white"
            />
            <path
              d="M110.633 27.3604C110.251 24.005 113.244 22.0352 116.204 21.7014C118.083 21.4843 120.877 21.8349 121.143 24.2221C121.259 25.0901 120.66 25.8914 119.796 26.0082C119.762 26.0082 119.746 26.0082 119.713 26.0249C118.565 26.1585 117.983 25.1736 117.833 24.2054C117.7 23.2872 117.384 22.8866 116.337 23.0034C115.106 23.137 114.341 23.8548 114.458 25.04C114.624 26.459 115.921 27.3771 116.902 28.1617C118.565 29.5305 120.012 30.9328 120.261 33.2031C120.627 36.5084 117.468 38.8621 114.524 39.1793C112.379 39.413 109.236 38.7286 108.937 36.0743C108.82 35.0393 109.353 34.188 110.417 34.0711C111.381 33.971 112.246 34.5385 112.379 35.5735L112.412 36.2246L112.446 36.8422C112.545 37.6936 113.46 37.9774 114.158 37.8939C115.455 37.7437 116.337 36.525 116.187 35.2563C116.038 33.9543 115.223 33.3032 114.325 32.4686C112.861 31.083 110.849 29.4638 110.633 27.3604Z"
              fill="white"
            />
            <path
              d="M62.5252 45.7565C60.4632 45.7565 58.9999 44.3542 58.7338 42.0672C58.5176 40.1642 59.0664 37.777 59.4821 36.0409L60.2304 32.5687L60.2803 32.335C60.5962 31.0496 61.3279 28.0281 61.2115 27.0432L61.5607 27.0098C61.6771 28.0615 60.9621 30.9995 60.6295 32.4185L60.5796 32.6522L59.8313 36.1244C59.4322 37.8438 58.8835 40.1809 59.083 42.0338C59.3324 44.3041 60.8789 45.6062 63.0075 45.3725C67.1315 44.9051 69.526 39.9138 70.5737 36.9591L70.9063 37.0759C69.8254 40.0974 67.3476 45.239 63.0407 45.7231C62.8744 45.7565 62.7081 45.7565 62.5252 45.7565Z"
              fill="#EC6327"
            />
            <path
              d="M72.5029 37.6769C71.5883 40.231 69.7258 43.7199 66.7326 44.0537C65.0031 44.2374 63.8391 43.169 63.6562 41.4329C63.5065 40.0473 63.889 38.3279 64.205 36.9591L64.7703 34.3549C64.9865 33.4702 65.6018 30.9995 65.5187 30.1816C65.4521 29.6474 65.1029 29.2634 64.5708 29.3135C63.4566 29.4471 62.2427 32.0679 61.8104 33.0528L61.0288 32.719C62.1097 30.265 63.8225 27.0599 66.7658 26.726C68.3456 26.5591 69.6759 27.3771 69.8588 29.0631C70.0085 30.3318 69.6094 31.9678 69.36 33.2531L68.3456 38.0775C68.2126 38.6785 67.9465 39.7302 68.013 40.3478C68.0629 40.7985 68.5119 41.266 69.0108 41.2159C70.3577 41.0656 71.2224 38.4281 71.7712 37.3931L72.5029 37.6769ZM65.7515 19.2641C65.5685 17.912 66.5164 16.66 67.88 16.4763C69.2269 16.2927 70.4741 17.2442 70.657 18.6131C70.657 18.6465 70.657 18.6799 70.6737 18.7132C70.8233 20.0153 69.8755 21.3007 68.5285 21.451C67.1816 21.6179 65.9344 20.6664 65.7681 19.2975C65.7515 19.2975 65.7515 19.2808 65.7515 19.2641Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
      <div className="flex w-[60%] justify-center my-auto mx-auto gap-2">
        {routes.map((route) => (
          <div key={route.label} className="flex min-[1024px]:mx-2 min-[1245px]:mr-4 my-auto">
            <Link
              href={route.link}
              className={'cursor-pointer text-base hover:translate-y-cursor hover:text-orange-600'}
            >
              {route.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-col my-auto w-[20%]">
        <Link className='flex mr-auto min-[1024px]:ml-6' href={
          !user
            ? '/login'
            : rol === 'Profesor'
              ? '/plataforma-profes'
              : rol === 'Alumno'
                ? '/plataforma-alumnos'
                : rol === 'Administrador'
                  ? '/plataforma-admin'
                  : '/login'
        }>
          <div className="relative group">
            <svg
              className="flex w-auto cursor-pointer fill-current hover:text-orange-600 mr-auto min-[1024px]:ml-6 min-[1245px]:ml-0"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 0.500004C7.22256 0.498417 5.98755 0.92772 5.0225 1.70882C4.05744 2.48991 3.42738 3.57017 3.24839 4.75057C3.06941 5.93096 3.35355 7.13196 4.04848 8.13228C4.74341 9.13259 5.80229 9.86484 7.03005 10.1941C5.28539 10.3918 3.78913 10.9673 2.66110 12.005C1.22621 13.3236 0.5 15.2886 0.5 17.8523C0.5 18.0241 0.573124 18.1888 0.703286 18.3103C0.833449 18.4318 1.00999 18.5 1.19406 18.5C1.37814 18.5 1.55468 18.4318 1.68484 18.3103C1.81500 18.1888 1.88813 18.0241 1.88813 17.8523C1.88813 15.5068 2.55005 13.925 3.63571 12.9268C4.72283 11.9273 6.34767 11.4091 8.5 11.4091C10.6523 11.4091 12.2772 11.9273 13.3658 12.9268C14.4500 13.9264 15.1119 15.5068 15.1119 17.8523C15.1119 18.0241 15.1850 18.1888 15.3152 18.3103C15.4453 18.4318 15.6219 18.5 15.8059 18.5C15.9900 18.5 16.1665 18.4318 16.2967 18.3103C16.4269 18.1888 16.5 18.0241 16.5 17.8523C16.5 15.2886 15.7738 13.3250 14.3374 12.005C13.2123 10.9686 11.7146 10.3918 9.96995 10.1941C11.1936 9.86113 12.2477 9.12777 12.9390 8.12842C13.6303 7.12907 13.9125 5.93068 13.7339 4.75290C13.5553 3.57513 12.9279 2.49687 11.9666 1.71577C11.0053 0.934661 9.7746 0.503036 8.5 0.500004ZM4.59132 5.44319C4.59132 4.47575 5.00313 3.54793 5.73615 2.86385C6.46917 2.17977 7.46335 1.79546 8.5 1.79546C9.53664 1.79546 10.5308 2.17977 11.2639 2.86385C11.9969 3.54793 12.4087 4.47575 12.4087 5.44319C12.4087 6.41062 11.9969 7.33844 11.2639 8.02252C10.5308 8.70660 9.53664 9.09091 8.5 9.09091C7.46335 9.09091 6.46917 8.70660 5.73615 8.02252C5.00313 7.33844 4.59132 6.41062 4.59132 5.44319Z"
                fill="currentColor"
              />
            </svg>
            <span className="tooltip text-xs text-black absolute top-10 w-36 text-center ml-6 min-[1024px]:ml-0 p-2 bg-white rounded opacity-0 group-hover:opacity-100">Plataforma Voices</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default NavFull
