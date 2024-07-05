import React from "react";
import Profile from "./Container/Profile";

export default function Data_p() {
    const data_p = [
        {
            img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9SZ-7-DaaYyaGW9DYDKcfnJqwWbpFP1UVQ&s",
            title: "Geeks For Geeks",
            profile_link: "https://www.geeksforgeeks.org/user/cm21/"
        },
        {
            img_url: "https://5.imimg.com/data5/SELLER/Default/2023/10/354785340/GA/BS/CK/63475444/hackerrank-software.png",
            title: "Hacker Rank",
            profile_link: "https://www.hackerrank.com/profile/chaitanmeshram"
        },
        {
            img_url: "https://i.ytimg.com/vi/14KBeJTc4D0/hqdefault.jpg",
            title: "CodeChef",
            profile_link: "https://www.codechef.com/users/cm21"
        },
        {
            img_url:"data:image/png;base64,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",
            title: "LeetCode",
            profile_link: "https://leetcode.com/u/chaitanmeshram547/"
        }
    ];

    return (
        <div className="card__li">
            {data_p.map((item) => (
                <Profile
                    key={item.title}
                    img_url={item.img_url}
                    title={item.title}
                    profile_link={item.profile_link}
                />
            ))}
        </div>
    );
}