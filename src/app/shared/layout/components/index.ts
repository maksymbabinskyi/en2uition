import { LayoutComponent } from '../layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CtaComponent } from './cta/cta.component';
import { AnnouncementItemComponent } from './announcement-item/announcement-item.component';
import { PageDescriptionComponent } from './page-description/page-description.component';
import { CardComponent } from './card/card.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './article/articles.component';
import { AlertComponent } from './alert/alert.component';

export const components: any[] = [NavigationComponent, FooterComponent];
export const exportedComponents: any[] = [LayoutComponent, HeaderComponent, CtaComponent, AnnouncementItemComponent, PageDescriptionComponent, CardComponent, ArticleComponent, ArticlesComponent, AlertComponent];

export * from '../layout.component';
export * from './navigation/navigation.component';
export * from './footer/footer.component';
export * from './header/header.component';
export * from './cta/cta.component';
export * from './announcement-item/announcement-item.component';
export * from './page-description/page-description.component';
export * from './card/card.component';
export * from './article/article.component';
export * from './article/articles.component';
export * from './alert/alert.component';
