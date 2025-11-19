import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  Shield, 
  Globe, 
  Server, 
  Lock, 
  Cpu, 
  EyeOff, 
  Network, 
  Database, 
  WifiOff, 
  Key, 
  Terminal, 
  ChevronRight, 
  Activity,
  ArrowRight,
  Menu,
  X,
  Zap,
  Share2,
  Layers,
  Heart,
  ExternalLink,
  AlertTriangle,
  FileCode,
  Hash,
  BookOpen,
  Download,
  FileText
} from 'lucide-react';
import lightPaperContent from './LIGHT_PAPER.md?raw';

const ManifestoModal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md overflow-y-auto flex items-center justify-center p-4">
    <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full p-8 md:p-12 relative shadow-2xl">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
      >
        <X size={24} />
      </button>

      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 text-yellow-500 mb-6">
          <AlertTriangle size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ceci est une idée.</h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Malheureusement, Exgate n'est pour l'instant qu'un concept sur papier.
        </p>
      </div>

      <div className="space-y-8 text-slate-400 leading-relaxed text-lg">
        <p>
          Ce site et le Livre Blanc associé sont une proposition architecturale pour un Internet plus sain, souverain et résilient. 
          <strong> Il n'y a pas de boîtier à acheter, pas de code à télécharger, pas d'entreprise, de fondation ou d'association derrière ce projet.</strong>
        </p>
        
        <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-xl">
          <h3 className="text-green-400 font-bold text-lg mb-2 flex items-center gap-2">
            <Terminal size={20} /> Appel à la Communauté
          </h3>
          <p className="text-base">
            Si vous êtes développeur, ingénieur réseau ou simplement passionné, et que cette vision vous parle : <strong>ce projet est le vôtre</strong>. 
            Le concept est libre. N'hésitez pas à le forker, l'améliorer, ou le construire pour de vrai.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
            <Shield size={24} className="text-green-500" />
            En attendant, protégez-vous :
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <a href="https://www.laquadrature.net/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700 hover:border-slate-600">
              <span className="font-bold text-white group-hover:text-purple-400 transition-colors">La Quadrature du Net</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://framasoft.org/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700 hover:border-slate-600">
              <span className="font-bold text-white group-hover:text-purple-400 transition-colors">Framasoft</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://www.privacytools.io/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700 hover:border-slate-600">
              <span className="font-bold text-white group-hover:text-blue-400 transition-colors">Privacy Tools</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://signal.org/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700 hover:border-slate-600">
              <span className="font-bold text-white group-hover:text-blue-400 transition-colors">Signal</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://www.torproject.org/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700 hover:border-slate-600">
              <span className="font-bold text-white group-hover:text-purple-400 transition-colors">Tor Browser</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://riseup.net/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700 hover:border-slate-600">
              <span className="font-bold text-white group-hover:text-red-400 transition-colors">Riseup</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- COMPOSANTS UI GÉNÉRIQUES ---

const SectionHeading = ({ children, align = "center" }) => (
  <h2 className={`text-3xl md:text-5xl font-bold text-white mb-6 ${align === "center" ? "text-center" : "text-left"} tracking-tighter`}>
    {children}
  </h2>
);

