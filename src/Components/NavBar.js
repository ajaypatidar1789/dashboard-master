import React, {useContext } from 'react';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import {ThemedContext} from '../App'
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next'


function Navbar() {

    const {theme,toggleTheme} = useContext(ThemedContext)
    const { t } = useTranslation()


  return (
    <nav className='flex justify-around sticky shadow-md items-center z-10' style={{height:'70px'}}>
        <div className='flex w-2/3 justify-start items-center'>
            <div className='flex '>
                <Link to='/' className='flex '>
                    <span className='Leadership text-2xl font-semibold'>{t("navItems.logo_text")}</span>
                </Link>
            </div>

            <div className='flex justify-evenly w-1/2'>
                
                <div><Link to='/' className='Leadership text-md font-normal hover:text-blue-600' > {t("navItems.UserPages")} </Link></div>
                <div><Link to='/landings' className='Leadership text-md font-normal hover:text-blue-600' > 
                {t("navItems.Landings")}
                </Link></div>
                <div><Link to='/account' className='Leadership text-md font-normal hover:text-blue-600' > {t("navItems.Account")} </Link></div>
                <div><Link to='/uikit' className='Leadership text-md font-normal hover:text-blue-600' > {t("navItems.UI_Kit")} </Link></div>
                <div><Link to='/docs' className='Leadership text-md font-normal hover:text-blue-600' > {t("navItems.Docs")} </Link></div>
            </div>

        </div>
        
        <div className='flex'>
            <div className='flex justify-center items-center mr-5'>
                <span className='Leadership text-md font-normal ml-2 mr-2'>{t("navItems.Light")}</span>
                  <Switch onChange={() => toggleTheme(theme)} />
                <span className='Leadership text-md font-normal ml-2 mr-2'>{t("navItems.Dark")}</span>
            </div>
            <div>
                <LanguageSelector/>
            </div>

        </div>
    </nav>
  );
}

export default Navbar;