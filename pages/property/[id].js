import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from '../../fetchApi/fetchApi';
import ImageScrollbar from '../../component/ImageScrollbar';

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
  <Box maxWidth='1000px' margin='auto' p='4'>
    {photos && <ImageScrollbar data={photos} />}
    <Box p="5" w="full">
      <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
        <Flex alignItems='center'>
          <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
          <Text fontWeight='bold' fontSize='lg'>AED {price}{rentFrequency && `/${rentFrequency}`}</Text>
        </Flex>
        <Box>
          <Avatar size='sm' src={agency?.logo?.url}></Avatar>
        </Box>
      </Flex>

    </Box>
    <Box>
      <Flex alignItems='center' pl='5' justifyContent='space-between' w='250px' color='blue.400'>
        {rooms}
        <FaBed /> | {baths} <FaBath /> | {millify(area)} <BsGridFill />
      </Flex>
    </Box>
    <Box pt="5">
      <Text fontWeight="bold" fontSize="lg" borderBottom="1px black solid" ml="5" mb="5">{title}</Text>
      <Text pl="5" lineHeight="2" fontWeight="thin">{description}</Text>
    </Box>
    <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Type</Text>
        <Text fontWeight='bold'>{type}</Text>
      </Flex>
      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Purpose</Text>
        <Text fontWeight='bold'>{purpose}</Text>
      </Flex>
      {furnishingStatus && (
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
          <Text>Furnishing Status</Text>
          <Text fontWeight='bold'>{furnishingStatus}</Text>
        </Flex>
      )}
    </Flex>
    <Box>
      {amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
      <Flex flexWrap='wrap'>
        {amenities?.map((item) => (
          item?.amenities?.map((amenity) => (
            <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
              {amenity.text}
            </Text>
          ))
        ))}
      </Flex>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
