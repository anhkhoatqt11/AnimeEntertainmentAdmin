"use client";

import { OurFileRouter } from "@/app/api/uploadthing/core";
import Loader from "@/components/Loader";
import { FileDialog } from "@/components/ui/FileDialog";
import { Label } from "@/components/ui/label";
import { useChallenge } from "@/hooks/useChallenge";
import { postRequest } from "@/lib/fetch";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { generateReactHelpers } from "@uploadthing/react/hooks";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
const { useUploadThing } = generateReactHelpers<OurFileRouter>();


type Question = {
    _id: string;
    questionName: string;
    answers: string[];
    correctAnswerID: number;
    mediaUrl: string;
}


export function AddQuestion({ }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const [questionImage, setQuestionImage] = React.useState([]);
    const [questionName, setQuestionName] = React.useState("");
    const [answers, setAnswers] = useState(["", "", "", ""].map(content => ({ content })));
    const [correctAnswerID, setCorrectAnswerID] = React.useState(0);
    const [defaultQuestionImage, setDefaultQuestionImage] = React.useState("");
    const [actionType, setActionType] = React.useState(1);
    const { addQuestion } = useChallenge();
    const route = useRouter();


    const { startUpload } = useUploadThing("imageUploader");


    const handleAnswerChange = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index].content = value;
        setAnswers(updatedAnswers);
    };


    var questionMediaImage = "";
    const onSubmit = async () => {
        setIsLoading(true);
        if (questionImage.length > 0) {
            const [questionImg] = await Promise.all([
                startUpload([...questionImage]).then((res) => {
                    const formattedImages = res?.map((image) => ({
                        id: image.key,
                        name: image.key.split("_")[1] ?? image.key,
                        url: image.url,
                    }));
                    return formattedImages ?? null;
                }),
            ]);
            questionMediaImage = questionImg ? questionImg[0]?.url : "";
        }
        proccessAdding(questionMediaImage);
    }


    const proccessAdding = async (questionMediaImage) => {
        const data = {
            questionName: questionName,
            answers: answers,
            correctAnswerID: correctAnswerID,
            mediaUrl: questionMediaImage != "" ? questionMediaImage : defaultQuestionImage,
        };
        await addQuestion(data).then((res) => {
            toast.success("Thêm câu hỏi thành công");
            setIsLoading(false);
            route.push("/challenge");
        });
    }
    const handleSetCorrectAnswer = (index) => {
        setCorrectAnswerID(index);
    };

    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Xác nhận
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    Bạn có muốn thêm câu hỏi mới
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color={actionType === 1 ? "success" : "danger"}
                                    variant="light"
                                    onPress={() => {
                                        onClose();
                                        if (actionType === 1) {
                                            onSubmit();
                                        }
                                    }}
                                >
                                    Thêm câu hỏi
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Hủy
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <div className="relative min-h-[1032px]">
                <div className="grid-cols-1 grid gap-4 mb-6">
                    <h1 className="font-semibold text-xl">Thông tin câu hỏi</h1>
                    <div className="flex flex-col gap-3 w-full rounded bg-white p-4">
                        <div className="flex flex-col gap-3 w-full">
                            <div className=" w-full h-41 border-1 rounded">
                                <img
                                    src={
                                        questionImage[0]?.preview ||
                                        questionImage[0]?.url ||
                                        defaultQuestionImage
                                    }
                                    className={`h-[360px] w-full rounded-md object-cover object-center`}
                                />
                            </div>
                            <FileDialog
                                name="images"
                                maxFiles={1}
                                maxSize={1024 * 1024 * 4}
                                files={questionImage}
                                setFiles={setQuestionImage}
                                disabled={false}
                                className={`p-0 px-6`}
                            />
                        </div>
                        <div className="gap-6 mt-6">
                            <div className="flex flex-col gap-3 w-full">
                                <Label className="font-bold text-sm">
                                    Câu hỏi: <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    className="w-full"
                                    radius="sm"
                                    variant="bordered"
                                    size="md"
                                    value={questionName}
                                    placeholder="Nhập câu hỏi"
                                    onChange={(e) => {
                                        setQuestionName(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="gap-6 mt-6">
                            <div className="flex flex-col gap-3 w-full">
                                <Label className="font-bold text-sm">
                                    Câu trả lời: <span className="text-red-500">*</span>
                                </Label>
                                {answers.map((answer, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <Input
                                            className="w-full"
                                            radius="sm"
                                            variant="bordered"
                                            size="md"
                                            value={answer.content}
                                            placeholder={`Nhập câu trả lời ${index + 1}`}
                                            onChange={(e) => handleAnswerChange(index, e.target.value)} // Update here
                                            endContent={
                                                <>
                                                    {correctAnswerID === index && <CheckCircle className="text-green-500" />}
                                                </>
                                            }
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleSetCorrectAnswer(index)}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            Chọn là đáp án đúng
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    className={`w-full rounded-md m-0 p-0 font-semibold text-base shadow-md bg-gradient-to-r from-[#A958FE] to-[#DA5EF0] transition ease-in-out hover:scale-[1.01] text-white py-6`}
                    radius="sm"
                    onClick={onOpen}
                >
                    Tạo câu hỏi
                </Button>
                {isLoading ? (
                    <div className="w-full h-full bg-gray-200 z-10 absolute top-0">
                        <div className="w-full h-screen flex items-center justify-center ">
                            <Loader />
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    )

}