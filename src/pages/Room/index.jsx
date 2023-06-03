import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function RoomPage() {
    const{roomId} = useParams();
    const myMeeting =async(element) => {
        const appID = 1927892384;
        const serverSecret= "2f835a3898c9be8760deb6737a7648a3";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(),"Anirudh Salaria");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `https://onecamone.netlify.app/room/${roomId}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
        });
    };

    return (
        <div>
            <>
                <div ref={myMeeting}/>
            </>
        </div>
    )
}
