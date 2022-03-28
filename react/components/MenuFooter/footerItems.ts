import locationIcon from '../../../assets/icons/custom-location.svg'
import typingBalloonIcon from '../../../assets/icons/custom-typing-balloon.svg'
import phoneIcon from '../../../assets/icons/custom-phone.svg'
import type { IMenuFooterItem } from '../MenuFooterItem'

export const footerItems = [
  {
    text: 'Nossas Lojas',
    icon: locationIcon,
    href: '/',
  },
  {
    text: 'FAQ e Ajuda',
    icon: typingBalloonIcon,
    href: '/',
  },
  {
    text: '(11) 3456-7890 / (xx) 98765-4321',
    icon: phoneIcon,
    href: '/',
  },
] as IMenuFooterItem[]
