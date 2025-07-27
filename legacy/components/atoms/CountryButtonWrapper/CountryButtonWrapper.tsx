import { useEffect, useState, memo } from "react";
import CountryButton from "@/components/atoms/CountryButtonWrapper/CountryButton/CountryButton";
import indianFlag from "@/assets/icons/flags/india.webp";
import philippineFlage from "@/assets/icons/flags/philippines.webp";
import sriLankanFlag from "@/assets/icons/flags/sri-lanka.webp";
import indonesianFlag from "@/assets/icons/flags/indonesia.webp";
import nepalianFlag from "@/assets/icons/flags/nepal.webp";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchMaidCounts } from "@/lib/features/maid/maidAction";
import "./CountryButtonWrapper.scss";

type IProps = {
  grayBg?: boolean;
};

function CountryButtonWrapper({ grayBg }: IProps) {
  const [sortedCount, setSortedCount] = useState<{ [key: string]: any } | null>(null);

  const nationalityCount = useAppSelector(
    (state: any) => state?.maid?.counts?.nationalityCounts
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!nationalityCount) {
      dispatch(fetchMaidCounts());
    }
  }, []);

  useEffect(() => {
    if (nationalityCount) {
      const sorted: { [key: string]: number } = {};
      for (let i = 0; i < nationalityCount.length; i++) {
        const item = nationalityCount[i];
        sorted[item?.id] = item.count;
      }
      setSortedCount(sorted);
    }
  }, [nationalityCount]);

  return (
    <div className={`country-wrapper ${grayBg ? "gray-bg" : "white-bg"}`}>
      <CountryButton
        query="Philippines"
        flag={philippineFlage.src}
        country="common.countries.filipino"
        count={sortedCount?.Philippines || 0}
        isGrayBG={!!grayBg}
      />
      <CountryButton
        query="India"
        flag={indianFlag.src}
        country="common.countries.indian"
        count={sortedCount?.India || 0}
        isGrayBG={!!grayBg}
      />
      <CountryButton
        query="Nepal"
        flag={nepalianFlag.src}
        country="common.countries.nepali"
        count={sortedCount?.Nepal || 0}
        isGrayBG={!!grayBg}
      />
      <CountryButton
        query="Srilanka"
        flag={sriLankanFlag.src}
        country="common.countries.sri_lankan"
        count={sortedCount?.Srilanka || 0}
        isGrayBG={!!grayBg}
      />
      <CountryButton
        query="Indonesia"
        flag={indonesianFlag.src}
        country="common.countries.indonesian"
        count={sortedCount?.Indonesia || 0}
        isGrayBG={!!grayBg}
      />
    </div>
  );
}

export default memo(CountryButtonWrapper);