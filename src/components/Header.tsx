/**
 * TYPES
 */
interface IHeaderProps
{
  title: string;
}


/**
 * EXPORTS
 */
export function Header ({title}: IHeaderProps)
{
    return (
        <header>
          <span className="category">Categoria:<span> {title}</span></span>
        </header>
    );
}
