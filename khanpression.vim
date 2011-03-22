let g:EasyGrepRecursive = 1
let g:EasyGrepReplaceWindowMode = 2
let g:EasyGrepSearchCurrentBufferDir=0
let g:EasyGrepCustomGrepCommandOptions=''

source $HOME/.vim/bundle/vim-easygrep/plugin/EasyGrep.vim
" Choose the Rails set of options, which are the last on the EasyGrep
" options page.  They were created as an EasyGrepFileAssociations
" association
execute "normal \\voG\<cr>q"

if !exists('g:khanpression_loaded')
    let g:khanpression_loaded = 1
    NERDTree
    /js
    normal o
    nohls
    wincmd w
endif
