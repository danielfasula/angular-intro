import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { UserService } from "./services/user.service";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, FooterComponent],
  providers: [UserService],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
