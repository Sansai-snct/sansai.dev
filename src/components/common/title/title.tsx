interface TitleInterface {
  children: React.ReactNode
}

export const Title: React.FC<TitleInterface> = ({ children }) => {
  return <div className="text-3xl">{children}</div>
}
