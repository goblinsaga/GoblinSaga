import TopStakersContainer from "./TopStakersContainer";
import RewardPool from "./RewardPool";
import { Box } from "@chakra-ui/react";
import ClaimRewardsButton from "./ClaimRewardsButton";
import RewardPoolFourToTen from "./RewardPool4to10";
import ClaimRewardsButtonFourToTen from "./ClaimRewardsButton4to10";
import RewardPoolTopOne from "./RewardPool1";
import ClaimRewardsButtonTopOne from "./ClaimRewardsTop1";
import RewardPoolTopTwo from "./RewardPool2";
import ClaimRewardsButtonTopTwo from "./ClaimRewardsTop2";

const TopMiners = () => {
  return (
    <section id="about">
      <div id="top" className="container small">
        <div className="fn_cs_shortabout">
          <div className="about_left">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <h3 className="fn__maintitle" data-text="Top Miners">
                Top Miners
              </h3>
            </div>

            <div className="meta" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <p>Next Claim: 27/10/2024</p>
            </div>

            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>

            <div>
              <div className="meta" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ fontSize: "25px" }} className="fn__maintitle" data-text="Top 1 to 3 Rewards">
                  Top 1 to 3 Rewards
                </h3>
              </div>
              <div className="title" style={{ paddingTop: "2rem" }}>
                <RewardPool />
              </div>
              <div className="read_more">
                <Box marginBottom="100px" width="100%" display="flex" justifyContent="center">
                  <ClaimRewardsButton />
                </Box>
              </div>
            </div>

            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>

            <div>
              <div className="meta" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ fontSize: "25px" }} className="fn__maintitle" data-text="Top 3 to 10 Rewards">
                  Top 3 to 10 Rewards
                </h3>
              </div>
              <div className="title" style={{ paddingTop: "2rem" }}>
                <RewardPoolFourToTen />
              </div>
              <div className="read_more">
                <Box marginBottom="100px" width="100%" display="flex" justifyContent="center">
                  <ClaimRewardsButtonFourToTen />
                </Box>
              </div>
            </div>

            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>

            <div>
              <div className="meta" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ fontSize: "25px" }} className="fn__maintitle" data-text="Bonus - Top 1 & 2">
                  Bonus - Top 1 & 2
                </h3>
              </div>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <div className="title" style={{ paddingTop: "2rem" }}>
                  <RewardPoolTopOne />
                </div>
                <div className="title" style={{ paddingTop: "2rem" }}>
                  <RewardPoolTopTwo />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <div className="read_more">
                  <Box marginBottom="100px" width="100%" display="flex" justifyContent="center">
                    <ClaimRewardsButtonTopOne />
                  </Box>
                </div>
                <div className="read_more">
                  <Box marginBottom="100px" width="100%" display="flex" justifyContent="center">
                    <ClaimRewardsButtonTopTwo />
                  </Box>
                </div>
              </div>
            </div>
          </div>

          <div
            className="about_right"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <TopStakersContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopMiners;