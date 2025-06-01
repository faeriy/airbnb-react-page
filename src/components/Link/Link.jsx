import './Link.scss';


const Link = (props) => {
    // if props.style is light, add the class link_light to the class list
    const linkStyle = props.style === 'light' ? 'link link_light' : 'link';

    // checknumber trueness
    const number = 1;
    console.log(number && "true");

    return (
        <a href={props.href} className={linkStyle}>
            {props.icon && <img src={props.icon} alt={props.text} />}
            {props.text}
        </a>
    );
}

export default Link;
