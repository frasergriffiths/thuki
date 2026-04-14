import { motion, AnimatePresence } from 'framer-motion';

interface ApiSettingsModalProps {
  isOpen: boolean;
  baseUrl: string;
  apiKey: string;
  onBaseUrlChange: (value: string) => void;
  onApiKeyChange: (value: string) => void;
  onClose: () => void;
  onSave: () => void;
}

export function ApiSettingsModal({
  isOpen,
  baseUrl,
  apiKey,
  onBaseUrlChange,
  onApiKeyChange,
  onClose,
  onSave,
}: ApiSettingsModalProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-md rounded-2xl border border-surface-border bg-surface-base p-5 shadow-chat"
            initial={{ scale: 0.96, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 6 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-sm font-semibold text-text-primary">
              Provider Settings
            </h2>
            <p className="mt-1 text-xs text-text-secondary">
              Configure your Anthropic-compatible API endpoint and key.
            </p>

            <div className="mt-4 space-y-3">
              <label className="block text-xs text-text-secondary">
                Base URL
                <input
                  value={baseUrl}
                  onChange={(e) => onBaseUrlChange(e.target.value)}
                  placeholder="https://api.anthropic.com"
                  className="mt-1 w-full rounded-lg border border-surface-border bg-black/20 px-3 py-2 text-sm text-text-primary outline-none focus:border-primary"
                />
              </label>

              <label className="block text-xs text-text-secondary">
                API Key
                <input
                  value={apiKey}
                  onChange={(e) => onApiKeyChange(e.target.value)}
                  type="password"
                  placeholder="sk-ant-..."
                  className="mt-1 w-full rounded-lg border border-surface-border bg-black/20 px-3 py-2 text-sm text-text-primary outline-none focus:border-primary"
                />
              </label>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-3 py-1.5 text-xs text-text-secondary hover:text-text-primary"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onSave}
                className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-neutral"
              >
                Save
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
