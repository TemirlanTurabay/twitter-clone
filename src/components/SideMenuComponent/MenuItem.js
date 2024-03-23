function MenuItem(props){
    const {icon, name} = props;
    return(
        <div className='d-flex my-4'>
            <div style={{width: 30, height: 30}}>
                {icon}
            </div>
            <p className='mx-3' style={{fontSize: 20, color: 'black'}}>{name}</p>
        </div>
    );
}

export default MenuItem;