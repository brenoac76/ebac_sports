import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import * as S from './styles'
import { Produto as ProdutoType, paraReal } from '../Produto/Produto'
import { adicionarItem } from '../../store/reducers/carrinho'
import {
  adicionarFavorito,
  removerFavorito
} from '../../store/reducers/favoritosSlice'

type Props = {
  produto: ProdutoType
}

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)

  const estaNosFavoritos = favoritos.some((item) => item.id === produto.id)
  const estaNoCarrinho = carrinho.some((item) => item.id === produto.id)

  const toggleFavorito = () => {
    if (estaNosFavoritos) {
      dispatch(removerFavorito(produto.id))
    } else {
      dispatch(adicionarFavorito(produto))
    }
  }

  const adicionarAoCarrinho = () => {
    if (estaNoCarrinho) {
      alert('Este produto já está no carrinho!')
    } else {
      dispatch(adicionarItem(produto))
    }
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={toggleFavorito} type="button">
        {estaNosFavoritos
          ? '-Remover dos favoritos'
          : '+Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={adicionarAoCarrinho} type="button">
        {estaNoCarrinho ? 'No carrinho' : 'Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
