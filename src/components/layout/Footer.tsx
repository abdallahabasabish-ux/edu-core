import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/40 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-primary">
              EduCore
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              منصة متكاملة لإنشاء وإدارة المنصات التعليمية بسهولة.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">المنصة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/features" className="hover:text-foreground transition-colors">المميزات</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground transition-colors">الأسعار</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">عن المنصة</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">الدعم</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/faq" className="hover:text-foreground transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">القانونية</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">الشروط والأحكام</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} EduCore. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
