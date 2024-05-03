export default function TodoFooter({length}) {
  return (
    <div>
    {length ? (
      <h2>Всего {length} в списке</h2>
      ) : (
      <h2>Список пуст</h2>
      )
    }  
    </div>  
  )
}
