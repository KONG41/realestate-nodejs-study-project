import { useState } from 'react';
import { Box, Select, Text, Flex, filter } from "@chakra-ui/react";
import { filterData, getFilterValues } from "../fetchApi/filterData.js";
import { useRouter } from 'next/router';
const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData)
  const router = useRouter();
  const searchProperties = (filterValue) => {

    const path = router.pathname;

    const { query } = router;

    const values = getFilterValues(filterValue)

    values.forEach((item) => {
      if (item.value && filterValue?.[item.name]) {
        query[item.name] = item.value
      }
    })

    router.push({ pathname: path, query: query });

  }
  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      {
        filters.map((item) => (
          <Box w="fit-content" p="2" key={item.queryName}>
            <Select placeholder={item.placeholder} onChange={(e) => searchProperties({ [item.queryName]: e.target.value })}>
              {item.items.map((data) => (
                <option value={data.value} key={data.value}>{data.name}</option>
              ))}
            </Select>
          </Box>
        ))
      }

    </Flex>
  )
}

export default SearchFilters;