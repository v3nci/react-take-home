import React from 'react'

const Card = ({
    name,
    imageSrc,
    onClick,
    active
}) => {
  return (
    <div className="c-card">
        <button type="button" className={`${active ? 'is-active' : ''}`} onClick={onClick}>
            <h3 className="h3">{name}</h3>

            {imageSrc && (
              <div className="c-card__image">
                <img src={imageSrc} alt={name} />
              </div>
            )}

            <span className="c-card__overlay">
              {active ? 'Selected!' : 'Select'}
            </span>
        </button>
    </div>
  )
}

Card.defaultProps = {
  active: false,
  onClick: () => {},
}

export default Card