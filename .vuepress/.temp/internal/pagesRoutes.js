import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{},["/index.html","/README.md"]],
  ["v-47197440","/Engineering/C%C3%A0i%20%C4%91%E1%BA%B7t%20FRP%20h%E1%BB%97%20tr%E1%BB%A3%20SSL.html",{},["/Engineering/Cài đặt FRP hỗ trợ SSL.html","/Engineering/C%C3%A0i%20%C4%91%E1%BA%B7t%20FRP%20h%E1%BB%97%20tr%E1%BB%A3%20SSL","/Engineering/Cài đặt FRP hỗ trợ SSL.md","/Engineering/C%C3%A0i%20%C4%91%E1%BA%B7t%20FRP%20h%E1%BB%97%20tr%E1%BB%A3%20SSL.md"]],
  ["v-7eedad15","/Engineering/",{},["/Engineering/index.html","/Engineering/README.md"]],
  ["v-ad8fd742","/Fleeting/Federed%20module%20su%CC%9B%CC%89%20du%CC%A3ng%20webpack.html",{},["/Fleeting/Federed module sử dụng webpack.html","/Fleeting/Federed%20module%20su%CC%9B%CC%89%20du%CC%A3ng%20webpack","/Fleeting/Federed module sử dụng webpack.md","/Fleeting/Federed%20module%20su%CC%9B%CC%89%20du%CC%A3ng%20webpack.md"]],
  ["v-0b6133fb","/Fleeting/Microfrontend%20la%CC%80%20gi%CC%80?.html",{},["/Fleeting/Microfrontend là gì?.html","/Fleeting/Microfrontend%20la%CC%80%20gi%CC%80?","/Fleeting/Microfrontend là gì?.md","/Fleeting/Microfrontend%20la%CC%80%20gi%CC%80?.md"]],
  ["v-17ffa788","/Fleeting/Microfrontend%20su%CC%9B%CC%89%20du%CC%A3ng%20Federed%20Module.html",{},["/Fleeting/Microfrontend sử dụng Federed Module.html","/Fleeting/Microfrontend%20su%CC%9B%CC%89%20du%CC%A3ng%20Federed%20Module","/Fleeting/Microfrontend sử dụng Federed Module.md","/Fleeting/Microfrontend%20su%CC%9B%CC%89%20du%CC%A3ng%20Federed%20Module.md"]],
  ["v-58b5cc36","/Fleeting/Microfrontend%20su%CC%9B%CC%89%20du%CC%A3ng%20iframe.html",{},["/Fleeting/Microfrontend sử dụng iframe.html","/Fleeting/Microfrontend%20su%CC%9B%CC%89%20du%CC%A3ng%20iframe","/Fleeting/Microfrontend sử dụng iframe.md","/Fleeting/Microfrontend%20su%CC%9B%CC%89%20du%CC%A3ng%20iframe.md"]],
  ["v-6ba8b0f2","/Fleeting/Microfrontend%20su%CC%9B%CC%89%20du%CC%A3ng%20package.html",{},["/Fleeting/Microfrontend sử dụng package.html","/Fleeting/Microfrontend%20su%CC%9B%CC%89%20du%CC%A3ng%20package","/Fleeting/Microfrontend sử dụng package.md","/Fleeting/Microfrontend%20su%CC%9B%CC%89%20du%CC%A3ng%20package.md"]],
  ["v-ae6c9aac","/Fleeting/Microfrontend%20su%CC%9B%CC%89%20du%CC%A3ng%20web%20component.html",{},["/Fleeting/Microfrontend sử dụng web component.html","/Fleeting/Microfrontend%20su%CC%9B%CC%89%20du%CC%A3ng%20web%20component","/Fleeting/Microfrontend sử dụng web component.md","/Fleeting/Microfrontend%20su%CC%9B%CC%89%20du%CC%A3ng%20web%20component.md"]],
  ["v-2427003c","/Fleeting/",{},["/Fleeting/index.html","/Fleeting/README.md"]],
  ["v-76605952","/Fleeting/S%E1%BB%AD%20d%E1%BB%A5ng%20git%20rebase%20%C4%91%E1%BB%83%20l%C3%A0m%20nh%C3%A1nh%20%C4%91%E1%BA%B9p%20h%C6%A1n%20merge.html",{},["/Fleeting/Sử dụng git rebase để làm nhánh đẹp hơn merge.html","/Fleeting/S%E1%BB%AD%20d%E1%BB%A5ng%20git%20rebase%20%C4%91%E1%BB%83%20l%C3%A0m%20nh%C3%A1nh%20%C4%91%E1%BA%B9p%20h%C6%A1n%20merge","/Fleeting/Sử dụng git rebase để làm nhánh đẹp hơn merge.md","/Fleeting/S%E1%BB%AD%20d%E1%BB%A5ng%20git%20rebase%20%C4%91%E1%BB%83%20l%C3%A0m%20nh%C3%A1nh%20%C4%91%E1%BA%B9p%20h%C6%A1n%20merge.md"]],
  ["v-b51e9a9e","/Fleeting/%C4%90a%CC%A3%CC%86t%20te%CC%82n%20ca%CC%81c%20feature%20flag.html",{},["/Fleeting/Đặt tên các feature flag.html","/Fleeting/%C4%90a%CC%A3%CC%86t%20te%CC%82n%20ca%CC%81c%20feature%20flag","/Fleeting/Đặt tên các feature flag.md","/Fleeting/%C4%90a%CC%A3%CC%86t%20te%CC%82n%20ca%CC%81c%20feature%20flag.md"]],
  ["v-9c0a7cca","/Source/Chia%20s%E1%BA%BB%20data%20gi%E1%BB%AFa%20c%C3%A1c%20microservice.html",{},["/Source/Chia sẻ data giữa các microservice.html","/Source/Chia%20s%E1%BA%BB%20data%20gi%E1%BB%AFa%20c%C3%A1c%20microservice","/Source/Chia sẻ data giữa các microservice.md","/Source/Chia%20s%E1%BA%BB%20data%20gi%E1%BB%AFa%20c%C3%A1c%20microservice.md"]],
  ["v-b639c092","/Source/C%C3%A0i%20certbot.html",{},["/Source/Cài certbot.html","/Source/C%C3%A0i%20certbot","/Source/Cài certbot.md","/Source/C%C3%A0i%20certbot.md"]],
  ["v-5d1c6e20","/Source/C%C3%A0i%20ssl%20cho%20nginx.html",{},["/Source/Cài ssl cho nginx.html","/Source/C%C3%A0i%20ssl%20cho%20nginx","/Source/Cài ssl cho nginx.md","/Source/C%C3%A0i%20ssl%20cho%20nginx.md"]],
  ["v-b440677a","/Source/C%C3%A0i%20%C4%91%E1%BA%B7t%20FRP.html",{},["/Source/Cài đặt FRP.html","/Source/C%C3%A0i%20%C4%91%E1%BA%B7t%20FRP","/Source/Cài đặt FRP.md","/Source/C%C3%A0i%20%C4%91%E1%BA%B7t%20FRP.md"]],
  ["v-be2ab862","/Source/C%C3%A0i%20%C4%91%E1%BA%B7t%20go%20mod%20v%E1%BB%9Bi%20custom%20domain.html",{},["/Source/Cài đặt go mod với custom domain.html","/Source/C%C3%A0i%20%C4%91%E1%BA%B7t%20go%20mod%20v%E1%BB%9Bi%20custom%20domain","/Source/Cài đặt go mod với custom domain.md","/Source/C%C3%A0i%20%C4%91%E1%BA%B7t%20go%20mod%20v%E1%BB%9Bi%20custom%20domain.md"]],
  ["v-7831c3ed","/Source/C%C3%A0i%20%C4%91%E1%BA%B7t%20nginx.html",{},["/Source/Cài đặt nginx.html","/Source/C%C3%A0i%20%C4%91%E1%BA%B7t%20nginx","/Source/Cài đặt nginx.md","/Source/C%C3%A0i%20%C4%91%E1%BA%B7t%20nginx.md"]],
  ["v-d88a862c","/Source/Go%20mod%20import%20private%20repo.html",{},["/Source/Go mod import private repo.html","/Source/Go%20mod%20import%20private%20repo","/Source/Go mod import private repo.md","/Source/Go%20mod%20import%20private%20repo.md"]],
  ["v-e68a382a","/Source/Group%20by%20date%20with%20timezone.html",{},["/Source/Group by date with timezone.html","/Source/Group%20by%20date%20with%20timezone","/Source/Group by date with timezone.md","/Source/Group%20by%20date%20with%20timezone.md"]],
  ["v-891723f8","/Source/Install%20fishshell.html",{},["/Source/Install fishshell.html","/Source/Install%20fishshell","/Source/Install fishshell.md","/Source/Install%20fishshell.md"]],
  ["v-54baa63b","/Source/",{},["/Source/index.html","/Source/README.md"]],
  ["v-ca0ff6cc","/Source/Share%20database%20gi%E1%BB%AFa%20c%C3%A1c%20service.html",{},["/Source/Share database giữa các service.html","/Source/Share%20database%20gi%E1%BB%AFa%20c%C3%A1c%20service","/Source/Share database giữa các service.md","/Source/Share%20database%20gi%E1%BB%AFa%20c%C3%A1c%20service.md"]],
  ["v-7e0f7344","/Source/S%E1%BB%AD%20d%E1%BB%A5ng%20SSH%20%C4%91%E1%BB%83%20public%20local%20l%C3%AAn%20internet.html",{},["/Source/Sử dụng SSH để public local lên internet.html","/Source/S%E1%BB%AD%20d%E1%BB%A5ng%20SSH%20%C4%91%E1%BB%83%20public%20local%20l%C3%AAn%20internet","/Source/Sử dụng SSH để public local lên internet.md","/Source/S%E1%BB%AD%20d%E1%BB%A5ng%20SSH%20%C4%91%E1%BB%83%20public%20local%20l%C3%AAn%20internet.md"]],
  ["v-af5263fa","/Source/T%E1%BA%A1o%20field%20d%E1%BB%B1a%20tr%C3%AAn%20field%20kh%C3%A1c.html",{},["/Source/Tạo field dựa trên field khác.html","/Source/T%E1%BA%A1o%20field%20d%E1%BB%B1a%20tr%C3%AAn%20field%20kh%C3%A1c","/Source/Tạo field dựa trên field khác.md","/Source/T%E1%BA%A1o%20field%20d%E1%BB%B1a%20tr%C3%AAn%20field%20kh%C3%A1c.md"]],
  ["v-2de06ed8","/Source/T%E1%BA%A1o%20service%20tr%C3%AAn%20MacOS.html",{},["/Source/Tạo service trên MacOS.html","/Source/T%E1%BA%A1o%20service%20tr%C3%AAn%20MacOS","/Source/Tạo service trên MacOS.md","/Source/T%E1%BA%A1o%20service%20tr%C3%AAn%20MacOS.md"]],
  ["v-9fd608da","/Source/T%E1%BA%A1o%20service%20tr%C3%AAn%20linux.html",{},["/Source/Tạo service trên linux.html","/Source/T%E1%BA%A1o%20service%20tr%C3%AAn%20linux","/Source/Tạo service trên linux.md","/Source/T%E1%BA%A1o%20service%20tr%C3%AAn%20linux.md"]],
  ["v-46e77fab","/Source/T%E1%BB%91i%20%C6%B0u%20LCP%20m%E1%BB%99t%20c%C3%A1ch%20hi%E1%BB%87u%20qu%E1%BA%A3.html",{},["/Source/Tối ưu LCP một cách hiệu quả.html","/Source/T%E1%BB%91i%20%C6%B0u%20LCP%20m%E1%BB%99t%20c%C3%A1ch%20hi%E1%BB%87u%20qu%E1%BA%A3","/Source/Tối ưu LCP một cách hiệu quả.md","/Source/T%E1%BB%91i%20%C6%B0u%20LCP%20m%E1%BB%99t%20c%C3%A1ch%20hi%E1%BB%87u%20qu%E1%BA%A3.md"]],
  ["v-b1a0af10","/Source/X%C3%B3a%20nhi%E1%BB%81u%20branch%20trong%20git.html",{},["/Source/Xóa nhiều branch trong git.html","/Source/X%C3%B3a%20nhi%E1%BB%81u%20branch%20trong%20git","/Source/Xóa nhiều branch trong git.md","/Source/X%C3%B3a%20nhi%E1%BB%81u%20branch%20trong%20git.md"]],
  ["v-371f928c","/Source/Projects/Book%20Parser.html",{},["/Source/Projects/Book Parser.html","/Source/Projects/Book%20Parser","/Source/Projects/Book Parser.md","/Source/Projects/Book%20Parser.md"]],
  ["v-44401b7e","/Source/Projects/Bus%20Tracker.html",{},["/Source/Projects/Bus Tracker.html","/Source/Projects/Bus%20Tracker","/Source/Projects/Bus Tracker.md","/Source/Projects/Bus%20Tracker.md"]],
  ["v-10984cc2","/Source/Projects/ESP%20Home.html",{},["/Source/Projects/ESP Home.html","/Source/Projects/ESP%20Home","/Source/Projects/ESP Home.md","/Source/Projects/ESP%20Home.md"]],
  ["v-3c6db230","/Source/Projects/Ebook%20Template.html",{},["/Source/Projects/Ebook Template.html","/Source/Projects/Ebook%20Template","/Source/Projects/Ebook Template.md","/Source/Projects/Ebook%20Template.md"]],
  ["v-6a89657f","/Source/Projects/EbookPacker.html",{},["/Source/Projects/EbookPacker","/Source/Projects/EbookPacker.md"]],
  ["v-1a9053d3","/Source/Projects/Fastify.html",{},["/Source/Projects/Fastify","/Source/Projects/Fastify.md"]],
  ["v-f8570170","/Source/Projects/Fireass.html",{},["/Source/Projects/Fireass","/Source/Projects/Fireass.md"]],
  ["v-40610cc1","/Source/Projects/Just%20another%20tab.html",{},["/Source/Projects/Just another tab.html","/Source/Projects/Just%20another%20tab","/Source/Projects/Just another tab.md","/Source/Projects/Just%20another%20tab.md"]],
  ["v-83d75240","/Source/Projects/M%C3%B9a%20T%C3%B3c%20R%E1%BB%91i.html",{},["/Source/Projects/Mùa Tóc Rối.html","/Source/Projects/M%C3%B9a%20T%C3%B3c%20R%E1%BB%91i","/Source/Projects/Mùa Tóc Rối.md","/Source/Projects/M%C3%B9a%20T%C3%B3c%20R%E1%BB%91i.md"]],
  ["v-789938da","/Source/Projects/Notification%20Matrix.html",{},["/Source/Projects/Notification Matrix.html","/Source/Projects/Notification%20Matrix","/Source/Projects/Notification Matrix.md","/Source/Projects/Notification%20Matrix.md"]],
  ["v-7da826a0","/Source/Projects/RC%20Speedometer.html",{},["/Source/Projects/RC Speedometer.html","/Source/Projects/RC%20Speedometer","/Source/Projects/RC Speedometer.md","/Source/Projects/RC%20Speedometer.md"]],
  ["v-570cfd60","/Source/Projects/Stylus%20Extra.html",{},["/Source/Projects/Stylus Extra.html","/Source/Projects/Stylus%20Extra","/Source/Projects/Stylus Extra.md","/Source/Projects/Stylus%20Extra.md"]],
  ["v-62d25f38","/Source/Projects/TCH%20Music.html",{},["/Source/Projects/TCH Music.html","/Source/Projects/TCH%20Music","/Source/Projects/TCH Music.md","/Source/Projects/TCH%20Music.md"]],
  ["v-f6f0fa28","/Source/Projects/T%E1%BB%B1%20l%C3%A0m%20b%C3%A0n%20ph%C3%ADm%20c%C6%A1.html",{},["/Source/Projects/Tự làm bàn phím cơ.html","/Source/Projects/T%E1%BB%B1%20l%C3%A0m%20b%C3%A0n%20ph%C3%ADm%20c%C6%A1","/Source/Projects/Tự làm bàn phím cơ.md","/Source/Projects/T%E1%BB%B1%20l%C3%A0m%20b%C3%A0n%20ph%C3%ADm%20c%C6%A1.md"]],
  ["v-536f5b61","/Source/Projects/Watch%20Party.html",{},["/Source/Projects/Watch Party.html","/Source/Projects/Watch%20Party","/Source/Projects/Watch Party.md","/Source/Projects/Watch%20Party.md"]],
  ["v-4bdff73c","/Source/Projects/lostream.html",{},["/Source/Projects/lostream","/Source/Projects/lostream.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
