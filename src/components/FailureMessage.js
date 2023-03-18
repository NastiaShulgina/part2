const FailureMessage = (messageObj) => {
    return (
        <div className='message failure'>
            {messageObj.message}
        </div>
    )
}

export default FailureMessage;