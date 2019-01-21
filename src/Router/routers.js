// const home = r => require.ensure([], () => r(require('../App')), 'home');
import home from '../App';
export default [
    {
        path:'/',
        component:home,
        children:[{
            path:'',
            redirect:'/home'
        },{
            path:'/home',
            compoent:home
        },
            {
                path:'/vuex',
                compoent:home
            }
        ]
    }
]