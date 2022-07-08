
import ApiGet from '../src/componets/provider/index';

import * as S from './AppStylled';
function App() {
 
  return (
 
    <S.SectionEl>
    <h1>Kanye West Quotes </h1>
     <span>-Kanye say...</span>
     <ApiGet/>
    <S.ImgEl src='https://conteudo.imguol.com.br/c/entretenimento/b3/2021/07/28/ja-ouviu-a-palavra-de-kanye-west-hoje-1627502636532_v2_900x506.png'></S.ImgEl>
    </S.SectionEl>
   
    
  );
}

export default App;
