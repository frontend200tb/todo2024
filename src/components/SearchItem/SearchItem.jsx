import './SearchItem.scss'

export default function SearchItem({searchItem, setSearchItem}) {
  return (
    <div>
      <h2>Поиск</h2>
      <form className="searchForm" onSubmit={ e => e.preventDefault()}>
        <input 
          type="text"
          role="searchbox"
          placeholder="Search Item"
          value={searchItem}
          onChange={ e => setSearchItem(e.target.value)}
        />
      </form>
    </div>
  )
}