const SectionSub = ({ children, align = "center" }) => (
  <p className={`text-slate-400 text-lg md:text-xl mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
    {children}
  </p>
);

const ButtonPrimary = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="group relative px-8 py-4 bg-green-500 text-black font-bold text-lg uppercase tracking-widest hover:bg-green-400 transition-all duration-300 clip-path-slant"
  >
    <span className="flex items-center gap-2">
      {children} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </span>
  </button>
);

const ButtonSecondary = ({ children }) => (
  <button className="px-8 py-4 border border-green-500/50 text-green-500 font-mono text-lg uppercase tracking-widest hover:bg-green-500/10 transition-all duration-300">
    {children}
  </button>
);

const FeatureCard = ({ icon: Icon, title, desc, techSpecs }) => (
  <div className="p-8 border border-slate-800 bg-slate-900/50 hover:border-green-500/50 transition-colors duration-300 group flex flex-col h-full">
    <div className="mb-6 text-green-500 group-hover:text-white transition-colors">
      <Icon size={40} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 font-mono uppercase">{title}</h3>
    <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
      {desc}
    </p>
    {techSpecs && (
      <div className="pt-4 border-t border-slate-800">
        <p className="text-xs font-mono text-green-500/80">{techSpecs}</p>
      </div>
    )}
  </div>
);

const TechBadge = ({ children }) => (
  <span className="inline-flex items-center px-2 py-1 rounded border border-slate-700 bg-slate-900 text-[10px] text-slate-400 font-mono mr-2 mb-2">
    {children}
  </span>
);

// --- VISUALISATION BOX 3D (CSS PURE) ---
const ExgateBoxVisual = () => (
  <div className="relative w-full h-64 md:h-96 flex items-center justify-center perspective-1000">
    <div className="relative w-64 h-16 md:w-96 md:h-24 bg-slate-900 border border-slate-700 rounded-sm shadow-[0_0_50px_rgba(34,197,94,0.2)] transform rotate-x-12 rotate-y-12 transition-transform duration-1000 hover:rotate-x-0 hover:rotate-y-0 group">
      {/* Front Panel */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-between px-6 border-b border-slate-700">
        <div className="font-mono text-green-500 text-xs md:text-sm tracking-[0.2em]">EXGATE // NODE_01</div>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
          <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          <div className="w-2 h-2 rounded-full bg-slate-600"></div>
        </div>
      </div>
      {/* Top Glow */}
      <div className="absolute -top-12 left-0 right-0 h-12 bg-gradient-to-t from-green-500/10 to-transparent opacity-50"></div>
      {/* Reflection */}
      <div className="absolute top-full left-0 right-0 h-24 bg-gradient-to-b from-green-500/10 to-transparent transform scale-y-[-1] opacity-30 mask-image-linear-gradient"></div>
    </div>
  </div>
);

// --- VISUALISATION 1: OBLIVIOUS RELAY (LINEAR) ---
const ObliviousRelayDiagram = () => (
  <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-8 relative h-full flex flex-col justify-center">
    <div className="absolute top-4 right-4 font-mono text-xs text-slate-600">LIVE_TRAFFIC_SIMULATION</div>
    
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 md:mt-0">
      {/* User Node */}
      <div className="text-center relative group">
        <div className="w-16 h-16 bg-slate-800 border border-green-500 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
          <Terminal className="text-white" />
        </div>
        <div className="text-xs text-green-500 font-mono">YOU</div>
        <div className="text-[10px] text-slate-500">Source IP</div>
      </div>

      {/* Connection Line 1 */}
      <div className="h-12 w-1 md:h-1 md:flex-1 bg-slate-700 relative overflow-hidden rounded-full group">
        <div className="absolute inset-0 bg-green-500 animate-slide-right"></div>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] text-slate-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Curve25519 Encrypted
        </div>
      </div>

      {/* Relay Node */}
      <div className="text-center opacity-70">
        <div className="w-14 h-14 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center mx-auto mb-2">
          <Server className="text-slate-400" />
        </div>
        <div className="text-xs text-slate-400 font-mono">RELAY 1</div>
        <div className="text-[10px] text-slate-600">Blind Forwarder</div>
      </div>

       {/* Connection Line 2 */}
       <div className="h-12 w-1 md:h-1 md:flex-1 bg-slate-700 relative overflow-hidden rounded-full group">
        <div className="absolute inset-0 bg-green-500 animate-slide-right animation-delay-500"></div>
         <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] text-slate-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ChaCha20-Poly1305
        </div>
      </div>

      {/* Exit Node */}
      <div className="text-center opacity-70">
        <div className="w-14 h-14 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center mx-auto mb-2">
          <Globe className="text-slate-400" />
        </div>
        <div className="text-xs text-slate-400 font-mono">EXIT NODE</div>
        <div className="text-[10px] text-slate-600">Decryption</div>
      </div>

       {/* Connection Line 3 */}
       <div className="h-12 w-1 md:h-1 md:flex-1 bg-slate-700 relative overflow-hidden rounded-full">
        <div className="absolute inset-0 bg-white animate-slide-right animation-delay-1000"></div>
      </div>

      {/* Internet */}
      <div className="text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
          <Globe className="text-black" />
        </div>
        <div className="text-xs text-white font-mono">INTERNET</div>
      </div>
    </div>
    <div className="mt-8 p-4 bg-black/40 rounded border border-slate-800 text-xs text-slate-400 font-mono">
      <p className="flex items-center gap-2 mb-1"><Lock size={12} className="text-green-500"/> Tunnel 1 (Relay): No Payload Visibility</p>
      <p className="flex items-center gap-2"><Lock size={12} className="text-green-500"/> Tunnel 2 (Exit): No Source IP Visibility</p>
    </div>
  </div>
);

// --- VISUALISATION 2: WORLD MESH & CACHE (UPDATED) ---
const WorldMeshMap = () => {
  const domainList = [
    'youtube.com', 'tmsc.moe', 'wikipedia.org', 'nytimes.com', 
    'arxiv.org', 'github.com', 'reddit.com', 'stackoverflow.com',
    'duckduckgo.com', 'proton.me', 'signal.org', 'archive.org',
    'discord.com', 'nyaa.si', 'pornhub.com', 'nhentai.net',
    'github.com', 's.team'
  ];

  // Coordonnées "Wide Spread" : 
  // Hauteur augmentée (h-500px) et marges ajustées pour éviter le chevauchement avec le titre
  // P1 et P2 descendus à Y=25%, P3 et P4 à Y=75%, P5 à Y=85%
  const [nodes, setNodes] = useState([
    { id: 'eu', x: 50, y: 50, label: 'YOU', type: 'user', cachedIndex: 0 }, // YOU au centre
    { id: 'p1', x: 20, y: 25, label: 'PEER', cachedIndex: 5 }, // Top Left (Ajusté)
    { id: 'p2', x: 80, y: 25, label: 'PEER', cachedIndex: 1 }, // Top Right (Ajusté)
    { id: 'p3', x: 20, y: 75, label: 'PEER', cachedIndex: 2 }, // Bottom Left (Ajusté)
    { id: 'p4', x: 80, y: 75, label: 'PEER', cachedIndex: 3 }, // Bottom Right (Ajusté)
    { id: 'p5', x: 50, y: 85, label: 'PEER', cachedIndex: 4 }, // Bottom Center
  ]);

  // Cycle les domaines pour TOUT LE MONDE (y compris "YOU")
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prevNodes => prevNodes.map(node => {
        // Change l'index de manière pseudo-aléatoire pour simuler le trafic
        return {
          ...node,
          cachedIndex: (node.cachedIndex + Math.floor(Math.random() * 3) + 1) % domainList.length
        };
      }));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    // Augmentation de la hauteur : h-96 (384px) -> h-[500px]
    <div className="relative w-full h-[500px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl transition-all duration-500">
      {/* Background Map Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Title Overlay */}
      <div className="absolute top-6 left-6 z-10 pointer-events-none">
        <div className="text-green-500 font-mono text-xs tracking-widest mb-1">KADEMLIA DHT // P2P MESH</div>
        <div className="text-white font-bold text-sm">FULL PARTICIPATION MODE</div>
      </div>

      {/* Connecting Lines (SVG) - STAR TOPOLOGY + MESH */}
      {/* Coordonnées mises à jour pour correspondre aux nouveaux nodes (20/80% etc) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <defs>
          <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#22c55e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Connections THROUGH User (Relay Mode) */}
        {/* P1(20,25) -> You(50,50) */}
        <path d="M20% 25% L50% 50%" stroke="url(#meshGradient)" strokeWidth="1.5" />
        {/* P2(80,25) -> You(50,50) */}
        <path d="M80% 25% L50% 50%" stroke="url(#meshGradient)" strokeWidth="1.5" />
        {/* P3(20,75) -> You(50,50) */}
        <path d="M20% 75% L50% 50%" stroke="url(#meshGradient)" strokeWidth="1.5" />
        {/* P4(80,75) -> You(50,50) */}
        <path d="M80% 75% L50% 50%" stroke="url(#meshGradient)" strokeWidth="1.5" />
        {/* P5(50,85) -> You(50,50) */}
        <path d="M50% 85% L50% 50%" stroke="url(#meshGradient)" strokeWidth="1.5" />
        
        {/* Connections Peer <-> Peer (Mesh) */}
        {/* P1(20,25) -> P3(20,75) */}
        <path d="M20% 25% L20% 75%" stroke="url(#meshGradient)" strokeWidth="1" opacity="0.5" />
        {/* P2(80,25) -> P4(80,75) */}
        <path d="M80% 25% L80% 75%" stroke="url(#meshGradient)" strokeWidth="1" opacity="0.5" />
        {/* P3(20,75) -> P5(50,85) */}
        <path d="M20% 75% L50% 85%" stroke="url(#meshGradient)" strokeWidth="1" opacity="0.5" />
        {/* P5(50,85) -> P4(80,75) */}
        <path d="M50% 85% L80% 75%" stroke="url(#meshGradient)" strokeWidth="1" opacity="0.5" />
        {/* P1(20,25) -> P2(80,25) - Top connection */}
        <path d="M20% 25% L80% 25%" stroke="url(#meshGradient)" strokeWidth="1" opacity="0.3" />
      </svg>

      {/* Packets de données TRAVERSANT l'utilisateur - Trajectoires mises à jour */}
      <div className="absolute w-2 h-2 bg-green-400 rounded-full shadow-[0_0_15px_#22c55e] animate-mesh-packet-center-1"></div>
      <div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#ffffff] animate-mesh-packet-center-2"></div>
      <div className="absolute w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e] animate-mesh-packet-center-3"></div>

      {/* Nodes */}
      {nodes.map((node) => (
        <div 
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          {/* Node Icon */}
          <div className={`w-3 h-3 md:w-5 md:h-5 rounded-full border-2 ${node.type === 'user' ? 'bg-white border-green-500 shadow-[0_0_30px_#22c55e] z-30 scale-125' : 'bg-slate-800 border-slate-600 group-hover:border-green-400'} transition-colors duration-300 relative flex items-center justify-center`}>
             {/* Pulse Ring for User */}
             {node.type === 'user' && <div className="absolute inset-0 rounded-full border border-green-500 animate-ping opacity-50"></div>}
          </div>
          
          {/* Label (Anonyme) */}
          <div className={`absolute mt-4 text-[10px] font-mono whitespace-nowrap px-2 py-1 rounded bg-black/90 border border-slate-800 backdrop-blur-sm ${node.type === 'user' ? 'text-green-400 border-green-500/30 font-bold' : 'text-slate-500'}`}>
            {node.label}
          </div>

          {/* Content Cache Indicator (Pour TOUS, y compris YOU) */}
           <div className={`absolute ${node.type === 'user' ? '-top-12' : '-top-10'} left-1/2 transform -translate-x-1/2 bg-slate-900/90 text-[10px] text-white px-2 py-1 rounded border ${node.type === 'user' ? 'border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.2)]' : 'border-green-500/30'} flex items-center gap-1.5 whitespace-nowrap z-20 transition-all duration-500`}>
             <Globe size={10} className={node.type === 'user' ? "text-green-400 animate-pulse" : "text-slate-400"} /> 
             <span className="font-mono text-green-100/90">{domainList[node.cachedIndex]}</span>
           </div>
        </div>
      ))}
    </div>
  );
};

// --- VISUALISATION 3: PROTOCOL STACK ---
const ProtocolStack = () => (
  <div className="flex flex-col items-center justify-center h-full p-8">
    <div className="w-full max-w-sm space-y-2">
      {/* QUIC Layer */}
      <div className="bg-slate-800 border border-slate-600 rounded-lg p-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
        <div className="flex justify-between items-center">
          <span className="font-mono font-bold text-white">QUIC Transport</span>
          <span className="text-xs text-slate-400 font-mono">UDP / RFC 9000</span>
        </div>
        <div className="text-xs text-slate-500 mt-1">Congestion Control, 0-RTT Handshake</div>
      </div>
      
      {/* WireGuard Layer */}
      <div className="bg-slate-900 border border-green-500 rounded-lg p-4 relative transform translate-x-4 -translate-y-2 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
         <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
        <div className="flex justify-between items-center">
          <span className="font-mono font-bold text-white">WireGuard Payload</span>
          <span className="text-xs text-green-500 font-mono">RFC 9221</span>
        </div>
        <div className="text-xs text-slate-400 mt-1">Noise Protocol, ChaCha20-Poly1305</div>
      </div>

      {/* Arrow Connection */}
      <div className="flex justify-center py-2">
        <ArrowRight className="transform rotate-90 text-slate-600" />
      </div>

       {/* Data Layer */}
       <div className="bg-black border border-slate-800 border-dashed rounded-lg p-3 text-center opacity-60">
        <span className="text-xs font-mono text-slate-500">ENCRYPTED USER DATA</span>
      </div>
    </div>
  </div>
);

// --- SECTIONS PRINCIPALES ---

const LightPaper = ({ onClose }) => (
  <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto">
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
          <BookOpen className="text-green-500" /> Light Paper
        </h1>
        <button 
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors p-2"
        >
          <X size={32} />
        </button>
      </div>
      <div className="prose prose-invert prose-green max-w-none">
        <style>{`
          .prose h1 { @apply text-4xl font-bold text-white mb-6 mt-8; }
          .prose h2 { @apply text-3xl font-bold text-green-400 mb-4 mt-8 border-b border-slate-800 pb-2; }
          .prose h3 { @apply text-2xl font-bold text-white mb-3 mt-6; }
          .prose p { @apply text-slate-300 leading-relaxed mb-4; }
          .prose ul { @apply text-slate-300 list-disc ml-6 mb-4; }
          .prose li { @apply mb-2; }
          .prose strong { @apply text-white font-semibold; }
          .prose code { @apply bg-slate-800 text-green-400 px-2 py-1 rounded font-mono text-sm; }
          .prose hr { @apply border-slate-800 my-8; }
        `}</style>
        <ReactMarkdown>{lightPaperContent}</ReactMarkdown>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 border border-green-500/30 rounded-full bg-green-500/10 text-green-400 text-xs font-mono mb-6 animate-fade-in-up">
              v1.0 // CONCEPT ARCHITECTURE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tighter">
              NE LOUEZ PLUS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                VOTRE ACCÈS.
              </span>
              <br />
              POSSÉDEZ-LE.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              Le premier réseau souverain distribué. Sans abonnement. Sans surveillance. Sans Token. Reprenez le contrôle de votre infrastructure physique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary onClick={() => window.showManifesto()}>
                Rejoindre le Réseau
              </ButtonPrimary>
              <button
                onClick={() => window.showLightPaper()}
                className="px-8 py-4 border border-green-500/50 text-green-500 font-mono text-lg uppercase tracking-widest hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FileText size={20} /> Lire le Light Paper
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <ExgateBoxVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => (
  <section className="py-24 bg-slate-950 border-y border-slate-900">
    <div className="container mx-auto px-6">
      <SectionHeading>INTERNET A BRISÉ SA PROMESSE</SectionHeading>
      <SectionSub>
        Ce qui devait être un réseau décentralisé est devenu une infrastructure de surveillance centralisée.
      </SectionSub>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="p-6 bg-red-950/10 border border-red-900/30 rounded-lg">
          <EyeOff className="text-red-500 mb-4 w-10 h-10" />
          <h3 className="text-xl font-bold text-white mb-2">Surveillance Totale</h3>
          <p className="text-slate-400 text-sm">Votre FAI voit tout. Les VPN traditionnels voient tout. Vous ne faites que déplacer la confiance vers un autre maître.</p>
        </div>
        <div className="p-6 bg-red-950/10 border border-red-900/30 rounded-lg">
          <Server className="text-red-500 mb-4 w-10 h-10" />
          <h3 className="text-xl font-bold text-white mb-2">Centralisation</h3>
          <p className="text-slate-400 text-sm">Vos données transitent par des goulots d'étranglement gérés par des géants de la tech qui monétisent votre vie privée.</p>
        </div>
        <div className="p-6 bg-red-950/10 border border-red-900/30 rounded-lg">
          <WifiOff className="text-red-500 mb-4 w-10 h-10" />
          <h3 className="text-xl font-bold text-white mb-2">Fragilité</h3>
          <p className="text-slate-400 text-sm">Si le serveur tombe ou est censuré, l'information disparaît. L'architecture actuelle n'est pas résiliente.</p>
        </div>
      </div>
    </div>
  </section>
);

const TechStack = () => (
  <section id="technology" className="py-24 bg-black relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-900 to-transparent"></div>
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h3 className="text-green-500 font-mono text-sm mb-4 tracking-widest">ARCHITECTURE DU RÉSEAU</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">CONFIDENTIALITÉ MATHÉMATIQUE</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Nous remplaçons la "confiance" envers les opérateurs par des preuves cryptographiques et des standards ouverts vérifiables.
        </p>
      </div>

      {/* BLOCK 1: OBLIVIOUS RELAY */}
      <div className="flex flex-col lg:flex-row gap-16 items-center mb-32 border-b border-slate-900 pb-20">
        <div className="lg:w-1/3">
          <div className="bg-green-500/10 p-3 rounded inline-block mb-6">
            <Network className="text-green-500 w-8 h-8" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">OBLIVIOUS RELAY</h3>
          <h4 className="text-xl text-green-400 mb-6 font-mono">SÉPARATION DES CONNAISSANCES</h4>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Exgate implémente un routage à double saut inspiré des principes <strong>IETF MASQUE</strong>.
          </p>
          <ul className="space-y-4 text-slate-300 mb-6">
            <li className="flex items-start gap-3">
              <Server className="text-slate-500 mt-1 shrink-0" size={18} />
              <span className="text-sm"><strong>Nœud 1 (Relais):</strong> Connaît votre IP, ignore la Payload.</span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="text-slate-500 mt-1 shrink-0" size={18} />
              <span className="text-sm"><strong>Nœud 2 (Sortie):</strong> Déchiffre la Payload, ignore votre IP.</span>
            </li>
          </ul>
          <div className="flex flex-wrap">
             <TechBadge>Curve25519</TechBadge>
             <TechBadge>Forward Secrecy</TechBadge>
          </div>
        </div>
        <div className="lg:w-2/3 w-full h-80 md:h-96">
          <ObliviousRelayDiagram />
        </div>
      </div>

      {/* BLOCK 2: WORLD MESH & CACHE */}
      <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-32 border-b border-slate-900 pb-20">
        <div className="lg:w-1/3">
          <div className="bg-green-500/10 p-3 rounded inline-block mb-6">
            <Share2 className="text-green-500 w-8 h-8" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">INTERNET MIRRORING</h3>
          <h4 className="text-xl text-green-400 mb-6 font-mono">INFRASTRUCTURE P2P</h4>
          <p className="text-slate-400 mb-6 leading-relaxed">
             Exgate transforme chaque box en nœud actif. Comme <strong>BitTorrent</strong> ou <strong>IPFS</strong>, le réseau survit grâce à ses pairs.
          </p>
          <ul className="space-y-4 text-slate-300 mb-6">
             <li className="flex items-start gap-3">
              <Database className="text-slate-500 mt-1 shrink-0" size={18} />
              <span className="text-sm"><strong>Cache P2P:</strong> Le contenu populaire (Wikipédia, News) est stocké et servi par les voisins.</span>
            </li>
             <li className="flex items-start gap-3">
              <Zap className="text-slate-500 mt-1 shrink-0" size={18} />
              <span className="text-sm"><strong>Performance:</strong> Latence divisée par 10. Plus besoin de traverser l'océan pour une simple page.</span>
            </li>
            <li className="flex items-start gap-3">
              <WifiOff className="text-green-500 mt-1 shrink-0" size={18} />
              <span className="text-sm"><strong>Résilience:</strong> Si le serveur d'origine tombe ou est censuré, le réseau Exgate continue de servir le contenu.</span>
            </li>
          </ul>
          <div className="flex flex-wrap">
             <TechBadge>Kademlia DHT</TechBadge>
             <TechBadge>SHA-256 Indexing</TechBadge>
          </div>
        </div>
        <div className="lg:w-2/3 w-full h-[500px]">
          <WorldMeshMap />
        </div>
      </div>

       {/* BLOCK 3: PROTOCOL STACK */}
       <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/3">
          <div className="bg-green-500/10 p-3 rounded inline-block mb-6">
            <Layers className="text-green-500 w-8 h-8" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">STACK PROTOCOLAIRE</h3>
          <h4 className="text-xl text-green-400 mb-6 font-mono">WIREGUARD OVER QUIC</h4>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Nous encapsulons les datagrammes WireGuard dans le transport QUIC (RFC 9221). Cela permet de masquer la signature du VPN dans le bruit de fond d'Internet (HTTP/3).
          </p>
          <ul className="space-y-4 text-slate-300 mb-6">
            <li className="flex items-start gap-3">
              <Hash className="text-slate-500 mt-1 shrink-0" size={18} />
              <span className="text-sm"><strong>Noise Protocol Framework:</strong> Pour l'échange de clés authentifié.</span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="text-slate-500 mt-1 shrink-0" size={18} />
              <span className="text-sm"><strong>ChaCha20-Poly1305:</strong> Chiffrement haute performance (AEAD).</span>
            </li>
             <li className="flex items-start gap-3">
              <Zap className="text-green-500 mt-1 shrink-0" size={18} />
              <span className="text-sm"><strong>No TCP Meltdown:</strong> Usage de datagrammes non fiables pour éviter la latence.</span>
            </li>
          </ul>
          <div className="flex flex-wrap">
             <TechBadge>RFC 9221</TechBadge>
             <TechBadge>RFC 9000 (QUIC)</TechBadge>
             <TechBadge>BLAKE2s Hashing</TechBadge>
          </div>
        </div>
        <div className="lg:w-2/3 w-full h-80">
          <ProtocolStack />
        </div>
      </div>

    </div>
  </section>
);

const Hardware = () => (
  <section id="hardware" className="py-24 bg-slate-950">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">LA EXGATE BOX</h2>
        <p className="text-slate-400">Votre bastion numérique. Conçue pour la performance et la souveraineté.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <div className="border-l-2 border-green-500 pl-6">
            <h3 className="text-white text-xl font-bold flex items-center gap-2 mb-2">
              <Cpu className="text-green-500" /> Processeur ARM64
            </h3>
            <p className="text-slate-400 text-sm">Rockchip RK3588 avec accélération cryptographique matérielle (AES-NI). Chiffrement en temps réel sans latence.</p>
          </div>
          
          <div className="border-l-2 border-slate-700 pl-6 hover:border-green-500 transition-colors">
            <h3 className="text-white text-xl font-bold flex items-center gap-2 mb-2">
              <Database className="text-green-500" /> 4 To Stockage NVMe
            </h3>
            <p className="text-slate-400 text-sm">Mise en cache ultra-rapide et stockage distribué chiffré. Vos données restent chez vous.</p>
          </div>

          <div className="border-l-2 border-slate-700 pl-6 hover:border-green-500 transition-colors">
            <h3 className="text-white text-xl font-bold flex items-center gap-2 mb-2">
              <Network className="text-green-500" /> 2 x 2.5 GbE
            </h3>
            <p className="text-slate-400 text-sm">Double port Ethernet (WAN/LAN) pour ne jamais brider votre connexion Fibre 1Gbps+.</p>
          </div>

          <div className="border-l-2 border-slate-700 pl-6 hover:border-green-500 transition-colors">
            <h3 className="text-white text-xl font-bold flex items-center gap-2 mb-2">
              <Key className="text-green-500" /> TPM 2.0 / Secure Enclave
            </h3>
            <p className="text-slate-400 text-sm">Stockage inviolable des clés privées. Si vous ne possédez pas le hardware, vous ne possédez pas les données.</p>
          </div>
        </div>
        
        <div className="order-1 md:order-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 shadow-2xl">
          <div className="font-mono text-xs text-slate-500 mb-4">// SYSTEM_STATUS: ONLINE</div>
          <div className="flex justify-center items-center h-64">
            {/* Abstract Hardware Art */}
            <div className="relative w-48 h-48 border-2 border-slate-600 rounded-lg flex items-center justify-center bg-black">
               <div className="absolute inset-2 border border-dashed border-slate-700 rounded"></div>
               <Cpu size={64} className="text-green-500 animate-pulse" />
               <div className="absolute -bottom-8 text-center w-full font-mono text-green-400 text-sm">
                 BRIDGE_MODE: ACTIVE
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Ecosystem = () => (
  <section id="ecosystem" className="py-24 bg-black">
    <div className="container mx-auto px-6">
      <SectionHeading>L'ÉCOSYSTÈME</SectionHeading>
      <SectionSub>Une refonte complète de votre vie numérique basée sur des standards ouverts.</SectionSub>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
        <FeatureCard 
          icon={Database}
          title="ExCloud (RAID Planétaire)"
          desc="Vos fichiers sont fragmentés, chiffrés et dispersés sur le réseau mondial. Si votre maison brûle, vos données survivent."
          techSpecs="Reed-Solomon Erasure Coding • AES-256-GCM"
        />
        <FeatureCard 
          icon={WifiOff}
          title="Smart Isolation (IoT)"
          desc="Vos ampoules et caméras connectées sont des espions. Exgate les isole automatiquement dans un VLAN étanche."
          techSpecs="802.1Q VLAN Tagging • Deep Packet Inspection"
        />
        <FeatureCard 
          icon={Globe}
          title="ExDNS"
          desc="Système de nommage souverain (exg://). Pas d'ICANN, pas de censure. Premier arrivé, premier servi."
          techSpecs="Ed25519 Signed Records • Merkle Proofs"
        />
        <FeatureCard 
          icon={Lock}
          title="Permissioned Mesh"
          desc="Partagez votre NAS ou Home Assistant avec des proches via des clés cryptographiques. Ports invisibles (Port Knocking)."
          techSpecs="SPA (Single Packet Authorization) • Mutual TLS"
        />
      </div>
    </div>
  </section>
);

const ZeroToken = () => (
  <section className="py-20 bg-green-900/10 border-t border-green-900/30">
    <div className="container mx-auto px-6 text-center">
      <div className="inline-block p-3 bg-green-500/20 rounded-full mb-6">
        <Activity className="text-green-500 w-8 h-8" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">ZÉRO TOKEN. ZÉRO BULLSHIT.</h2>
      <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
        Nous refusons la spéculation. Pas de Blockchain lente, pas de "Coins" à acheter. 
        La contribution au réseau est inscrite dans le firmware.
        Vous achetez le matériel, vous possédez l'infrastructure.
      </p>
      <div className="flex justify-center gap-4">
        <span className="px-4 py-2 bg-slate-900 text-slate-400 rounded border border-slate-700 text-sm font-mono">NO ICO</span>
        <span className="px-4 py-2 bg-slate-900 text-slate-400 rounded border border-slate-700 text-sm font-mono">NO SUBSCRIPTION</span>
        <span className="px-4 py-2 bg-slate-900 text-slate-400 rounded border border-slate-700 text-sm font-mono">HARDWARE ONLY</span>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black border-t border-slate-900 py-12 text-sm">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <div className="flex items-center gap-2 text-white font-bold text-xl tracking-wider mb-2">
          <Shield className="text-green-500" size={24} /> EXGATE Network
        </div>
        <p className="text-slate-600">Construit pour la résilience.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 text-slate-500">
        <button onClick={() => window.showLightPaper()} className="hover:text-green-500 transition-colors text-left flex items-center gap-2">
          <BookOpen size={16} /> Light Paper
        </button>
        <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors flex items-center gap-2">
          <Download size={16} /> White Paper (PDF)
        </a>
        <a href="#" className="hover:text-green-500 transition-colors">GitHub</a>
        <a href="#" className="hover:text-green-500 transition-colors">Manifeste</a>
        <a href="#" className="hover:text-green-500 transition-colors">PGP Key</a>
      </div>
      
      <div className="mt-8 md:mt-0 text-slate-700 font-mono">
        © 2025 TrapMeSenpai Company
      </div>
    </div>
  </footer>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-white font-bold text-xl tracking-wider cursor-pointer">
          <Shield className="text-green-500" /> EXGATE Network
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-slate-300">
          <a href="#technology" className="hover:text-green-500 transition-colors">TECHNOLOGIE</a>
          <a href="#hardware" className="hover:text-green-500 transition-colors">LA BOX</a>
          <a href="#ecosystem" className="hover:text-green-500 transition-colors">ÉCOSYSTÈME</a>
          <button 
            onClick={() => window.showManifesto()}
            className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all uppercase text-xs font-bold tracking-wider"
          >
            Précommander
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-slate-800 absolute w-full">
          <div className="flex flex-col p-6 gap-4 text-slate-300 font-mono">
            <a href="#technology" onClick={() => setIsOpen(false)}>TECHNOLOGIE</a>
            <a href="#hardware" onClick={() => setIsOpen(false)}>LA BOX</a>
            <a href="#ecosystem" onClick={() => setIsOpen(false)}>ÉCOSYSTÈME</a>
            <button onClick={() => { setIsOpen(false); window.showManifesto(); }} className="text-green-500 font-bold text-left">PRÉCOMMANDER</button>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- APPLICATION PRINCIPALE ---

const App = () => {
  const [showPaper, setShowPaper] = useState(false);
  const [showManifesto, setShowManifesto] = useState(false);
  
  useEffect(() => {
    window.showLightPaper = () => setShowPaper(true);
    window.showManifesto = () => setShowManifesto(true);
  }, []);

  return (
    <div className="bg-black min-h-screen text-slate-200 selection:bg-green-500 selection:text-black font-sans">
      {/* CSS Global personnalisé pour les animations */}
      <style>{`
        .clip-path-slant {
          clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
        }
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-right {
          animation: slide-right 2s linear infinite;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        /* New Animations for Spread Layout */
        .animate-mesh-packet-center-1 {
          animation: mesh-center-1 3s ease-in-out infinite;
        }
        .animate-mesh-packet-center-2 {
          animation: mesh-center-2 4s ease-in-out infinite;
        }
        .animate-mesh-packet-center-3 {
          animation: mesh-center-3 3.5s ease-in-out infinite;
        }

        @keyframes mesh-center-1 {
           0% { top: 25%; left: 20%; opacity: 0; } /* P1 */
           20% { opacity: 1; }
           50% { top: 50%; left: 50%; opacity: 1; } /* YOU */
           80% { opacity: 1; }
           100% { top: 75%; left: 80%; opacity: 0; } /* P4 */
        }
        @keyframes mesh-center-2 {
           0% { top: 75%; left: 20%; opacity: 0; } /* P3 */
           20% { opacity: 1; }
           50% { top: 50%; left: 50%; opacity: 1; } /* YOU */
           80% { opacity: 1; }
           100% { top: 25%; left: 80%; opacity: 0; } /* P2 */
        }
        @keyframes mesh-center-3 {
           0% { top: 85%; left: 50%; opacity: 0; } /* P5 */
           20% { opacity: 1; }
           50% { top: 75%; left: 20%; opacity: 1; } /* P3 */
           80% { opacity: 1; }
           100% { top: 25%; left: 20%; opacity: 0; } /* P1 */
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, -10%); }
          50% { transform: translate(-50%, 10%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>

      {showPaper && <LightPaper onClose={() => setShowPaper(false)} />}
      {showManifesto && <ManifestoModal onClose={() => setShowManifesto(false)} />}
      <Navbar />
      <Hero />
      <Problem />
      <TechStack />
      <Hardware />
      <Ecosystem />
      <ZeroToken />
      <Footer />
    </div>
  );
};

export default App;
