import './loadingScreen.css'

function Loader({ fullscreen = true }: { fullscreen?: boolean }) {
    return (
        <div className={`loader-container ${fullscreen && "fullscreen"}`}>
            <span className='loader'>Loading Data. Please Wait...</span>
        </div>
    );
}

export default Loader;