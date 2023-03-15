const successMessage = (messageObj) => {
    return (
        <div className='success'>
            {messageObj.message}
        </div>
    )
}

export default successMessage;