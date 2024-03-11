import React from 'react'

const Menu = ({ handleLogOut }) => {
  const handleClick = (event, id) => {
    event.preventDefault()
    const targetElement = document.getElementById(id)
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 100
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className='flex flex-col gap-y-20 mt-32'>
      <div className='mx auto flex flex-col'>
        <a onClick={(e) => handleClick(e, 'Agenda')} className='mx-auto mb-4' href='/plataforma-admin/#Agenda'>
          <svg className='fill-[#FFFFFF] mx-auto md:hover:fill-[#E9500E]' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99613 16C12.3809 16 16 12.3791 16 8C16 3.62089 12.3731 0 7.9884 0C3.61141 0 0 3.62089 0 8C0 12.3791 3.61914 16 7.99613 16ZM7.99613 14.4062C4.44659 14.4062 1.60851 11.5513 1.60851 8C1.60851 4.44874 4.44659 1.60155 7.9884 1.60155C11.5379 1.60155 14.3915 4.44874 14.3992 8C14.407 11.5513 11.5457 14.4062 7.99613 14.4062ZM4.0986 8.97486H7.9884C8.34413 8.97486 8.61479 8.70406 8.61479 8.3559V3.29594C8.61479 2.94778 8.34413 2.67698 7.9884 2.67698C7.64814 2.67698 7.37748 2.94778 7.37748 3.29594V7.73694H4.0986C3.7506 7.73694 3.47994 8.00774 3.47994 8.3559C3.47994 8.70406 3.7506 8.97486 4.0986 8.97486Z"/>
          </svg>
        </a>
        <a className='mx-auto text-[#FFFFFF] text-base md:hover:text-[#E9500E]' href='/plataforma-admin/#Agenda' onClick={(e) => handleClick(e, 'Agenda')}>
          Dias y horarios
        </a>
      </div>
      <div className='mx auto flex flex-col'>
        <a onClick={(e) => handleClick(e, 'Buscar')} className='mx-auto mb-4' href='/plataforma-admin/#Buscar'>
          <svg className='fill-[#FFFFFF] mx-auto md:hover:fill-[#E9500E]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.585 19.0332C13.9325 19.0332 15.1953 18.6113 16.2463 17.8906L19.9584 21.749C20.2042 21.9951 20.5178 22.1182 20.8568 22.1182C21.5602 22.1182 22.0772 21.5469 22.0772 20.8262C22.0772 20.4922 21.967 20.167 21.7297 19.9209L18.043 16.0801C18.8058 14.9551 19.255 13.5928 19.255 12.1162C19.255 8.31055 16.2547 5.19922 12.585 5.19922C8.92372 5.19922 5.91504 8.31055 5.91504 12.1162C5.91504 15.9219 8.91525 19.0332 12.585 19.0332ZM12.585 17.1875C9.89837 17.1875 7.69482 14.9023 7.69482 12.1162C7.69482 9.33008 9.89837 7.04492 12.585 7.04492C15.2716 7.04492 17.4752 9.33008 17.4752 12.1162C17.4752 14.9023 15.2716 17.1875 12.585 17.1875Z"/>
          </svg>
        </a>
        <a className='mx-auto text-[#FFFFFF] text-base md:hover:text-[#E9500E]' href='/plataforma-admin/#Buscar' onClick={(e) => handleClick(e, 'Buscar')}>
          Buscar usuarios
        </a>
      </div>
      <div className='mx auto flex flex-col'>
        <a onClick={(e) => handleClick(e, 'Crear')} className='mx-auto mb-4' href='/plataforma-admin/#Crear'>
          <svg className='fill-[#FFFFFF] md:hover:fill-[#E9500E]' width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.36806 9.97238C2.5856 11.0564 2.1681 12.3298 2.16816 13.6324V14.8C2.16816 14.9591 2.09968 15.1117 1.97778 15.2242C1.85588 15.3368 1.69055 15.4 1.51816 15.4C1.34577 15.4 1.18044 15.3368 1.05854 15.2242C0.936646 15.1117 0.868164 14.9591 0.868164 14.8V13.6336C0.86856 12.0933 1.36297 10.5876 2.28906 9.30638L2.42946 9.11198C2.47684 9.04643 2.53774 8.99013 2.60868 8.9463C2.67963 8.90247 2.75923 8.87196 2.84295 8.85653C2.92667 8.8411 3.01286 8.84104 3.0966 8.85635C3.18034 8.87166 3.26 8.90205 3.33101 8.94578C3.40203 8.98951 3.46303 9.04573 3.51051 9.11122C3.55799 9.17671 3.59104 9.25019 3.60776 9.32746C3.62448 9.40474 3.62454 9.4843 3.60795 9.5616C3.59136 9.6389 3.55844 9.71243 3.51106 9.77798L3.36806 9.97238Z"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.03363 8.03795C5.61663 8.03795 4.29453 8.69075 3.50933 9.77795L2.42773 9.11315C2.93313 8.41341 3.61782 7.83964 4.42106 7.44275C5.2243 7.04586 6.12125 6.83811 7.03233 6.83795H7.31833C7.49073 6.83795 7.65606 6.90117 7.77795 7.01369C7.89985 7.12621 7.96833 7.27882 7.96833 7.43795C7.96833 7.59708 7.89985 7.74969 7.77795 7.86222C7.65606 7.97474 7.49073 8.03795 7.31833 8.03795H7.03363ZM11.035 9.95795C11.646 10.8052 11.9723 11.7988 11.9723 12.8164H13.2723C13.2726 11.5624 12.8705 10.3364 12.1166 9.29315L11.9866 9.11315C11.9406 9.04506 11.8802 8.98619 11.809 8.94003C11.7379 8.89387 11.6574 8.86136 11.5724 8.84442C11.4874 8.82748 11.3996 8.82646 11.3142 8.84141C11.2287 8.85637 11.1474 8.887 11.075 8.93149C11.0026 8.97598 10.9407 9.03343 10.8928 9.10043C10.8449 9.16743 10.812 9.24262 10.7962 9.32155C10.7803 9.40048 10.7818 9.48154 10.8005 9.55994C10.8192 9.63833 10.8547 9.71247 10.905 9.77795L11.035 9.95795Z"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.38229 8.03795C8.79799 8.03795 10.1201 8.69075 10.9053 9.77795L11.9869 9.11315C11.4815 8.41341 10.7968 7.83964 9.99356 7.44275C9.19032 7.04586 8.29337 6.83811 7.38229 6.83795H7.09629C7.01093 6.83795 6.92641 6.85347 6.84754 6.88362C6.76868 6.91378 6.69703 6.95797 6.63667 7.01369C6.57631 7.0694 6.52843 7.13555 6.49577 7.20834C6.4631 7.28114 6.44629 7.35916 6.44629 7.43795C6.44629 7.51674 6.4631 7.59477 6.49577 7.66756C6.52843 7.74036 6.57631 7.8065 6.63667 7.86222C6.69703 7.91793 6.76868 7.96213 6.84754 7.99228C6.92641 8.02243 7.01093 8.03795 7.09629 8.03795H7.38229Z"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.12539 6.69998C7.50951 6.69998 7.88986 6.63014 8.24474 6.49445C8.59962 6.35876 8.92207 6.15988 9.19368 5.90916C9.46529 5.65845 9.68074 5.3608 9.82774 5.03322C9.97473 4.70564 10.0504 4.35454 10.0504 3.99998C10.0504 3.64541 9.97473 3.29431 9.82774 2.96673C9.68074 2.63915 9.46529 2.34151 9.19368 2.09079C8.92207 1.84007 8.59962 1.64119 8.24474 1.5055C7.88986 1.36981 7.50951 1.29998 7.12539 1.29998C6.34963 1.29998 5.60565 1.58444 5.0571 2.09079C4.50856 2.59714 4.20039 3.28389 4.20039 3.99998C4.20039 4.71606 4.50856 5.40282 5.0571 5.90916C5.60565 6.41551 6.34963 6.69998 7.12539 6.69998ZM7.12539 7.89998C8.24593 7.89998 9.32057 7.48908 10.1129 6.75769C10.9053 6.0263 11.3504 5.03432 11.3504 3.99998C11.3504 2.96563 10.9053 1.97365 10.1129 1.24226C9.32057 0.510867 8.24593 0.0999756 7.12539 0.0999756C6.00485 0.0999756 4.93021 0.510867 4.13786 1.24226C3.34552 1.97365 2.90039 2.96563 2.90039 3.99998C2.90039 5.03432 3.34552 6.0263 4.13786 6.75769C4.93021 7.48908 6.00485 7.89998 7.12539 7.89998ZM12.6621 13.8232C11.8789 14.9074 11.461 16.1813 11.4609 17.4844V18.7252C11.4609 18.8843 11.3924 19.0369 11.2705 19.1494C11.1486 19.262 10.9833 19.3252 10.8109 19.3252C10.6385 19.3252 10.4732 19.262 10.3513 19.1494C10.2294 19.0369 10.1609 18.8843 10.1609 18.7252V17.4844C10.1608 15.9448 10.6543 14.4396 11.5792 13.1584L11.7521 12.9184C11.8479 12.786 11.9968 12.6942 12.166 12.6631C12.3352 12.632 12.5109 12.6643 12.6543 12.7528C12.7977 12.8413 12.8972 12.9787 12.9308 13.1349C12.9645 13.2911 12.9295 13.4532 12.8337 13.5856L12.6621 13.8232Z"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.4463 11.8C15.7311 11.7999 15.0271 11.9628 14.3966 12.2743C13.7661 12.5858 13.2288 13.0362 12.8323 13.5856L11.752 12.9196C12.2671 12.2061 12.9651 11.6211 13.784 11.2165C14.6029 10.8118 15.5174 10.6 16.4463 10.6H16.7375C16.9098 10.6 17.0752 10.6632 17.1971 10.7757C17.319 10.8882 17.3875 11.0408 17.3875 11.2C17.3875 11.3591 17.319 11.5117 17.1971 11.6242C17.0752 11.7368 16.9098 11.8 16.7375 11.8H16.4463ZM20.5894 13.8232C21.3725 14.9074 21.7905 16.1813 21.7906 17.4844V18.7252C21.7906 18.8843 21.859 19.0369 21.9809 19.1494C22.1028 19.262 22.2682 19.3252 22.4406 19.3252C22.6129 19.3252 22.7783 19.262 22.9002 19.1494C23.0221 19.0369 23.0906 18.8843 23.0906 18.7252V17.4844C23.0903 15.9446 22.5963 14.4394 21.671 13.1584L21.4981 12.9184C21.4022 12.786 21.2533 12.6942 21.0841 12.6631C20.9149 12.632 20.7393 12.6643 20.5959 12.7528C20.4524 12.8413 20.3529 12.9787 20.3193 13.1349C20.2857 13.2911 20.3206 13.4532 20.4165 13.5856L20.5894 13.8232Z"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.8038 11.8C17.5189 11.7999 18.223 11.9628 18.8535 12.2743C19.4839 12.5858 20.0213 13.0362 20.4178 13.5856L21.4994 12.9196C20.9842 12.2059 20.2859 11.6208 19.4668 11.2162C18.6476 10.8115 17.7329 10.5998 16.8038 10.6H16.5113C16.3389 10.6 16.1736 10.6632 16.0517 10.7757C15.9298 10.8882 15.8613 11.0408 15.8613 11.2C15.8613 11.3591 15.9298 11.5117 16.0517 11.6242C16.1736 11.7368 16.3389 11.8 16.5113 11.8H16.8038Z"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.5502 10.6C16.9343 10.6 17.3147 10.5302 17.6695 10.3945C18.0244 10.2588 18.3469 10.0599 18.6185 9.80919C18.8901 9.55847 19.1055 9.26083 19.2525 8.93325C19.3995 8.60567 19.4752 8.25457 19.4752 7.9C19.4752 7.54543 19.3995 7.19433 19.2525 6.86675C19.1055 6.53918 18.8901 6.24153 18.6185 5.99081C18.3469 5.74009 18.0244 5.54121 17.6695 5.40553C17.3147 5.26984 16.9343 5.2 16.5502 5.2C15.7744 5.2 15.0305 5.48446 14.4819 5.99081C13.9334 6.49716 13.6252 7.18392 13.6252 7.9C13.6252 8.61608 13.9334 9.30284 14.4819 9.80919C15.0305 10.3155 15.7744 10.6 16.5502 10.6ZM16.5502 11.8C17.6707 11.8 18.7454 11.3891 19.5377 10.6577C20.3301 9.92632 20.7752 8.93434 20.7752 7.9C20.7752 6.86566 20.3301 5.87368 19.5377 5.14228C18.7454 4.41089 17.6707 4 16.5502 4C15.4297 4 14.355 4.41089 13.5627 5.14228C12.7703 5.87368 12.3252 6.86566 12.3252 7.9C12.3252 8.93434 12.7703 9.92632 13.5627 10.6577C14.355 11.3891 15.4297 11.8 16.5502 11.8Z"/>
          </svg>
        </a>
        <a className='mx-auto text-[#FFFFFF] text-base md:hover:text-[#E9500E]' href='/plataforma-admin/#Crear' onClick={(e) => handleClick(e, 'Crear')}>
          Nuevos usuarios
        </a>
      </div>
      <div className='mx auto flex flex-col'>
        <div className='mx-auto mb-4'>
          <svg onClick={handleLogOut} className='fill-[#FFFFFF] md:hover:fill-[#E9500E] cursor-pointer' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.475586 1.70833C0.475586 0.903333 1.12892 0.25 1.93392 0.25H6.51725C6.68301 0.25 6.84198 0.315848 6.95919 0.433058C7.0764 0.550269 7.14225 0.70924 7.14225 0.875C7.14225 1.04076 7.0764 1.19973 6.95919 1.31694C6.84198 1.43415 6.68301 1.5 6.51725 1.5H1.93392C1.87867 1.5 1.82568 1.52195 1.78661 1.56102C1.74754 1.60009 1.72559 1.65308 1.72559 1.70833V16.2917C1.72559 16.4067 1.81892 16.5 1.93392 16.5H6.51725C6.68301 16.5 6.84198 16.5658 6.95919 16.6831C7.0764 16.8003 7.14225 16.9592 7.14225 17.125C7.14225 17.2908 7.0764 17.4497 6.95919 17.5669C6.84198 17.6842 6.68301 17.75 6.51725 17.75H1.93392C1.54715 17.75 1.17621 17.5964 0.902722 17.3229C0.629231 17.0494 0.475586 16.6784 0.475586 16.2917V1.70833ZM13.8139 9.625H6.93392C6.76816 9.625 6.60919 9.55915 6.49198 9.44194C6.37477 9.32473 6.30892 9.16576 6.30892 9C6.30892 8.83424 6.37477 8.67527 6.49198 8.55806C6.60919 8.44085 6.76816 8.375 6.93392 8.375H13.8139L11.0639 5.47167C10.9544 5.35064 10.8966 5.19157 10.9028 5.02846C10.909 4.86536 10.9788 4.71115 11.0972 4.59882C11.2156 4.48649 11.3733 4.42494 11.5365 4.42734C11.6997 4.42975 11.8555 4.4959 11.9706 4.61167L15.7206 8.57C15.8307 8.68611 15.892 8.84001 15.892 9C15.892 9.15999 15.8307 9.31389 15.7206 9.43L11.9706 13.3883C11.8555 13.5041 11.6997 13.5703 11.5365 13.5727C11.3733 13.5751 11.2156 13.5135 11.0972 13.4012C10.9788 13.2888 10.909 13.1346 10.9028 12.9715C10.8966 12.8084 10.9544 12.6494 11.0639 12.5283L13.8139 9.625Z"/>
          </svg>
        </div>
        <p onClick={handleLogOut} className='cursor-pointer text-base text-[#FFFFFF] md:hover:text-[#E9500E] mx-auto'>Cerrar sesión</p>
      </div>
    </div>
  )
}

export default Menu
