import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X, ZoomIn, ZoomOut, RotateCw, Maximize2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import './pdf-mobile.css';

interface PDFViewerProps {
  pdfUrl: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const PDFViewer = ({ pdfUrl, isOpen, onClose, title = "Resume" }: PDFViewerProps) => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'RS_Yessine_ZGHAL.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleRotate = () => setRotation(prev => (prev + 90) % 360);

  const openFullscreen = () => {
    window.open(pdfUrl, '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${isMobile ? 'pdf-modal-mobile' : 'max-w-6xl'} w-[95vw] h-[95vh] p-0 gap-0`}>
        <DialogHeader className="p-4 border-b border-slate-200 dark:border-slate-700 pdf-header">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold text-slate-900 dark:text-white truncate">
              {title}
            </DialogTitle>
            <div className="flex items-center gap-2">
              {/* Zoom Controls - Hidden on mobile for space */}
              {!isMobile && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleZoomOut}
                    disabled={zoom <= 0.5}
                    className="h-8 w-8 p-0 touch-target"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-slate-600 dark:text-slate-400 min-w-[3rem] text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleZoomIn}
                    disabled={zoom >= 3}
                    className="h-8 w-8 p-0 touch-target"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRotate}
                    className="h-8 w-8 p-0 touch-target"
                  >
                    <RotateCw className="h-4 w-4" />
                  </Button>
                </>
              )}
              
              {/* Fullscreen button for mobile */}
              {isMobile && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={openFullscreen}
                  className="h-8 px-3 touch-target"
                >
                  <Maximize2 className="h-4 w-4 mr-1" />
                  <span className="text-xs">Full</span>
                </Button>
              )}
              
              {/* Download Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownload}
                className="h-8 px-3 touch-target"
              >
                <Download className="h-4 w-4 mr-1" />
                <span className="text-xs">{isMobile ? 'DL' : t("hero.download")}</span>
              </Button>
              
              {/* Close Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0 touch-target"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>
        
        <div className="flex-1 bg-slate-100 dark:bg-slate-800 overflow-hidden">
          {isMobile ? (
            // Mobile: Show a simplified view with download option
            <div className="h-full flex flex-col items-center justify-center p-6 text-center">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg max-w-sm w-full">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {t("pdf.mobile_title") || "View Resume"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                  {t("pdf.mobile_description") || "For the best viewing experience on mobile, download the PDF or open in fullscreen."}
                </p>
                <div className="space-y-3">
                  <Button
                    onClick={handleDownload}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {t("hero.download_cv") || "Download Resume"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={openFullscreen}
                    className="w-full"
                  >
                    <Maximize2 className="h-4 w-4 mr-2" />
                    {t("pdf.open_fullscreen") || "Open in Browser"}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            // Desktop: Show embedded PDF with controls
            <div className="h-full p-4">
              <div 
                className="w-full h-full bg-white rounded-lg shadow-inner overflow-auto"
                style={{
                  transform: `scale(${zoom}) rotate(${rotation}deg)`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.3s ease'
                }}
              >
                <iframe
                  src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
                  className="w-full h-full border-0"
                  title={title}
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
        
        {/* Mobile Bottom Controls */}
        {isMobile && (
          <div className="pdf-controls-mobile border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="flex-1 touch-target"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={openFullscreen}
              className="flex-1 touch-target"
            >
              <Maximize2 className="h-4 w-4 mr-2" />
              Open
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PDFViewer;
