import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";

interface TopStakersProps {
    stakersData: { address: string; count: number }[];
    loading: boolean;
}

const TopStakers: React.FC<TopStakersProps> = ({ stakersData, loading }) => {
    if (loading) return <div style={{ marginTop: "50px", marginBottom: "100px", width: "100%", display: "flex", justifyContent: "center" }}>Loading Miners...</div>;

    return (
        <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }} className="container">
            <Flex>
                <ul className="stakersList">
                    {stakersData.map((staker, index) => {
                        const polyScanLink = `https://polygonscan.com/address/${staker.address}`;
                        const formattedAddress = `${staker.address.substring(0, 5)}...${staker.address.substring(staker.address.length - 5)}`;

                        return (
                            <li key={staker.address}>
                                <Flex align="center" gap={10}>
                                    <Box
                                        width="70px"
                                        height="40px"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        fontSize="15px"
                                        className="tokenMedia2"
                                    >
                                        #{index + 1}
                                    </Box>

                                    <Box
                                        width="180px"
                                        height="40px"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        fontSize="15px"
                                        className="tokenMedia2"
                                    >
                                        <Link
                                            href={polyScanLink}
                                            isExternal
                                            color="white"
                                            textDecoration="none"
                                            _hover={{ textDecoration: 'underline', color: "rgb(0, 234, 0)" }}
                                        >
                                            {formattedAddress}
                                        </Link>
                                    </Box>

                                    <Box
                                        width="70px"
                                        height="40px"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        fontSize="15px"
                                        className="tokenMedia2"
                                    >
                                        {staker.count}
                                        <img
                                            src="img/Fawkes.png"
                                            alt="ERC-721 Token"
                                            style={{
                                                width: "25px",
                                                height: "auto",
                                                marginLeft: "5px",
                                                verticalAlign: "middle"
                                            }}
                                        />
                                    </Box>
                                </Flex>
                            </li>
                        );
                    })}
                </ul>
            </Flex>
        </div>
    );
};

export default TopStakers;