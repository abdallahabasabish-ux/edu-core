import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">الصفحة غير موجودة</h2>
      <p className="mt-2 text-muted-foreground">عذراً، لا يمكننا العثور على الصفحة التي تبحث عنها.</p>
      <Link to="/" className="mt-6">
        <Button>العودة إلى الرئيسية</Button>
      </Link>
    </div>
  );
}
