import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Icon name="Sparkles" size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold">AI Builder</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
            <a href="#examples" className="text-sm font-medium hover:text-primary transition-colors">Примеры</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
            <a href="#docs" className="text-sm font-medium hover:text-primary transition-colors">Документация</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm">Начать</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6" variant="secondary">
              <Icon name="Zap" size={14} className="mr-1" />
              Генерация за секунды
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Создавайте сайты с помощью
              <span className="text-gradient block mt-2">искусственного интеллекта</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Опишите идею — получите готовый сайт. Редактируйте визуально. Публикуйте мгновенно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8">
                <Icon name="Rocket" size={18} className="mr-2" />
                Создать сайт бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                <Icon name="Play" size={18} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>

          {/* Demo Card */}
          <div className="mt-16 animate-fade-in">
            <Card className="max-w-3xl mx-auto shadow-2xl border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">ai-builder.dev</span>
                </div>
                <Textarea 
                  placeholder="Создай лендинг для кофейни с меню, галереей и контактами..."
                  className="min-h-[100px] text-base resize-none"
                />
                <Button className="w-full mt-4">
                  <Icon name="Wand2" size={18} className="mr-2" />
                  Сгенерировать сайт
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Возможности</Badge>
            <h2 className="text-4xl font-bold mb-4">Все инструменты в одном месте</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              От идеи до публикации — полный цикл разработки сайта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                </div>
                <CardTitle>Генерация с ИИ</CardTitle>
                <CardDescription>
                  Опишите идею простыми словами — ИИ создаст полноценный сайт за минуты
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Paintbrush" size={24} className="text-secondary" />
                </div>
                <CardTitle>Визуальный редактор</CardTitle>
                <CardDescription>
                  Изменяйте любой элемент сайта без кода — просто кликайте и редактируйте
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-accent" />
                </div>
                <CardTitle>Быстрая публикация</CardTitle>
                <CardDescription>
                  Опубликуйте сайт одним кликом — домен и хостинг уже включены
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Smartphone" size={24} className="text-primary" />
                </div>
                <CardTitle>Адаптивный дизайн</CardTitle>
                <CardDescription>
                  Все сайты автоматически адаптируются под любые устройства
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Code" size={24} className="text-secondary" />
                </div>
                <CardTitle>Чистый код</CardTitle>
                <CardDescription>
                  React, TypeScript, современные стандарты — экспортируйте и доработайте
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-accent" />
                </div>
                <CardTitle>SEO готовность</CardTitle>
                <CardDescription>
                  Оптимизация для поисковиков, метатеги и производительность из коробки
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Примеры</Badge>
            <h2 className="text-4xl font-bold mb-4">Сайты, созданные за минуты</h2>
            <p className="text-lg text-muted-foreground">
              Реальные проекты, сгенерированные нашим ИИ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Ресторан", desc: "Меню, бронирование, галерея", icon: "Coffee" },
              { title: "Портфолио", desc: "Проекты, контакты, блог", icon: "Briefcase" },
              { title: "Магазин", desc: "Каталог, корзина, оплата", icon: "ShoppingBag" },
            ].map((example, i) => (
              <Card key={i} className="group cursor-pointer hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon name={example.icon as any} size={48} className="text-primary" />
                  </div>
                  <CardTitle>{example.title}</CardTitle>
                  <CardDescription>{example.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Тарифы</Badge>
            <h2 className="text-4xl font-bold mb-4">Выберите свой план</h2>
            <p className="text-lg text-muted-foreground">
              Гибкие тарифы для любых задач
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Старт</CardTitle>
                <CardDescription>Для первого проекта</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₽0</span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span className="text-sm">1 сайт</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span className="text-sm">Базовые шаблоны</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span className="text-sm">Поддержка 24/7</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Начать бесплатно</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-primary border-2 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Популярный</Badge>
              <CardHeader>
                <CardTitle>Про</CardTitle>
                <CardDescription>Для профессионалов</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₽990</span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span className="text-sm">10 сайтов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span className="text-sm">Все шаблоны</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span className="text-sm">Свой домен</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span className="text-sm">Приоритетная поддержка</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Бизнес</CardTitle>
                <CardDescription>Для команд</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₽2990</span>
                  <span className="text-muted-foreground">/месяц</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span className="text-sm">Безлимит сайтов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span className="text-sm">Командная работа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span className="text-sm">API доступ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-secondary" />
                    <span className="text-sm">Персональный менеджер</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Связаться с нами</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">Документация</Badge>
            <h2 className="text-4xl font-bold mb-4">Быстрый старт</h2>
            <p className="text-lg text-muted-foreground">
              От идеи до готового сайта за три простых шага
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="relative border-2 hover:shadow-xl transition-all group animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <CardHeader className="pt-8 transition-all duration-500 group-hover:translate-y-[-4px]">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                  <Icon name="MessageSquare" size={28} className="text-primary transition-all duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="transition-colors group-hover:text-primary">Опишите идею</CardTitle>
                <CardDescription className="text-base">
                  Напишите, какой сайт вам нужен — ИИ поймёт вас с полуслова и создаст структуру
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative border-2 hover:shadow-xl transition-all group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <CardHeader className="pt-8 transition-all duration-500 group-hover:translate-y-[-4px]">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-secondary/20">
                  <Icon name="MousePointerClick" size={28} className="text-secondary transition-all duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="transition-colors group-hover:text-secondary">Настройте детали</CardTitle>
                <CardDescription className="text-base">
                  Кликайте на элементы и изменяйте их — цвета, тексты, изображения без единой строки кода
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative border-2 hover:shadow-xl transition-all group animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <CardHeader className="pt-8 transition-all duration-500 group-hover:translate-y-[-4px]">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/20">
                  <Icon name="Globe" size={28} className="text-accent transition-all duration-500 group-hover:scale-110" />
                </div>
                <CardTitle className="transition-colors group-hover:text-accent">Выведите в свет</CardTitle>
                <CardDescription className="text-base">
                  Один клик — и ваш сайт уже в интернете с SSL-сертификатом и быстрым хостингом
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8">
              <Icon name="Rocket" size={18} className="mr-2" />
              Создать первый сайт
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              <Icon name="BookOpen" size={18} className="mr-2" />
              Полная документация
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами — ответим в течение дня
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." className="min-h-[120px]" />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="Sparkles" size={18} className="text-white" />
              </div>
              <span className="font-bold">AI Builder</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">О нас</a>
              <a href="#" className="hover:text-foreground transition-colors">Блог</a>
              <a href="#" className="hover:text-foreground transition-colors">Политика</a>
              <a href="#" className="hover:text-foreground transition-colors">Условия</a>
            </div>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost">
                <Icon name="Github" size={20} />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2024 AI Builder. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}