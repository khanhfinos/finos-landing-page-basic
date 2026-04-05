"use client";

import { useState } from "react";
import {
  Inbox,
  GitBranch,
  LayoutTemplate,
  Users,
  Settings,
  ShieldCheck,
  ChevronDown,
  ChevronLeft,
  Search,
  Building2,
  Zap,
  PenLine,
  Clock,
  CheckCircle2,
  ThumbsUp,
  XCircle,
  Files,
  CalendarDays,
  MoreVertical,
  Plus,
  ArrowRight,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────────────────

type DocStatus = "da-xem" | "da-nhan" | "da-ky" | "tu-choi";

interface Doc {
  id: string;
  title: string;
  subtitle?: string;
  sender: string;
  email: string;
  status: DocStatus;
  receivedAt: string;
  deadline: string;
  canQuickSign: boolean;
}

// ─── Workflow types & data ───────────────────────────────────────────────────

type WfStatus = "cho-toi-ky" | "cho-nguoi-khac" | "hoan-thanh" | "nhap" | "het-han";

interface Workflow {
  id: string;
  title: string;
  subtitle?: string;
  status: WfStatus;
  progress: number;   // signed count
  total: number;      // total signers
  createdAt: string;
}

const WORKFLOWS: Workflow[] = [
  { id: "w1",  title: "1e414",            status: "cho-toi-ky",     progress: 0, total: 1, createdAt: "1 ngày trước" },
  { id: "w2",  title: "12421",           subtitle: "RFC 3161 Timestamp: Giao thức chuẩn quốc ...", status: "cho-toi-ky", progress: 0, total: 1, createdAt: "2 ngày trước" },
  { id: "w3",  title: "13212",           status: "cho-nguoi-khac", progress: 0, total: 1, createdAt: "3 ngày trước" },
  { id: "w4",  title: "1213",            status: "cho-toi-ky",     progress: 0, total: 1, createdAt: "3 ngày trước" },
  { id: "w5",  title: "1313312",         status: "cho-toi-ky",     progress: 0, total: 1, createdAt: "4 ngày trước" },
  { id: "w6",  title: "123131",          status: "cho-toi-ky",     progress: 0, total: 1, createdAt: "26/3/2026" },
  { id: "w7",  title: "check quan sát",  status: "cho-nguoi-khac", progress: 1, total: 3, createdAt: "25/3/2026" },
  { id: "w8",  title: "1213213421",      status: "cho-nguoi-khac", progress: 1, total: 2, createdAt: "24/3/2026" },
  { id: "w9",  title: "14124314",        status: "cho-toi-ky",     progress: 0, total: 1, createdAt: "23/3/2026" },
  { id: "w10", title: "FinOS HDLD 003",  subtitle: "Lorem Ipsum is simply dummy text of the pri...", status: "cho-toi-ky", progress: 0, total: 1, createdAt: "23/3/2026" },
  { id: "w11", title: "FinOS HDLD 002",  subtitle: "Lorem Ipsum is simply dummy text of the pri...", status: "hoan-thanh", progress: 1, total: 1, createdAt: "22/3/2026" },
  { id: "w12", title: "FinOS Quy trình 003", subtitle: "Quy trình ký hợp đồng lao động của Admin F...", status: "nhap", progress: 0, total: 1, createdAt: "19/3/2026" },
];

const WF_STATS = [
  { label: "Đang xử lý", value: 26, icon: Clock,        color: "text-[#00bcd4]",  bg: "bg-cyan-50",    border: "border-cyan-200" },
  { label: "Nháp",       value: 3,  icon: FileText,     color: "text-gray-400",  bg: "bg-gray-50",    border: "border-gray-200" },
  { label: "Hoàn thành", value: 23, icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-200" },
  { label: "Hết hạn và Huỷ", value: 1, icon: XCircle,  color: "text-gray-400",  bg: "bg-gray-50",    border: "border-gray-200" },
  { label: "Tất cả",     value: 53, icon: Files,        color: "text-teal-500",  bg: "bg-teal-50",    border: "border-teal-200" },
];

// ─── Mock data ───────────────────────────────────────────────────────────────

const DOCS: Doc[] = [
  { id: "1", title: "1e414", sender: "Đặng Huỳnh Nhật Khánh", email: "khanh.dang@finos.asia", status: "da-xem", receivedAt: "1 ngày trước", deadline: "—", canQuickSign: true },
  { id: "2", title: "12421", subtitle: "RFC 3161 Timestamp: Giao thức chuẩn quốc ...", sender: "Đặng Huỳnh Nhật Khánh", email: "khanh.dang@finos.asia", status: "da-xem", receivedAt: "2 ngày trước", deadline: "—", canQuickSign: true },
  { id: "3", title: "1213", sender: "Đặng Huỳnh Nhật Khánh", email: "khanh.dang@finos.asia", status: "da-nhan", receivedAt: "3 ngày trước", deadline: "—", canQuickSign: false },
  { id: "4", title: "1313312", sender: "Đặng Huỳnh Nhật Khánh", email: "khanh.dang@finos.asia", status: "da-nhan", receivedAt: "4 ngày trước", deadline: "—", canQuickSign: false },
  { id: "5", title: "123131", sender: "Đặng Huỳnh Nhật Khánh", email: "khanh.dang@finos.asia", status: "da-nhan", receivedAt: "26/3/2026", deadline: "—", canQuickSign: false },
  { id: "6", title: "14124314", sender: "Đặng Huỳnh Nhật Khánh", email: "khanh.dang@finos.asia", status: "da-xem", receivedAt: "23/3/2026", deadline: "—", canQuickSign: true },
  { id: "7", title: "FinOS HDLD 002", subtitle: "Lorem Ipsum is simply dummy text of the pri...", sender: "Đặng Huỳnh Nhật Khánh", email: "khanh.dang@finos.asia", status: "da-nhan", receivedAt: "23/3/2026", deadline: "—", canQuickSign: false },
  { id: "8", title: "FinOS HDLD 003", subtitle: "Lorem Ipsum is simply dummy text of the pri...", sender: "Đặng Huỳnh Nhật Khánh", email: "khanh.dang@finos.asia", status: "da-xem", receivedAt: "23/3/2026", deadline: "—", canQuickSign: true },
  { id: "9", title: "FinOS Quy trình 003", subtitle: "Quy trình ký hợp đồng lao động của Admin F...", sender: "Đặng Huỳnh Nhật Khánh", email: "khanh.dang@finos.asia", status: "da-nhan", receivedAt: "19/3/2026", deadline: "—", canQuickSign: false },
  { id: "10", title: "FinOS HDLD", subtitle: "FinOS HDLD - Hợp đồng lao động...", sender: "Đặng Huỳnh Nhật Khánh", email: "khanh.dang@finos.asia", status: "da-xem", receivedAt: "19/3/2026", deadline: "—", canQuickSign: true },
];

const STATS = [
  { label: "Cần xử lý", value: 20, icon: Clock, color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-200", active: true },
  { label: "Đã ký", value: 22, icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-200", active: false },
  { label: "Đã phê duyệt", value: 0, icon: ThumbsUp, color: "text-sky-400", bg: "bg-sky-50", border: "border-sky-200", active: false },
  { label: "Từ chối", value: 1, icon: XCircle, color: "text-gray-400", bg: "bg-gray-50", border: "border-gray-200", active: false },
  { label: "Tất cả", value: 43, icon: Files, color: "text-teal-500", bg: "bg-teal-50", border: "border-teal-200", active: false },
];

const NAV_ITEMS = [
  { id: "inbox", label: "Hộp thư đến", icon: Inbox },
  { id: "workflow", label: "Quy trình ký", icon: GitBranch },
  { id: "templates", label: "Mẫu quy trình", icon: LayoutTemplate },
  { id: "contacts", label: "Danh bạ", icon: Users },
  { id: "settings", label: "Thiết lập", icon: Settings, hasChild: true },
  { id: "admin", label: "Quản trị", icon: ShieldCheck, hasChild: true },
];

// ─── Status badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: DocStatus }) {
  if (status === "da-xem") return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 inline-block" />
      Đã xem
    </span>
  );
  if (status === "da-nhan") return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-600">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 inline-block" />
      Đã nhận
    </span>
  );
  if (status === "da-ky") return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
      Đã ký
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-500">
      <span className="h-1.5 w-1.5 rounded-full bg-red-400 inline-block" />
      Từ chối
    </span>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

// ─── Workflow status badge ───────────────────────────────────────────────────

function WfStatusBadge({ status }: { status: WfStatus }) {
  if (status === "cho-toi-ky") return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 text-gray-500">
      <span className="h-1.5 w-1.5 rounded-full bg-gray-400 inline-block" />
      Chờ tôi ký
    </span>
  );
  if (status === "cho-nguoi-khac") return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-500">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 inline-block" />
      Chờ người khác
    </span>
  );
  if (status === "hoan-thanh") return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-600">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
      Hoàn thành
    </span>
  );
  if (status === "nhap") return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 text-gray-400">
      <span className="h-1.5 w-1.5 rounded-full bg-gray-300 inline-block" />
      Nháp
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-red-50 text-red-400">
      <span className="h-1.5 w-1.5 rounded-full bg-red-400 inline-block" />
      Hết hạn
    </span>
  );
}

