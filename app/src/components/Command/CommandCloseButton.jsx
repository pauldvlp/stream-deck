import './CommandCloseButton.css'

export const CommandCloseButton = ({ close }) => {
  return (
    <button className="CommandCloseButton shadow" onClick={close}>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  )
}
