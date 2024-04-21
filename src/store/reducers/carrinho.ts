import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Produto {
  id: number
  nome: string
  preco: number
  imagem: string
}

interface CarrinhoState {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarItem: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    },
    removerItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload
      state.itens = state.itens.filter((item) => item.id !== itemId)
    },
    limparCarrinho: (state) => {
      state.itens = []
    }
  }
})

export const { adicionarItem, removerItem, limparCarrinho } =
  carrinhoSlice.actions

export default carrinhoSlice.reducer
