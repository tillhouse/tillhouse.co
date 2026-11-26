"use client";

import { useEffect } from "react";
import { useVerdancy } from "@verdancy/sdk/react";
import type { SubmitAnswerResponse } from "@verdancy/sdk";

/**
 * Invisible trigger: once the visitor answers the `after` question, asks the
 * `ask` question next — unless their choice is one of `skipChoices`.
 * Both are Verdancy question slugs. Renders nothing.
 */
export function AskFollowUp({
  after,
  ask,
  skipChoices = [],
}: {
  after: string;
  ask: string;
  skipChoices?: string[];
}) {
  const { askQuestion, config, widget } = useVerdancy();

  useEffect(() => {
    if (!widget || !config) return;
    const afterId = config.hypotheses
      .flatMap((h) => h.questions)
      .find((q) => q.slug === after)?.id;
    if (!afterId) return;

    const handleAnswer = (event: Event) => {
      const { answer } = (event as CustomEvent<SubmitAnswerResponse>).detail;
      if (answer.questionId !== afterId) return;
      const { payload } = answer;
      if (payload.kind === "single_choice" && skipChoices.includes(payload.choice)) return;
      askQuestion(ask);
    };

    widget.addEventListener("verdancy:answer", handleAnswer);
    return () => widget.removeEventListener("verdancy:answer", handleAnswer);
    // skipChoices is a literal array from the caller; join it so the effect
    // doesn't re-run on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widget, config, after, ask, askQuestion, skipChoices.join("|")]);

  return null;
}
