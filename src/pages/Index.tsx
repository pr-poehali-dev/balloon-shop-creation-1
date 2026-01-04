import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const balloonColors = [
  { name: 'Розовый', value: '#FF6B9D', hex: 'bg-[#FF6B9D]' },
  { name: 'Фиолетовый', value: '#C084FC', hex: 'bg-[#C084FC]' },
  { name: 'Голубой', value: '#60A5FA', hex: 'bg-[#60A5FA]' },
  { name: 'Желтый', value: '#FBBF24', hex: 'bg-[#FBBF24]' },
  { name: 'Белый', value: '#FFFFFF', hex: 'bg-white border-2' },
  { name: 'Золотой', value: '#F59E0B', hex: 'bg-[#F59E0B]' },
];

const balloonSizes = [
  { name: 'Маленький', value: 'small', price: 50 },
  { name: 'Средний', value: 'medium', price: 100 },
  { name: 'Большой', value: 'large', price: 150 },
];

const products = [
  {
    id: 1,
    name: 'Букет "Радость"',
    price: 2500,
    image: 'https://cdn.poehali.dev/projects/355e7c91-a87b-4523-8b80-41b4f9ba110e/files/93469b2d-8043-4860-ae66-9f37ebf6f101.jpg',
    category: 'Букеты',
    description: 'Яркий букет из 15 гелиевых шаров',
  },
  {
    id: 2,
    name: 'Фотозона "Нежность"',
    price: 8500,
    image: 'https://cdn.poehali.dev/projects/355e7c91-a87b-4523-8b80-41b4f9ba110e/files/99b0770b-4d84-4d12-8165-8dc289ae1f45.jpg',
    category: 'Фотозоны',
    description: 'Элегантная арка из розовых и золотых шаров',
  },
  {
    id: 3,
    name: 'Композиция "Праздник"',
    price: 4500,
    image: 'https://cdn.poehali.dev/projects/355e7c91-a87b-4523-8b80-41b4f9ba110e/files/b25615ed-d3d6-4487-bfb7-f4eb2daa6db7.jpg',
    category: 'Композиции',
    description: 'Праздничная композиция с цифрами и конфетти',
  },
];

const reviews = [
  { name: 'Анна М.', text: 'Потрясающе! Шары были свежими и яркими весь вечер', rating: 5 },
  { name: 'Дмитрий К.', text: 'Фотозона превзошла все ожидания, гости в восторге!', rating: 5 },
  { name: 'Елена П.', text: 'Быстрая доставка, отличное качество. Рекомендую!', rating: 5 },
];

export default function Index() {
  const [selectedColors, setSelectedColors] = useState<string[]>([balloonColors[0].value]);
  const [selectedSize, setSelectedSize] = useState(balloonSizes[1].value);
  const [balloonCount, setBalloonCount] = useState([10]);
  const [isConstructorOpen, setIsConstructorOpen] = useState(false);

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const calculatePrice = () => {
    const sizePrice = balloonSizes.find((s) => s.value === selectedSize)?.price || 100;
    return sizePrice * balloonCount[0];
  };

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-confetti opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              backgroundColor: balloonColors[Math.floor(Math.random() * balloonColors.length)].value,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-pink-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              🎈 ПодаркиДо
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
              <Icon name="Phone" className="mr-2" size={18} />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Воздушные шары для вашего{' '}
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  праздника
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Создаём незабываемую атмосферу с гелиевыми шарами, композициями и фотозонами
              </p>
              <div className="flex gap-4">
                <Dialog open={isConstructorOpen} onOpenChange={setIsConstructorOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                      <Icon name="Wand2" className="mr-2" size={20} />
                      Создать композицию
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Конструктор композиций</DialogTitle>
                      <DialogDescription>
                        Создайте уникальный букет из воздушных шаров
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 py-4">
                      <div>
                        <h3 className="font-semibold mb-3">Выберите цвета:</h3>
                        <div className="grid grid-cols-3 gap-3">
                          {balloonColors.map((color) => (
                            <button
                              key={color.value}
                              onClick={() => toggleColor(color.value)}
                              className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                                selectedColors.includes(color.value)
                                  ? 'border-primary shadow-lg'
                                  : 'border-gray-200'
                              }`}
                            >
                              <div className={`w-12 h-12 rounded-full mx-auto mb-2 ${color.hex}`} />
                              <p className="text-sm font-medium">{color.name}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Размер шаров:</h3>
                        <div className="grid grid-cols-3 gap-3">
                          {balloonSizes.map((size) => (
                            <button
                              key={size.value}
                              onClick={() => setSelectedSize(size.value)}
                              className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                                selectedSize === size.value
                                  ? 'border-primary shadow-lg bg-pink-50'
                                  : 'border-gray-200'
                              }`}
                            >
                              <p className="font-medium">{size.name}</p>
                              <p className="text-sm text-muted-foreground">{size.price} ₽/шт</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-3">
                          <h3 className="font-semibold">Количество шаров:</h3>
                          <span className="font-bold text-primary">{balloonCount[0]} шт</span>
                        </div>
                        <Slider
                          value={balloonCount}
                          onValueChange={setBalloonCount}
                          min={5}
                          max={50}
                          step={1}
                          className="mb-2"
                        />
                        <p className="text-sm text-muted-foreground">От 5 до 50 шаров</p>
                      </div>

                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold text-lg">Предпросмотр:</h3>
                          <div className="flex gap-2">
                            {selectedColors.map((color) => (
                              <div
                                key={color}
                                className="w-8 h-8 rounded-full animate-float"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-muted-foreground">Итоговая стоимость:</p>
                            <p className="text-3xl font-bold text-primary">{calculatePrice()} ₽</p>
                          </div>
                          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500">
                            <Icon name="ShoppingCart" className="mr-2" size={20} />
                            Добавить в корзину
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" className="border-2">
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Наши работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="text-6xl animate-bounce-slow"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    🎈
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Каталог товаров 🎉
          </h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="Букеты">Букеты</TabsTrigger>
              <TabsTrigger value="Фотозоны">Фотозоны</TabsTrigger>
              <TabsTrigger value="Композиции">Композиции</TabsTrigger>
            </TabsList>
            {['all', 'Букеты', 'Фотозоны', 'Композиции'].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-3 gap-8">
                  {products
                    .filter((p) => category === 'all' || p.category === category)
                    .map((product) => (
                      <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover"
                        />
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">{product.name}</CardTitle>
                            <Badge className="bg-gradient-to-r from-pink-500 to-purple-500">
                              {product.category}
                            </Badge>
                          </div>
                          <CardDescription>{product.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold text-primary">{product.price} ₽</p>
                            <Button className="bg-gradient-to-r from-pink-500 to-purple-500">
                              <Icon name="ShoppingCart" size={18} />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="portfolio" className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Наши работы ✨
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <div
                key={item.id}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Отзывы клиентов 💖
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Icon name="Truck" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Быстрая доставка</h3>
              <p className="text-white/90">По Москве за 2 часа</p>
            </div>
            <div className="space-y-2">
              <Icon name="Shield" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Гарантия качества</h3>
              <p className="text-white/90">Свежие шары на весь праздник</p>
            </div>
            <div className="space-y-2">
              <Icon name="Heart" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Индивидуальный подход</h3>
              <p className="text-white/90">Учтём все пожелания</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacts" className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                🎈 ПодаркиДо
              </h3>
              <p className="text-gray-400">Студия воздушных шаров</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#catalog" className="hover:text-primary transition-colors">Каталог</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@podarkido.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Праздничная, 1
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 ПодаркиДо. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