export default function ESignPortalPage() {
  const [activeNav, setActiveNav] = useState("inbox");
  const [activeStat, setActiveStat] = useState(0);
  const [activeWfStat, setActiveWfStat] = useState(0);
  const [search, setSearch] = useState("");
  const [wfSearch, setWfSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const filteredDocs = DOCS.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase()) ||
    d.sender.toLowerCase().includes(search.toLowerCase())
  );

  const filteredWfs = WORKFLOWS.filter((w) =>
    w.title.toLowerCase().includes(wfSearch.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "inherit" }}>
      {/* ── Sidebar ── */}
      <aside
        className={cn(
          "flex flex-col bg-white border-r border-gray-100 transition-all duration-300 shrink-0",
          sidebarOpen ? "w-56" : "w-16"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-100">
          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-gradient-to-br from-[#00bcd4] to-[#0097a7] shrink-0">
            <PenLine className="h-4 w-4 text-white" />
          </div>
          {sidebarOpen && (
            <div className="leading-tight">
              <div className="text-sm font-bold text-gray-900">eSign Suite</div>
              <div className="text-[10px] text-gray-400">by FinOS</div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 space-y-0.5 px-2 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                  isActive
                    ? "bg-[#00bcd4] text-white shadow-sm"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {sidebarOpen && (
                  <span className="flex-1 text-left">{item.label}</span>
                )}
                {sidebarOpen && item.hasChild && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Collapse toggle */}
        <button
          onClick={() => setSidebarOpen((v) => !v)}
          className="flex items-center justify-center p-4 border-t border-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ChevronLeft className={cn("h-4 w-4 transition-transform", !sidebarOpen && "rotate-180")} />
        </button>
      </aside>

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between shrink-0">
          {/* Company selector */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 max-w-sm">
            <Building2 className="h-4 w-4 text-gray-400 shrink-0" />
            <span className="truncate">CÔNG TY TNHH MTV CÔNG NGHỆ FINOS VIỆT NAM</span>
            <span className="h-2 w-2 rounded-full bg-orange-400 shrink-0" />
            <ChevronDown className="h-3.5 w-3.5 text-gray-400 shrink-0" />
          </button>

          {/* User */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-800">Đặng Huỳnh Nhật Khánh</div>
              <div className="text-xs text-emerald-500 font-medium">Online</div>
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#00bcd4] to-[#0097a7] flex items-center justify-center text-white text-sm font-bold shadow-sm">
              D
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-6 py-6">
          {activeNav === "inbox" ? (
            <>
              {/* Page title */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Hộp thư đến</h1>
                <p className="text-sm text-gray-500 mt-0.5">Các tài liệu cần bạn ký</p>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-5 gap-3 mb-6">
                {STATS.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.label}
                      onClick={() => setActiveStat(i)}
                      className={cn(
                        "flex items-start justify-between p-4 rounded-2xl border transition-all text-left",
                        activeStat === i
                          ? `${s.bg} ${s.border} ring-2 ring-offset-1 ring-current ${s.color}`
                          : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm"
                      )}
                    >
                      <div>
                        <div className="text-xs text-gray-500 font-medium mb-2">{s.label}</div>
                        <div className={cn("text-3xl font-bold", s.color)}>{s.value}</div>
                      </div>
                      <Icon className={cn("h-7 w-7 mt-0.5", s.color)} strokeWidth={1.5} />
                    </button>
                  );
                })}
              </div>

              {/* Document table */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Table header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                  <h2 className="text-sm font-semibold text-gray-700">Tài liệu của bạn</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Tìm theo tên, người gửi..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-200 bg-gray-50 placeholder:text-gray-400 focus:outline-none focus:border-[#00bcd4] focus:ring-2 focus:ring-[#00bcd4]/10 w-56 transition-all"
                    />
                  </div>
                </div>

                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-50">
                      <th className="text-left px-5 py-3 text-xs font-medium text-gray-400 w-[30%]">Tiêu đề</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 w-[22%]">Người gửi</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 w-[13%]">Trạng thái</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 w-[12%]">Ngày nhận</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 w-[8%]">Hạn ký</th>
                      <th className="text-right px-5 py-3 text-xs font-medium text-gray-400">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredDocs.map((doc) => (
                      <tr key={doc.id} className="hover:bg-gray-50/70 transition-colors group">
                        <td className="px-5 py-3.5">
                          <div className="font-medium text-[#00bcd4] hover:underline cursor-pointer leading-snug">
                            {doc.title}
                          </div>
                          {doc.subtitle && (
                            <div className="text-xs text-gray-400 mt-0.5 truncate max-w-[240px]">{doc.subtitle}</div>
                          )}
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="text-gray-700 font-medium leading-snug">{doc.sender}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{doc.email}</div>
                        </td>
                        <td className="px-4 py-3.5">
                          <StatusBadge status={doc.status} />
                        </td>
                        <td className="px-4 py-3.5 text-gray-500 text-xs">{doc.receivedAt}</td>
                        <td className="px-4 py-3.5 text-gray-400 text-xs">{doc.deadline}</td>
                        <td className="px-5 py-3.5">
                          <div className="flex items-center justify-end gap-2">
                            {doc.canQuickSign && (
                              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-100 transition-colors border border-gray-200">
                                <Zap className="h-3 w-3" />
                                Ký nhanh
                              </button>
                            )}
                            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#00bcd4] text-white hover:bg-[#0097a7] transition-colors shadow-sm">
                              <PenLine className="h-3 w-3" />
                              Xem và Ký
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredDocs.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-5 py-12 text-center text-gray-400 text-sm">
                          Không tìm thấy tài liệu nào
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          ) : activeNav === "workflow" ? (
            <>
              {/* Page title + actions */}
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Quy trình ký</h1>
                  <p className="text-sm text-gray-500 mt-0.5">Quản lý các quy trình ký số của bạn</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                    <CalendarDays className="h-3.5 w-3.5" />
                    Thời gian
                  </button>
                  <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                    <Files className="h-3.5 w-3.5" />
                    Tất cả tài liệu
                    <ChevronDown className="h-3 w-3 opacity-60" />
                  </button>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Tìm theo tên..."
                      value={wfSearch}
                      onChange={(e) => setWfSearch(e.target.value)}
                      className="pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-200 bg-white placeholder:text-gray-400 focus:outline-none focus:border-[#00bcd4] focus:ring-2 focus:ring-[#00bcd4]/10 w-44 transition-all"
                    />
                  </div>
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00bcd4] text-white text-xs font-semibold hover:bg-[#0097a7] transition-colors shadow-sm">
                    Tạo mới
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-5 gap-3 mb-6">
                {WF_STATS.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.label}
                      onClick={() => setActiveWfStat(i)}
                      className={cn(
                        "flex items-start justify-between p-4 rounded-2xl border transition-all text-left",
                        activeWfStat === i
                          ? `${s.bg} ${s.border} ring-2 ring-offset-1 ring-current ${s.color}`
                          : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm"
                      )}
                    >
                      <div>
                        <div className="text-xs text-gray-500 font-medium mb-2">{s.label}</div>
                        <div className={cn("text-3xl font-bold", s.color)}>{s.value}</div>
                      </div>
                      <Icon className={cn("h-7 w-7 mt-0.5", s.color)} strokeWidth={1.5} />
                    </button>
                  );
                })}
              </div>

              {/* Workflow table */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-50">
                      <th className="text-left px-5 py-3 text-xs font-medium text-gray-400">Tiêu đề</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 w-[240px]">Trạng thái</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 w-[160px]">Ngày tạo</th>
                      <th className="px-4 py-3 w-10" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredWfs.map((wf) => {
                      const pct = wf.total > 0 ? (wf.progress / wf.total) * 100 : 0;
                      const isWaiting = wf.status === "cho-nguoi-khac" && wf.progress > 0;
                      return (
                        <tr key={wf.id} className="hover:bg-gray-50/70 transition-colors group">
                          <td className="px-5 py-3.5">
                            <div className="font-medium text-gray-800 leading-snug">{wf.title}</div>
                            {wf.subtitle && (
                              <div className="text-xs text-gray-400 mt-0.5 truncate max-w-[380px]">{wf.subtitle}</div>
                            )}
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex flex-col gap-1.5">
                              <WfStatusBadge status={wf.status} />
                              {wf.status !== "nhap" && wf.status !== "hoan-thanh" && (
                                <div className="flex items-center gap-2">
                                  <div className="h-1.5 w-20 rounded-full bg-gray-100 overflow-hidden">
                                    <div
                                      className={cn(
                                        "h-full rounded-full transition-all",
                                        isWaiting ? "bg-amber-400" : "bg-gray-300"
                                      )}
                                      style={{ width: `${pct}%` }}
                                    />
                                  </div>
                                  <span className="text-[10px] text-gray-400">{wf.progress}/{wf.total}</span>
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3.5 text-xs text-gray-500">{wf.createdAt}</td>
                          <td className="px-4 py-3.5">
                            <button className="h-7 w-7 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors opacity-0 group-hover:opacity-100">
                              <MoreVertical className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                    {filteredWfs.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-5 py-12 text-center text-gray-400 text-sm">
                          Không tìm thấy quy trình nào
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <div className="text-center">
                <div className="text-5xl mb-4">🚧</div>
                <div className="text-lg font-medium text-gray-500">Tính năng đang phát triển</div>
                <p className="text-sm mt-1">Chức năng này sẽ sớm ra mắt</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
