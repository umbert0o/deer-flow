"use client";

import { MessageSquareIcon } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { useI18n } from "@/core/i18n/hooks";
import { useLocalSettings } from "@/core/settings";

import { SettingsSection } from "./settings-section";

export function ChatSettingsPage() {
  const { t } = useI18n();
  const [settings, setSettings] = useLocalSettings();

  const handleToggleFollowups = (enabled: boolean) => {
    setSettings("chat", {
      followups_enabled: enabled,
    });
  };

  return (
    <SettingsSection
      title={t.settings.chat.title}
      description={
        <div className="flex items-center gap-2">
          <div>{t.settings.chat.description}</div>
          <div>
            <Switch
              checked={settings.chat.followups_enabled}
              onCheckedChange={handleToggleFollowups}
            />
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <p className="text-muted-foreground text-sm">
            {t.settings.chat.followupsDescription}
          </p>
        </div>
      </div>
    </SettingsSection>
  );
}
