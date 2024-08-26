'use client'
import React, { useEffect, useState } from 'react';
import { FaRegHandRock, FaRegHandScissors } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import Confetti from 'react-confetti';
import { Button } from '@nextui-org/react';

const RockPaper = () => {
    const [userChoice, setUserChoice] = useState(null);
    const [roundNum, setRoundNum] = useState(1);  // Start from 1
    const [randomNum, setRandomNum] = useState(0);
    const [playerWin, setPlayerWin] = useState(0);
    const [computerWin, setComputerWin] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const [result, setResult] = useState('');
    const [overallResult, setOverallResult] = useState(null);

    const choices = [
        { name: 'Rock', icon: <FaRegHandRock size={50} onClick={() => handleChange('Rock')} /> },
        { name: 'Paper', icon: <FaRegHandPaper size={50} onClick={() => handleChange('Paper')} /> },
        { name: 'Scissor', icon: <FaRegHandScissors size={50} onClick={() => handleChange('Scissor')} /> }
    ];

    useEffect(() => {
        const newRandom = Math.floor(Math.random() * choices.length);
        setRandomNum(newRandom);
    }, [userChoice, roundNum]);

    

    const getResult = (choice) => {
        if (!choice) return '';
        if (choices[randomNum].name === userChoice) {
            return "DRAW";
        } else if (
            (choice === 'Rock' && choices[randomNum].name === 'Scissor') ||
            (choice === 'Paper' && choices[randomNum].name === 'Rock') ||
            (choice === 'Scissor' && choices[randomNum].name === 'Paper')
        ) {
            return "You won!";
        } else {
            return "You lost";
        }
    };
    const handleChange = (newChoice) => {
        setUserChoice(newChoice);
        if (roundNum < 3) {
            setRoundNum(roundNum + 1);
        }
        const currentResult = getResult(newChoice);
        setResult(currentResult);

        if (currentResult.includes("won")) {
            setPlayerWin(prev => prev + 1);
        } else if (currentResult.includes("lost")) {
            setComputerWin(prev => prev + 1);
        }
    };


    useEffect(() => {
        if (roundNum === 3) {
            let finalResult;
            if (playerWin > computerWin) {
                setShowConfetti(true);
                finalResult = "You Won The Game!";
            } else if (computerWin > playerWin) {
                finalResult = "You Lost The Game";
            } else {
                finalResult = "It's a Draw!";
            }
            setOverallResult(finalResult);
        }
    }, [roundNum, playerWin, computerWin]);

    const Reset = () => {
        setUserChoice(null);
        setRoundNum(1);  // Reset to 1
        setPlayerWin(0);
        setComputerWin(0);
        setShowConfetti(false);
        setResult('');
        setOverallResult(null);
    };
    const Popup = ({ message, onClose }) => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-xl text-center">
                <h2 className="text-2xl font-bold mb-4">{message}</h2>
                <button 
                    onClick={onClose}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );

    return (
        <div>
            {showConfetti && <Confetti width={1300} height={1300} />}
            <div className='flex m-4 p-4 items-center'>
                <div className='bg-blue-600 w-[48%] h-72 text-black font-mono font-bold text-center bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] shadow-lg rounded-lg'>
                    Computer
                    <div className='bg-white border-black border-4 rounded-2xl p-3 w-[50%] flex items-center justify-center ml-20 mb-2 animate-bounce mt-8 animate-border bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%]'>
                        <div>{userChoice && choices[randomNum].icon}</div>
                        <div className='ml-4'>{userChoice && choices[randomNum].name}</div>
                    </div>
                </div>
                <div className='bg-blue-800 w-[48%] h-72 text-black font-mono font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-[length:400%_400%] ml-14 rounded-lg'>
                    You
                    <div className='flex flex-col border-2 w-[5%] h-7 absolute inset-y-20 right-20 rounded justify-center animate-none'>
                        {userChoice}
                    </div>
                    {choices.map((item) => (
                        <div key={item.name} className='bg-white border-black border-4 rounded-2xl p-3 w-[50%] flex items-center justify-center ml-20 mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-[length:400%_400%] shadow-lg'>
                            <div className='animate-bounce'>{item.icon}</div>
                            <div className='ml-4'>{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex mx-auto mb-4 font-semibold pl-6 shadow-md w-[10%] bg-gradient-to-r from-red-300 via-purple-900 to-blue-900 bg-[length:400%_400%]'>Round: {roundNum}</div>
            
            <div className='text-center font-bold text-xl'>
    {result && (
        <div className=' mx-auto bg-gradient-to-r from-blue-500 via-red-600 to-red-600 bg-[length:400%_400%] w-[20%]'>
           Round Result: {result}
        </div>

    )}
</div>
{overallResult && (
            <Popup 
                message={overallResult} 
                onClose={() => {
                    setOverallResult(null);
                    Reset();
                }}
            />
        )}
            <div className='flex justify-center items-center mt-8'>
                <Button className='bg-gradient-to-r from-blue-500 via-red-600 to-red-600 bg-[length:400%_400%]' onClick={Reset}>
                    Reset
                </Button>
            </div>
        </div>
    );
}

export default RockPaper;
