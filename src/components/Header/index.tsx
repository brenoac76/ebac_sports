import React from 'react'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto/Produto'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Carrinho" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
