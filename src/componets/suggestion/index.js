import './style.css'

export const Suggestions = () => {

    const suggestions = [
        { id: 1, username: 'eduardo', userUrl: 'https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/427515835_2387347114798713_4836373567253719127_n.jpg?ccb=11-4&oh=01_AdSM6-Qiu0uGOzcWeAHCfh__uOIZNwPdwKSqQaGinxeehw&oe=65E74B48&_nc_sid=e6ed6c&_nc_cat=106', ftFeed: 'https://i.pinimg.com/236x/6d/50/9d/6d509d329b23502e4f4579cbad5f3d7f.jpg' },
    { id: 2, username: 'joao-p', userUrl: 'https://i.pinimg.com/236x/77/3d/e8/773de85e694e8f88ed08ff5509ae4355.jpg', ftFeed: 'https://i.pinimg.com/236x/a3/b9/52/a3b952d943dffc98eff5f07101f7fe6c.jpg' },
    { id: 2, username: 'kaique_L', userUrl: 'https://i.pinimg.com/236x/38/81/96/3881964d7e10215da6892e1ecf92c2b9.jpg', ftFeed: 'https://i.pinimg.com/236x/87/94/51/87945156541bf6d116c5b5d5e49a6acf.jpg' },
    { id: 2, username: 'isa_02', userUrl: 'https://i.pinimg.com/236x/e0/af/9d/e0af9d3c238a28c126ce93b911478eef.jpg', ftFeed: 'https://i.pinimg.com/236x/03/96/a0/0396a078a999a1b0521bd48e5ff20bc7.jpg' },
    { id: 2, username: 'breno_lucas', userUrl: 'https://i.pinimg.com/564x/50/ac/10/50ac1048a6d58630e6147b026132a373.jpg', ftFeed: 'https://i.pinimg.com/236x/5c/11/f2/5c11f29fe684c59056bb14b7b8a422ba.jpg' },
    { id: 2, username: 'kaka01', userUrl: 'https://i.pinimg.com/236x/ec/79/95/ec7995992b04c375dbc725d4e0739331.jpg', ftFeed: 'https://i.pinimg.com/236x/00/a0/2a/00a02ae2be9992b08d75d2f1f66fa4fb.jpg' },
    { id: 2, username: 'tauz', userUrl: 'https://i.pinimg.com/236x/2d/64/8f/2d648f355af291bd6ab02b2a01f1d6ab.jpg', ftFeed: 'https://i.pinimg.com/236x/23/6c/f0/236cf0a4dfc96b05633233a458a09926.jpg' }
    ]
    return (
        <>
            <div className='header-suggestion'>
                <img className='img-segui' src='https://conteudo.imguol.com.br/c/esporte/de/2023/12/30/cristiano-ronaldo-comemora-apos-vitoria-do-al-nassr-contra-o-al-taawoun-pelo-sauditao-1703981349096_v2_450x450.jpg' />

                <div className='user-infos-suggestuions'>

                    <div className='infos'>
                        <span>eduardo.mguerra</span>
                        <p>eduardo guerra</p>
                    </div>

                    <button className='switch'>Mudar</button>

                </div>


            </div>
            <div className='header-main-suggestion'>
                <p> Sugestões para você</p>
                <span>Ver tudoo</span>
            </div>

             
               

            
            <div className='user-suggestions'>
                {suggestions.map(suggestion => (
                    <div key={suggestion.id} className='infos-suggestions'>
                        <img className='img-segui' src={suggestion.userUrl} alt={suggestion.username} />
                        <div className='info-suggestion'>
                            <span>{suggestion.username}</span>
                            <p>Seguido por {suggestion.followedBy}</p>
                        </div>
                        <button className='follow'>Seguir</button>
                    </div>
                ))}
            </div>

            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2021 INSTAGRAM FROM META</p>

            </footer>
        </>
    )
}

