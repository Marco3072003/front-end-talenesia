import { useEffect, useState } from "react";
import { setCredentials } from "../../../features/auth/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../../components/atoms/Container";
import Card from "../../../components/atoms/Card";
import meetingImage from "../../../assets/img/meeting.png";
import FormInput from "../../../components/molecules/FormInput";
import Button from "../../../components/atoms/Button";
import userImage from "../../../assets/img/user-picture.png";
import {
  setIsOpenUpdate,
  setIsSubmit,
  addLink,
} from "../../../features/mentor/meeting";
import {
  useGetDetailSubcourseQuery,
  useUpdateSubcourseMaterialMutation,
  useGetBatchQuery,
  useGetAllUserBadgesQuery,
  useGetAllBadgesQuery,
  usePostBadgesByIdMutation,
  usePatchBadgesByIdMutation,
  usePostUserProgressMutation,
  useDeleteUserProgressMutation,
  useGetUserProgressQuery,
} from "../../../features/user/user-api-slice";
import { setUserWithBadgesProgress } from "../../../features/user/detail-user";
import SubCourseUserList from "../../../components/organisms/SubCourseUserList";
import { useParams } from "react-router-dom";
import userPicture from "../../../assets/img/user-picture.png";

export default function MeetingPage() {
  const [updateSubcourseMaterial, { isLoading }] =
    useUpdateSubcourseMaterialMutation();
  const dispatch = useDispatch();

  const username = localStorage.getItem("my-user-when-entry");
  const token = localStorage.getItem("my-key-to_entry");
  const batchId = localStorage.getItem("batch_id");

  const role = localStorage.getItem("my-role-key");
  if (token !== null) {
    dispatch(setCredentials({ username, token, role }));
  }

  const isOpenUpdate = useSelector((state) => state.meeting.isOpenUpdate);
  const link = useSelector((state) => state.meeting.link);
  const { courseId, subCourseId } = useParams();
  const [inputLink, setInputLink] = useState("");
  const [subCourseName, setSubCourseName] = useState("");
  const [subCourseType, setSubCourseType] = useState("");
  const [description, setDescription] = useState("");
  const [openDate, setOpenDate] = useState("");
  const [closeDate, setCloseDate] = useState("");
  const [selectBadgeId, setSelectBadgeId] = useState("");
  const [selectUserId, setSelectUserId] = useState("");
  const [handleChangeBadgeExecuted, setHandleChangeBadgeExecuted] =
    useState(false);
  const [isOpenAttend, setIsOpenAttend] = useState(false);
  const [handleAttendActive, setHandleAttendActive] = useState(false);

  const {
    data: subCourse,
    isFetching,
    isSuccess,
  } = useGetDetailSubcourseQuery({ subCourseId });


  const {
    data: batch = [],
    isFetching: loading,
    isSuccess: isDone,
  } = useGetBatchQuery({ batchId });
  const {
    data: userBadges = [],
    isFetching: isWaiting,
    isSuccess: isClear,
  } = useGetAllUserBadgesQuery();
  const {
    data: allBadges = [],
    isFetching: isFetchingBadges,
    isSuccess: isSuccessBadges,
  } = useGetAllBadgesQuery();
  const {
    data: userProgress = [],
    isFetching: isFetchingProgress,
    isSuccess: isSuccessProgress,
  } = useGetUserProgressQuery({ batchId, subCourseId });


  const [postBadgesById, { isLoadingPost }] = usePostBadgesByIdMutation();
  const [patchBadgesById, { isLoadingPatch }] = usePatchBadgesByIdMutation();
  const [postUserProgress, { isLoading: loadingProgress }] =
    usePostUserProgressMutation();
  const [deleteUserProgress, { isLoadingDelete }] = useDeleteUserProgressMutation();
  
  const finalDataBadgesWithProgress = useSelector(
    (state) => state.detailUser.userWithBadgesProgress
  );
  const [progressAction, setProgressAction] = useState(false);

  //fetch user data
  useEffect(() => {
    if (isDone && isClear && isSuccessBadges && isSuccessProgress) {
      const participant = batch.data[0].participant;
      const userBadgesData = userBadges.data;
      const badgeData = allBadges.data;
      const usersProgress = userProgress.data;
      const userWithBadgesId = participant.map((user) => {
        const matchingData = userBadgesData.find((userBadge, index) => {
          if (
            userBadge.batchId === batchId &&
            userBadge.subCourseId === subCourseId &&
            userBadge.userId === user.userId
          ) {
            return userBadge;
          }
        });
        if (matchingData) {
          return {
            ...user,
            badgeId: matchingData.badgeId,
            userBadgesId: matchingData.userBadgesId,
          };
        }
      });

      const userWithDetailBadges = userWithBadgesId.map((user) => {
        const badgeId = user.badgeId;
        const matchingData = badgeData.find((data) => data.badgeId === badgeId);
        return { ...user, detailBadge: matchingData };
      });

      const finalData = userWithDetailBadges.map((user) => {
        const matchingData = usersProgress.find(
          (u) =>
            u.userId === user.userId &&
            u.subCourseId === subCourseId &&
            u.batchId === batchId
        );
        if (matchingData) {
          return { ...user, attendData: matchingData };
        }
        return { ...user, attendData: false };
      });

      dispatch(setUserWithBadgesProgress(finalData));
    }
  }, [dispatch, batch, userBadges, allBadges, userProgress, progressAction]);

  //fetch course card and zoom link
  useEffect(() => {
    if (isSuccess) {
      const link = subCourse.data.subCourseMaterial[0].link;
      const description = subCourse.data.subCourseMaterial[0].description;
      const openDate = subCourse.data.openDate;
      const closeDate = subCourse.data.openDate;
      const subCourseName = subCourse.data.subCourseName;
      const subCourseType = subCourse.data.subCourseType;
      dispatch(addLink({ link }));
      setSubCourseName(subCourseName);
      setSubCourseType(subCourseType);
    }
  }, [subCourse, updateSubcourseMaterial]);
  

  function handleSubmit(event) {
    try {
      event.preventDefault();

      const body = {
        subCourseName,
        courseId,
        subCourseMaterial: {
          description,
          link: inputLink,
        },
        subCourseType,
        openDate,
        closeDate,
      };

      console.log(body);
      const response = updateSubcourseMaterial({ subCourseId, body });
      console.log(response);
      response.then((result) => {
        const link = result.data.data.subCourseMaterial[0].link;
        dispatch(addLink({ link }));
      });
    } catch (e) {
      console.log(e);
    }
  }

  function updateLink(event) {
    try {
      event.preventDefault();
      console.log(inputLink);
      const body = {
        subCourseName,
        courseId,
        subCourseMaterial: {
          description,
          link: inputLink,
        },
        subCourseType,
        openDate,
        closeDate,
      };

      const response = updateSubcourseMaterial({ subCourseId, body });
      console.log(response);
      response.then((result) => {
        const link = result.data.data.subCourseMaterial[0].link;
        dispatch(addLink({ link }));
      });
      dispatch(setIsOpenUpdate());
    } catch (e) {
      console.log(e);
    }
  }

  console.log(finalDataBadgesWithProgress);

  function handlePresent(userId) {
    const body = {
      batchId,
      subCourseId,
      userId,
    };
    postUserProgress({ body }).then((response) => {
      console.log(response);
      setProgressAction(!progressAction);
    });
  }

  function handleDeletePresent(userId) {
    const body = {
      batchId,
      subCourseId,
      userId,
    };
    deleteUserProgress({ userId, batchId, subCourseId }).then((response) => {
      console.log(response);
      setProgressAction(!progressAction);
    });

  }

  function handleChangeBadge(event, userId) {
    event.preventDefault();
    const badgeId = event.target.value;
    const userBadgeId = userBadges.data.find(
      (data) => data.subCourseId == subCourseId
    ).userBadgesId;
    const body = {
      badgeId,
      userId,
      batchId,
      subCourseId,
    };
    patchBadgesById({ userBadgeId, body }).then((response) => {
      console.log(response);
    });
  }

  return (
    <Container className="flex flex-col gap-10">
      <Card className="flex flex-col  px-10 bg-white pb-5 items-start">
        <div className="flex gap-5 pt-10 pb-5">
          <div className="bg-gray-300 rounded-lg w-[60px] py-2 flex items-center justify-center">
            <img
              className="w-[50px] h-[45px] rounded-lg"
              src={meetingImage}
              alt=""
            />
          </div>
          <div>
            <h1>{subCourseType}</h1>
            <h1 className="text-orange-600 font-semibold text-2xl text-['Roboto']">
              {subCourseName}
            </h1>
          </div>
        </div>
        {!link || link.length == null ? (
          <form className="w-full" id="submit" onSubmit={handleSubmit}>
            <FormInput
              onChange={(e) => setInputLink(e.target.value)}
              classNameInput="w-full px-5 py-3 border-2 border-gray-400 rounded-lg"
              className="w-full lg:w-full"
              placeholder="Insert your link meeting without enter or space"
            />

            <Button
              className="ml-1 py-2 px-8 bg-orange-500 text-white text-lg font-bold rounded-lg"
              label="Save"
              type="submit"
            />
          </form>
        ) : null}

        {link && (
          <>
            <h1 className="text-blue-900 text-2xl pb-3">
              {<Link to={link}>{link}</Link>}
            </h1>
            {!isOpenUpdate && (
              <Button
                onClick={() => dispatch(setIsOpenUpdate())}
                className="ml-1 py-2 px-8 bg-orange-500 text-white text-lg font-bold rounded-lg"
                label="Edit"
                type="submit"
              />
            )}
          </>
        )}

        {isOpenUpdate && (
          <form id="update" className="w-full" onSubmit={updateLink}>
            <FormInput
              onChange={(e) => setInputLink(e.target.value)}
              classNameInput="w-full px-5 py-3 border-2 border-gray-400 rounded-lg"
              className="w-full lg:w-full"
              placeholder="Insert your link meeting without enter or space"
            />
            <Button
              className="ml-1 py-2 px-8 bg-orange-500 text-white text-lg font-bold rounded-lg"
              label="Edit"
              type="submit"
            />
          </form>
        )}
      </Card>
      {loadingProgress ? (
        <p>loading...</p>
      ) : (
        <Card className="flex flex-col px-10 bg-white pb-5 pt-6 items-start ">
          <h1 className="text-4xl font-semibold mb-8">Peserta</h1>
          {finalDataBadgesWithProgress &&
            finalDataBadgesWithProgress.map((data) => {
              return (
                <SubCourseUserList
                  userId={data.userId}
                  username={data.userFullName}
                  userImage={userPicture}
                  handleChangeBadge={handleChangeBadge}
                  badgeId={data.badgeId}
                  handlePresent={handlePresent}
                  handleDeletePresent={handleDeletePresent}
                  isOpenAttend={isOpenAttend}
                  attendData={data.attendData}
                  setIsOpenAttend={setIsOpenAttend}
                />
              );
            })}
        </Card>
      )}
    </Container>
  );
}
