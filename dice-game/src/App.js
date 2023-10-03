import React from "react";
import { Image } from "@chakra-ui/image";
import { List,Text, Box, Flex, Stack, Heading, ListItem } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {

  const [gamestarted, setGamestarted] = useState(false);
  const number = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState()
  const [dice, setDice] = useState(1)
  const [error, setError] = useState(null)
  const [score, setScore] = useState(0)

  const startGameHandler = () => {
    setGamestarted(true);
  };
  
  console.log(selectedNumber)


  const onNumberClick = (value) => {
    setSelectedNumber(value)
    setError(null)
  }

  const genRandomNumber = () => {
    if (selectedNumber){
      const generatedNum = Math.ceil(Math.random() * 6)
      setDice(generatedNum)
      console.log(generatedNum)

    if(selectedNumber === generatedNum){
      setScore((prev) => prev + generatedNum)
    }else{
      setScore((prev) => prev - 2)
    }
    }else{
      setError("Please select the number")
    }
  }
  
  const handleBack = () => {
    setGamestarted(false)
  }


  
 
  return (
    <>
      {gamestarted ? (
        <>
          <Stack justify="center" align="center" maxW="1300px" mx="auto" h="100%">
          <Button alignSelf="flex-end" mx="20px" mt="20px" bg="black" color="white" _hover={{ bg: "grey" }} onClick={() => handleBack()}>Back</Button>
          <Heading as="h1" fontSize="7xl" mb="8px" color={error ? "red" : "black"}>{error ? error : "Select Number"}</Heading>
          <Flex pb="16px" pt="8px">
            
            {number.map((values) => (
              <Flex
                key={values}
                h="50px"
                w="50px"
                bg={selectedNumber === values ? "green" : "black"}
                color="white"
                justify="center"
                align="center"
                fontSize="2xl"
                _hover={{ bg: "green" }}
                mr={4}
                borderRadius="md"
                onClick={() => onNumberClick(values)}
              >
                {values}
              </Flex>
            ))}
          </Flex>
          <Box>
            <Image src={`/dice${dice}.png`} onClick={genRandomNumber}/> 
          </Box>
          <Text as="p" fontSize="xl">Click on Dice to Roll</Text>
          <Text fontSize="8xl" fontWeight="bold" color={score>0 ? "green" : "red"}>{score}</Text>
          <Text fontSize="4xl" fontWeight="bold">Total Score</Text>
          <Button onClick={() => setScore(0)}>Reset Score</Button>
          </Stack>

          <Stack maxW="900px" mx="auto" pb="16px">
            <Heading as="h2">Game Rules:</Heading>
            <List>
              <ListItem>Select Number any number</ListItem>
              <ListItem>Click on dice image to roll it</ListItem>
              <ListItem>Select number is equal to obtained dice result then you will get same point of dice</ListItem>
              <ListItem>if You are Wrong Score will be deducted by 2 points</ListItem>
              <ListItem>Follow on Linkedin</ListItem>
            </List>
          </Stack>
        </>
      ) : (
        <Flex justify="center" align="center">
          <Image width="50%" src="/dices.png" />
          <Stack>
            <Heading fontSize="7xl" as="h1">
              The Dice Game
            </Heading>
            <Button
              alignSelf="flex-end"
              bg="black"
              color="white"
              _hover={{ bg: "grey" }}
              onClick={startGameHandler}
            >
              Start Game
            </Button>
          </Stack>
        </Flex>
      )}
    </>
  );
}

export default App;
