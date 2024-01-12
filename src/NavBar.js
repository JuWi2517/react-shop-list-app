import './NavBar.css'

function navBar() {
    return (
        <nav className="navbar">
            <div className="language-selection">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAllBMVEX////XFBoRRX7VAADroKIARoDZExgAR4MAMXTgDgrcERMAP3sAL3MAPHneEBAARn8ANHXSFRzEzdr5+vxmf6IAOnnu8fVDZJE6QHOSLU7hDghjfKG8xtVYdJuzvs/y9PfEGyqLL1JCPnHIGifMGCNKPW6ZK0pSPGufKUakJ0NcOmd2i6u2wdFRbpintMjPlZ2dKkhmOGTPcQZlAAAEO0lEQVR4nO3XB3YTMRSF4bkCMQHHcSiBUAOh97D/zSEzZmJ7XKZIek13BePv/Ocpqb5XZdubzx5RfwK7OXdaUtmac66ksjW33OmTx9TfwWn/TEoqG3OrlVRu99+kpHI7d7uSymprJiWV1dzGSirLbZqUVJZz2yupdE1KKjtMSiq7TNx8bjqVnSbGU9ljYjqVfSaWU9lvYjeVAyZmUzloElJ5Rf2BBDtsYjOVYyYWUzlqElJ5aSyVHibmUuljYi2Vfia2Uulp4tyJnVR6m7j5hZVU+pvYSWWIiZWrMsjEyAM00MTEVRlqYuGqDDfRn8oIk5DK6yvq7065USZudvGD+sMTbpyJ7lTGmmhOZbSJ4lQmmLjZuc5UpphoTWWaSbgqb6h/QfxNNFGZymQThalMN9GXSgyT8ACpSiWKibJUIpmouiqxTDSlEs9ETyoRTdSkEtVEyQMU10RHKrFNNFyV6CYhlZ/CU0lgIv6qpDCRnkoaEzc7EZxKIpNlKk+pf9vYJTMRfFXSmchNJaWJ1FSSmghNJbGJm53+ov6Jg5faRGIq6U3CVRGWSgYT585lpZLFRFgqeUxkXZVcJpIeoGwmgq5KRpPwz7KMVHKahFSeSUglr4mMVDKbiEglu4mAByi/Cf9UKEy4XxUSE+apEJmwToXKhHMqdCZ8HyBCE7apkJowTYXWhGcq1CYcHyBqEscwFWqQ5bhdFWqPZrxSodZYbXby+y6XMTGpL9/eYTMWJov63dk9sBkHkxDJGbXD+uhNQiT3GUUCBibcIgG5Cb9IQG3CMBLQmjB7btoRmvCMBIQmLC9JMyoTtpGAyoRxJCAy4RwJSEx4RwIKk/ryPedIkN+EfSTIbsL8kjTLauLr5+wjQV6T+pr7JWmWz0RIJMhoIiUSZDPxXkokyGUiKBLkMQmRvBATCbKYyIoEGUzkPDftUpvU1x9kRYLUJqKem3ZJTcRdkmYJTaQ9N+3SmdQf5V2SZqlMZF6SZolM5EaCRCaSI0EaE4l/k6wvvonY56ZddBPRl6RZZBPhl6RZXBMFkSCuiYpIENVERySIaOL9J+HPTbtYJmoiQSyTEImKS9IsiommSBDFRFckiGESInlA/SvibqqJouem3UQTfZFgoom6S9JsionKSDDFRGkkmGCiNRKMNvELfc9Nu3Em9eeHWiPBOBPvb/RGglEmuiPBCBO/uFH63LQbaqI+Egw18Ysv2iPBQBMLkWCQSYhE9XPTrr+JkUjQ38TGJWnW08ROJOhpYikS9DMxFQn6mBiLBD1MrEWCoyb2IsExE4OR4LCJ91/tRYKDJjYjwQGTEImN/26622dSfzMaCfaZ+IXNS9Jsp4nlSLDTxHYk2GViPBJ0TUIkVp+bdlWJpLMNE6t/uG6t2ogEJRKsm5h/btpV5ZJ0VpXnprOqRNJZVS5JZ1V5bjqrSiSdVX9KJNv7C4j+26n6YfgSAAAAAElFTkSuQmCC" alt="Czech" className="flag-icon"/>
                <img src="data:image/png;base64,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" alt="British" className="flag-icon"/>
            </div>
            <label className="dark-mode-toggle">
                <input type="checkbox" className="dark-mode-checkbox"/>
                <div className="toggle-circle"></div>
            </label>
        </nav>
    );
};


export default navBar;