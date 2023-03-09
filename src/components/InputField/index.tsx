import * as S from './style'

function InputField() {
  return (
    <S.Input>
        <form onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()
        }}>
          <input type="text" placeholder='Enter a track or artist name ex: Alan Walker'/>
          <button type='submit'>Search</button>
        </form>
    </S.Input>
  )
}

export default InputField
