import React, { useState, useEffect } from "react";
import { db, auth } from "../../FirebaseConfig";
import { ref, onValue, limitToLast, query } from "firebase/database";
import { signOut } from "firebase/auth";
import Contact from "./Contact";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";
import SkeletonContact from "./SkeletonContact";
import { useNavigate } from "react-router-dom";

import {
  getSealdSDKInstance,
  retrieveIdentityFromLocalStorage,
} from "../../SealedInit";
import Cookies from "js-cookie";

export default function RecentMsg(props) {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [hasData, setHasData] = useState(true);
  useEffect(() => {
    async function recentMsg() {
      try {
        await retrieveIdentityFromLocalStorage({
          databaseKey: Cookies.get("databaseKey"),
          sessionID: Cookies.get("sessionId"),
        });
      } catch {
        signOut(auth).then(() => {
          // Request to clear databaekey and session id and destroy the session after logout
          axios
            .post(
              "/session/logout",
              { reqest: "logout" },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((res) => {
              console.log(res);
              localStorage.removeItem("user");
              navigate("/auth/login");
            });
        });
      }
      onValue(ref(db, `${auth.currentUser.uid}/chats/`), (datax) => {
        const x = [];
        let itemsProcessed = 0;

        if (datax.hasChildren()) {
          setHasData(true);
          datax.forEach((data) => {
            onValue(
              ref(db, `${data.key}/PersonalInfo`),
              (snapshot) => {
                onValue(
                  query(
                    ref(
                      db,
                      `${auth.currentUser.uid}/chats/${data.key}/messages`
                    ),
                    limitToLast(1)
                  ),
                  (mesg) => {
                    mesg.forEach(async (mesg) => {
                      if (mesg.val().type !== "audio") {
                        const session =
                          await getSealdSDKInstance().retrieveEncryptionSession(
                            { encryptedMessage: mesg.val().message }
                          );
                        const decryptMessage = await session.decryptMessage(
                          mesg.val().message
                        );
                        x.push({
                          ...snapshot.val(),
                          message: decryptMessage,
                        });
                      } else if (mesg.val().type === "audio") {
                        x.push({
                          ...snapshot.val(),
                          message: "🔊 Audio Message",
                        });
                      }
                      itemsProcessed++;
                      if (itemsProcessed === datax.size) {
                        setData(x);
                      }
                    });
                  },
                  {
                    onlyOnce: true,
                  }
                );
              },
              {
                onlyOnce: true,
              }
            );
          });
        } else {
          setHasData(false);
        }
      });
    }
    recentMsg();
  }, [hasData]);

  return (
    <Box>
      {data ? (
        data.map((info, index) => {
          return (
            <Contact
              onClick={() => {
                props.setMnav({
                  src: info.photoURL,
                  name: info.name,
                });
                props.setUid(info.uid);
                props.setWidth("0%");
                props.setXwidth("100%");
              }}
              {...info}
              key={index}
            />
          );
        })
      ) : (
        <Box>
          {hasData ? (
            <Box>
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
              <SkeletonContact />
            </Box>
          ) : (
            <Text
              d="flex"
              h="80vh"
              w="100%"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              fontSize={26}
              fontWeight={600}
              color="#137284"
            >
              No Message to show Start Chating now.
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
}
