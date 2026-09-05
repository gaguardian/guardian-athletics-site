type PlaceholderImageProps = {
  label: string
  className?: string
}

export default function PlaceholderImage({
  label,
  className = '',
}: PlaceholderImageProps) {
  return (
    <div className={`placeholder-image ${className}`} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  )
}
