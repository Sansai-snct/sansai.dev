import { Footer } from './footer'
import { Header } from './header'

interface LayoutInterface {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutInterface> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
