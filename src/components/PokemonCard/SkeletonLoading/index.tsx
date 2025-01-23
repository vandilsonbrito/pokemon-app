import "./skeleton-loading-styles.scss"

export function SkeletonLoading() {

    return (
        <div className="skeleton-loading-pokemon-card">
            <div className="skeleton-loading-pokemon-card__image">
                <div className="skeleton-loading-pokemon-card__placeholder" />
            </div>
            <div className="skeleton-loading-pokemon-card__content">
                <div className="skeleton-loading-pokemon-card__left-content">
                    <h3 className="skeleton-loading-pokemon-card__name"></h3>
                    <p className="skeleton-loading-pokemon-card__type"></p>
                </div>
                <div className="skeleton-loading-pokemon-card__right-content">
                    <h3 className="skeleton-loading-pokemon-card__name"></h3>
                    <p className="skeleton-loading-pokemon-card__type"></p>
                </div>
            </div>
            
        </div>
    )
}

