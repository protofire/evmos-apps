import { Badge } from "ui-helpers";
import { useFireworks } from "./useFireworks";
import {
  handleInteractWithdApp,
  handleLearnMore,
  handleStakeWithEvmos,
  renderFireworksPortal,
} from "./helpers";
import { Button } from "./button/Button";
import { TitleButton } from "./button/TitleButton";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { StepsContext } from "../../container/StepsContext";

export const NextSteps = () => {
  const { fireworksRef, portalContainer } = useFireworks();
  const { setShowModal, resetSteps } = useContext(StepsContext);
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      {renderFireworksPortal(fireworksRef, portalContainer)}
      <p className="mb-4 flex h-48 w-48 items-center justify-center rounded-full border border-[#FAF8F8] bg-[#FAF8F8] text-9xl">
        <span role="img" aria-label="Celebration icon">
          🎉
        </span>
      </p>
      <h1 className="font-bold">{t("nextsteps.title")}</h1>
      <p className="text-xs">{t("nextsteps.description")}</p>
      <div className="flex w-full items-center justify-between">
        <Button
          handleClick={() => {
            handleInteractWithdApp(t("ecosystemUrl"), setShowModal);
            resetSteps();
          }}
        >
          <TitleButton text={t("nextsteps.interactWithdApp.title")} />
          <Badge text={t("nextsteps.interactWithdApp.badge")} />
        </Button>

        <Button
          handleClick={() => {
            handleStakeWithEvmos(t("stakingUrl"), setShowModal);
            resetSteps();
          }}
        >
          <TitleButton text={t("nextsteps.stakeEvmos.title")} />

          <Badge
            text={t("nextsteps.stakeEvmos.badge")}
            style="ring-[#F4E5BA] bg-[#FEFCE8] text-[#854D0E]"
          />
        </Button>
      </div>
      <button
        className="w-full cursor-pointer rounded-lg border border-[#D1D5DB] py-3"
        onClick={() => {
          handleLearnMore(t("academyFAQUrl"), setShowModal);
          resetSteps();
        }}
      >
        <TitleButton text={t("nextsteps.learnMore.title")} />
      </button>
    </div>
  );
};
