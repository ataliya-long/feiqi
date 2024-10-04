import './App.css';
import Slideshow from './Slideshow/Slideshow';
import { Button } from '@douyinfe/semi-ui';
import ListMenu from './List/ListMenu';
import Login from './Login/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [city, setCity] = useState('正在加载...');
  const [province,setProvince] = useState('正在加载...');
  const [area,setArea] =  useState('正在加载...')
  const [tem, setTem] = useState('正在加载...'); //setWeather
  const [wea,setWea] = useState('正在加载...')

  // 管理登录弹窗的状态
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // 点击登录按钮，显示登录弹窗
  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  // 关闭登录弹窗
  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  //tem,wea代码废弃，免费权益已过期

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get('https://ip.useragentinfo.com/json');    //获取地址
        const { city,province,area } = response.data;
        const cityWithoutSuffix = city.replace('市', '');  //提供天气接口使用
        setCity(city);
        setProvince(province)
        setArea(area)
        //console.log(cityWithoutSuffix)

        const weatherInfo = await getWeather(cityWithoutSuffix);
        const weaInfo = await getWea(cityWithoutSuffix);
        setTem(weatherInfo);
        setWea(weaInfo)
      } catch (error) {
        console.error('Error fetching location:', error);
        setCity('无法获取城市信息');
        setTem('无法获取天气信息');
        setArea('无法获取地区位置')
        setProvince('无法获取省份')
      }
    };

    fetchLocation();
  }, []);

  const getWeather = async (cityWithoutSuffix) => {
    try {
      const response = await axios.get(`http://v1.yiketianqi.com/free/day?appid=86968249&appsecret=7RLOfWHm&unescape=1&city=${cityWithoutSuffix}`);  //获取天气温度
      const { tem } = response.data;
      //console.log(tem)
      return tem
      
    } catch (error) {
      console.error('Error fetching weather:', error);
      return '无法获取天气信息';
    }
  }

  const getWea = async (cityWithoutSuffix) => {
    try {
      const response = await axios.get(`http://v1.yiketianqi.com/free/day?appid=86968249&appsecret=7RLOfWHm&unescape=1&city=${cityWithoutSuffix}`);  //获取天气状态
      const { wea } = response.data;
      //console.log(tem)
      return wea

    } catch (error) {
      console.error('Error fetching weather:', error);
      return '无法获取天气信息';
    }
  }

  return (
    <>
      <nav className="main-nav">
        <div className="nav-left">
          <div className="logo">异酷动漫LOGO</div>
          <nav className="sub-nav">
            <ul>
              <li><a href="#">资讯</a></li>
              <li><a href="#">动漫</a></li>
              <li><a href="#">游戏</a></li>
              <li><a href="#">漫画</a></li>
              <li><a href="#">小说</a></li>
              <li><a href="#">热梗</a></li>
              <li><a href="#">宅舞</a></li>
              <li><a href="#">音乐</a></li>
              <li><a href="#">科技</a></li>
              <li><a href="#">谷子</a></li>
              <li><a href="#">漫展</a></li>
            </ul>
          </nav>
        </div>
        <div className="search-box">
          <input type="text" placeholder="搜一搜，你想要的我都有哦~" className="search-input" />
          <Button type="secondary" color='red' >搜索</Button>
        </div>
        <div className="weather">
          <p id="city">{province}-{city}-{area}</p>
          {/*<p id="weather">当前温度为:{tem}°C-{wea}</p> 已废弃，免费权益过期*/}
        </div>
        <div className="user-actions">
          <button className="login-btn" onClick={handleLoginClick}>登录</button>
          <button className="login-btn">注册</button>
        </div>
      </nav>

      <section className="content">
        {/* 图片轮播组件 */}
        <Slideshow></Slideshow>
        {/* 动漫资讯，及个个模块的布局组件 */}

     
        <div className="text-container">
          <p>资讯</p>
          <Button theme='borderless' type='primary' className='more'>更多</Button>
        </div>
        <div className="listmenu-container">
        <ListMenu></ListMenu>
        </div>

          {/* 动漫，及个个模块的布局组件 */}
        <br></br>
        <div className='text-container'>
          <p>动漫</p>
          <Button theme='borderless' type='primary' className='more'>更多</Button>
        </div>
        <div className="listmenu-container">
        <ListMenu></ListMenu>
        </div>

         {/* 游戏，及个个模块的布局组件 */}
        <br></br>
        <div className='text-container'>
          <p>游戏</p>
          <Button theme='borderless' type='primary' className='more'>更多</Button>
        </div>
        <div className="listmenu-container">
        <ListMenu></ListMenu>
        </div>



        {/* 漫画，及个个模块的布局组件 */}
        <br></br>
        <div className='text-container'>
          <p>漫画</p>
          <Button theme='borderless' type='primary' className='more'>更多</Button>
        </div>
        <div className="listmenu-container">
        <ListMenu></ListMenu>
        </div>


        {/* 小说，及个个模块的布局组件 */}
        <br></br>
        <div className='text-container'>
          <p>小说</p>
          <Button theme='borderless' type='primary' className='more'>更多</Button>
        </div>
        <div className="listmenu-container">
        <ListMenu></ListMenu>
        </div>



         {/* 热梗，及个个模块的布局组件 */}
        <br></br>
        <div className='text-container'>
          <p>热梗</p>
          <Button theme='borderless' type='primary' className='more'>更多</Button>
        </div>
        <div className="listmenu-container">
        <ListMenu></ListMenu>
        </div>


         {/* 宅舞，及个个模块的布局组件 */}
        <br></br>
        <div className='text-container'>
          <p>宅舞</p>
          <Button theme='borderless' type='primary' className='more'>更多</Button>
        </div>
        <div className="listmenu-container">
        <ListMenu></ListMenu>
        </div>


        {/* 音乐，及个个模块的布局组件 */}
        <br></br>
        <div className='text-container'>
          <p>音乐</p>
          <Button theme='borderless' type='primary' className='more'>更多</Button>
        </div>
        <div className="listmenu-container">
        <ListMenu></ListMenu>
        </div>



         {/* 科技，及个个模块的布局组件 */}
        <br></br>
        <div className='text-container'>
          <p>科技</p>
          <Button theme='borderless' type='primary' className='more'>更多</Button>
        </div>
        <div className="listmenu-container">
        <ListMenu></ListMenu>
        </div>


         {/* 谷子，及个个模块的布局组件 */}
        <br></br>
        <div className='text-container'>
          <p>谷子</p>
          <Button theme='borderless' type='primary' className='more'>更多</Button>
        </div>
        <div className="listmenu-container">
        <ListMenu></ListMenu>
        </div>


        {/* 漫展，及个个模块的布局组件 */}
        <br></br>
        <div className='text-container'>
          <p>漫展</p>
          <Button theme='borderless' type='primary' className='more'>更多</Button>
        </div>
        <div className="listmenu-container">
        <ListMenu></ListMenu>
        </div>

      </section>

       {/* 备案信息 */}
      <footer className="footer">
        <p>版权所有 © 2024</p>
        <p>备案号：陕ICP备12345678号</p>
        <p>版本型号：V0.0.1</p>
      </footer>

     {/* 如果isLoginModalOpen为true，则显示Login弹窗 */}
     {isLoginModalOpen && (
        <div className="modal-overlay">
          <Login onClose={handleCloseLoginModal} />
        </div>
      )}
    </>
  );
}

export default App;
