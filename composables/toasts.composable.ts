import {type ComposerTranslation} from "#i18n";
import {useToast} from "~/components/ui/toast";

const ISE_KEY = "generic.toasts.internalServerError";

export function useInternalErrorToast (t: ComposerTranslation) {
  useToast().toast({
    title: t(`${ISE_KEY}.title`),
    description: t(`${ISE_KEY}.description`),
    variant: "destructive",
  });
}
