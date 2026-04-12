import {
  Zap, Smartphone, Users, Target, ArrowRightLeft, Shield, Star,
  Download, Wallet, TrendingUp, Coins, Clock, Lock, Eye, Server,
  KeyRound, FileCheck, Blocks, ShoppingBag, Search, Globe, Verified,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap, Smartphone, Users, Target, ArrowRightLeft, Shield, Star,
  Download, Wallet, TrendingUp, Coins, Clock, Lock, Eye, Server,
  KeyRound, FileCheck, Blocks, ShoppingBag, Search, Globe, Verified,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Star;
}
