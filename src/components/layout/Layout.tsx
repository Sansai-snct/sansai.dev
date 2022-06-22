interface LayoutInterface {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutInterface> = ({ children }) => {
  return <div>{children}</div>
}
